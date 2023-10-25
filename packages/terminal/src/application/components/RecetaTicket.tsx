import { IDespacho, IProducto } from "@domain/models";
import { ITerminal } from "@domain/models/terminal.model";
import React, { PureComponent } from "react";

const PAGE_SIZE = '80mm';

interface RecetaTicketProps {
  text: string;
  receta: IDespacho;
  terminal: ITerminal;
  recetaProductos: IProducto[];
}

interface RecetaTicketState {
  checked: boolean;
}

export class RecetaTicket extends PureComponent<RecetaTicketProps, RecetaTicketState> {

  canvasEl: HTMLCanvasElement | null = null;

  fechaActual = new Date();

  constructor(props: RecetaTicketProps) {

    super(props);

    this.state = { checked: false };

  }


  componentDidMount() {

    const ctx = this.canvasEl?.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "rgba(56, 60, 61, 0.93)";
      ctx.fillRect(85, 40, 20, 20);
      ctx.save();
    }

  }

  handleCheckboxOnChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  setRef = (ref: HTMLCanvasElement | null) => {
    this.canvasEl = ref;
  };

  render() {
    const { text, terminal, receta, recetaProductos } = this.props;


    return (
      <div className="relativeCSS">
        <style type="text/css" media="print">
          {`
            @page { size: ${PAGE_SIZE} auto; margin: 0;}
            body {width: 100%; padding: 0; margin: 0;
            .ticket {width: 100%;text-align: center;padding: 5px;}
            .item {text-align: left;font-size: 10px; }
            .small-header{font-size: 12px;}
          `}
        </style>

        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-center  font-semibold">MINISTERIO DE SALUD PUBLICA</h2>
          <p className="text-sm"><strong>Farmacia:</strong> {terminal.entidad.nombre}</p>
          <p className="text-sm"><strong>Dirección:</strong>{terminal.entidad.direccion}</p>
          <hr className="my-2" />
          <p className="text-sm"><strong>Receta No.</strong> {receta.numeroreceta}</p>
          <p className="text-sm"><strong>Fecha de receta:</strong> {this.fechaActual.toLocaleString()}</p>

          <hr className="my-2" />
          <h3 className="text-lg font-semibold mb-3">Datos del Paciente</h3>
          <p className="text-sm"><strong>Identificación:</strong> {receta.paciente.identificacion}</p>
          <p className="text-sm"><strong>Nombre:</strong> {receta.paciente.nombre}</p>

          <hr className="my-2" />
          <h3 className="text-lg font-semibold mb-3">Productos</h3>


          <table className="w-full">
          <thead className="text-center">
  <tr>
    <th className="text-center border-t-2 border-b-2 border-dashed border-r-2">Item</th>
    <th className="text-center border-t-2 border-b-2 border-dashed border-r-2">Producto</th>
    <th className="text-center border-t-2 border-b-2 border-dashed border-r-2">Cantidad</th>
    <th className="text-center border-t-2 border-b-2 border-dashed">Precio</th>
  </tr>
</thead>
<tbody>
  {recetaProductos.map((producto, index) => (
    <tr key={index}>
      <td className="text-center border-t-2 border-b-2 border-dashed border-r-2">{index + 1}</td>
      <td className="text-left border-t-2 border-b-2 border-dashed border-r-2">{producto.nombre}</td>
      <td className="text-center border-t-2 border-b-2 border-dashed border-r-2">{producto.cantidaddespachada}</td>
      <td className="text-right border-t-2 border-b-2 border-dashed">{producto.unidadmedida_id}</td>
    </tr>
  ))}
</tbody>

          </table>
          {/* Espacio en blanco */}
          <div className="h-8"></div>
          <h3 className="h-8 text-lg font-bold text-left mb-3">Recibí conforme.</h3>
          <div className="h-8"></div>
          {/* Línea para firmar */}
          <hr className="my-2 w-1/2 mx-auto border-b-2 border-black font-bold" />

          <p className="text-sm font-bold text-center">{receta.identificareceptor}</p>
          <p className="text-sm font-bold text-center">{receta.nombrereceptor}</p>


        </div>



      </div>
    );
  }
}

export const FunctionalComponentToPrint = React.forwardRef<RecetaTicket, RecetaTicketProps>((props, ref) => {
  return <RecetaTicket ref={ref} text={props.text} receta={props.receta} terminal={props.terminal} recetaProductos={props.recetaProductos} />;
});
