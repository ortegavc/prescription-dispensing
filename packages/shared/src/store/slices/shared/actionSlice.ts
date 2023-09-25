import { createSlice } from '@reduxjs/toolkit'

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export interface IArguments{
    notificacion: boolean,
    periodo:boolean,
    menu:boolean,
    bodegas:boolean,
    ejercicioLocal:number,
    prdoLocal:number,
    periodoLocal:number,
    mesLocal:string,
    dataUser:{
        data:{},
        status:boolean
    },
    etiquetas:{
		mensaje:string,
		atributo:boolean,
		tipo:string,
        icon:string
	},
    navegacion:{
        open:boolean,        
    },
    mensajes:{		
		label:string|null,
        tipo:string|null
	},
	viewModal:{
		open:boolean
	},
    dataEntidad:{
        unicodigo:null|number,
        nombreEntidad:string
        open:boolean
        data:[]
        title:string
        mensaje:string
    }
}

export const initialState:IArguments = {
    notificacion: false,
    periodo:false,
    menu:false,
    bodegas:false,
    ejercicioLocal:new Date().getFullYear(),
    prdoLocal:new Date().getMonth(),
    periodoLocal:((new Date().getMonth()) + 1),
    mesLocal:monthNames[new Date().getMonth()],
    dataUser:{
        data:{},
        status:false
    },
    etiquetas:{
		mensaje:'',
		atributo:false,
		tipo:'',
        icon:''
	},
    navegacion:{
        open:false,        
    },
    dataEntidad:{
        unicodigo:null,
        nombreEntidad:'',
        open:false,
        data:[],
        title:'',
        mensaje:''
    },
    mensajes:{
        label:'',
        tipo:''
    },
    viewModal:{
        open:false
    }
}

export const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    resetAction: (state) => {
        
        state.notificacion =false;
        state.periodo =false;
        state.menu =false;

        state.etiquetas.mensaje='';
        state.etiquetas.atributo=false;
        state.etiquetas.tipo='';
        state.etiquetas.icon='';

        state.navegacion.open=false;
        
        state.dataEntidad.nombreEntidad='';
        state.dataEntidad.unicodigo=null;

        state.mensajes.label=null;
        state.mensajes.tipo=null;

        state.viewModal.open=false;

    },
    setAction :(state,action)=>{
        state.notificacion=(action.payload.notificacion)?action.payload.notificacion:false;
        state.periodo=(action.payload.periodo)?action.payload.periodo:false;
        state.menu=(action.payload.bodegas)?action.payload.menu:false;
        state.bodegas=(action.payload.bodegas)?action.payload.bodegas:false
    },
    setEjercicio:(state,action)=>{
        state.ejercicioLocal=action.payload.ejercicio;
        state.prdoLocal=action.payload.prdo;
        state.periodoLocal=action.payload.periodo;
        state.mesLocal=action.payload.mes;
    },
    setDataUser:(state,action)=>{
        state.dataUser.data=action.payload.data;
        state.dataUser.status=action.payload.status;
    },
    setEtiqueta:(state,action)=>{
		state.etiquetas.mensaje=action.payload.mensaje;
		state.etiquetas.atributo=action.payload.atributo;
		state.etiquetas.tipo=action.payload.tipo;
        state.etiquetas.icon=action.payload.icon;
	},
    setNavegacion:(state,action)=>{
        state.navegacion.open=action.payload.open;
    },
    setDataEntidad:(state,action)=>{
        state.dataEntidad.nombreEntidad=action.payload.nombreEntidad;
        state.dataEntidad.unicodigo=action.payload.unicodigo;
        state.dataEntidad.open=action.payload.open;
        state.dataEntidad.data=action.payload.data
        state.dataEntidad.title=action.payload.title
        state.dataEntidad.mensaje=action.payload.mensaje
    },
    setViewModal:(state,action)=>{
        state.viewModal.open=(action.payload.open)?action.payload.open:false;
    },
    setMensajes:(state,action)=>{       
        state.mensajes.label=(action.payload.label)?action.payload.label:null;  
        state.mensajes.tipo=(action.payload.tipo)?action.payload.tipo:null;     
    }
  },
})

export const { resetAction,setAction,setEjercicio, setDataUser,setEtiqueta, setNavegacion, setDataEntidad, setViewModal,setMensajes } = actionSlice.actions