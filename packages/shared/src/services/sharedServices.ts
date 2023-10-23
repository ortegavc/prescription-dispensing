import { zonedTimeToUtc }from "date-fns-tz";
import { format } from 'date-fns'
import es from 'date-fns/locale/es';

export const fechaZonaService=(fecha:string|Date)=>{
    const fechaSalida=zonedTimeToUtc(fecha,'America/Guayaquil');
    return fechaSalida;
}

export const fechaActual=()=>{
    const tiempoTranscurrido = Date.now();
    const fecha = new Date(tiempoTranscurrido).toLocaleDateString('es',{ weekday: 'long',year: 'numeric', month: 'long',day: 'numeric',hour:'2-digit',minute:'2-digit'});

    return fecha;
}

interface IpermisosValues  {
    onEdit: boolean
    onView?: boolean
    onAdd?: boolean
    onDelete?: boolean
    onNew?:boolean
    onPrint?:boolean
    onSelect?:boolean
    dataStatus?:{
        print:{colum:string,valor:number,icon:string,title:string},
        edit:{colum:string,valor:number,icon:string,title:string},
        view:{colum:string,valor:number,icon:string,title:string},
        delete:{colum:string,valor:number,icon:string,title:string},
        add:{colum:string,valor:number,icon:string,title:string},
        new:{colum:string,valor:number,icon:string,title:string}
    }
    dataValue?:{
        new:{colum:string,valor:number}
    }
};
export const btnSegurity=(opt:any)=>{

    const permisosBotones:IpermisosValues = opt;

    return permisosBotones;
}

interface IestadosValues  {
    valor: number|null
    color: string|null
    mensaje?: string|null

};

interface IValues  {
    valor: number|null
    mensaje?: string|null

};

export const statusView =()=>{

    const estados:IestadosValues[] =
    [
        {valor:1,color:'indigo', mensaje:'Activo'},{valor:0,color:'rose', mensaje:'Inactivo'},
    ]
    return estados
}

export const valuesView =()=>{

    const valores:IValues[] =
        [
            {valor:1, mensaje:'Sí'},{valor:0, mensaje:'No'},
        ]
    return valores
}

export const tipoRegistro=(opt:string)=>{

    let mensaje:{etiqueta:string|null,label:string|null};

    switch (opt) {
        case 'E':
            mensaje={etiqueta:'Editado',label:'Editar'};
            break;
        case 'V':
            mensaje={etiqueta:null,label:null};
            break;
        case 'D':
            mensaje={etiqueta:'Borrado',label:'Eliminar'};
            break;
        default:
            mensaje={etiqueta:'Creado',label:'Crear'};
            break;
    }

    return mensaje;
}

export const onEventkeycloak=(event:any, error:any)=>{
    if(error){
        throw Error(`[Network error]: ${error} | Servicio no disponible`)
    }

    if(event && event === 'onAuthError'){
       throw Error(`[kEYCLOAK error]: ${event} | Servicio no disponible, por favor revise la configuración del kEYCLOAK`)
    }
}


export const onTokens =(token:any,keycloak:any)=>{
    if( keycloak?.tokenParsed?.sub !== 'undefined'){
        localStorage.setItem("keycloakTokenInv", token?.token);
    }
}
