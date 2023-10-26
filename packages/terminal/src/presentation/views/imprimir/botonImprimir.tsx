import * as React from "react";
import { useReactToPrint } from "react-to-print";
import { frontendDb } from '@infrastructure/db/configuracion';
import { useSelector } from "react-redux";
import { RecetaTicket } from "@application/useCases/";
import { RootState } from "@presentation/stores";
import { IProducto } from "@domain/models";
import { Loader } from "@msp/shared";
import { useEffect, useState } from "react";

interface TerminalDespachoMSP {
  id?: number;
  impresionAutomatica: boolean;
  tamanioPapel: string;
  anchoPapelPersonalizado: number;
}

export const BotonImprimir: React.FC<{ recetaProductos: IProducto[] }> = ({ recetaProductos }) => {

  const [config, setConfig] = useState<TerminalDespachoMSP>({
    impresionAutomatica: false,
    tamanioPapel: 'A4',
    anchoPapelPersonalizado: 80
  });

  const componentRef = React.useRef<any>(null);

  const onBeforeGetContentResolve = React.useRef<((value: boolean | PromiseLike<boolean>) => void) | null>(null);

  const [loading, setLoading] = React.useState<boolean>(false);

  const datosDespacho = useSelector((state: RootState) => state.despacho);

  const terminal = useSelector((state: RootState) => state.terminal);


  const [text, setText] = React.useState<string>("old boring text");


  useEffect(() => {
    if(config){
      console.log('configuracion',config);
      if(config.impresionAutomatica){
       // handlePrint();
      }
    }
    // Recupera la configuración de IndexedDB al cargar la página
    const getStoredConfig = async () => {
      
      const configData = await frontendDb.confImprimir.get(1);
      if (configData) {
        console.log('getStoredConfig',configData);
        if (configData.tamanioPapel === 'A4') {
          setConfig({
            impresionAutomatica: configData.impresionAutomatica, 
            tamanioPapel: 'A4',
            anchoPapelPersonalizado: 210
          });
        } else {
          setConfig(configData);
        }

      }
    };
    
    getStoredConfig();
  }, []);

  //PAGE_SIZE

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    console.log("`onBeforeGetContent` called"); // tslint:disable-line no-console

    setLoading(true);
    setText("Loading new text...");

    return new Promise<boolean>((resolve) => {

      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve(true);
      }, 2000);
    });
  }, [setLoading, setText]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "Receta",
    onBeforeGetContent: handleOnBeforeGetContent,
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true
  });

  React.useEffect(() => {
    if (
      text === "New, Updated Text!" &&
      onBeforeGetContentResolve.current
    ) {
      onBeforeGetContentResolve.current(true);
    }
  }, [onBeforeGetContentResolve, text]);

  return (
    <div>
      {loading && <Loader />}
      <button onClick={handlePrint} className="bg-blue-500 text-white rounded-md p-2 hover:bg-red-600 focus:outline-none">
        Imprimir
      </button>
      <div className="hidden">
        <RecetaTicket ref={componentRef} text={text} receta={datosDespacho} terminal={terminal} recetaProductos={recetaProductos} PAGE_SIZE={config.anchoPapelPersonalizado} />
      </div>

    </div>
  );
};
