import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { frontendDb } from '@infrastructure/db/configuracion';
import { useSelector } from "react-redux";
import { RecetaTicket } from "@application/useCases/";
import { RootState } from "@presentation/stores";
import { IProducto } from "@domain/models";
import { Loader } from "@msp/shared";



interface TerminalDespachoMSP {
  id?: number;
  impresionAutomatica: boolean;
  tamanioPapel: string;
  anchoPapelPersonalizado: number;
}

//export const BotonImprimir: React.FC<{ recetaProductos: IProducto[] }> = ({ recetaProductos }) => {
  export const BotonImprimir = forwardRef((props: { recetaProductos: IProducto[] }, ref) => {
    const { recetaProductos } = props;

  const [config, setConfig] = useState<TerminalDespachoMSP>({
    impresionAutomatica: false,
    tamanioPapel: 'A4',
    anchoPapelPersonalizado: 80
  });

  const componentRef = useRef<any>(null);

  const onBeforeGetContentResolve = useRef<((value: boolean | PromiseLike<boolean>) => void) | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const datosDespacho = useSelector((state: RootState) => state.despacho);

  const terminal = useSelector((state: RootState) => state.terminal);


  const [text, setText] = useState<string>("old boring text");


  useEffect(() => {
   
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

  const handleAfterPrint = useCallback(() => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  }, []);

  const handleBeforePrint = useCallback(() => {
    console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  }, []);

  const handleOnBeforeGetContent = useCallback(() => {
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

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef]);

  //const componentRefBoton = useRef<any>(null);
  
  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "Receta",
    onBeforeGetContent: handleOnBeforeGetContent,
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true

  });

  useImperativeHandle(ref, () => ({
    handlePrint
  }));

  useEffect(() => {
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
});
