import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    DateScalar: { input: any; output: any };
    DateTime: { input: any; output: any };
    Decimal: { input: any; output: any };
};

export type Agenda = {
    __typename?: "Agenda";
    agendadetalle: Array<AgendaDetalle>;
    bodega_id?: Maybe<Scalars["Float"]["output"]>;
    colaborador_id?: Maybe<Scalars["Float"]["output"]>;
    ctestado_id?: Maybe<Scalars["Float"]["output"]>;
    ctmotivocancela_id?: Maybe<Scalars["Float"]["output"]>;
    cttipocarga_id?: Maybe<Scalars["Float"]["output"]>;
    cttipovehiculo_id?: Maybe<Scalars["Float"]["output"]>;
    entidad_id?: Maybe<Scalars["Float"]["output"]>;
    fechadesde?: Maybe<Scalars["DateScalar"]["output"]>;
    fechahasta?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    identconductor?: Maybe<Scalars["String"]["output"]>;
    nombreconductor?: Maybe<Scalars["String"]["output"]>;
    observacion?: Maybe<Scalars["String"]["output"]>;
    placavehiculo?: Maybe<Scalars["String"]["output"]>;
    proveedorinter?: Maybe<Scalars["Float"]["output"]>;
};

export type AgendaCollectionType = {
    __typename?: "AgendaCollectionType";
    data?: Maybe<Array<AgendaForCollection>>;
    pageInfo?: Maybe<PageInfo>;
};

export type AgendaCreateInput = {
    agendadetalle: Array<AgendaDetalleCreateInput>;
    bodega_id: Scalars["Int"]["input"];
    colaborador_id: Scalars["Int"]["input"];
    ctestado_id: Scalars["Int"]["input"];
    ctmotivocancela_id: Scalars["Int"]["input"];
    cttipocarga_id: Scalars["Int"]["input"];
    cttipovehiculo_id: Scalars["Int"]["input"];
    entidad_id: Scalars["Int"]["input"];
    fechadesde: Scalars["DateTime"]["input"];
    fechahasta: Scalars["DateTime"]["input"];
    identconductor?: InputMaybe<Scalars["String"]["input"]>;
    nombreconductor?: InputMaybe<Scalars["String"]["input"]>;
    observacion?: InputMaybe<Scalars["String"]["input"]>;
    placavehiculo?: InputMaybe<Scalars["String"]["input"]>;
    proveedorinter: Scalars["Int"]["input"];
};

export type AgendaDetalle = {
    __typename?: "AgendaDetalle";
    agenda_id: Scalars["Int"]["output"];
    id: Scalars["Int"]["output"];
    numeroitem: Scalars["Int"]["output"];
    numeroorden: Scalars["Int"]["output"];
};

export type AgendaDetalleCreateInput = {
    numeroitem: Scalars["Int"]["input"];
    numeroorden: Scalars["Int"]["input"];
};

export type AgendaDetalleUpdateInput = {
    agenda_id: Scalars["Int"]["input"];
    id?: InputMaybe<Scalars["Int"]["input"]>;
    numeroitem?: InputMaybe<Scalars["Int"]["input"]>;
    numeroorden?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AgendaFilterInput = {
    bodega_id?: InputMaybe<RelationsWhereInput>;
    colaborador_id?: InputMaybe<RelationsWhereInput>;
    ctestado_id?: InputMaybe<RelationsWhereInput>;
    cttipocarga_id?: InputMaybe<RelationsWhereInput>;
    cttipovehiculo_id?: InputMaybe<RelationsWhereInput>;
    entidad_id?: InputMaybe<RelationsWhereInput>;
    fechadesde?: InputMaybe<DateWhereInput>;
    fechahasta?: InputMaybe<DateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    placavehiculo?: InputMaybe<StringWhereInput>;
};

export type AgendaForCollection = {
    __typename?: "AgendaForCollection";
    bodega_id: Scalars["Float"]["output"];
    colaborador_id: Scalars["Float"]["output"];
    ctestado_id?: Maybe<Scalars["Float"]["output"]>;
    ctmotivocancela_id?: Maybe<Scalars["Float"]["output"]>;
    cttipocarga_id: Scalars["Float"]["output"];
    cttipovehiculo_id: Scalars["Float"]["output"];
    entidad_id: Scalars["Float"]["output"];
    fechadesde: Scalars["DateScalar"]["output"];
    fechahasta: Scalars["DateScalar"]["output"];
    id: Scalars["Int"]["output"];
    identconductor?: Maybe<Scalars["String"]["output"]>;
    nombreconductor?: Maybe<Scalars["String"]["output"]>;
    observacion?: Maybe<Scalars["String"]["output"]>;
    placavehiculo?: Maybe<Scalars["String"]["output"]>;
    proveedorinter?: Maybe<Scalars["Float"]["output"]>;
};

export type AgendaResult = {
    __typename?: "AgendaResult";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AgendaUpdateInput = {
    agendadetalle: Array<AgendaDetalleUpdateInput>;
    bodega_id?: InputMaybe<Scalars["Int"]["input"]>;
    colaborador_id?: InputMaybe<Scalars["Int"]["input"]>;
    ctestado_id?: InputMaybe<Scalars["Int"]["input"]>;
    ctmotivocancela_id?: InputMaybe<Scalars["Int"]["input"]>;
    cttipocarga_id?: InputMaybe<Scalars["Int"]["input"]>;
    cttipovehiculo_id?: InputMaybe<Scalars["Int"]["input"]>;
    entidad_id?: InputMaybe<Scalars["Int"]["input"]>;
    fechadesde?: InputMaybe<Scalars["DateTime"]["input"]>;
    fechahasta?: InputMaybe<Scalars["DateTime"]["input"]>;
    id: Scalars["Float"]["input"];
    identconductor?: InputMaybe<Scalars["String"]["input"]>;
    nombreconductor?: InputMaybe<Scalars["String"]["input"]>;
    observacion?: InputMaybe<Scalars["String"]["input"]>;
    placavehiculo?: InputMaybe<Scalars["String"]["input"]>;
    proveedorinter?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AtcAdministracion = {
    __typename?: "AtcAdministracion";
    descripcion?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
};

export type AtcStock = {
    __typename?: "AtcStock";
    descripcion?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
};

export type Bodega = {
    __typename?: "Bodega";
    codigo?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["Int"]["output"];
    nombre: Scalars["String"]["output"];
};

export type BodegaAdministracion = {
    __typename?: "BodegaAdministracion";
    codigo?: Maybe<Scalars["String"]["output"]>;
    codigoesbye?: Maybe<Scalars["String"]["output"]>;
    ctalmacenamiento?: Maybe<CatalogoDetalleAdministracion>;
    ctalmacenamiento_id?: Maybe<Scalars["Int"]["output"]>;
    cttipobodega?: Maybe<CatalogoDetalleAdministracion>;
    cttipobodega_id?: Maybe<Scalars["Int"]["output"]>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    entidad?: Maybe<EntidadAdministracion>;
    entidad_id?: Maybe<Scalars["Int"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    fechacreacion?: Maybe<Scalars["DateScalar"]["output"]>;
    grupobodega?: Maybe<GrupoBodegaAdministracion>;
    grupobodega_id?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    integraesbye: Scalars["Float"]["output"];
    nombre?: Maybe<Scalars["String"]["output"]>;
    secuencial?: Maybe<Scalars["Int"]["output"]>;
};

export type BodegaCollectionType = {
    __typename?: "BodegaCollectionType";
    data?: Maybe<Array<BodegaAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type BodegaCreateInput = {
    codigoesbye?: InputMaybe<Scalars["String"]["input"]>;
    ctalmacenamiento_id: Scalars["Int"]["input"];
    cttipobodega_id: Scalars["Int"]["input"];
    descripcion?: InputMaybe<Scalars["String"]["input"]>;
    entidad_id: Scalars["Int"]["input"];
    grupobodega_id: Scalars["Float"]["input"];
    integraesbye: Scalars["Float"]["input"];
    nombre: Scalars["String"]["input"];
    tipotransacciones?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    usuarios?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BodegaDelete = {
    __typename?: "BodegaDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type BodegaEgreso = {
    __typename?: "BodegaEgreso";
    id: Scalars["Int"]["output"];
    nombre: Scalars["String"]["output"];
};

export type BodegaEgresoFilterInput = {
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type BodegaFilterInput = {
    alias?: InputMaybe<StringWhereInput>;
    bodega_id?: InputMaybe<RelationsWhereInput>;
    codigo?: InputMaybe<StringWhereInput>;
    cttipobodega_id?: InputMaybe<RelationsWhereInput>;
    entidad_id?: InputMaybe<RelationsWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    grupobodega?: InputMaybe<GrupoBodegaFilterInput>;
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type BodegaFilterRptInput = {
    bodegausuario?: InputMaybe<BodegaUsuarioFilterInput>;
    entidad_id?: InputMaybe<RelationsWhereInput>;
};

export type BodegaIngreso = {
    __typename?: "BodegaIngreso";
    descripcion: Scalars["String"]["output"];
    id: Scalars["Int"]["output"];
    nombre: Scalars["String"]["output"];
};

export type BodegaIngresoFilterInput = {
    alias?: InputMaybe<StringWhereInput>;
    bodega_id?: InputMaybe<RelationsWhereInput>;
    codigo?: InputMaybe<StringWhereInput>;
    cttipobodega_id?: InputMaybe<RelationsWhereInput>;
    entidad_id?: InputMaybe<RelationsWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type BodegaLoteStockCollectionType = {
    __typename?: "BodegaLoteStockCollectionType";
    data?: Maybe<Array<BodegaLoteStockRpt>>;
    pageInfo?: Maybe<PageInfo>;
};

export type BodegaLoteStockFilterInput = {
    bodega_id?: InputMaybe<NumberWhereInput>;
    producto_id?: InputMaybe<NumberWhereInput>;
};

export type BodegaLoteStockRpt = {
    __typename?: "BodegaLoteStockRpt";
    ABREVIATURA?: Maybe<Scalars["String"]["output"]>;
    BODEGA?: Maybe<Scalars["String"]["output"]>;
    BODEGAID?: Maybe<Scalars["String"]["output"]>;
    BODEGA_ID?: Maybe<Scalars["String"]["output"]>;
    CANTIDAD?: Maybe<Scalars["String"]["output"]>;
    CODIGO?: Maybe<Scalars["String"]["output"]>;
    FECHACADUCIDAD?: Maybe<Scalars["DateScalar"]["output"]>;
    FECHAELABORACION?: Maybe<Scalars["DateScalar"]["output"]>;
    ID?: Maybe<Scalars["String"]["output"]>;
    LOTEID?: Maybe<Scalars["String"]["output"]>;
    NUMEROLOTE?: Maybe<Scalars["String"]["output"]>;
    PRODUCTO?: Maybe<Scalars["String"]["output"]>;
    PRODUCTOID?: Maybe<Scalars["String"]["output"]>;
    PRODUCTOSTOCKLOTEID?: Maybe<Scalars["String"]["output"]>;
    PRODUCTO_ID?: Maybe<Scalars["String"]["output"]>;
    SALDO?: Maybe<Scalars["String"]["output"]>;
    STOCKINICIAL?: Maybe<Scalars["String"]["output"]>;
    UNIDAD?: Maybe<Scalars["String"]["output"]>;
    UNIDADMEDIDAID?: Maybe<Scalars["String"]["output"]>;
    VALORPROMEDIO?: Maybe<Scalars["String"]["output"]>;
    VALORTOTAL?: Maybe<Scalars["String"]["output"]>;
};

export type BodegaReporte = {
    __typename?: "BodegaReporte";
    bodegausuario?: Maybe<BodegaUsuarioReporte>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    entidad_id?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type BodegaRptCollectionType = {
    __typename?: "BodegaRptCollectionType";
    data?: Maybe<Array<BodegaReporte>>;
    pageInfo?: Maybe<PageInfo>;
};

export type BodegaStock = {
    __typename?: "BodegaStock";
    codigo?: Maybe<Scalars["String"]["output"]>;
    codigoesbye?: Maybe<Scalars["String"]["output"]>;
    ctalmacenamiento?: Maybe<CatalogoDetalleStock>;
    ctalmacenamiento_id?: Maybe<Scalars["Int"]["output"]>;
    cttipobodega?: Maybe<CatalogoDetalleStock>;
    cttipobodega_id?: Maybe<Scalars["Int"]["output"]>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    entidad?: Maybe<EntidadStock>;
    entidad_id?: Maybe<Scalars["Int"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    fechacreacion?: Maybe<Scalars["DateScalar"]["output"]>;
    grupoBodega?: Maybe<GrupoBodegaStock>;
    grupobodega_id?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    integraesbye: Scalars["Float"]["output"];
    nombre?: Maybe<Scalars["String"]["output"]>;
    secuencial?: Maybe<Scalars["Int"]["output"]>;
};

export type BodegaTipotransaccionAdministracion = {
    __typename?: "BodegaTipotransaccionAdministracion";
    activo?: Maybe<Scalars["Float"]["output"]>;
    bodega: BodegaAdministracion;
    bodega_id?: Maybe<Scalars["Int"]["output"]>;
    tipoTransaccion: TipoTransaccionAdministracion;
    tipotransaccion_id: Scalars["Float"]["output"];
};

export type BodegaTipotransaccionCollectionType = {
    __typename?: "BodegaTipotransaccionCollectionType";
    data?: Maybe<Array<BodegaTipotransaccionAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type BodegaTipotransaccionCreateInput = {
    bodega_id: Scalars["Int"]["input"];
    tipotransaccion_id: Scalars["Float"]["input"];
};

export type BodegaTipotransaccionDelete = {
    __typename?: "BodegaTipotransaccionDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type BodegaTipotransaccionFilterInput = {
    bodega_id?: InputMaybe<RelationsWhereInput>;
    tipoTransaccion?: InputMaybe<TipoTransaccionFilterInput>;
    usuario_id?: InputMaybe<StringWhereInput>;
};

export type BodegaTipotransaccionUpdateInput = {
    bodega_id?: InputMaybe<Scalars["Int"]["input"]>;
    tipotransaccion_id?: InputMaybe<Scalars["Float"]["input"]>;
};

export type BodegaUpdateInput = {
    codigoesbye?: InputMaybe<Scalars["String"]["input"]>;
    ctalmacenamiento_id?: InputMaybe<Scalars["Int"]["input"]>;
    cttipobodega_id?: InputMaybe<Scalars["Int"]["input"]>;
    descripcion?: InputMaybe<Scalars["String"]["input"]>;
    entidad_id?: InputMaybe<Scalars["Int"]["input"]>;
    estado?: InputMaybe<Scalars["Float"]["input"]>;
    grupobodega_id?: InputMaybe<Scalars["Float"]["input"]>;
    id: Scalars["Int"]["input"];
    integraesbye?: InputMaybe<Scalars["Float"]["input"]>;
    nombre?: InputMaybe<Scalars["String"]["input"]>;
    tipotransacciones?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    usuarios?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BodegaUsuarioFilterInput = {
    usuario_id?: InputMaybe<StringWhereInput>;
};

export type BodegaUsuarioReporte = {
    __typename?: "BodegaUsuarioReporte";
    bodega_id: Scalars["Int"]["output"];
    id?: Maybe<Scalars["Int"]["output"]>;
    usuario_id: Scalars["String"]["output"];
};

export type CargaInicialResult = {
    __typename?: "CargaInicialResult";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CatalogoCabeceraAdmin = {
    __typename?: "CatalogoCabeceraAdmin";
    activo?: Maybe<Scalars["Int"]["output"]>;
    catalogoDetalle?: Maybe<Array<CatalogoDetalleAdmin>>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type CatalogoCabeceraCollectionType = {
    __typename?: "CatalogoCabeceraCollectionType";
    data?: Maybe<Array<CatalogoCabeceraAdmin>>;
    pageInfo?: Maybe<PageInfo>;
};

export type CatalogoCabeceraFilterInput = {
    activo?: InputMaybe<StateWhereInput>;
    descripcion?: InputMaybe<StringWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type CatalogoDetalle = {
    __typename?: "CatalogoDetalle";
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type CatalogoDetalleAdmin = {
    __typename?: "CatalogoDetalleAdmin";
    activo?: Maybe<Scalars["Int"]["output"]>;
    catalogocabecera_id?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    valorcaracter?: Maybe<Scalars["String"]["output"]>;
    valornumerico?: Maybe<Scalars["Int"]["output"]>;
};

export type CatalogoDetalleAdministracion = {
    __typename?: "CatalogoDetalleAdministracion";
    activo?: Maybe<Scalars["Int"]["output"]>;
    catalogocabecera_id?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    valorcaracter?: Maybe<Scalars["String"]["output"]>;
    valornumerico?: Maybe<Scalars["Int"]["output"]>;
};

export type CatalogoDetalleCompra = {
    __typename?: "CatalogoDetalleCompra";
    activo?: Maybe<Scalars["Int"]["output"]>;
    catalogocabecera_id?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    valorcaracter?: Maybe<Scalars["String"]["output"]>;
    valornumerico?: Maybe<Scalars["Int"]["output"]>;
};

export type CatalogoDetalleEgreso = {
    __typename?: "CatalogoDetalleEgreso";
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type CatalogoDetalleIngreso = {
    __typename?: "CatalogoDetalleIngreso";
    activo?: Maybe<Scalars["Int"]["output"]>;
    catalogocabecera_id?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    valorcaracter?: Maybe<Scalars["String"]["output"]>;
    valornumerico?: Maybe<Scalars["Int"]["output"]>;
};

export type CatalogoDetalleReporte = {
    __typename?: "CatalogoDetalleReporte";
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    valorcaracter?: Maybe<Scalars["String"]["output"]>;
};

export type CatalogoDetalleSolicitud = {
    __typename?: "CatalogoDetalleSolicitud";
    catalogocabecera_id?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type CatalogoDetalleStock = {
    __typename?: "CatalogoDetalleStock";
    activo?: Maybe<Scalars["Int"]["output"]>;
    catalogocabecera_id?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    valorcaracter?: Maybe<Scalars["String"]["output"]>;
    valornumerico?: Maybe<Scalars["Int"]["output"]>;
};

export type CatalogoDetallleFilterInput = {
    catalogocabecera_id: Scalars["Float"]["input"];
    valornumerico?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Categoria = {
    __typename?: "Categoria";
    categoria_id?: Maybe<Scalars["Float"]["output"]>;
    codigo?: Maybe<Scalars["String"]["output"]>;
    cttipoproducto_id?: Maybe<Scalars["Float"]["output"]>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    esbyesubcuenta2_id?: Maybe<Scalars["Float"]["output"]>;
    estado?: Maybe<Scalars["Float"]["output"]>;
    fechacreacion?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    tipoproducto?: Maybe<CatalogoDetalleAdministracion>;
};

export type CategoriaCollectionType = {
    __typename?: "CategoriaCollectionType";
    data?: Maybe<Array<Categoria>>;
    pageInfo?: Maybe<PageInfo>;
};

export type CategoriaDelete = {
    __typename?: "CategoriaDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CategoriaFilterInput = {
    categoria_id?: InputMaybe<NumberWhereInput>;
    codigo?: InputMaybe<StringWhereInput>;
    cttipobodega_id?: InputMaybe<RelationsWhereInput>;
    cttipoproducto_id?: InputMaybe<RelationsWhereInput>;
    descripcion?: InputMaybe<StringWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type CategoriaInput = {
    categoria_id?: InputMaybe<Scalars["Float"]["input"]>;
    codigo: Scalars["String"]["input"];
    cttipoproducto_id: Scalars["Float"]["input"];
    descripcion: Scalars["String"]["input"];
    esbyesubcuenta2_id?: InputMaybe<Scalars["Float"]["input"]>;
    estado?: InputMaybe<Scalars["Float"]["input"]>;
    nombre: Scalars["String"]["input"];
};

export type CategoriaReporte = {
    __typename?: "CategoriaReporte";
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type CategoriaStock = {
    __typename?: "CategoriaStock";
    categoria_id?: Maybe<Scalars["Float"]["output"]>;
    codigo?: Maybe<Scalars["String"]["output"]>;
    cttipoproducto_id?: Maybe<Scalars["Float"]["output"]>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    esbyesubcuenta2_id?: Maybe<Scalars["Float"]["output"]>;
    estado?: Maybe<Scalars["Float"]["output"]>;
    fechacreacion?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    tipoproducto?: Maybe<CatalogoDetalleStock>;
};

export type CategoriaUpdateInput = {
    categoria_id?: InputMaybe<Scalars["Float"]["input"]>;
    codigo?: InputMaybe<Scalars["String"]["input"]>;
    cttipoproducto_id?: InputMaybe<Scalars["Float"]["input"]>;
    descripcion?: InputMaybe<Scalars["String"]["input"]>;
    esbyesubcuenta2_id?: InputMaybe<Scalars["Float"]["input"]>;
    estado?: InputMaybe<Scalars["Float"]["input"]>;
    id: Scalars["Int"]["input"];
    nombre?: InputMaybe<Scalars["String"]["input"]>;
};

export type ColaboradorEgreso = {
    __typename?: "ColaboradorEgreso";
    actividadeconomica?: Maybe<Scalars["String"]["output"]>;
    cttipoidentificacion?: Maybe<CatalogoDetalleEgreso>;
    id: Scalars["Int"]["output"];
    identificacion: Scalars["String"]["output"];
    nombre?: Maybe<Scalars["String"]["output"]>;
    razonsocial?: Maybe<Scalars["String"]["output"]>;
};

export type ColaboradorReporte = {
    __typename?: "ColaboradorReporte";
    id?: Maybe<Scalars["Int"]["output"]>;
    identificaion?: Maybe<Scalars["String"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    razonsocial?: Maybe<Scalars["String"]["output"]>;
};

export type CollectionProveedorType = {
    __typename?: "CollectionProveedorType";
    data?: Maybe<Array<ProveedorAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type ConcentracionAdministracion = {
    __typename?: "ConcentracionAdministracion";
    descripcion?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
};

export type ConcentracionStock = {
    __typename?: "ConcentracionStock";
    descripcion?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
};

export type ConfiguraCodigoBarra = {
    __typename?: "ConfiguraCodigoBarra";
    activo?: Maybe<Scalars["Float"]["output"]>;
    fechacreacion?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    json?: Maybe<Scalars["String"]["output"]>;
    plantilla?: Maybe<Scalars["String"]["output"]>;
};

export type ConfiguraCodigoBarraCollectionType = {
    __typename?: "ConfiguraCodigoBarraCollectionType";
    data?: Maybe<Array<ConfiguraCodigoBarra>>;
    pageInfo?: Maybe<PageInfo>;
};

export type ConfiguraCodigoBarraDelete = {
    __typename?: "ConfiguraCodigoBarraDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ConfiguraCodigoBarraFilterInput = {
    activo?: InputMaybe<NumberWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    json?: InputMaybe<StringWhereInput>;
    plantilla?: InputMaybe<StringWhereInput>;
};

export type ConfiguraCodigoBarraInput = {
    activo?: InputMaybe<Scalars["Float"]["input"]>;
    json: Scalars["String"]["input"];
    plantilla: Scalars["String"]["input"];
};

export type ConfiguraCodigoBarraUpdateInput = {
    activo?: InputMaybe<Scalars["Float"]["input"]>;
    id: Scalars["Int"]["input"];
    json?: InputMaybe<Scalars["String"]["input"]>;
    plantilla?: InputMaybe<Scalars["String"]["input"]>;
};

export type Despacho = {
    __typename?: "Despacho";
    bodegaorigen?: Maybe<Bodega>;
    bodegaorigen_id?: Maybe<Scalars["Float"]["output"]>;
    colaborador?: Maybe<Paciente>;
    colaborador_id?: Maybe<Scalars["Float"]["output"]>;
    ctdocumentorespaldo_id?: Maybe<Scalars["Float"]["output"]>;
    documentorespaldo?: Maybe<Scalars["String"]["output"]>;
    egresodetalle?: Maybe<Array<DespachoDetalle>>;
    ejercicio?: Maybe<Scalars["Float"]["output"]>;
    entidadorigen?: Maybe<Entidad>;
    entidadorigen_id?: Maybe<Scalars["Float"]["output"]>;
    fechaegreso?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    identificareceptor?: Maybe<Scalars["String"]["output"]>;
    nombrereceptor?: Maybe<Scalars["String"]["output"]>;
    numerotransaccion?: Maybe<Scalars["String"]["output"]>;
    observacion?: Maybe<Scalars["String"]["output"]>;
    periodo?: Maybe<Scalars["Float"]["output"]>;
    tipodocumento_id?: Maybe<Scalars["Float"]["output"]>;
    tipotransaccion?: Maybe<TipoTransaccion>;
    tipotransaccion_id?: Maybe<Scalars["Float"]["output"]>;
    turno?: Maybe<Turno>;
    turno_id?: Maybe<Scalars["Float"]["output"]>;
    usuariocreacion?: Maybe<Usuario>;
    usuariocreacion_id?: Maybe<Scalars["String"]["output"]>;
};

export type DespachoCollectionType = {
    __typename?: "DespachoCollectionType";
    data?: Maybe<Array<DespachoForCollection>>;
    pageInfo?: Maybe<PageInfo>;
};

export type DespachoCreateInput = {
    despachodetalle: Array<DespachoDetalleCreateInput>;
    identificareceptor?: InputMaybe<Scalars["String"]["input"]>;
    nombrereceptor?: InputMaybe<Scalars["String"]["input"]>;
    numeroreceta: Scalars["String"]["input"];
    oid?: InputMaybe<Scalars["String"]["input"]>;
    paciente: PacienteInput;
    recetaelectronica?: InputMaybe<Scalars["Int"]["input"]>;
    turno_id: Scalars["Int"]["input"];
};

export type DespachoDetalle = {
    __typename?: "DespachoDetalle";
    cantidaddespachada: Scalars["Float"]["output"];
    cantidadrequerida: Scalars["Float"]["output"];
    id: Scalars["Int"]["output"];
    lote?: Maybe<Lote>;
    lote_id?: Maybe<Scalars["Float"]["output"]>;
    producto: Producto;
    producto_id: Scalars["Float"]["output"];
};

export type DespachoDetalleCreateInput = {
    cantidaddespachada: Scalars["Int"]["input"];
    cantidaddispensada?: InputMaybe<Scalars["Int"]["input"]>;
    cantidadrequerida: Scalars["Int"]["input"];
    lote_id?: InputMaybe<Scalars["Int"]["input"]>;
    producto_id: Scalars["Int"]["input"];
    receta_oid?: InputMaybe<Scalars["String"]["input"]>;
};

export type DespachoFilterInput = {
    bodegaorigen_id?: InputMaybe<RelationsWhereInput>;
    colaborador?: InputMaybe<PacienteFilterInput>;
    documentorespaldo?: InputMaybe<StringWhereInput>;
    ejercicio?: InputMaybe<NumberWhereInput>;
    entidadorigen_id?: InputMaybe<RelationsWhereInput>;
    fechaegreso?: InputMaybe<DateWhereInput>;
    numerotransaccion?: InputMaybe<StringWhereInput>;
    periodo?: InputMaybe<NumberWhereInput>;
    tipodocumento_id?: InputMaybe<RelationsWhereInput>;
    tipotransaccion_id?: InputMaybe<RelationsWhereInput>;
    turno?: InputMaybe<TurnoFilterInput>;
    usuariocreacion?: InputMaybe<UsuarioDespachoFilterInput>;
    usuariocreacion_id?: InputMaybe<StringWhereInput>;
};

export type DespachoForCollection = {
    __typename?: "DespachoForCollection";
    bodegaorigen_id?: Maybe<Scalars["Float"]["output"]>;
    colaborador?: Maybe<Paciente>;
    colaborador_id?: Maybe<Scalars["Float"]["output"]>;
    ctdocumentorespaldo_id?: Maybe<Scalars["Float"]["output"]>;
    documentorespaldo?: Maybe<Scalars["String"]["output"]>;
    ejercicio?: Maybe<Scalars["Float"]["output"]>;
    entidadorigen?: Maybe<Entidad>;
    entidadorigen_id: Scalars["Float"]["output"];
    fechaegreso?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    identificareceptor?: Maybe<Scalars["String"]["output"]>;
    nombrereceptor?: Maybe<Scalars["String"]["output"]>;
    numerotransaccion?: Maybe<Scalars["String"]["output"]>;
    observacion?: Maybe<Scalars["String"]["output"]>;
    periodo?: Maybe<Scalars["Float"]["output"]>;
    tipodocumento_id?: Maybe<Scalars["Float"]["output"]>;
    tipotransaccion: TipoTransaccion;
    tipotransaccion_id?: Maybe<Scalars["Float"]["output"]>;
    turno?: Maybe<Turno>;
    turno_id?: Maybe<Scalars["Float"]["output"]>;
    usuariocreacion?: Maybe<Usuario>;
    usuariocreacion_id?: Maybe<Scalars["String"]["output"]>;
};

export type DespachoResult = {
    __typename?: "DespachoResult";
    code?: Maybe<Scalars["Float"]["output"]>;
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Egreso = {
    __typename?: "Egreso";
    bodegadestino?: Maybe<BodegaEgreso>;
    bodegadestino_id?: Maybe<Scalars["Float"]["output"]>;
    bodegaorigen?: Maybe<BodegaEgreso>;
    bodegaorigen_id?: Maybe<Scalars["Float"]["output"]>;
    colaborador?: Maybe<ColaboradorEgreso>;
    colaborador_id?: Maybe<Scalars["Float"]["output"]>;
    ctdocumentorespaldo?: Maybe<CatalogoDetalleEgreso>;
    ctdocumentorespaldo_id?: Maybe<Scalars["Float"]["output"]>;
    ctestado?: Maybe<CatalogoDetalleEgreso>;
    ctestado_id?: Maybe<Scalars["Float"]["output"]>;
    documentoadicional?: Maybe<Scalars["String"]["output"]>;
    documentorespaldo?: Maybe<Scalars["String"]["output"]>;
    egresodetalle: Array<EgresoDetalle>;
    ejercicio?: Maybe<Scalars["Float"]["output"]>;
    entidaddestino?: Maybe<EntidadEgreso>;
    entidaddestino_id?: Maybe<Scalars["Float"]["output"]>;
    entidadorigen?: Maybe<EntidadEgreso>;
    entidadorigen_id?: Maybe<Scalars["Float"]["output"]>;
    fechacreacion?: Maybe<Scalars["DateScalar"]["output"]>;
    fechadocumento?: Maybe<Scalars["DateScalar"]["output"]>;
    fechaegreso?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    identificareceptor?: Maybe<Scalars["String"]["output"]>;
    nombrereceptor?: Maybe<Scalars["String"]["output"]>;
    numerotransaccion?: Maybe<Scalars["String"]["output"]>;
    observacion?: Maybe<Scalars["String"]["output"]>;
    periodo?: Maybe<Scalars["Float"]["output"]>;
    prestamo?: Maybe<Scalars["Float"]["output"]>;
    tipodocumento?: Maybe<TipoDocumentoEgreso>;
    tipodocumento_id?: Maybe<Scalars["Float"]["output"]>;
    tipotransaccion?: Maybe<TipoTransaccionEgreso>;
    tipotransaccion_id?: Maybe<Scalars["Float"]["output"]>;
    total?: Maybe<Scalars["Float"]["output"]>;
    turno?: Maybe<TurnoEgreso>;
    turno_id?: Maybe<Scalars["Float"]["output"]>;
    usuariocreacion?: Maybe<UsuarioEgreso>;
};

export type EgresoColaboradorFilterInput = {
    ctclasecolaborador_id?: InputMaybe<RelationsWhereInput>;
    cttipoidentificacion_id?: InputMaybe<RelationsWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    identificacion?: InputMaybe<StringWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type EgresoCollectionType = {
    __typename?: "EgresoCollectionType";
    data?: Maybe<Array<EgresoForCollection>>;
    pageInfo?: Maybe<PageInfo>;
};

export type EgresoCreateDetalleInput = {
    bodegadestino_id?: InputMaybe<Scalars["Float"]["input"]>;
    bodegaorigen_id: Scalars["Float"]["input"];
    colaborador_id?: InputMaybe<Scalars["Float"]["input"]>;
    ctdocumentorespaldo_id?: InputMaybe<Scalars["Float"]["input"]>;
    ctestado_id?: InputMaybe<Scalars["Float"]["input"]>;
    documentoadicional?: InputMaybe<Scalars["String"]["input"]>;
    documentorespaldo?: InputMaybe<Scalars["String"]["input"]>;
    egresodetalle: Array<EgresoDetalleCreateInput>;
    ejercicio: Scalars["Float"]["input"];
    entidaddestino_id?: InputMaybe<Scalars["Float"]["input"]>;
    entidadorigen_id: Scalars["Float"]["input"];
    fechadocumento?: InputMaybe<Scalars["DateTime"]["input"]>;
    fechaegreso: Scalars["DateTime"]["input"];
    identificareceptor?: InputMaybe<Scalars["String"]["input"]>;
    nombrereceptor?: InputMaybe<Scalars["String"]["input"]>;
    observacion?: InputMaybe<Scalars["String"]["input"]>;
    paciente?: InputMaybe<PacienteEgresoInput>;
    periodo: Scalars["Float"]["input"];
    prestamo?: InputMaybe<Scalars["Float"]["input"]>;
    tipodocumento_id?: InputMaybe<Scalars["Float"]["input"]>;
    tipotransaccion_id: Scalars["Float"]["input"];
    total?: InputMaybe<Scalars["Float"]["input"]>;
    turno_id?: InputMaybe<Scalars["Float"]["input"]>;
};

export type EgresoDetalle = {
    __typename?: "EgresoDetalle";
    cantidaddespachada: Scalars["Float"]["output"];
    cantidadrequerida?: Maybe<Scalars["Float"]["output"]>;
    costo: Scalars["Float"]["output"];
    id: Scalars["Int"]["output"];
    lote?: Maybe<LoteEgreso>;
    producto: ProductoEgreso;
    producto_id: Scalars["Float"]["output"];
    total?: Maybe<Scalars["Float"]["output"]>;
    unidadmedida?: Maybe<UnidadMedidaEgreso>;
};

export type EgresoDetalleCabeceraUpdateInput = {
    cantidaddespachada?: InputMaybe<Scalars["Float"]["input"]>;
    cantidadrequerida?: InputMaybe<Scalars["Float"]["input"]>;
    costo?: InputMaybe<Scalars["Float"]["input"]>;
    egreso_id: Scalars["Float"]["input"];
    id?: InputMaybe<Scalars["Float"]["input"]>;
    lote_id?: InputMaybe<Scalars["Float"]["input"]>;
    producto_id?: InputMaybe<Scalars["Float"]["input"]>;
    unidadmedida_id?: InputMaybe<Scalars["Float"]["input"]>;
};

export type EgresoDetalleCreateInput = {
    cantidaddespachada: Scalars["Float"]["input"];
    cantidadrequerida?: InputMaybe<Scalars["Float"]["input"]>;
    costo: Scalars["Float"]["input"];
    lote_id?: InputMaybe<Scalars["Float"]["input"]>;
    producto_id: Scalars["Float"]["input"];
    unidadmedida_id: Scalars["Float"]["input"];
};

export type EgresoDetalleUpdateInput = {
    cantidaddespachada?: InputMaybe<Scalars["Float"]["input"]>;
    cantidadrequerida?: InputMaybe<Scalars["Float"]["input"]>;
    costo?: InputMaybe<Scalars["Float"]["input"]>;
    egreso_id: Scalars["Float"]["input"];
    id: Scalars["Float"]["input"];
    lote_id?: InputMaybe<Scalars["Float"]["input"]>;
    producto_id?: InputMaybe<Scalars["Float"]["input"]>;
    unidadmedida_id?: InputMaybe<Scalars["Float"]["input"]>;
};

export type EgresoDetallesCreateInput = {
    cantidaddespachada: Scalars["Float"]["input"];
    cantidadrequerida?: InputMaybe<Scalars["Float"]["input"]>;
    costo: Scalars["Float"]["input"];
    egreso_id: Scalars["Float"]["input"];
    lote_id?: InputMaybe<Scalars["Float"]["input"]>;
    producto_id: Scalars["Float"]["input"];
    unidadmedida_id: Scalars["Float"]["input"];
};

export type EgresoFilterInput = {
    bodegadestino?: InputMaybe<BodegaEgresoFilterInput>;
    bodegadestino_id?: InputMaybe<RelationsWhereInput>;
    bodegaorigen_id?: InputMaybe<RelationsWhereInput>;
    colaborador?: InputMaybe<EgresoColaboradorFilterInput>;
    ctestado_id?: InputMaybe<RelationsWhereInput>;
    documentorespaldo?: InputMaybe<StringWhereInput>;
    ejercicio: NumberWhereInput;
    entidaddestino?: InputMaybe<EntidadEgresoFilterInput>;
    entidaddestino_id?: InputMaybe<RelationsWhereInput>;
    entidadorigen_id?: InputMaybe<RelationsWhereInput>;
    fechacreacion?: InputMaybe<DateWhereInput>;
    fechaegreso?: InputMaybe<DateWhereInput>;
    numerotransaccion?: InputMaybe<StringWhereInput>;
    periodo?: InputMaybe<NumberWhereInput>;
    tipodocumento_id?: InputMaybe<RelationsWhereInput>;
    tipotransaccion?: InputMaybe<TipoTransaccionEgresoFilterInput>;
    tipotransaccion_id?: InputMaybe<RelationsWhereInput>;
    turno?: InputMaybe<EgresoTurnoFilterInput>;
    usuariocreacion?: InputMaybe<UsuarioEgresoFilterInput>;
};

export type EgresoForCollection = {
    __typename?: "EgresoForCollection";
    bodegadestino?: Maybe<BodegaEgreso>;
    bodegadestino_id?: Maybe<Scalars["Float"]["output"]>;
    bodegaorigen: BodegaEgreso;
    bodegaorigen_id: Scalars["Float"]["output"];
    colaborador?: Maybe<ColaboradorEgreso>;
    colaborador_id?: Maybe<Scalars["Float"]["output"]>;
    ctdocumentorespaldo?: Maybe<CatalogoDetalleEgreso>;
    ctdocumentorespaldo_id?: Maybe<Scalars["Float"]["output"]>;
    ctestado?: Maybe<CatalogoDetalleEgreso>;
    ctestado_id: Scalars["Float"]["output"];
    documentoadicional?: Maybe<Scalars["String"]["output"]>;
    documentorespaldo?: Maybe<Scalars["String"]["output"]>;
    ejercicio: Scalars["Float"]["output"];
    entidaddestino?: Maybe<EntidadEgreso>;
    entidaddestino_id?: Maybe<Scalars["Float"]["output"]>;
    entidadorigen: EntidadEgreso;
    entidadorigen_id: Scalars["Float"]["output"];
    fechacreacion: Scalars["DateScalar"]["output"];
    fechadocumento?: Maybe<Scalars["DateScalar"]["output"]>;
    fechaegreso: Scalars["DateScalar"]["output"];
    id: Scalars["Int"]["output"];
    identificareceptor?: Maybe<Scalars["String"]["output"]>;
    nombrereceptor?: Maybe<Scalars["String"]["output"]>;
    numerotransaccion?: Maybe<Scalars["String"]["output"]>;
    observacion?: Maybe<Scalars["String"]["output"]>;
    periodo: Scalars["Float"]["output"];
    prestamo?: Maybe<Scalars["Float"]["output"]>;
    tipodocumento?: Maybe<TipoDocumentoEgreso>;
    tipodocumento_id?: Maybe<Scalars["Float"]["output"]>;
    tipotransaccion: TipoTransaccionEgreso;
    tipotransaccion_id: Scalars["Float"]["output"];
    total?: Maybe<Scalars["Float"]["output"]>;
    turno?: Maybe<TurnoEgreso>;
    turno_id?: Maybe<Scalars["Float"]["output"]>;
    usuariocreacion: UsuarioEgreso;
};

export type EgresoResult = {
    __typename?: "EgresoResult";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type EgresoTurnoFilterInput = {
    id?: InputMaybe<NumberWhereInput>;
    numerodispensacion?: InputMaybe<NumberWhereInput>;
    numeroturno?: InputMaybe<StringWhereInput>;
};

export type EgresoUpdateInput = {
    bodegadestino_id?: InputMaybe<Scalars["Float"]["input"]>;
    bodegaorigen_id?: InputMaybe<Scalars["Float"]["input"]>;
    colaborador_id?: InputMaybe<Scalars["Float"]["input"]>;
    ctdocumentorespaldo_id?: InputMaybe<Scalars["Float"]["input"]>;
    ctestado_id?: InputMaybe<Scalars["Float"]["input"]>;
    documentoadicional?: InputMaybe<Scalars["String"]["input"]>;
    documentorespaldo?: InputMaybe<Scalars["String"]["input"]>;
    egresodetalle: Array<EgresoDetalleCabeceraUpdateInput>;
    ejercicio?: InputMaybe<Scalars["Float"]["input"]>;
    entidaddestino_id?: InputMaybe<Scalars["Float"]["input"]>;
    entidadorigen_id?: InputMaybe<Scalars["Float"]["input"]>;
    fechadocumento?: InputMaybe<Scalars["DateTime"]["input"]>;
    fechaegreso?: InputMaybe<Scalars["DateTime"]["input"]>;
    id: Scalars["Float"]["input"];
    identificareceptor?: InputMaybe<Scalars["String"]["input"]>;
    nombrereceptor?: InputMaybe<Scalars["String"]["input"]>;
    observacion?: InputMaybe<Scalars["String"]["input"]>;
    paciente?: InputMaybe<PacienteEgresoInput>;
    periodo?: InputMaybe<Scalars["Float"]["input"]>;
    prestamo?: InputMaybe<Scalars["Float"]["input"]>;
    tipodocumento_id?: InputMaybe<Scalars["Float"]["input"]>;
    tipotransaccion_id?: InputMaybe<Scalars["Float"]["input"]>;
    total?: InputMaybe<Scalars["Float"]["input"]>;
    turno_id?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Entidad = {
    __typename?: "Entidad";
    id: Scalars["Int"]["output"];
    nombre?: Maybe<Scalars["String"]["output"]>;
    unicodigo?: Maybe<Scalars["String"]["output"]>;
};

export type EntidadAdministracion = {
    __typename?: "EntidadAdministracion";
    cantoncodigo?: Maybe<Scalars["String"]["output"]>;
    cantondescripcion?: Maybe<Scalars["String"]["output"]>;
    cedularepresentante?: Maybe<Scalars["String"]["output"]>;
    direccion?: Maybe<Scalars["String"]["output"]>;
    direccionreferencia?: Maybe<Scalars["String"]["output"]>;
    distritocodigo: Scalars["String"]["output"];
    distritodescripcion?: Maybe<Scalars["String"]["output"]>;
    entidadpadre?: Maybe<Scalars["String"]["output"]>;
    entidadpadrecodigo?: Maybe<Scalars["Float"]["output"]>;
    eod?: Maybe<Scalars["Float"]["output"]>;
    esigef?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["Int"]["output"];
    igudescripcion?: Maybe<Scalars["String"]["output"]>;
    mail?: Maybe<Scalars["String"]["output"]>;
    nivelatencion?: Maybe<Scalars["String"]["output"]>;
    nivelatencioncodigo?: Maybe<Scalars["Float"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    nombrecomercial?: Maybe<Scalars["String"]["output"]>;
    parroquiacodigo?: Maybe<Scalars["String"]["output"]>;
    parroquiadescripcion?: Maybe<Scalars["String"]["output"]>;
    provinciacodigo?: Maybe<Scalars["Float"]["output"]>;
    provinciadescripcion?: Maybe<Scalars["String"]["output"]>;
    recetaelectronica?: Maybe<Scalars["Float"]["output"]>;
    representantelegal?: Maybe<Scalars["String"]["output"]>;
    ruc?: Maybe<Scalars["String"]["output"]>;
    ruceod?: Maybe<Scalars["String"]["output"]>;
    telefono?: Maybe<Scalars["String"]["output"]>;
    telefonorep?: Maybe<Scalars["String"]["output"]>;
    tipoatencion?: Maybe<Scalars["String"]["output"]>;
    tipoentidad?: Maybe<Scalars["String"]["output"]>;
    tipoentidadcodigo?: Maybe<Scalars["String"]["output"]>;
    tipoestablecimiento?: Maybe<Scalars["Float"]["output"]>;
    tipologia?: Maybe<Scalars["String"]["output"]>;
    tipologiacodigo?: Maybe<Scalars["Float"]["output"]>;
    tipoparroquia?: Maybe<Scalars["String"]["output"]>;
    tundescripcion?: Maybe<Scalars["String"]["output"]>;
    unicodigo?: Maybe<Scalars["String"]["output"]>;
    zonacodigo?: Maybe<Scalars["String"]["output"]>;
    zonadescripcion?: Maybe<Scalars["String"]["output"]>;
    zonadistribucion?: Maybe<Scalars["String"]["output"]>;
};

export type EntidadCollectionType = {
    __typename?: "EntidadCollectionType";
    data?: Maybe<Array<EntidadAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type EntidadDelete = {
    __typename?: "EntidadDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type EntidadEgreso = {
    __typename?: "EntidadEgreso";
    id: Scalars["Int"]["output"];
    nombre: Scalars["String"]["output"];
    unicodigo: Scalars["String"]["output"];
};

export type EntidadEgresoFilterInput = {
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
    unicodigo?: InputMaybe<StringWhereInput>;
};

export type EntidadFilterInput = {
    activo?: InputMaybe<StateWhereInput>;
    barrio?: InputMaybe<StringWhereInput>;
    cantoncodigo?: InputMaybe<StringWhereInput>;
    cantondescripcion?: InputMaybe<StringWhereInput>;
    cedularepresentante?: InputMaybe<StringWhereInput>;
    ctinstitucion_id?: InputMaybe<RelationsWhereInput>;
    direccion?: InputMaybe<StringWhereInput>;
    direccionreferencia?: InputMaybe<StringWhereInput>;
    distritocodigo?: InputMaybe<StringWhereInput>;
    distritodescripcion?: InputMaybe<StringWhereInput>;
    entidadpadre?: InputMaybe<StringWhereInput>;
    entidadpadrecodigo?: InputMaybe<RelationsWhereInput>;
    eod?: InputMaybe<StateWhereInput>;
    esigef?: InputMaybe<StateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    igudescripcion?: InputMaybe<StringWhereInput>;
    mail?: InputMaybe<StringWhereInput>;
    nivelatencion?: InputMaybe<StringWhereInput>;
    nivelatencioncodigo?: InputMaybe<RelationsWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
    nombrecomercial?: InputMaybe<StringWhereInput>;
    parroquiacodigo?: InputMaybe<StringWhereInput>;
    parroquiadescripcion?: InputMaybe<StringWhereInput>;
    provinciacodigo?: InputMaybe<StringWhereInput>;
    provinciadescripcion?: InputMaybe<StringWhereInput>;
    representantelegal?: InputMaybe<StringWhereInput>;
    ruc?: InputMaybe<StringWhereInput>;
    ruceod?: InputMaybe<StringWhereInput>;
    telefono?: InputMaybe<StringWhereInput>;
    telefonorep?: InputMaybe<StringWhereInput>;
    tipoarroquia?: InputMaybe<StringWhereInput>;
    tipoatencion?: InputMaybe<StringWhereInput>;
    tipoentidad?: InputMaybe<StringWhereInput>;
    tipoentidadcodigo?: InputMaybe<RelationsWhereInput>;
    tipoestablecemiento?: InputMaybe<RelationsWhereInput>;
    tipologia?: InputMaybe<StringWhereInput>;
    tipologiacodigo?: InputMaybe<RelationsWhereInput>;
    tundescripcion?: InputMaybe<StringWhereInput>;
    unicodigo?: InputMaybe<StringWhereInput>;
    zonacodigo?: InputMaybe<StringWhereInput>;
    zonadescripcion?: InputMaybe<StringWhereInput>;
    zonadistribucion?: InputMaybe<StringWhereInput>;
};

export type EntidadFindAdministracion = {
    __typename?: "EntidadFindAdministracion";
    cantoncodigo?: Maybe<Scalars["String"]["output"]>;
    cantondescripcion?: Maybe<Scalars["String"]["output"]>;
    cedularepresentante?: Maybe<Scalars["String"]["output"]>;
    direccion?: Maybe<Scalars["String"]["output"]>;
    direccionreferencia?: Maybe<Scalars["String"]["output"]>;
    distritocodigo: Scalars["String"]["output"];
    distritodescripcion?: Maybe<Scalars["String"]["output"]>;
    entidadEOD?: Maybe<EntidadAdministracion>;
    entidadpadre?: Maybe<Scalars["String"]["output"]>;
    entidadpadrecodigo?: Maybe<Scalars["Float"]["output"]>;
    eod?: Maybe<Scalars["Float"]["output"]>;
    esigef?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["Int"]["output"];
    igudescripcion?: Maybe<Scalars["String"]["output"]>;
    mail?: Maybe<Scalars["String"]["output"]>;
    nivelatencion?: Maybe<Scalars["String"]["output"]>;
    nivelatencioncodigo?: Maybe<Scalars["Float"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    nombrecomercial?: Maybe<Scalars["String"]["output"]>;
    parroquiacodigo?: Maybe<Scalars["String"]["output"]>;
    parroquiadescripcion?: Maybe<Scalars["String"]["output"]>;
    provinciacodigo?: Maybe<Scalars["Float"]["output"]>;
    provinciadescripcion?: Maybe<Scalars["String"]["output"]>;
    recetaelectronica?: Maybe<Scalars["Float"]["output"]>;
    representantelegal?: Maybe<Scalars["String"]["output"]>;
    ruc?: Maybe<Scalars["String"]["output"]>;
    ruceod?: Maybe<Scalars["String"]["output"]>;
    telefono?: Maybe<Scalars["String"]["output"]>;
    telefonorep?: Maybe<Scalars["String"]["output"]>;
    tipoatencion?: Maybe<Scalars["String"]["output"]>;
    tipoentidad?: Maybe<Scalars["String"]["output"]>;
    tipoentidadcodigo?: Maybe<Scalars["String"]["output"]>;
    tipoestablecimiento?: Maybe<Scalars["Float"]["output"]>;
    tipologia?: Maybe<Scalars["String"]["output"]>;
    tipologiacodigo?: Maybe<Scalars["Float"]["output"]>;
    tipoparroquia?: Maybe<Scalars["String"]["output"]>;
    tundescripcion?: Maybe<Scalars["String"]["output"]>;
    unicodigo?: Maybe<Scalars["String"]["output"]>;
    zonacodigo?: Maybe<Scalars["String"]["output"]>;
    zonadescripcion?: Maybe<Scalars["String"]["output"]>;
    zonadistribucion?: Maybe<Scalars["String"]["output"]>;
};

export type EntidadIngreso = {
    __typename?: "EntidadIngreso";
    id: Scalars["Int"]["output"];
    nombre: Scalars["String"]["output"];
    unicodigo: Scalars["String"]["output"];
};

export type EntidadReporte = {
    __typename?: "EntidadReporte";
    id: Scalars["Int"]["output"];
    nombre?: Maybe<Scalars["String"]["output"]>;
    unicodigo?: Maybe<Scalars["String"]["output"]>;
};

export type EntidadSolicitud = {
    __typename?: "EntidadSolicitud";
    actividad_principal?: Maybe<Scalars["String"]["output"]>;
    are_codigo?: Maybe<Scalars["String"]["output"]>;
    are_descripcion?: Maybe<Scalars["String"]["output"]>;
    barrio?: Maybe<Scalars["String"]["output"]>;
    can_codigo?: Maybe<Scalars["String"]["output"]>;
    can_descripcion?: Maybe<Scalars["String"]["output"]>;
    ced_indent_rep_legal?: Maybe<Scalars["String"]["output"]>;
    cir_codigo?: Maybe<Scalars["String"]["output"]>;
    ciudad?: Maybe<Scalars["String"]["output"]>;
    cod_ciudad?: Maybe<Scalars["Float"]["output"]>;
    cod_distrito_ua?: Maybe<Scalars["String"]["output"]>;
    cod_ent_padre?: Maybe<Scalars["Float"]["output"]>;
    cod_nivel_atencion?: Maybe<Scalars["Float"]["output"]>;
    cod_tipo_entidad?: Maybe<Scalars["Float"]["output"]>;
    cod_tipologia?: Maybe<Scalars["Float"]["output"]>;
    dificilacceso?: Maybe<Scalars["String"]["output"]>;
    direcc_referencia?: Maybe<Scalars["String"]["output"]>;
    dis_codigo?: Maybe<Scalars["String"]["output"]>;
    dis_descripcion?: Maybe<Scalars["String"]["output"]>;
    distribucion_ua?: Maybe<Scalars["String"]["output"]>;
    eod?: Maybe<Scalars["String"]["output"]>;
    esigef?: Maybe<Scalars["Float"]["output"]>;
    establecimiento?: Maybe<Scalars["String"]["output"]>;
    establecimientopadre?: Maybe<Scalars["String"]["output"]>;
    estado?: Maybe<Scalars["String"]["output"]>;
    hau_descripcion?: Maybe<Scalars["String"]["output"]>;
    horario?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["Int"]["output"];
    igu_descripcion?: Maybe<Scalars["String"]["output"]>;
    mail?: Maybe<Scalars["String"]["output"]>;
    nivel_antencion?: Maybe<Scalars["String"]["output"]>;
    nombre_comercial?: Maybe<Scalars["String"]["output"]>;
    nun_descripcion?: Maybe<Scalars["String"]["output"]>;
    pag_web?: Maybe<Scalars["String"]["output"]>;
    par_codigo?: Maybe<Scalars["String"]["output"]>;
    par_descripcion: Scalars["String"]["output"];
    prv_codigo?: Maybe<Scalars["String"]["output"]>;
    prv_descripcion?: Maybe<Scalars["String"]["output"]>;
    represen_legal?: Maybe<Scalars["String"]["output"]>;
    ruc?: Maybe<Scalars["String"]["output"]>;
    ruc_eod?: Maybe<Scalars["String"]["output"]>;
    sectorestablecimiento?: Maybe<Scalars["String"]["output"]>;
    tipo_atencion?: Maybe<Scalars["String"]["output"]>;
    tipo_entidad?: Maybe<Scalars["String"]["output"]>;
    tipo_establecimiento?: Maybe<Scalars["Float"]["output"]>;
    tipo_origen?: Maybe<Scalars["String"]["output"]>;
    tipo_parroquia?: Maybe<Scalars["String"]["output"]>;
    tipologia?: Maybe<Scalars["String"]["output"]>;
    tlf_movil?: Maybe<Scalars["String"]["output"]>;
    tun_descripcion?: Maybe<Scalars["String"]["output"]>;
    uni_codigo?: Maybe<Scalars["String"]["output"]>;
    uni_direccion?: Maybe<Scalars["String"]["output"]>;
    uni_jefatu_descr?: Maybe<Scalars["String"]["output"]>;
    uni_jefatura_area?: Maybe<Scalars["Float"]["output"]>;
    uni_nombre?: Maybe<Scalars["String"]["output"]>;
    uni_telefono?: Maybe<Scalars["String"]["output"]>;
    zon_codigo?: Maybe<Scalars["String"]["output"]>;
    zon_descripcion?: Maybe<Scalars["String"]["output"]>;
    zon_distribucion?: Maybe<Scalars["String"]["output"]>;
    zonadefrontera?: Maybe<Scalars["String"]["output"]>;
};

export type EntidadStock = {
    __typename?: "EntidadStock";
    cantoncodigo?: Maybe<Scalars["String"]["output"]>;
    cantondescripcion?: Maybe<Scalars["String"]["output"]>;
    cedularepresentante?: Maybe<Scalars["String"]["output"]>;
    direccion?: Maybe<Scalars["String"]["output"]>;
    direccionreferencia?: Maybe<Scalars["String"]["output"]>;
    distritocodigo: Scalars["String"]["output"];
    distritodescripcion?: Maybe<Scalars["String"]["output"]>;
    entidadpadre?: Maybe<Scalars["String"]["output"]>;
    entidadpadrecodigo?: Maybe<Scalars["Float"]["output"]>;
    eod?: Maybe<Scalars["Float"]["output"]>;
    esigef?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["Int"]["output"];
    igudescripcion?: Maybe<Scalars["String"]["output"]>;
    mail?: Maybe<Scalars["String"]["output"]>;
    nivelatencion?: Maybe<Scalars["String"]["output"]>;
    nivelatencioncodigo?: Maybe<Scalars["Float"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    nombrecomercial?: Maybe<Scalars["String"]["output"]>;
    parroquiacodigo?: Maybe<Scalars["String"]["output"]>;
    parroquiadescripcion?: Maybe<Scalars["String"]["output"]>;
    provinciacodigo?: Maybe<Scalars["Float"]["output"]>;
    provinciadescripcion?: Maybe<Scalars["String"]["output"]>;
    representantelegal?: Maybe<Scalars["String"]["output"]>;
    ruc?: Maybe<Scalars["String"]["output"]>;
    ruceod?: Maybe<Scalars["String"]["output"]>;
    telefono?: Maybe<Scalars["String"]["output"]>;
    telefonorep?: Maybe<Scalars["String"]["output"]>;
    tipoatencion?: Maybe<Scalars["String"]["output"]>;
    tipoentidad?: Maybe<Scalars["String"]["output"]>;
    tipoentidadcodigo?: Maybe<Scalars["String"]["output"]>;
    tipoestablecimiento?: Maybe<Scalars["Float"]["output"]>;
    tipologia?: Maybe<Scalars["String"]["output"]>;
    tipologiacodigo?: Maybe<Scalars["Float"]["output"]>;
    tipoparroquia?: Maybe<Scalars["String"]["output"]>;
    tundescripcion?: Maybe<Scalars["String"]["output"]>;
    unicodigo?: Maybe<Scalars["String"]["output"]>;
    zonacodigo?: Maybe<Scalars["String"]["output"]>;
    zonadescripcion?: Maybe<Scalars["String"]["output"]>;
    zonadistribucion?: Maybe<Scalars["String"]["output"]>;
};

export type EntidadUpdateInput = {
    eod?: InputMaybe<Scalars["Int"]["input"]>;
    esigef?: InputMaybe<Scalars["Int"]["input"]>;
    id: Scalars["Int"]["input"];
    ruceod?: InputMaybe<Scalars["String"]["input"]>;
};

export type EsbyeIngresoCollectionType = {
    __typename?: "EsbyeIngresoCollectionType";
    data?: Maybe<Array<EsbyeInreso>>;
    pageInfo?: Maybe<PageInfo>;
};

export type EsbyeIngresoFilterInput = {
    descripcion?: InputMaybe<StringWhereInput>;
};

export type EsbyeInreso = {
    __typename?: "EsbyeInreso";
    acta?: Maybe<Scalars["Int"]["output"]>;
    cantidad?: Maybe<Scalars["Int"]["output"]>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    entidad?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    producto?: Maybe<Scalars["String"]["output"]>;
    unidaddesconcentrada?: Maybe<Scalars["Int"]["output"]>;
    unidadejecutora?: Maybe<Scalars["Int"]["output"]>;
    valortotal?: Maybe<Scalars["Float"]["output"]>;
};

export type EsbyeSubCuenta2 = {
    __typename?: "EsbyeSubCuenta2";
    cta?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type EsbyeSubCuenta2CollectionType = {
    __typename?: "EsbyeSubCuenta2CollectionType";
    data?: Maybe<Array<EsbyeSubCuenta2>>;
    pageInfo?: Maybe<PageInfo>;
};

export type EsbyeSubCuenta2FilterInput = {
    cta?: InputMaybe<NumberWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type FichaAdministracion = {
    __typename?: "FichaAdministracion";
    activo?: Maybe<Scalars["Int"]["output"]>;
    altoriesto: Scalars["Float"]["output"];
    antimicrobiano: Scalars["Float"]["output"];
    aph: Scalars["Float"]["output"];
    atc?: Maybe<AtcAdministracion>;
    atc_id?: Maybe<Scalars["Float"]["output"]>;
    biologico: Scalars["Float"]["output"];
    cnmb?: Maybe<Scalars["Float"]["output"]>;
    codigo: Scalars["String"]["output"];
    concentracion?: Maybe<ConcentracionAdministracion>;
    concentracion_id?: Maybe<Scalars["Float"]["output"]>;
    cttipoficha?: Maybe<CatalogoDetalleAdministracion>;
    cttipoficha_id: Scalars["Float"]["output"];
    especialidad?: Maybe<Scalars["String"]["output"]>;
    especificaciontecnica?: Maybe<Scalars["String"]["output"]>;
    estupefaciente: Scalars["Float"]["output"];
    fiscalizacion: Scalars["Float"]["output"];
    formafarmaceutica?: Maybe<FormaFarmaceuticaAdministracion>;
    formafarmaceutica_id?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["Int"]["output"];
    lac1: Scalars["Float"]["output"];
    lac2: Scalars["Float"]["output"];
    lac3: Scalars["Float"]["output"];
    nivel1: Scalars["Float"]["output"];
    nivel2: Scalars["Float"]["output"];
    nivel3: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
    presentacioncomercial?: Maybe<PresentacionComercialAdministracion>;
    presentacioncomercial_id?: Maybe<Scalars["Float"]["output"]>;
    psicotropico: Scalars["Float"]["output"];
    sincroniza: Scalars["Float"]["output"];
    sinonimo?: Maybe<Scalars["String"]["output"]>;
    tipoa?: Maybe<Scalars["Float"]["output"]>;
    tipob: Scalars["Float"]["output"];
    tipoc: Scalars["Float"]["output"];
};

export type FichaCollectionType = {
    __typename?: "FichaCollectionType";
    data?: Maybe<Array<FichaAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type FichaFilterInput = {
    codigo?: InputMaybe<StringWhereInput>;
    cttipoficha_id?: InputMaybe<RelationsWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type FichaStock = {
    __typename?: "FichaStock";
    activo?: Maybe<Scalars["Int"]["output"]>;
    altoriesto: Scalars["Float"]["output"];
    antimicrobiano: Scalars["Float"]["output"];
    aph: Scalars["Float"]["output"];
    atc?: Maybe<AtcStock>;
    atc_id?: Maybe<Scalars["Float"]["output"]>;
    biologico: Scalars["Float"]["output"];
    cnmb?: Maybe<Scalars["Float"]["output"]>;
    codigo: Scalars["String"]["output"];
    concentracion?: Maybe<ConcentracionStock>;
    concentracion_id?: Maybe<Scalars["Float"]["output"]>;
    cttipoficha?: Maybe<CatalogoDetalleStock>;
    cttipoficha_id: Scalars["Float"]["output"];
    especialidad?: Maybe<Scalars["String"]["output"]>;
    especificaciontecnica?: Maybe<Scalars["String"]["output"]>;
    estupefaciente: Scalars["Float"]["output"];
    fiscalizacion: Scalars["Float"]["output"];
    formafarmaceutica?: Maybe<FormaFarmaceuticaStock>;
    formafarmaceutica_id?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["Int"]["output"];
    lac1: Scalars["Float"]["output"];
    lac2: Scalars["Float"]["output"];
    lac3: Scalars["Float"]["output"];
    nivel1: Scalars["Float"]["output"];
    nivel2: Scalars["Float"]["output"];
    nivel3: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
    presentacioncomercial?: Maybe<PresentacionComercialStock>;
    presentacioncomercial_id?: Maybe<Scalars["Float"]["output"]>;
    psicotropico: Scalars["Float"]["output"];
    sincroniza: Scalars["Float"]["output"];
    sinonimo?: Maybe<Scalars["String"]["output"]>;
    tipoa?: Maybe<Scalars["Float"]["output"]>;
    tipob: Scalars["Float"]["output"];
    tipoc: Scalars["Float"]["output"];
};

export type FormaEspecifica = {
    __typename?: "FormaEspecifica";
    activo?: Maybe<Scalars["Int"]["output"]>;
    formaFarmaceutica?: Maybe<FormaFarmaceutica>;
    formafarmaceutica_id?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type FormaEspecificaCollectionType = {
    __typename?: "FormaEspecificaCollectionType";
    data?: Maybe<Array<FormaEspecifica>>;
    pageInfo?: Maybe<PageInfo>;
};

export type FormaEspecificaFilterInput = {
    activo?: InputMaybe<StateWhereInput>;
    formafarmaceutica_id?: InputMaybe<NumberWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type FormaEspedificaAdministracion = {
    __typename?: "FormaEspedificaAdministracion";
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type FormaEspedificaStock = {
    __typename?: "FormaEspedificaStock";
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type FormaFarmaceutica = {
    __typename?: "FormaFarmaceutica";
    abreviatura?: Maybe<Scalars["String"]["output"]>;
    activo?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type FormaFarmaceuticaAdministracion = {
    __typename?: "FormaFarmaceuticaAdministracion";
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type FormaFarmaceuticaStock = {
    __typename?: "FormaFarmaceuticaStock";
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type GrupoBodegaAdministracion = {
    __typename?: "GrupoBodegaAdministracion";
    abastecimiento?: Maybe<Scalars["Int"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type GrupoBodegaCollectionType = {
    __typename?: "GrupoBodegaCollectionType";
    data?: Maybe<Array<GrupoBodegaAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type GrupoBodegaDelete = {
    __typename?: "GrupoBodegaDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type GrupoBodegaFilterInput = {
    abastecimiento?: InputMaybe<NumberWhereInput>;
    estado?: InputMaybe<NumberWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type GrupoBodegaInput = {
    abastecimiento?: InputMaybe<Scalars["Int"]["input"]>;
    nombre?: InputMaybe<Scalars["String"]["input"]>;
};

export type GrupoBodegaStock = {
    __typename?: "GrupoBodegaStock";
    estado?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type GrupoBodegaUpdateInput = {
    abastecimiento?: InputMaybe<Scalars["Int"]["input"]>;
    estado?: InputMaybe<Scalars["Int"]["input"]>;
    id: Scalars["Int"]["input"];
    nombre?: InputMaybe<Scalars["String"]["input"]>;
};

export type Ingreso = {
    __typename?: "Ingreso";
    bodegadestino?: Maybe<BodegaIngreso>;
    bodegadestino_id?: Maybe<Scalars["Float"]["output"]>;
    bodegaorigen?: Maybe<BodegaIngreso>;
    cedula?: Maybe<Scalars["String"]["output"]>;
    colaborador_id?: Maybe<Scalars["Float"]["output"]>;
    ctdocumentorespaldo?: Maybe<CatalogoDetalleIngreso>;
    ctdocumentorespaldo_id?: Maybe<Scalars["Float"]["output"]>;
    ctestado?: Maybe<CatalogoDetalleIngreso>;
    ctestado_id?: Maybe<Scalars["Float"]["output"]>;
    ctorigengasto?: Maybe<CatalogoDetalleIngreso>;
    ctorigengasto_id?: Maybe<Scalars["Float"]["output"]>;
    docreferencia?: Maybe<Scalars["String"]["output"]>;
    docreferenciaid?: Maybe<Scalars["Float"]["output"]>;
    documentoadicional?: Maybe<Scalars["String"]["output"]>;
    ejercicio?: Maybe<Scalars["Float"]["output"]>;
    entidaddestino?: Maybe<EntidadIngreso>;
    entidaddestino_id?: Maybe<Scalars["Float"]["output"]>;
    entidadorigen?: Maybe<EntidadIngreso>;
    fechacreacion?: Maybe<Scalars["DateScalar"]["output"]>;
    fechadocumento?: Maybe<Scalars["DateScalar"]["output"]>;
    fechaingreso?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    ingresodetalle?: Maybe<Array<IngresoDetalle>>;
    numerodocumento?: Maybe<Scalars["String"]["output"]>;
    numerotransaccion?: Maybe<Scalars["String"]["output"]>;
    observacion?: Maybe<Scalars["String"]["output"]>;
    periodo?: Maybe<Scalars["Float"]["output"]>;
    proveedor?: Maybe<ProveedorIngreso>;
    representante?: Maybe<Scalars["String"]["output"]>;
    tipodocumento?: Maybe<TipoDocumentoIngreso>;
    tipodocumento_id?: Maybe<Scalars["Float"]["output"]>;
    tipotransaccion?: Maybe<TipoTransaccionIngreso>;
    tipotransaccion_id?: Maybe<Scalars["Float"]["output"]>;
    total?: Maybe<Scalars["Float"]["output"]>;
    usuario?: Maybe<UsuarioAIngreso>;
};

export type IngresoCollectionType = {
    __typename?: "IngresoCollectionType";
    data?: Maybe<Array<IngresoForCollection>>;
    pageInfo?: Maybe<PageInfo>;
};

export type IngresoCreateInput = {
    bodegadestino_id: Scalars["Int"]["input"];
    bodegaorigen_id?: InputMaybe<Scalars["Float"]["input"]>;
    cedula?: InputMaybe<Scalars["String"]["input"]>;
    colaborador_id?: InputMaybe<Scalars["Float"]["input"]>;
    ctdocumentorespaldo_id?: InputMaybe<Scalars["Float"]["input"]>;
    ctestado_id: Scalars["Int"]["input"];
    ctorigengasto_id?: InputMaybe<Scalars["Float"]["input"]>;
    docreferencia?: InputMaybe<Scalars["String"]["input"]>;
    docreferenciaid?: InputMaybe<Scalars["Float"]["input"]>;
    documentoadicional?: InputMaybe<Scalars["String"]["input"]>;
    ejercicio?: InputMaybe<Scalars["Float"]["input"]>;
    entidaddestino_id: Scalars["Int"]["input"];
    entidadorigen_id?: InputMaybe<Scalars["Float"]["input"]>;
    fechadocumento?: InputMaybe<Scalars["String"]["input"]>;
    fechaingreso?: InputMaybe<Scalars["String"]["input"]>;
    ingresodetalle: Array<IngresoDetalleCreateInput>;
    numerodocumento?: InputMaybe<Scalars["String"]["input"]>;
    observacion?: InputMaybe<Scalars["String"]["input"]>;
    periodo: Scalars["Float"]["input"];
    representante?: InputMaybe<Scalars["String"]["input"]>;
    tipodocumento_id?: InputMaybe<Scalars["Float"]["input"]>;
    tipotransaccion_id: Scalars["Int"]["input"];
    total: Scalars["Float"]["input"];
};

export type IngresoDelete = {
    __typename?: "IngresoDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type IngresoDetalle = {
    __typename?: "IngresoDetalle";
    cantidad?: Maybe<Scalars["Float"]["output"]>;
    cantidadrequerida?: Maybe<Scalars["Float"]["output"]>;
    costo?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    ingreso?: Maybe<Ingreso>;
    lote?: Maybe<LoteIngreso>;
    producto?: Maybe<ProductoIngreso>;
    producto_id?: Maybe<Scalars["Float"]["output"]>;
    registrosanitario?: Maybe<RegistroSanitarioIngreso>;
    registrosanitario_id?: Maybe<Scalars["Float"]["output"]>;
    total?: Maybe<Scalars["Float"]["output"]>;
    unidadmedida?: Maybe<UnidadMedidaIngreso>;
    unidadmedida_id?: Maybe<Scalars["Float"]["output"]>;
};

export type IngresoDetalleCollectionType = {
    __typename?: "IngresoDetalleCollectionType";
    data?: Maybe<Array<IngresoDetalle>>;
    pageInfo?: Maybe<PageInfo>;
};

export type IngresoDetalleCreateInput = {
    cantidad: Scalars["Float"]["input"];
    cantidadrequerida?: InputMaybe<Scalars["Float"]["input"]>;
    costo: Scalars["Float"]["input"];
    lote_id?: InputMaybe<Scalars["Float"]["input"]>;
    producto_id: Scalars["Float"]["input"];
    registrosanitario_id?: InputMaybe<Scalars["Float"]["input"]>;
    total: Scalars["Float"]["input"];
    unidadmedida_id?: InputMaybe<Scalars["Float"]["input"]>;
};

export type IngresoDetalleFilterInput = {
    cantidad?: InputMaybe<NumberWhereInput>;
    cantidadrequerida?: InputMaybe<RelationsWhereInput>;
    costo?: InputMaybe<NumberWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    ingreso_id?: InputMaybe<RelationsWhereInput>;
    producto?: InputMaybe<ProductoIngresoDetalleFilterInput>;
    producto_id?: InputMaybe<RelationsWhereInput>;
    total?: InputMaybe<NumberWhereInput>;
};

export type IngresoDetalleUpdateInput = {
    cantidad?: InputMaybe<Scalars["Float"]["input"]>;
    cantidadrequerida?: InputMaybe<Scalars["Float"]["input"]>;
    costo?: InputMaybe<Scalars["Float"]["input"]>;
    id: Scalars["Float"]["input"];
    ingreso_id: Scalars["Float"]["input"];
    lote_id?: InputMaybe<Scalars["Float"]["input"]>;
    producto_id?: InputMaybe<Scalars["Float"]["input"]>;
    registrosanitario_id?: InputMaybe<Scalars["Float"]["input"]>;
    total?: InputMaybe<Scalars["Float"]["input"]>;
    unidadmedida_id?: InputMaybe<Scalars["Float"]["input"]>;
};

export type IngresoFilterInput = {
    bodegadestino?: InputMaybe<BodegaIngresoFilterInput>;
    bodegadestino_id?: InputMaybe<RelationsWhereInput>;
    bodegaorigen_id?: InputMaybe<RelationsWhereInput>;
    ctestado_id?: InputMaybe<RelationsWhereInput>;
    cttipobodega_id?: InputMaybe<RelationsWhereInput>;
    ejercicio?: InputMaybe<NumberWhereInput>;
    entidaddestino_id?: InputMaybe<RelationsWhereInput>;
    entidadorigen_id?: InputMaybe<RelationsWhereInput>;
    fechacreacion?: InputMaybe<DateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    numerodocumento?: InputMaybe<StringWhereInput>;
    numerotransaccion?: InputMaybe<StringWhereInput>;
    periodo?: InputMaybe<NumberWhereInput>;
    proveedor?: InputMaybe<ProveedorIngresosFilterInput>;
    tipotransaccion?: InputMaybe<TipoTransaccionIngresoFilterInput>;
    tipotransaccion_id?: InputMaybe<NumberWhereInput>;
    usuariocreacion?: InputMaybe<UsuarioIngresoFilterInput>;
};

export type IngresoForCollection = {
    __typename?: "IngresoForCollection";
    bodegadestino?: Maybe<BodegaIngreso>;
    bodegadestino_id?: Maybe<Scalars["Float"]["output"]>;
    cedula?: Maybe<Scalars["String"]["output"]>;
    colaborador_id?: Maybe<Scalars["Float"]["output"]>;
    ctdocumentorespaldo?: Maybe<CatalogoDetalleIngreso>;
    ctdocumentorespaldo_id?: Maybe<Scalars["Float"]["output"]>;
    ctestado?: Maybe<CatalogoDetalleIngreso>;
    ctestado_id?: Maybe<Scalars["Float"]["output"]>;
    ctorigengasto?: Maybe<CatalogoDetalleIngreso>;
    ctorigengasto_id?: Maybe<Scalars["Float"]["output"]>;
    docreferencia?: Maybe<Scalars["String"]["output"]>;
    docreferenciaid?: Maybe<Scalars["Float"]["output"]>;
    documentoadicional?: Maybe<Scalars["String"]["output"]>;
    ejercicio?: Maybe<Scalars["Float"]["output"]>;
    entidaddestino?: Maybe<EntidadIngreso>;
    entidaddestino_id?: Maybe<Scalars["Float"]["output"]>;
    entidadorigen?: Maybe<EntidadIngreso>;
    fechacreacion?: Maybe<Scalars["DateScalar"]["output"]>;
    fechadocumento?: Maybe<Scalars["DateScalar"]["output"]>;
    fechaingreso?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    numerodocumento?: Maybe<Scalars["String"]["output"]>;
    numerotransaccion?: Maybe<Scalars["String"]["output"]>;
    observacion?: Maybe<Scalars["String"]["output"]>;
    periodo?: Maybe<Scalars["Float"]["output"]>;
    proveedor?: Maybe<ProveedorIngreso>;
    representante?: Maybe<Scalars["String"]["output"]>;
    tipodocumento?: Maybe<TipoDocumentoIngreso>;
    tipodocumento_id?: Maybe<Scalars["Float"]["output"]>;
    tipotransaccion?: Maybe<TipoTransaccionIngreso>;
    tipotransaccion_id?: Maybe<Scalars["Float"]["output"]>;
    total?: Maybe<Scalars["Float"]["output"]>;
    usuario?: Maybe<UsuarioAIngreso>;
};

export type IngresoUpdateInput = {
    bodegadestino_id?: InputMaybe<Scalars["Int"]["input"]>;
    bodegaorigen_id?: InputMaybe<Scalars["Float"]["input"]>;
    cedula?: InputMaybe<Scalars["String"]["input"]>;
    colaborador_id?: InputMaybe<Scalars["Float"]["input"]>;
    ctdocumentorespaldo_id?: InputMaybe<Scalars["Float"]["input"]>;
    ctestado_id: Scalars["Int"]["input"];
    ctorigengasto_id?: InputMaybe<Scalars["Float"]["input"]>;
    documentoadicional?: InputMaybe<Scalars["String"]["input"]>;
    ejercicio?: InputMaybe<Scalars["Float"]["input"]>;
    entidaddestino_id?: InputMaybe<Scalars["Float"]["input"]>;
    entidadorigen_id?: InputMaybe<Scalars["Float"]["input"]>;
    fechadocumento?: InputMaybe<Scalars["String"]["input"]>;
    fechaingreso?: InputMaybe<Scalars["String"]["input"]>;
    id: Scalars["Int"]["input"];
    numerodocumento?: InputMaybe<Scalars["String"]["input"]>;
    observacion?: InputMaybe<Scalars["String"]["input"]>;
    periodo?: InputMaybe<Scalars["Float"]["input"]>;
    representante?: InputMaybe<Scalars["String"]["input"]>;
    tipodocumento_id?: InputMaybe<Scalars["Float"]["input"]>;
    tipotransaccion_id?: InputMaybe<Scalars["Float"]["input"]>;
    total?: InputMaybe<Scalars["Float"]["input"]>;
};

export type IngresoUpdateResult = {
    __typename?: "IngresoUpdateResult";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type IngresosDetallesCreateInput = {
    cantidad: Scalars["Float"]["input"];
    cantidadrequerida?: InputMaybe<Scalars["Float"]["input"]>;
    costo: Scalars["Float"]["input"];
    ingreso_id: Scalars["Float"]["input"];
    lote_id?: InputMaybe<Scalars["Float"]["input"]>;
    producto_id: Scalars["Float"]["input"];
    registrosanitario_id?: InputMaybe<Scalars["Float"]["input"]>;
    total: Scalars["Float"]["input"];
    unidadmedida_id?: InputMaybe<Scalars["Float"]["input"]>;
};

export type LaboratorioFabricante = {
    __typename?: "LaboratorioFabricante";
    estado?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    modificable?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type LaboratorioFabricanteCollectionType = {
    __typename?: "LaboratorioFabricanteCollectionType";
    data?: Maybe<Array<LaboratorioFabricante>>;
    pageInfo?: Maybe<PageInfo>;
};

export type LaboratorioFabricanteDelete = {
    __typename?: "LaboratorioFabricanteDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type LaboratorioFabricanteFilterInput = {
    estado?: InputMaybe<StateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type LaboratorioFabricanteIngreso = {
    __typename?: "LaboratorioFabricanteIngreso";
    estado?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type LaboratorioFabricanteInput = {
    nombre: Scalars["String"]["input"];
};

export type LaboratorioFabricanteUpdateInput = {
    estado?: InputMaybe<Scalars["Int"]["input"]>;
    id: Scalars["Int"]["input"];
    nombre?: InputMaybe<Scalars["String"]["input"]>;
};

export type Lote = {
    __typename?: "Lote";
    cantidad?: Maybe<Scalars["Float"]["output"]>;
    fechacaducidad?: Maybe<Scalars["DateScalar"]["output"]>;
    fechaelaboracion: Scalars["DateScalar"]["output"];
    id: Scalars["Int"]["output"];
    numerolote: Scalars["String"]["output"];
};

export type LoteAdministracion = {
    __typename?: "LoteAdministracion";
    cantidad?: Maybe<Scalars["Float"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    fechaalerta?: Maybe<Scalars["DateScalar"]["output"]>;
    fechabloqueo?: Maybe<Scalars["DateScalar"]["output"]>;
    fechacaducidad?: Maybe<Scalars["DateScalar"]["output"]>;
    fechacanje?: Maybe<Scalars["DateScalar"]["output"]>;
    fechaelaboracion?: Maybe<Scalars["DateScalar"]["output"]>;
    id: Scalars["Int"]["output"];
    numerolote: Scalars["String"]["output"];
    observacion?: Maybe<Scalars["String"]["output"]>;
    producto?: Maybe<ProductoAdministracion>;
    producto_id: Scalars["Float"]["output"];
};

export type LoteCollectionType = {
    __typename?: "LoteCollectionType";
    data?: Maybe<Array<LoteAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type LoteCreateInput = {
    fechacaducidad?: InputMaybe<Scalars["DateTime"]["input"]>;
    fechaelaboracion: Scalars["DateTime"]["input"];
    numerolote: Scalars["String"]["input"];
    observacion?: InputMaybe<Scalars["String"]["input"]>;
    producto_id: Scalars["Float"]["input"];
};

export type LoteDelete = {
    __typename?: "LoteDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type LoteEgreso = {
    __typename?: "LoteEgreso";
    fechacaducidad?: Maybe<Scalars["String"]["output"]>;
    fechaelaboracion: Scalars["String"]["output"];
    id: Scalars["Int"]["output"];
    numerolote: Scalars["String"]["output"];
};

export type LoteFilterInput = {
    estado?: InputMaybe<StateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    numerolote?: InputMaybe<StringWhereInput>;
    producto?: InputMaybe<ProductoFilterInput>;
    producto_id?: InputMaybe<NumberWhereInput>;
};

export type LoteIngreso = {
    __typename?: "LoteIngreso";
    cantidad?: Maybe<Scalars["Float"]["output"]>;
    fechacaducidad?: Maybe<Scalars["DateScalar"]["output"]>;
    fechaelaboracion?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    numerolote?: Maybe<Scalars["String"]["output"]>;
};

export type LoteReporte = {
    __typename?: "LoteReporte";
    ctestadolote?: Maybe<CatalogoDetalleReporte>;
    fechaalerta?: Maybe<Scalars["DateScalar"]["output"]>;
    fechabloqueo?: Maybe<Scalars["DateScalar"]["output"]>;
    fechacaducidad?: Maybe<Scalars["DateScalar"]["output"]>;
    fechacanje?: Maybe<Scalars["DateScalar"]["output"]>;
    fechaelaboracion?: Maybe<Scalars["DateScalar"]["output"]>;
    id: Scalars["Int"]["output"];
    numerolote: Scalars["String"]["output"];
    semaforo?: Maybe<Scalars["String"]["output"]>;
};

export type LoteStock = {
    __typename?: "LoteStock";
    cantidad?: Maybe<Scalars["Float"]["output"]>;
    ctestadolote_id?: Maybe<Scalars["Int"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    fechaalerta?: Maybe<Scalars["DateScalar"]["output"]>;
    fechabloqueo?: Maybe<Scalars["DateScalar"]["output"]>;
    fechacaducidad?: Maybe<Scalars["DateScalar"]["output"]>;
    fechacanje?: Maybe<Scalars["DateScalar"]["output"]>;
    fechaelaboracion?: Maybe<Scalars["DateScalar"]["output"]>;
    id: Scalars["Int"]["output"];
    numerolote: Scalars["String"]["output"];
    observacion?: Maybe<Scalars["String"]["output"]>;
    producto?: Maybe<ProductoStock>;
    producto_id: Scalars["Float"]["output"];
};

export type LoteTransaccionFilterInput = {
    ctestadolote_id?: InputMaybe<NumberWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    fechacaducidad?: InputMaybe<DateWhereInput>;
    fechaelaboracion?: InputMaybe<DateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    numerolote?: InputMaybe<StringWhereInput>;
    producto?: InputMaybe<ProductoSbFilterInput>;
    producto_id?: InputMaybe<NumberWhereInput>;
};

export type LoteUpdateInput = {
    estado?: InputMaybe<Scalars["Int"]["input"]>;
    fechacaducidad?: InputMaybe<Scalars["DateTime"]["input"]>;
    fechaelaboracion?: InputMaybe<Scalars["DateTime"]["input"]>;
    id: Scalars["Int"]["input"];
    numerolote?: InputMaybe<Scalars["String"]["input"]>;
    observacion?: InputMaybe<Scalars["String"]["input"]>;
    producto_id?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Mutation = {
    __typename?: "Mutation";
    agendaCreate?: Maybe<Agenda>;
    agendaDelete?: Maybe<AgendaResult>;
    agendaUpdate?: Maybe<Agenda>;
    bodegaCreate?: Maybe<BodegaAdministracion>;
    bodegaDelete: BodegaDelete;
    bodegaTipotransaccionCreate?: Maybe<BodegaTipotransaccionAdministracion>;
    bodegaTipotransaccionDelete: BodegaTipotransaccionDelete;
    bodegaTipotransaccionUpdate?: Maybe<BodegaTipotransaccionAdministracion>;
    bodegaUpdate?: Maybe<BodegaAdministracion>;
    categoriaCreate?: Maybe<Categoria>;
    categoriaDelete: CategoriaDelete;
    categoriaUpdate?: Maybe<Categoria>;
    configuraCodigoBarraCreate?: Maybe<ConfiguraCodigoBarra>;
    configuraCodigoBarraDelete: ConfiguraCodigoBarraDelete;
    configuraCodigoBarraUpdate?: Maybe<ConfiguraCodigoBarra>;
    despachoCreate?: Maybe<DespachoResult>;
    egresoCreate?: Maybe<Egreso>;
    egresoDelete?: Maybe<EgresoResult>;
    egresoDetalleCreate?: Maybe<EgresoDetalle>;
    egresoDetalleDelete?: Maybe<EgresoResult>;
    egresoDetalleUpdate?: Maybe<EgresoDetalle>;
    egresoUpdate?: Maybe<Egreso>;
    egresoUpdateState?: Maybe<EgresoResult>;
    entidadDelete: EntidadDelete;
    entidadUpdate?: Maybe<EntidadAdministracion>;
    grupoBodegaCreate?: Maybe<GrupoBodegaAdministracion>;
    grupoBodegaDelete: GrupoBodegaDelete;
    grupoBodegaUpdate?: Maybe<GrupoBodegaAdministracion>;
    ingresoCreate?: Maybe<Ingreso>;
    ingresoDelete?: Maybe<IngresoDelete>;
    ingresoDetalleCreate?: Maybe<IngresoDetalle>;
    ingresoDetalleDelete?: Maybe<IngresoDelete>;
    ingresoDetalleUpdate?: Maybe<IngresoDetalle>;
    ingresoUpdate?: Maybe<Ingreso>;
    ingresoUpdateState?: Maybe<IngresoUpdateResult>;
    laboratorioFabricanteCreate?: Maybe<LaboratorioFabricante>;
    laboratorioFabricanteDelete: LaboratorioFabricanteDelete;
    laboratorioFabricanteUpdate?: Maybe<LaboratorioFabricante>;
    loteCreate?: Maybe<LoteAdministracion>;
    loteDelete: LoteDelete;
    loteUpdate?: Maybe<LoteAdministracion>;
    productoBodegaUpdate?: Maybe<ProductoBodegaUpdate>;
    productoCreate?: Maybe<ProductoAdministracion>;
    productoDelete: ProductoDelete;
    productoEntidadDelete: ProductoEntidadDelete;
    productoEntidadUpdate?: Maybe<ProductoEntidadDelete>;
    productoPorBodegaUpdate?: Maybe<ProductoBodegaUpdate>;
    productoUpdate?: Maybe<ProductoAdministracion>;
    proveedorCreate?: Maybe<ProveedorAdministracion>;
    proveedorDelete?: Maybe<ProveedorDelete>;
    proveedorUpdate?: Maybe<ProveedorAdministracion>;
    registroSanitarioCreate?: Maybe<RegistroSanitarioIngreso>;
    registroSanitarioUpdate?: Maybe<RegistroSanitarioIngreso>;
    reglaAbastecimientoCreate?: Maybe<Array<ReglaAbastecimiento>>;
    solicitudCreate?: Maybe<Solicitud>;
    solicitudDelete?: Maybe<SolicitudDelete>;
    solicitudUpdate?: Maybe<Solicitud>;
    stockCargaInicialCreate?: Maybe<CargaInicialResult>;
    terminalCreate?: Maybe<Terminal>;
    terminalDelete?: Maybe<TerminalDelete>;
    terminalUpdate?: Maybe<Terminal>;
    tipoTransaccionCreate?: Maybe<TipoTransaccionAdministracion>;
    tipoTransaccionDelete: TipoTransaccionDelete;
    tipoTransaccionUpdate?: Maybe<TipoTransaccionAdministracion>;
    turnoClose?: Maybe<Turno>;
    turnoOpen?: Maybe<Turno>;
    unidadMedidaCreate?: Maybe<UnidadMedidaAdministracion>;
    unidadMedidaDelete: UnidadMedidaDelete;
    unidadMedidaUpdate?: Maybe<UnidadMedidaAdministracion>;
    usuarioBodegaAdmin?: Maybe<UsuarioBodegaDelete>;
    usuarioBodegaCreate?: Maybe<UsuarioBodegaAdministracion>;
    usuarioBodegaDelete: UsuarioBodegaDelete;
    usuarioBodegaUpdate?: Maybe<UsuarioBodegaAdministracion>;
};

export type MutationAgendaCreateArgs = {
    dataInput: AgendaCreateInput;
};

export type MutationAgendaDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationAgendaUpdateArgs = {
    dataInput: AgendaUpdateInput;
};

export type MutationBodegaCreateArgs = {
    dataInput: BodegaCreateInput;
};

export type MutationBodegaDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationBodegaTipotransaccionCreateArgs = {
    dataInput: BodegaTipotransaccionCreateInput;
};

export type MutationBodegaTipotransaccionDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationBodegaTipotransaccionUpdateArgs = {
    dataInput: BodegaTipotransaccionUpdateInput;
};

export type MutationBodegaUpdateArgs = {
    dataInput: BodegaUpdateInput;
};

export type MutationCategoriaCreateArgs = {
    dataInput: CategoriaInput;
};

export type MutationCategoriaDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationCategoriaUpdateArgs = {
    dataInput: CategoriaUpdateInput;
};

export type MutationConfiguraCodigoBarraCreateArgs = {
    dataInput: ConfiguraCodigoBarraInput;
};

export type MutationConfiguraCodigoBarraDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationConfiguraCodigoBarraUpdateArgs = {
    dataInput: ConfiguraCodigoBarraUpdateInput;
};

export type MutationDespachoCreateArgs = {
    dataInput: DespachoCreateInput;
};

export type MutationEgresoCreateArgs = {
    dataInput: EgresoCreateDetalleInput;
};

export type MutationEgresoDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationEgresoDetalleCreateArgs = {
    dataInput: EgresoDetallesCreateInput;
};

export type MutationEgresoDetalleDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationEgresoDetalleUpdateArgs = {
    dataInput: EgresoDetalleUpdateInput;
};

export type MutationEgresoUpdateArgs = {
    dataInput: EgresoUpdateInput;
};

export type MutationEgresoUpdateStateArgs = {
    ctestado_id: Scalars["Int"]["input"];
    id: Scalars["Int"]["input"];
};

export type MutationEntidadDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationEntidadUpdateArgs = {
    dataInput: EntidadUpdateInput;
};

export type MutationGrupoBodegaCreateArgs = {
    dataInput: GrupoBodegaInput;
};

export type MutationGrupoBodegaDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationGrupoBodegaUpdateArgs = {
    dataInput: GrupoBodegaUpdateInput;
};

export type MutationIngresoCreateArgs = {
    IngresoCreateInput: IngresoCreateInput;
};

export type MutationIngresoDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationIngresoDetalleCreateArgs = {
    dataInput: IngresosDetallesCreateInput;
};

export type MutationIngresoDetalleDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationIngresoDetalleUpdateArgs = {
    dataInput: IngresoDetalleUpdateInput;
};

export type MutationIngresoUpdateArgs = {
    dataInput: IngresoUpdateInput;
};

export type MutationIngresoUpdateStateArgs = {
    ctestado_id: Scalars["Int"]["input"];
    id: Scalars["Int"]["input"];
};

export type MutationLaboratorioFabricanteCreateArgs = {
    dataInput: LaboratorioFabricanteInput;
};

export type MutationLaboratorioFabricanteDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationLaboratorioFabricanteUpdateArgs = {
    dataInput: LaboratorioFabricanteUpdateInput;
};

export type MutationLoteCreateArgs = {
    dataInput: LoteCreateInput;
};

export type MutationLoteDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationLoteUpdateArgs = {
    dataInput: LoteUpdateInput;
};

export type MutationProductoBodegaUpdateArgs = {
    dataInput: ProductoBodegaCreateInput;
};

export type MutationProductoCreateArgs = {
    dataInput: ProductoCreateInput;
};

export type MutationProductoDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationProductoEntidadDeleteArgs = {
    entidad_id: Scalars["Int"]["input"];
    producto_id: Scalars["Int"]["input"];
};

export type MutationProductoEntidadUpdateArgs = {
    dataInput: ProductoEntidadCreateInput;
};

export type MutationProductoPorBodegaUpdateArgs = {
    dataInput: ProductoPorBodegaCreateInput;
};

export type MutationProductoUpdateArgs = {
    dataInput: ProductoUpdateInput;
};

export type MutationProveedorCreateArgs = {
    dataInput: ProveedorCreateInput;
};

export type MutationProveedorDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationProveedorUpdateArgs = {
    dataInput: ProveedorUpdateInput;
};

export type MutationRegistroSanitarioCreateArgs = {
    RegistroSanitarioCreateInput: RegistroSanitarioCreateInput;
};

export type MutationRegistroSanitarioUpdateArgs = {
    dataInput: RegistroSanitarioUpdateInput;
};

export type MutationReglaAbastecimientoCreateArgs = {
    dataInput: ReglaAbastecimientoCreateInput;
};

export type MutationSolicitudCreateArgs = {
    dataInput: SolicitudCreateInput;
};

export type MutationSolicitudDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationSolicitudUpdateArgs = {
    dataInput: SolicitudUpdateInput;
};

export type MutationStockCargaInicialCreateArgs = {
    dataInput: StockCargaIncialCreateInput;
};

export type MutationTerminalCreateArgs = {
    dataInput: TerminalCreateInput;
};

export type MutationTerminalDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationTerminalUpdateArgs = {
    dataInput: TerminalUpdateInput;
};

export type MutationTipoTransaccionCreateArgs = {
    dataInput: TipoTransaccionCreateInput;
};

export type MutationTipoTransaccionDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationTipoTransaccionUpdateArgs = {
    dataInput: TipoTransaccionUpdateInput;
};

export type MutationTurnoCloseArgs = {
    dataInput: TurnoCloseInput;
};

export type MutationTurnoOpenArgs = {
    dataInput: TurnoOpenInput;
};

export type MutationUnidadMedidaCreateArgs = {
    dataInput: UnidadMedidaInput;
};

export type MutationUnidadMedidaDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationUnidadMedidaUpdateArgs = {
    dataInput: UnidadMedidaUpdateInput;
};

export type MutationUsuarioBodegaAdminArgs = {
    dataInput: UsuariosBodegaAdminInput;
};

export type MutationUsuarioBodegaCreateArgs = {
    dataInput: UsuarioBodegaCreateInput;
};

export type MutationUsuarioBodegaDeleteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationUsuarioBodegaUpdateArgs = {
    dataInput: UsuarioBodegaUpdateInput;
};

/** Filtros para cuando los filtros son de tipo numero */
export type NumberWhereInput = {
    gt?: InputMaybe<Scalars["Float"]["input"]>;
    gte?: InputMaybe<Scalars["Float"]["input"]>;
    in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    is?: InputMaybe<Scalars["Float"]["input"]>;
    is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
    lt?: InputMaybe<Scalars["Float"]["input"]>;
    lte?: InputMaybe<Scalars["Float"]["input"]>;
    not?: InputMaybe<Scalars["Float"]["input"]>;
    not_in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type Paciente = {
    __typename?: "Paciente";
    cttipoidentificacion?: Maybe<CatalogoDetalle>;
    identificacion?: Maybe<Scalars["String"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type PacienteCollectionType = {
    __typename?: "PacienteCollectionType";
    data?: Maybe<Array<Paciente>>;
    pageInfo?: Maybe<PageInfo>;
};

export type PacienteEgresoInput = {
    cttipoidentificacion_id: Scalars["Int"]["input"];
    identificacion: Scalars["String"]["input"];
    nombre: Scalars["String"]["input"];
};

export type PacienteFilterInput = {
    ctclasecolaborador_id?: InputMaybe<RelationsWhereInput>;
    cttipoidentificacion_id?: InputMaybe<RelationsWhereInput>;
    identificacion?: InputMaybe<StringWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type PacienteInput = {
    cttipoidentificacion_id?: InputMaybe<Scalars["Int"]["input"]>;
    id?: InputMaybe<Scalars["Int"]["input"]>;
    identificacion?: InputMaybe<Scalars["String"]["input"]>;
    nombre?: InputMaybe<Scalars["String"]["input"]>;
};

export type PacienteReceta = {
    __typename?: "PacienteReceta";
    apellidos?: Maybe<Scalars["String"]["output"]>;
    fecha_nacimiento?: Maybe<Scalars["String"]["output"]>;
    identificacion?: Maybe<Scalars["String"]["output"]>;
    nombres?: Maybe<Scalars["String"]["output"]>;
    tipo_identificacion_id?: Maybe<Scalars["Float"]["output"]>;
};

export type PageInfo = {
    __typename?: "PageInfo";
    count?: Maybe<Scalars["Int"]["output"]>;
    hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
    hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>;
    limit?: Maybe<Scalars["Int"]["output"]>;
    offset?: Maybe<Scalars["Int"]["output"]>;
};

/** Ingresar por lo menos un campo, limit o offset */
export type PaginationInput = {
    /** Paginate limit */
    limit?: InputMaybe<Scalars["Float"]["input"]>;
    /** Paginate offset */
    offset?: InputMaybe<Scalars["Float"]["input"]>;
};

export type PresentacionComercialAdministracion = {
    __typename?: "PresentacionComercialAdministracion";
    descripcion?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
};

export type PresentacionComercialStock = {
    __typename?: "PresentacionComercialStock";
    descripcion?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
};

export type Producto = {
    __typename?: "Producto";
    codigoproducto: Scalars["String"]["output"];
    id: Scalars["Int"]["output"];
    manejalote?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    productostockbodega?: Maybe<ProductoStockBodega>;
    unidadmedidaproducto?: Maybe<UnidadMedida>;
};

export type ProductoAdministracion = {
    __typename?: "ProductoAdministracion";
    cadenafrio?: Maybe<Scalars["Float"]["output"]>;
    categoria?: Maybe<Categoria>;
    categoria_id?: Maybe<Scalars["Int"]["output"]>;
    codigobarras?: Maybe<Scalars["String"]["output"]>;
    codigoproducto?: Maybe<Scalars["String"]["output"]>;
    codigoreferencia?: Maybe<Scalars["String"]["output"]>;
    cttipoproducto?: Maybe<CatalogoDetalleAdministracion>;
    cttipoproducto_id?: Maybe<Scalars["Float"]["output"]>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    diasalertacaducidad?: Maybe<Scalars["Int"]["output"]>;
    diascanje?: Maybe<Scalars["Int"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    ficha?: Maybe<FichaAdministracion>;
    ficha_id?: Maybe<Scalars["Int"]["output"]>;
    formaespecifica?: Maybe<FormaEspedificaAdministracion>;
    formaespecifica_id?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    manejacaducidad?: Maybe<Scalars["Int"]["output"]>;
    manejalote?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    nombrecomercial?: Maybe<Scalars["String"]["output"]>;
    observacion?: Maybe<Scalars["String"]["output"]>;
    registrosanitario?: Maybe<Scalars["Float"]["output"]>;
    unidadmedida?: Maybe<UnidadMedidaAdministracion>;
    unidadmedida_id?: Maybe<Scalars["Float"]["output"]>;
    vacuna?: Maybe<Scalars["Int"]["output"]>;
};

export type ProductoBodegaAdministracion = {
    __typename?: "ProductoBodegaAdministracion";
    bodega?: Maybe<BodegaAdministracion>;
    bodega_id?: Maybe<Scalars["Float"]["output"]>;
    producto?: Maybe<ProductoAdministracion>;
    producto_id?: Maybe<Scalars["Float"]["output"]>;
};

export type ProductoBodegaCollectionType = {
    __typename?: "ProductoBodegaCollectionType";
    data?: Maybe<Array<ProductoBodegaAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type ProductoBodegaCreateInput = {
    bodega_ids: Array<Scalars["Int"]["input"]>;
    entidad_id: Scalars["Int"]["input"];
    producto_id: Scalars["Int"]["input"];
};

export type ProductoBodegaFilterInput = {
    bodega?: InputMaybe<BodegaFilterInput>;
    bodega_id?: InputMaybe<RelationsWhereInput>;
    producto?: InputMaybe<ProductoFilterInput>;
    producto_id?: InputMaybe<RelationsWhereInput>;
};

export type ProductoBodegaList = {
    __typename?: "ProductoBodegaList";
    bodega_id?: Maybe<Scalars["Float"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    producto_id?: Maybe<Scalars["Float"]["output"]>;
    valorComparacion?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ProductoBodegaUpdate = {
    __typename?: "ProductoBodegaUpdate";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ProductoCollectionType = {
    __typename?: "ProductoCollectionType";
    data?: Maybe<Array<ProductoAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type ProductoCreateInput = {
    cadenafrio?: InputMaybe<Scalars["Float"]["input"]>;
    categoria_id: Scalars["Float"]["input"];
    codigobarras?: InputMaybe<Scalars["String"]["input"]>;
    codigoreferencia: Scalars["String"]["input"];
    cttipoproducto_id: Scalars["Float"]["input"];
    descripcion?: InputMaybe<Scalars["String"]["input"]>;
    diasalertacaducidad?: InputMaybe<Scalars["Float"]["input"]>;
    diascanje?: InputMaybe<Scalars["Float"]["input"]>;
    estado: Scalars["Float"]["input"];
    ficha_id?: InputMaybe<Scalars["Float"]["input"]>;
    formaespecifica_id?: InputMaybe<Scalars["Float"]["input"]>;
    manejacaducidad: Scalars["Float"]["input"];
    manejalote: Scalars["Float"]["input"];
    nombre: Scalars["String"]["input"];
    nombrecomercial?: InputMaybe<Scalars["String"]["input"]>;
    observacion?: InputMaybe<Scalars["String"]["input"]>;
    registrosanitario?: InputMaybe<Scalars["Float"]["input"]>;
    unidadmedida_id: Scalars["Float"]["input"];
    vacuna?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ProductoDelete = {
    __typename?: "ProductoDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ProductoEgreso = {
    __typename?: "ProductoEgreso";
    codigoproducto: Scalars["String"]["output"];
    id: Scalars["Int"]["output"];
    nombre: Scalars["String"]["output"];
    unidadmedidaproducto?: Maybe<UnidadMedidaEgreso>;
};

export type ProductoEntidadAdministracion = {
    __typename?: "ProductoEntidadAdministracion";
    entidad?: Maybe<EntidadAdministracion>;
    entidad_id?: Maybe<Scalars["Float"]["output"]>;
    enviadoesbye?: Maybe<Scalars["Float"]["output"]>;
    estado?: Maybe<Scalars["Float"]["output"]>;
    estadoesbye?: Maybe<Scalars["String"]["output"]>;
    fechainicioesbye?: Maybe<Scalars["DateScalar"]["output"]>;
    producto?: Maybe<ProductoAdministracion>;
    producto_id?: Maybe<Scalars["Float"]["output"]>;
    sincronizaesbye?: Maybe<Scalars["Float"]["output"]>;
};

export type ProductoEntidadCollectionType = {
    __typename?: "ProductoEntidadCollectionType";
    data?: Maybe<Array<ProductoEntidadAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type ProductoEntidadCreateInput = {
    categoria_id?: InputMaybe<Scalars["Int"]["input"]>;
    cttipoproducto_id: Scalars["Int"]["input"];
    entidad_id: Scalars["Int"]["input"];
    producto_ids: Array<Scalars["Int"]["input"]>;
};

export type ProductoEntidadDelete = {
    __typename?: "ProductoEntidadDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ProductoEntidadFilterInput = {
    entidad_id?: InputMaybe<RelationsWhereInput>;
    producto?: InputMaybe<ProductoFilterInput>;
    producto_id?: InputMaybe<RelationsWhereInput>;
};

export type ProductoEntidadSoli = {
    __typename?: "ProductoEntidadSoli";
    activo: Scalars["Float"]["output"];
    clasificacionven?: Maybe<Scalars["String"]["output"]>;
    consumopromediomensual?: Maybe<Scalars["Float"]["output"]>;
    entidad?: Maybe<EntidadSolicitud>;
    esdispensable?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    metodoabc?: Maybe<Scalars["String"]["output"]>;
    producto?: Maybe<ProductoSolicitud>;
    producto_id?: Maybe<Scalars["Float"]["output"]>;
    saldo?: Maybe<Scalars["Float"]["output"]>;
    stockcomprometido?: Maybe<Scalars["Float"]["output"]>;
    stockdespacho?: Maybe<Scalars["Float"]["output"]>;
    stockmaximo?: Maybe<Scalars["Float"]["output"]>;
    stockminimo?: Maybe<Scalars["Float"]["output"]>;
    stockseguridad?: Maybe<Scalars["Float"]["output"]>;
    tiempomaximoabastacimiento?: Maybe<Scalars["Float"]["output"]>;
    tiempomaximoconsumo?: Maybe<Scalars["Float"]["output"]>;
};

export type ProductoFilterInput = {
    codigoproducto?: InputMaybe<StringWhereInput>;
    codigoreferencia?: InputMaybe<StringWhereInput>;
    cttipoproducto_id?: InputMaybe<RelationsWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    ficha_id?: InputMaybe<RelationsWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    manejalote?: InputMaybe<StateWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type ProductoFilterStockInput = {
    codigoproducto?: InputMaybe<StringWhereInput>;
    codigoreferencia?: InputMaybe<StringWhereInput>;
    cttipoproducto_id?: InputMaybe<RelationsWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    ficha_id?: InputMaybe<RelationsWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    manejalote?: InputMaybe<StateWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type ProductoForEntidadAdministracion = {
    __typename?: "ProductoForEntidadAdministracion";
    id: Scalars["Int"]["output"];
    marcado?: Maybe<Scalars["Boolean"]["output"]>;
    nombre: Scalars["String"]["output"];
};

export type ProductoIngreso = {
    __typename?: "ProductoIngreso";
    codigoproducto: Scalars["String"]["output"];
    id: Scalars["Int"]["output"];
    manejacaducidad?: Maybe<Scalars["Float"]["output"]>;
    manejalote?: Maybe<Scalars["Float"]["output"]>;
    nombre: Scalars["String"]["output"];
    registrosanitario?: Maybe<Scalars["Float"]["output"]>;
    unidadmedida?: Maybe<UnidadMedidaIngreso>;
};

export type ProductoIngresoDetalleFilterInput = {
    codigoproducto?: InputMaybe<StringWhereInput>;
    codigoreferencia?: InputMaybe<StringWhereInput>;
    cttipoproducto_id?: InputMaybe<RelationsWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    ficha_id?: InputMaybe<RelationsWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    manejalote?: InputMaybe<StateWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type ProductoPorBodegaCreateInput = {
    bodega_id: Scalars["Int"]["input"];
    categoria_id?: InputMaybe<Scalars["Int"]["input"]>;
    cttipoproducto_id: Scalars["Int"]["input"];
    producto_ids: Array<Scalars["Int"]["input"]>;
};

export type ProductoReporte = {
    __typename?: "ProductoReporte";
    categoria?: Maybe<CategoriaReporte>;
    codigo?: Maybe<Scalars["String"]["output"]>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    tipoproducto?: Maybe<CatalogoDetalleReporte>;
    unidadmedida?: Maybe<UnidadMedidaReporte>;
};

export type ProductoSbFilterInput = {
    categoria_id?: InputMaybe<RelationsWhereInput>;
    codigo?: InputMaybe<StringWhereInput>;
    cttipoproducto_id?: InputMaybe<RelationsWhereInput>;
    descripcion?: InputMaybe<StringWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type ProductoSolicitud = {
    __typename?: "ProductoSolicitud";
    categoria_id?: Maybe<Scalars["Float"]["output"]>;
    codigoproducto: Scalars["String"]["output"];
    cttipoproducto: CatalogoDetalleSolicitud;
    cttipoproducto_id: Scalars["Float"]["output"];
    id: Scalars["Int"]["output"];
    nombre: Scalars["String"]["output"];
};

export type ProductoStock = {
    __typename?: "ProductoStock";
    cadenafrio?: Maybe<Scalars["Float"]["output"]>;
    categoria?: Maybe<CategoriaStock>;
    categoria_id?: Maybe<Scalars["Int"]["output"]>;
    codigobarras?: Maybe<Scalars["String"]["output"]>;
    codigoproducto?: Maybe<Scalars["String"]["output"]>;
    codigoreferencia?: Maybe<Scalars["String"]["output"]>;
    cttipoproducto?: Maybe<CatalogoDetalleStock>;
    cttipoproducto_id?: Maybe<Scalars["Float"]["output"]>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    diasalertacaducidad?: Maybe<Scalars["Int"]["output"]>;
    diascanje?: Maybe<Scalars["Int"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    ficha?: Maybe<FichaStock>;
    ficha_id?: Maybe<Scalars["Int"]["output"]>;
    formaespecifica?: Maybe<FormaEspedificaStock>;
    formaespecifica_id?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    manejacaducidad?: Maybe<Scalars["Int"]["output"]>;
    manejalote?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    nombrecomercial?: Maybe<Scalars["String"]["output"]>;
    observacion?: Maybe<Scalars["String"]["output"]>;
    unidadmedida?: Maybe<UnidadMedidaStock>;
    unidadmedida_id?: Maybe<Scalars["Float"]["output"]>;
    vacuna?: Maybe<Scalars["Int"]["output"]>;
};

export type ProductoStockBodega = {
    __typename?: "ProductoStockBodega";
    id?: Maybe<Scalars["Int"]["output"]>;
    producto_id?: Maybe<Scalars["Int"]["output"]>;
    saldo?: Maybe<Scalars["Float"]["output"]>;
};

export type ProductoStockBodegaCollectionType = {
    __typename?: "ProductoStockBodegaCollectionType";
    data?: Maybe<Array<ProductoStockBodegaRpt>>;
    pageInfo?: Maybe<PageInfo>;
};

export type ProductoStockBodegaFilterInput = {
    activo?: InputMaybe<StateWhereInput>;
    bodega_id?: InputMaybe<RelationsWhereInput>;
    producto_id?: InputMaybe<RelationsWhereInput>;
    saldo?: InputMaybe<NumberWhereInput>;
};

export type ProductoStockBodegaOrgCollectionType = {
    __typename?: "ProductoStockBodegaOrgCollectionType";
    data?: Maybe<Array<ProductoStockBodegaOrgRpt>>;
    pageInfo?: Maybe<PageInfo>;
};

export type ProductoStockBodegaOrgFilterInput = {
    bodega_id?: InputMaybe<NumberWhereInput>;
    producto_id?: InputMaybe<NumberWhereInput>;
    productostockent_id?: InputMaybe<NumberWhereInput>;
    productostockentidad?: InputMaybe<ProductoStockEntidadOrgFilterInput>;
};

export type ProductoStockBodegaOrgRpt = {
    __typename?: "ProductoStockBodegaOrgRpt";
    bodega?: Maybe<BodegaReporte>;
    bodega_id: Scalars["Int"]["output"];
    costoinicial?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["Int"]["output"];
    producto?: Maybe<ProductoReporte>;
    producto_id?: Maybe<Scalars["Int"]["output"]>;
    productostockent_id: Scalars["Int"]["output"];
    productostockentidad?: Maybe<ProductoStockEntidadOrgRpt>;
    saldo?: Maybe<Scalars["Float"]["output"]>;
    stockinicial?: Maybe<Scalars["Float"]["output"]>;
    valorpromedio?: Maybe<Scalars["Float"]["output"]>;
};

export type ProductoStockBodegaRpt = {
    __typename?: "ProductoStockBodegaRpt";
    activo?: Maybe<Scalars["Int"]["output"]>;
    bodega?: Maybe<BodegaReporte>;
    bodega_id: Scalars["Int"]["output"];
    consumopromediomensual?: Maybe<Scalars["Float"]["output"]>;
    costoinicial?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["Int"]["output"];
    producto?: Maybe<ProductoReporte>;
    producto_id?: Maybe<Scalars["Int"]["output"]>;
    productostockent_id: Scalars["Int"]["output"];
    productostocklote?: Maybe<Array<ProductoStockLoteAdmin>>;
    saldo?: Maybe<Scalars["Float"]["output"]>;
    stockinicial?: Maybe<Scalars["Float"]["output"]>;
    valorpromedio?: Maybe<Scalars["Float"]["output"]>;
};

export type ProductoStockBodegaStock = {
    __typename?: "ProductoStockBodegaStock";
    activo?: Maybe<Scalars["Int"]["output"]>;
    bodega?: Maybe<BodegaStock>;
    bodega_id?: Maybe<Scalars["Int"]["output"]>;
    consumopromediomensual?: Maybe<Scalars["Float"]["output"]>;
    costoinicial?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    producto?: Maybe<ProductoStock>;
    producto_id?: Maybe<Scalars["Int"]["output"]>;
    productostockent_id?: Maybe<Scalars["Int"]["output"]>;
    productostocklote?: Maybe<Array<ProductoStockLoteStock>>;
    saldo?: Maybe<Scalars["Float"]["output"]>;
    saldodisponible?: Maybe<Scalars["Float"]["output"]>;
    stockcomprometido?: Maybe<Scalars["Float"]["output"]>;
    stockdespacho?: Maybe<Scalars["Float"]["output"]>;
    stockinicial?: Maybe<Scalars["Float"]["output"]>;
    valorpromedio?: Maybe<Scalars["Float"]["output"]>;
};

export type ProductoStockBodegaStockCollectionType = {
    __typename?: "ProductoStockBodegaStockCollectionType";
    data?: Maybe<Array<ProductoStockBodegaStock>>;
    pageInfo?: Maybe<PageInfo>;
};

export type ProductoStockBodegaStockFilterInput = {
    bodega_id?: InputMaybe<RelationsWhereInput>;
    producto?: InputMaybe<ProductoFilterStockInput>;
    producto_id?: InputMaybe<RelationsWhereInput>;
    productostockent_id?: InputMaybe<RelationsWhereInput>;
};

export type ProductoStockEntidadAdmin = {
    __typename?: "ProductoStockEntidadAdmin";
    activo?: Maybe<Scalars["Int"]["output"]>;
    consumopromediomensual?: Maybe<Scalars["Float"]["output"]>;
    costoinicial?: Maybe<Scalars["Float"]["output"]>;
    entidad?: Maybe<EntidadReporte>;
    entidad_id?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    producto?: Maybe<ProductoReporte>;
    producto_id?: Maybe<Scalars["Int"]["output"]>;
    saldo?: Maybe<Scalars["Float"]["output"]>;
    stockcomprometido?: Maybe<Scalars["Float"]["output"]>;
    stockinicial?: Maybe<Scalars["Float"]["output"]>;
    valorpromedio?: Maybe<Scalars["Float"]["output"]>;
    valortotal?: Maybe<Scalars["Float"]["output"]>;
};

export type ProductoStockEntidadCollectionType = {
    __typename?: "ProductoStockEntidadCollectionType";
    data?: Maybe<Array<ProductoStockEntidadAdmin>>;
    pageInfo?: Maybe<PageInfo>;
};

export type ProductoStockEntidadFilterInput = {
    activo?: InputMaybe<StateWhereInput>;
    entidad_id?: InputMaybe<RelationsWhereInput>;
    producto?: InputMaybe<ProductoSbFilterInput>;
    producto_id?: InputMaybe<RelationsWhereInput>;
    saldo?: InputMaybe<NumberWhereInput>;
};

export type ProductoStockEntidadOrgFilterInput = {
    entidad_id?: InputMaybe<RelationsWhereInput>;
    producto?: InputMaybe<ProductoSbFilterInput>;
    producto_id?: InputMaybe<RelationsWhereInput>;
};

export type ProductoStockEntidadOrgRpt = {
    __typename?: "ProductoStockEntidadOrgRpt";
    costoinicial?: Maybe<Scalars["Float"]["output"]>;
    entidad?: Maybe<EntidadReporte>;
    entidad_id?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    producto?: Maybe<ProductoReporte>;
    producto_id?: Maybe<Scalars["Int"]["output"]>;
    productostockbodega?: Maybe<Array<ProductoStockBodegaOrgRpt>>;
    saldo?: Maybe<Scalars["Float"]["output"]>;
    stockinicial?: Maybe<Scalars["Float"]["output"]>;
    valorpromedio?: Maybe<Scalars["Float"]["output"]>;
};

export type ProductoStockEntidadOrgRptCollection = {
    __typename?: "ProductoStockEntidadOrgRptCollection";
    data?: Maybe<Array<ProductoStockEntidadOrgRpt>>;
    pageInfo?: Maybe<PageInfo>;
};

export type ProductoStockLoteAdmin = {
    __typename?: "ProductoStockLoteAdmin";
    cantidad?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    lote?: Maybe<LoteReporte>;
    lote_id?: Maybe<Scalars["Int"]["output"]>;
    productostockbodega?: Maybe<ProductoStockBodegaRpt>;
    productostockbodega_id?: Maybe<Scalars["Int"]["output"]>;
    valortotal?: Maybe<Scalars["Decimal"]["output"]>;
};

export type ProductoStockLoteCollectionType = {
    __typename?: "ProductoStockLoteCollectionType";
    data?: Maybe<Array<ProductoStockLoteAdmin>>;
    pageInfo?: Maybe<PageInfo>;
};

export type ProductoStockLoteFilterInput = {
    bodega?: InputMaybe<BodegaFilterRptInput>;
    cantidad?: InputMaybe<NumberWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    lote?: InputMaybe<LoteTransaccionFilterInput>;
    lote_id?: InputMaybe<NumberWhereInput>;
    productostockbodega?: InputMaybe<ProductoStockBodegaFilterInput>;
    productostockbodega_id?: InputMaybe<NumberWhereInput>;
};

export type ProductoStockLoteStock = {
    __typename?: "ProductoStockLoteStock";
    cantidad?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    lote?: Maybe<LoteStock>;
    lote_id?: Maybe<Scalars["Float"]["output"]>;
    productostockbodega_id?: Maybe<Scalars["Int"]["output"]>;
};

export type ProductoUpdateInput = {
    cadenafrio?: InputMaybe<Scalars["Float"]["input"]>;
    categoria_id?: InputMaybe<Scalars["Float"]["input"]>;
    codigobarras?: InputMaybe<Scalars["String"]["input"]>;
    codigoreferencia?: InputMaybe<Scalars["String"]["input"]>;
    cttipoproducto_id?: InputMaybe<Scalars["Float"]["input"]>;
    descripcion?: InputMaybe<Scalars["String"]["input"]>;
    diasalertacaducidad?: InputMaybe<Scalars["Float"]["input"]>;
    diascanje?: InputMaybe<Scalars["Float"]["input"]>;
    estado?: InputMaybe<Scalars["Float"]["input"]>;
    ficha_id?: InputMaybe<Scalars["Float"]["input"]>;
    formaespecifica_id?: InputMaybe<Scalars["Float"]["input"]>;
    id: Scalars["Int"]["input"];
    manejacaducidad?: InputMaybe<Scalars["Float"]["input"]>;
    manejalote?: InputMaybe<Scalars["Float"]["input"]>;
    nombre?: InputMaybe<Scalars["String"]["input"]>;
    nombrecomercial?: InputMaybe<Scalars["String"]["input"]>;
    observacion?: InputMaybe<Scalars["String"]["input"]>;
    registrosanitario?: InputMaybe<Scalars["Float"]["input"]>;
    vacuna?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ProgramaEntidadSolicitud = {
    __typename?: "ProgramaEntidadSolicitud";
    activo?: Maybe<Scalars["Int"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    id: Scalars["Int"]["output"];
    programa?: Maybe<ProgramaSolicitud>;
};

export type ProgramaSolicitud = {
    __typename?: "ProgramaSolicitud";
    estado?: Maybe<Scalars["Int"]["output"]>;
    id: Scalars["Int"]["output"];
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type ProveedorAdministracion = {
    __typename?: "ProveedorAdministracion";
    actividadeconomica?: Maybe<Scalars["String"]["output"]>;
    correo?: Maybe<Scalars["String"]["output"]>;
    ctclasecolaborador?: Maybe<CatalogoDetalleCompra>;
    ctclasecolaborador_id?: Maybe<Scalars["Int"]["output"]>;
    cttipocolaborador?: Maybe<CatalogoDetalleCompra>;
    cttipocolaborador_id?: Maybe<Scalars["Int"]["output"]>;
    cttipoidentificacion?: Maybe<CatalogoDetalleCompra>;
    cttipoidentificacion_id?: Maybe<Scalars["Int"]["output"]>;
    direccion?: Maybe<Scalars["String"]["output"]>;
    estado?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    identificacion?: Maybe<Scalars["String"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    nombrecontacto?: Maybe<Scalars["String"]["output"]>;
    razonsocial?: Maybe<Scalars["String"]["output"]>;
    representantelegal?: Maybe<Scalars["String"]["output"]>;
    telefono?: Maybe<Scalars["String"]["output"]>;
};

export type ProveedorByRucAdministracion = {
    __typename?: "ProveedorByRucAdministracion";
    actividadeconomica?: Maybe<Scalars["String"]["output"]>;
    correo?: Maybe<Scalars["String"]["output"]>;
    ctclasecolaborador?: Maybe<CatalogoDetalleCompra>;
    ctclasecolaborador_id?: Maybe<Scalars["Int"]["output"]>;
    cttipocolaborador?: Maybe<CatalogoDetalleCompra>;
    cttipocolaborador_id?: Maybe<Scalars["Int"]["output"]>;
    cttipoidentificacion?: Maybe<CatalogoDetalleCompra>;
    cttipoidentificacion_id?: Maybe<Scalars["Int"]["output"]>;
    direccion?: Maybe<Scalars["String"]["output"]>;
    estado?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    identificacion?: Maybe<Scalars["String"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    nombrecontacto?: Maybe<Scalars["String"]["output"]>;
    razonsocial?: Maybe<Scalars["String"]["output"]>;
    representantelegal?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
    telefono?: Maybe<Scalars["String"]["output"]>;
};

export type ProveedorCreateInput = {
    actividadeconomica: Scalars["String"]["input"];
    correo: Scalars["String"]["input"];
    ctclasecolaborador_id: Scalars["Int"]["input"];
    cttipocolaborador_id: Scalars["Int"]["input"];
    cttipoidentificacion_id: Scalars["Int"]["input"];
    direccion: Scalars["String"]["input"];
    identificacion: Scalars["String"]["input"];
    nombrecontacto: Scalars["String"]["input"];
    razonsocial: Scalars["String"]["input"];
    representantelegal: Scalars["String"]["input"];
    telefono: Scalars["String"]["input"];
};

export type ProveedorDelete = {
    __typename?: "ProveedorDelete";
    code?: Maybe<Scalars["String"]["output"]>;
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ProveedorFilterInput = {
    actividadeconomica?: InputMaybe<StringWhereInput>;
    ctclasecolaborador_id?: InputMaybe<NumberWhereInput>;
    cttipocolaborador_id?: InputMaybe<NumberWhereInput>;
    cttipoidentificacion_id?: InputMaybe<NumberWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    identificacion?: InputMaybe<StringWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
    razonsocial?: InputMaybe<StringWhereInput>;
    representantelegal?: InputMaybe<StringWhereInput>;
};

export type ProveedorIngreso = {
    __typename?: "ProveedorIngreso";
    actividadeconomica?: Maybe<Scalars["String"]["output"]>;
    clasecolaborador?: Maybe<CatalogoDetalleIngreso>;
    correo?: Maybe<Scalars["String"]["output"]>;
    ctproveedor_id?: Maybe<Scalars["Int"]["output"]>;
    direccion?: Maybe<Scalars["String"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    identificacion?: Maybe<Scalars["String"]["output"]>;
    razonsocial?: Maybe<Scalars["String"]["output"]>;
    representantelegal?: Maybe<Scalars["String"]["output"]>;
    telefono?: Maybe<Scalars["Float"]["output"]>;
    tipocolaborador?: Maybe<CatalogoDetalleIngreso>;
    tipoidentificacion?: Maybe<CatalogoDetalleIngreso>;
};

export type ProveedorIngresosFilterInput = {
    id?: InputMaybe<NumberWhereInput>;
    razonsocial?: InputMaybe<StringWhereInput>;
};

export type ProveedorUpdateInput = {
    actividadeconomica?: InputMaybe<Scalars["String"]["input"]>;
    correo?: InputMaybe<Scalars["String"]["input"]>;
    ctclasecolaborador_id?: InputMaybe<Scalars["Int"]["input"]>;
    cttipocolaborador_id?: InputMaybe<Scalars["Int"]["input"]>;
    cttipoidentificacion_id?: InputMaybe<Scalars["Int"]["input"]>;
    direccion?: InputMaybe<Scalars["String"]["input"]>;
    estado?: InputMaybe<Scalars["Float"]["input"]>;
    id: Scalars["Int"]["input"];
    identificacion?: InputMaybe<Scalars["String"]["input"]>;
    nombrecontacto?: InputMaybe<Scalars["String"]["input"]>;
    razonsocial?: InputMaybe<Scalars["String"]["input"]>;
    representantelegal?: InputMaybe<Scalars["String"]["input"]>;
    telefono?: InputMaybe<Scalars["String"]["input"]>;
};

export type Query = {
    __typename?: "Query";
    Receta?: Maybe<Receta>;
    agenda?: Maybe<Agenda>;
    agendaCollection?: Maybe<AgendaCollectionType>;
    bodega?: Maybe<BodegaAdministracion>;
    bodegaCollection?: Maybe<BodegaCollectionType>;
    bodegaRpt: BodegaReporte;
    bodegaRptCollection?: Maybe<BodegaRptCollectionType>;
    bodegaTipotransaccionCollection?: Maybe<BodegaTipotransaccionCollectionType>;
    bodegaTipotransaccionList: Array<BodegaTipotransaccionAdministracion>;
    bodegalotestockRptCollection: BodegaLoteStockCollectionType;
    bodegalotestockRptLista: Array<BodegaLoteStockRpt>;
    catalogoCollection?: Maybe<CatalogoCabeceraCollectionType>;
    catalogoDetalleList?: Maybe<Array<CatalogoDetalleAdmin>>;
    categoria?: Maybe<Categoria>;
    categoriaCollection?: Maybe<CategoriaCollectionType>;
    categoriaList?: Maybe<Array<Categoria>>;
    configuraCodigoBarra?: Maybe<ConfiguraCodigoBarra>;
    configuraCodigoBarraCollection?: Maybe<ConfiguraCodigoBarraCollectionType>;
    despacho?: Maybe<Despacho>;
    despachoCollection?: Maybe<DespachoCollectionType>;
    egreso?: Maybe<Egreso>;
    egresoCollection?: Maybe<EgresoCollectionType>;
    egresoPorNumeroTransaccion?: Maybe<Egreso>;
    entidadById: EntidadFindAdministracion;
    entidadCollection?: Maybe<EntidadCollectionType>;
    esbyeIngresoCollection?: Maybe<EsbyeIngresoCollectionType>;
    esbyeSubCuenta2Collection?: Maybe<EsbyeSubCuenta2CollectionType>;
    ficha?: Maybe<FichaAdministracion>;
    fichaCollection?: Maybe<FichaCollectionType>;
    formaEspecificaCollection?: Maybe<FormaEspecificaCollectionType>;
    grupoBodega: GrupoBodegaAdministracion;
    grupoBodegaCollection?: Maybe<GrupoBodegaCollectionType>;
    ingreso?: Maybe<Ingreso>;
    ingresoCollection?: Maybe<IngresoCollectionType>;
    ingresoDetalleCollection?: Maybe<IngresoDetalleCollectionType>;
    ingresoValidaStockCarga?: Maybe<IngresoDelete>;
    laboratorioFabricante: LaboratorioFabricante;
    laboratorioFabricanteCollection?: Maybe<LaboratorioFabricanteCollectionType>;
    lote: LoteAdministracion;
    loteCollection?: Maybe<LoteCollectionType>;
    pacienteCollection?: Maybe<PacienteCollectionType>;
    pacienteIdentificacion?: Maybe<Paciente>;
    producto: ProductoAdministracion;
    productoBodegaCollection?: Maybe<ProductoBodegaCollectionType>;
    productoBodegaList?: Maybe<Array<ProductoBodegaList>>;
    productoByCodigo?: Maybe<ProductoAdministracion>;
    productoCollection?: Maybe<ProductoCollectionType>;
    productoEntidadCollection?: Maybe<ProductoEntidadCollectionType>;
    productoForEntidadList?: Maybe<Array<ProductoForEntidadAdministracion>>;
    productoPorBodegaList?: Maybe<Array<ProductoBodegaList>>;
    productoStockBodega?: Maybe<Array<ProductoStockBodegaStock>>;
    productoStockBodegaCollection?: Maybe<ProductoStockBodegaStockCollectionType>;
    productostockRptbodega: ProductoStockBodegaRpt;
    productostockRptentidad: ProductoStockEntidadAdmin;
    productostockRptlote: ProductoStockLoteAdmin;
    productostockbodegaRptCollection?: Maybe<ProductoStockBodegaCollectionType>;
    productostockbodegaorgRptCollection?: Maybe<ProductoStockBodegaOrgCollectionType>;
    productostockentidadRptCollection?: Maybe<ProductoStockEntidadCollectionType>;
    productostockentidadorgRptCollection?: Maybe<ProductoStockEntidadOrgRptCollection>;
    productostockloteRptCollection?: Maybe<ProductoStockLoteCollectionType>;
    proveedor?: Maybe<ProveedorAdministracion>;
    proveedorCollection?: Maybe<CollectionProveedorType>;
    proveedorRUC?: Maybe<ProveedorByRucAdministracion>;
    registroSanitarioFor?: Maybe<RegistroSanitarioIngreso>;
    reglaAbastecimientoList?: Maybe<Array<ReglaAbastecimiento>>;
    rpttransaccion: TransaccionAdmin;
    secuencial?: Maybe<SecuencialAdministracion>;
    secuencialCollection?: Maybe<SecuencialCollectionType>;
    secuencialFor?: Maybe<SecuencialAdministracion>;
    solicitud?: Maybe<Solicitud>;
    solicitudCollection?: Maybe<SolicitudCollectionType>;
    stockProductoBodegaList?: Maybe<Array<StockProductoBodegaList>>;
    terminal?: Maybe<Terminal>;
    terminalCodigo?: Maybe<TerminalDelete>;
    terminalCollection?: Maybe<TerminalCollectionType>;
    terminalUsuarioList?: Maybe<Array<TerminalUsuarioList>>;
    tipoTransaccion?: Maybe<TipoTransaccionAdministracion>;
    tipoTransaccionCodigo?: Maybe<TipoTransaccionDelete>;
    tipoTransaccionCollection?: Maybe<TipoTransaccionCollectionType>;
    transaccionRptCollection?: Maybe<TransaccionCollectionType>;
    turno?: Maybe<Turno>;
    turnoByTerminal?: Maybe<Turno>;
    turnoCollection?: Maybe<TurnoCollectionType>;
    unidadMedida: UnidadMedidaAdministracion;
    unidadMedidaCollection?: Maybe<UnidadMedidaCollectionType>;
    usuario: UsuarioAdministracion;
    usuarioBodega: UsuarioBodegaAdministracion;
    usuarioBodegaCollection?: Maybe<UsuarioBodegaCollectionType>;
    usuarioBodegaTipoTransaccion?: Maybe<UsuarioBodegaAdministracion>;
    usuarioCollection?: Maybe<UsuarioCollectionType>;
};

export type QueryRecetaArgs = {
    oid: Scalars["String"]["input"];
};

export type QueryAgendaArgs = {
    id: Scalars["Int"]["input"];
};

export type QueryAgendaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<AgendaFilterInput>;
};

export type QueryBodegaArgs = {
    id: Scalars["Int"]["input"];
};

export type QueryBodegaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<BodegaFilterInput>;
};

export type QueryBodegaRptArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryBodegaRptCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<BodegaFilterRptInput>;
};

export type QueryBodegaTipotransaccionCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<BodegaTipotransaccionFilterInput>;
};

export type QueryBodegaTipotransaccionListArgs = {
    bodega_id: Scalars["Int"]["input"];
};

export type QueryBodegalotestockRptCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<BodegaLoteStockFilterInput>;
};

export type QueryBodegalotestockRptListaArgs = {
    bodega_id: Scalars["Int"]["input"];
    producto_id: Scalars["Int"]["input"];
};

export type QueryCatalogoCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<CatalogoCabeceraFilterInput>;
};

export type QueryCatalogoDetalleListArgs = {
    where?: InputMaybe<CatalogoDetallleFilterInput>;
};

export type QueryCategoriaArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCategoriaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<CategoriaFilterInput>;
};

export type QueryCategoriaListArgs = {
    categoria_id?: InputMaybe<Scalars["Int"]["input"]>;
    cttipoproducto_id: Scalars["Int"]["input"];
};

export type QueryConfiguraCodigoBarraArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryConfiguraCodigoBarraCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ConfiguraCodigoBarraFilterInput>;
};

export type QueryDespachoArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryDespachoCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<DespachoFilterInput>;
};

export type QueryEgresoArgs = {
    id: Scalars["Int"]["input"];
};

export type QueryEgresoCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<EgresoFilterInput>;
};

export type QueryEgresoPorNumeroTransaccionArgs = {
    bodega_id?: InputMaybe<Scalars["Int"]["input"]>;
    entidad_id: Scalars["Int"]["input"];
    numerotransaccion: Scalars["String"]["input"];
};

export type QueryEntidadByIdArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryEntidadCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<EntidadFilterInput>;
};

export type QueryEsbyeIngresoCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<EsbyeIngresoFilterInput>;
};

export type QueryEsbyeSubCuenta2CollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<EsbyeSubCuenta2FilterInput>;
};

export type QueryFichaArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFichaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<FichaFilterInput>;
};

export type QueryFormaEspecificaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<FormaEspecificaFilterInput>;
};

export type QueryGrupoBodegaArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryGrupoBodegaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<GrupoBodegaFilterInput>;
};

export type QueryIngresoArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryIngresoCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<IngresoFilterInput>;
};

export type QueryIngresoDetalleCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<IngresoDetalleFilterInput>;
};

export type QueryIngresoValidaStockCargaArgs = {
    bodega_id: Scalars["Int"]["input"];
    producto_id: Scalars["Int"]["input"];
};

export type QueryLaboratorioFabricanteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLaboratorioFabricanteCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<LaboratorioFabricanteFilterInput>;
};

export type QueryLoteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLoteCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<LoteFilterInput>;
};

export type QueryPacienteCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<PacienteFilterInput>;
};

export type QueryPacienteIdentificacionArgs = {
    identificacion: Scalars["String"]["input"];
};

export type QueryProductoArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProductoBodegaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProductoBodegaFilterInput>;
};

export type QueryProductoBodegaListArgs = {
    entidad_id: Scalars["Int"]["input"];
    producto_id: Scalars["Int"]["input"];
};

export type QueryProductoByCodigoArgs = {
    codigoproducto: Scalars["String"]["input"];
};

export type QueryProductoCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProductoFilterInput>;
};

export type QueryProductoEntidadCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProductoEntidadFilterInput>;
};

export type QueryProductoForEntidadListArgs = {
    categoria_id?: InputMaybe<Scalars["Int"]["input"]>;
    cttipoproducto_id: Scalars["Int"]["input"];
    entidad_id: Scalars["Int"]["input"];
};

export type QueryProductoPorBodegaListArgs = {
    bodega_id: Scalars["Int"]["input"];
    categoria_id?: InputMaybe<Scalars["Int"]["input"]>;
    cttipoproducto_id: Scalars["Int"]["input"];
    entidad_id: Scalars["Int"]["input"];
};

export type QueryProductoStockBodegaArgs = {
    bodega_id: Scalars["Int"]["input"];
    producto_id: Scalars["Int"]["input"];
};

export type QueryProductoStockBodegaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProductoStockBodegaStockFilterInput>;
};

export type QueryProductostockRptbodegaArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProductostockRptentidadArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProductostockRptloteArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProductostockbodegaRptCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProductoStockBodegaFilterInput>;
};

export type QueryProductostockbodegaorgRptCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProductoStockBodegaOrgFilterInput>;
};

export type QueryProductostockentidadRptCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProductoStockEntidadFilterInput>;
};

export type QueryProductostockentidadorgRptCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProductoStockEntidadOrgFilterInput>;
};

export type QueryProductostockloteRptCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProductoStockLoteFilterInput>;
};

export type QueryProveedorArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProveedorCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<ProveedorFilterInput>;
};

export type QueryProveedorRucArgs = {
    ruc: Scalars["String"]["input"];
    tipoproveedor: Scalars["Int"]["input"];
    verificarSRI?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryRegistroSanitarioForArgs = {
    fabricante_id: Scalars["Int"]["input"];
    producto_id: Scalars["Int"]["input"];
};

export type QueryReglaAbastecimientoListArgs = {
    bodega_id: Scalars["Int"]["input"];
    bodega_tipo: Scalars["String"]["input"];
};

export type QueryRpttransaccionArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QuerySecuencialArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QuerySecuencialCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<SecuencialFilterInput>;
};

export type QuerySecuencialForArgs = {
    formatosecuencial: Scalars["String"]["input"];
};

export type QuerySolicitudArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QuerySolicitudCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination: PaginationInput;
    where?: InputMaybe<SolicitudFilterInput>;
};

export type QueryStockProductoBodegaListArgs = {
    bodega_id: Scalars["Int"]["input"];
    caducado: Scalars["Boolean"]["input"];
    cantidad: Scalars["Int"]["input"];
    entidad_id: Scalars["Int"]["input"];
    producto_id: Scalars["Int"]["input"];
};

export type QueryTerminalArgs = {
    id: Scalars["Int"]["input"];
};

export type QueryTerminalCodigoArgs = {
    codigo: Scalars["String"]["input"];
};

export type QueryTerminalCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<TerminalFilterInput>;
};

export type QueryTerminalUsuarioListArgs = {
    entidad_id?: InputMaybe<Scalars["Int"]["input"]>;
    usuario_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTipoTransaccionArgs = {
    id: Scalars["Int"]["input"];
};

export type QueryTipoTransaccionCodigoArgs = {
    codigo: Scalars["String"]["input"];
};

export type QueryTipoTransaccionCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<TipoTransaccionFilterInput>;
};

export type QueryTransaccionRptCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<TransaccionFilterInput>;
};

export type QueryTurnoArgs = {
    id: Scalars["Int"]["input"];
};

export type QueryTurnoByTerminalArgs = {
    terminal_id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryTurnoCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<TurnoFilterInput>;
};

export type QueryUnidadMedidaArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryUnidadMedidaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<UnidadMedidaFilterInput>;
};

export type QueryUsuarioArgs = {
    id?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryUsuarioBodegaArgs = {
    id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryUsuarioBodegaCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<UsuarioBodegaFilterInput>;
};

export type QueryUsuarioBodegaTipoTransaccionArgs = {
    bodega_id: Scalars["Int"]["input"];
    usuario_id: Scalars["String"]["input"];
};

export type QueryUsuarioCollectionArgs = {
    order?: InputMaybe<StringOrderInput>;
    pagination?: InputMaybe<PaginationInput>;
    where?: InputMaybe<UsuarioFilterInput>;
};

export type Receta = {
    __typename?: "Receta";
    acompaniante?: Maybe<Scalars["String"]["output"]>;
    acompaniante_cedula?: Maybe<Scalars["String"]["output"]>;
    fecha_caducidad?: Maybe<Scalars["DateScalar"]["output"]>;
    fecha_receta?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    numero_receta?: Maybe<Scalars["String"]["output"]>;
    oid?: Maybe<Scalars["String"]["output"]>;
    paciente?: Maybe<PacienteReceta>;
    recetaDetalle?: Maybe<Array<RecetaDetalle>>;
};

export type RecetaDetalle = {
    __typename?: "RecetaDetalle";
    cantidad_dispensada: Scalars["Float"]["output"];
    cantidad_prescrita: Scalars["Float"]["output"];
    duracion_tratamiento?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["Int"]["output"];
    medicamento_sku: Scalars["String"]["output"];
    oid: Scalars["String"]["output"];
    producto?: Maybe<Producto>;
};

export type RegistroSanitarioCreateInput = {
    estado?: InputMaybe<Scalars["Float"]["input"]>;
    fabricante_id: Scalars["Int"]["input"];
    producto_id: Scalars["Int"]["input"];
    registrosanitario: Scalars["String"]["input"];
};

export type RegistroSanitarioIngreso = {
    __typename?: "RegistroSanitarioIngreso";
    estado?: Maybe<Scalars["Int"]["output"]>;
    fabricante_id?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    laboratoriofabricante?: Maybe<LaboratorioFabricanteIngreso>;
    producto_id?: Maybe<Scalars["Int"]["output"]>;
    registrosanitario?: Maybe<Scalars["String"]["output"]>;
};

export type RegistroSanitarioUpdateInput = {
    estado: Scalars["Float"]["input"];
    fabricante_id?: InputMaybe<Scalars["Int"]["input"]>;
    id: Scalars["Int"]["input"];
    producto_id?: InputMaybe<Scalars["Int"]["input"]>;
    registrosanitario?: InputMaybe<Scalars["String"]["input"]>;
};

export type ReglaAbastecimiento = {
    __typename?: "ReglaAbastecimiento";
    bodega_p?: Maybe<BodegaAdministracion>;
    bodega_p_id: Scalars["Int"]["output"];
    bodega_r?: Maybe<BodegaAdministracion>;
    bodega_r_id: Scalars["Int"]["output"];
    id?: Maybe<Scalars["Int"]["output"]>;
    tipo?: Maybe<Scalars["String"]["output"]>;
};

export type ReglaAbastecimientoCreateInput = {
    bodega_p_ids: Array<Scalars["Int"]["input"]>;
    bodega_r_id: Scalars["Int"]["input"];
    tipo: Scalars["String"]["input"];
};

/** Filtros para cuando se usan relaciones  */
export type RelationsWhereInput = {
    in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    is?: InputMaybe<Scalars["Float"]["input"]>;
    not?: InputMaybe<Scalars["Float"]["input"]>;
    not_in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type SecuencialAdministracion = {
    __typename?: "SecuencialAdministracion";
    activo?: Maybe<Scalars["Int"]["output"]>;
    entidad_id?: Maybe<Scalars["Float"]["output"]>;
    fechacaducidad?: Maybe<Scalars["DateScalar"]["output"]>;
    formatosecuencial: Scalars["String"]["output"];
    id: Scalars["Int"]["output"];
    secuencial: Scalars["Float"]["output"];
    tipotransaccion_id?: Maybe<Scalars["Float"]["output"]>;
};

export type SecuencialCollectionType = {
    __typename?: "SecuencialCollectionType";
    data?: Maybe<Array<SecuencialAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type SecuencialFilterInput = {
    formatosecuencial?: InputMaybe<StringWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
};

export type Solicitud = {
    __typename?: "Solicitud";
    /**
     * Atributo que permite registrar el estado del registro, uno como activo y dos como inactivo
     * @deprecated Este atributo no funcionara debido al tema del cambio de tipo de dato
     */
    activo: Scalars["Float"]["output"];
    bodega_id?: Maybe<Scalars["Float"]["output"]>;
    codigodespacho?: Maybe<Scalars["String"]["output"]>;
    codigoorden?: Maybe<Scalars["String"]["output"]>;
    ctestadodespacho?: Maybe<CatalogoDetalleSolicitud>;
    ctestadodespacho_id?: Maybe<Scalars["Float"]["output"]>;
    ctestadoorden: CatalogoDetalleSolicitud;
    ctestadoorden_id: Scalars["Float"]["output"];
    cttipoexterna_id?: Maybe<Scalars["Float"]["output"]>;
    cttipoorden: CatalogoDetalleSolicitud;
    cttipoorden_id: Scalars["Float"]["output"];
    cttiporequerimiento?: Maybe<CatalogoDetalleSolicitud>;
    cttiporequerimiento_id?: Maybe<Scalars["Float"]["output"]>;
    documentoorigen?: Maybe<Scalars["String"]["output"]>;
    ejercicio?: Maybe<Scalars["Float"]["output"]>;
    entidadexterna?: Maybe<Scalars["String"]["output"]>;
    entidadexterna_id?: Maybe<Scalars["Float"]["output"]>;
    entidadsolicitada?: Maybe<EntidadSolicitud>;
    entidadsolicitada_id: Scalars["Float"]["output"];
    entidadsolicitante?: Maybe<EntidadSolicitud>;
    entidadsolicitante_id: Scalars["Float"]["output"];
    fechadespacho?: Maybe<Scalars["DateTime"]["output"]>;
    fechamodificacion?: Maybe<Scalars["DateTime"]["output"]>;
    fecharequerimiento?: Maybe<Scalars["DateTime"]["output"]>;
    id: Scalars["Int"]["output"];
    observaciondespacho?: Maybe<Scalars["String"]["output"]>;
    observacionsolicitud?: Maybe<Scalars["String"]["output"]>;
    observaregdespacho?: Maybe<Scalars["String"]["output"]>;
    periodo?: Maybe<Scalars["Float"]["output"]>;
    responsabledespacho?: Maybe<Scalars["String"]["output"]>;
    solicitudDetalle?: Maybe<Array<SolicitudDetalle>>;
    usuariocreacion_id: Scalars["String"]["output"];
    usuariomodificacion_id?: Maybe<Scalars["String"]["output"]>;
};

export type SolicitudCollectionType = {
    __typename?: "SolicitudCollectionType";
    data?: Maybe<Array<Solicitud>>;
    pageInfo?: Maybe<PageInfo>;
};

export type SolicitudCreateInput = {
    bodega_id: Scalars["Float"]["input"];
    ctestadoorden_id: Scalars["Float"]["input"];
    cttipoexterna_id?: InputMaybe<Scalars["Float"]["input"]>;
    cttipoorden_id: Scalars["Float"]["input"];
    cttiporequerimiento_id?: InputMaybe<Scalars["Float"]["input"]>;
    documentoorigen?: InputMaybe<Scalars["String"]["input"]>;
    ejercicio: Scalars["Float"]["input"];
    entidadexterna?: InputMaybe<Scalars["String"]["input"]>;
    entidadexterna_id?: InputMaybe<Scalars["Float"]["input"]>;
    entidadsolicitada_id: Scalars["Float"]["input"];
    entidadsolicitante_id: Scalars["Float"]["input"];
    fecharequerimiento: Scalars["String"]["input"];
    periodo: Scalars["Float"]["input"];
    solicitudDetalle: Array<SolicitudDetalleCreateInput>;
};

export type SolicitudDelete = {
    __typename?: "SolicitudDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SolicitudDetalle = {
    __typename?: "SolicitudDetalle";
    /**
     * Atributo que permite registrar el estado del registro, uno como activo y dos como inactivo
     * @deprecated Este atributo no funcionara debido al tema del cambio de tipo de dato
     */
    activo: Scalars["Float"]["output"];
    cantidadaprodes?: Maybe<Scalars["Float"]["output"]>;
    cantidadaprosoli?: Maybe<Scalars["Float"]["output"]>;
    cantidadrequerida: Scalars["Float"]["output"];
    id?: Maybe<Scalars["Int"]["output"]>;
    nombreproducto?: Maybe<Scalars["String"]["output"]>;
    ordenpedido_id: Scalars["Float"]["output"];
    productoentidad: ProductoEntidadSoli;
    productoentidad_id: Scalars["Float"]["output"];
    programaentidad: ProgramaEntidadSolicitud;
    programaentidad_id: Scalars["Float"]["output"];
    usuariocreacion_id: Scalars["String"]["output"];
    usuariomodificacion_id?: Maybe<Scalars["String"]["output"]>;
};

export type SolicitudDetalleCreateInput = {
    activo?: InputMaybe<Scalars["Float"]["input"]>;
    cantidadrequerida: Scalars["Float"]["input"];
    productoentidad_id: Scalars["Float"]["input"];
    programaentidad_id: Scalars["Float"]["input"];
};

export type SolicitudDetalleUpdateInput = {
    activo?: InputMaybe<Scalars["Float"]["input"]>;
    cantidadaprodes?: InputMaybe<Scalars["Float"]["input"]>;
    cantidadaprosoli?: InputMaybe<Scalars["Float"]["input"]>;
    cantidadrequerida?: InputMaybe<Scalars["Float"]["input"]>;
    id: Scalars["Int"]["input"];
    productoentidad_id?: InputMaybe<Scalars["Float"]["input"]>;
    programaentidad_id?: InputMaybe<Scalars["Float"]["input"]>;
};

export type SolicitudFilterInput = {
    activo?: InputMaybe<StateWhereInput>;
    codigodespacho?: InputMaybe<StringWhereInput>;
    ctestadodespacho_id?: InputMaybe<RelationsWhereInput>;
    ctestadoorden_id?: InputMaybe<RelationsWhereInput>;
    cttipoorden_id?: InputMaybe<RelationsWhereInput>;
    cttiporequerimiento_id?: InputMaybe<RelationsWhereInput>;
    ejercicio: NumberWhereInput;
    entidadsolicitada_id?: InputMaybe<RelationsWhereInput>;
    entidadsolicitante_id?: InputMaybe<RelationsWhereInput>;
    id?: InputMaybe<StateWhereInput>;
    periodo?: InputMaybe<NumberWhereInput>;
};

export type SolicitudUpdateInput = {
    activo?: InputMaybe<Scalars["Float"]["input"]>;
    bodega_id?: InputMaybe<Scalars["Float"]["input"]>;
    ctestadodespacho_id?: InputMaybe<Scalars["Float"]["input"]>;
    ctestadoorden_id?: InputMaybe<Scalars["Float"]["input"]>;
    cttipoexterna_id?: InputMaybe<Scalars["Float"]["input"]>;
    cttiporequerimiento_id?: InputMaybe<Scalars["Float"]["input"]>;
    documentoorigen?: InputMaybe<Scalars["String"]["input"]>;
    entidadexterna?: InputMaybe<Scalars["String"]["input"]>;
    entidadexterna_id?: InputMaybe<Scalars["Float"]["input"]>;
    entidadsolicitada_id?: InputMaybe<Scalars["Float"]["input"]>;
    fechadespacho?: InputMaybe<Scalars["String"]["input"]>;
    id: Scalars["Int"]["input"];
    observaciondespacho?: InputMaybe<Scalars["String"]["input"]>;
    observacionsolicitud?: InputMaybe<Scalars["String"]["input"]>;
    observaregdespacho?: InputMaybe<Scalars["String"]["input"]>;
    responsabledespacho?: InputMaybe<Scalars["String"]["input"]>;
    solicitudDetalle?: InputMaybe<Array<SolicitudDetalleUpdateInput>>;
};

/** Filtros para tipo estado */
export type StateWhereInput = {
    is?: InputMaybe<Scalars["Float"]["input"]>;
    not?: InputMaybe<Scalars["Float"]["input"]>;
};

export type StockCargaIncialCreateInput = {
    archivo: Scalars["String"]["input"];
    bodega_id: Scalars["Float"]["input"];
};

export type StockProductoBodegaList = {
    __typename?: "StockProductoBodegaList";
    CANTIDAD?: Maybe<Scalars["Float"]["output"]>;
    CANTIDADDISTRIBUIDA?: Maybe<Scalars["Float"]["output"]>;
    CODIGOPRODUCTO?: Maybe<Scalars["String"]["output"]>;
    COSTO?: Maybe<Scalars["Float"]["output"]>;
    FECHACADUCIDAD?: Maybe<Scalars["DateScalar"]["output"]>;
    FECHAELABORACION?: Maybe<Scalars["DateScalar"]["output"]>;
    LOTEID?: Maybe<Scalars["String"]["output"]>;
    NOMBRE?: Maybe<Scalars["String"]["output"]>;
    NUMEROLOTE?: Maybe<Scalars["String"]["output"]>;
    PRODUCTOID?: Maybe<Scalars["Float"]["output"]>;
    UNIDADMEDIDAABREVIATURA?: Maybe<Scalars["String"]["output"]>;
    UNIDADMEDIDAID?: Maybe<Scalars["Float"]["output"]>;
    UNIDADMEDIDANOMBRE?: Maybe<Scalars["String"]["output"]>;
};

/** Si existen relaciones, especificar el nombre de la entidad y el campo separado por un punto. Ejemplo:{order:{asc:"paciente.id"}} */
export type StringOrderInput = {
    asc?: InputMaybe<Scalars["String"]["input"]>;
    desc?: InputMaybe<Scalars["String"]["input"]>;
};

/** Filtros para cuando los datos son de tipo string */
export type StringWhereInput = {
    contains?: InputMaybe<Scalars["String"]["input"]>;
    ends_with?: InputMaybe<Scalars["String"]["input"]>;
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    is?: InputMaybe<Scalars["String"]["input"]>;
    not?: InputMaybe<Scalars["String"]["input"]>;
    not_contains?: InputMaybe<Scalars["String"]["input"]>;
    not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

export type Terminal = {
    __typename?: "Terminal";
    bodega?: Maybe<Bodega>;
    bodega_id?: Maybe<Scalars["Int"]["output"]>;
    codigo?: Maybe<Scalars["String"]["output"]>;
    entidad?: Maybe<Entidad>;
    entidad_id?: Maybe<Scalars["Int"]["output"]>;
    enuso?: Maybe<Scalars["Int"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    observacion?: Maybe<Scalars["String"]["output"]>;
    recetaelectronica?: Maybe<Scalars["Int"]["output"]>;
    terminalUsuario?: Maybe<TerminalUsuarioList>;
    tipotransaccion?: Maybe<TipoTransaccion>;
    tipotransaccion_id?: Maybe<Scalars["Int"]["output"]>;
};

export type TerminalBasic = {
    __typename?: "TerminalBasic";
    bodega?: Maybe<Bodega>;
    entidad_id?: Maybe<Scalars["Int"]["output"]>;
    enuso?: Maybe<Scalars["Int"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    recetaelectronica?: Maybe<Scalars["Int"]["output"]>;
};

export type TerminalCollectionType = {
    __typename?: "TerminalCollectionType";
    data?: Maybe<Array<Terminal>>;
    pageInfo?: Maybe<PageInfo>;
};

export type TerminalCreateInput = {
    bodega_id: Scalars["Int"]["input"];
    codigo: Scalars["String"]["input"];
    entidad_id: Scalars["Int"]["input"];
    estado: Scalars["Float"]["input"];
    nombre?: InputMaybe<Scalars["String"]["input"]>;
    observacion?: InputMaybe<Scalars["String"]["input"]>;
    recetaelectronica: Scalars["Float"]["input"];
    tipotransaccion_id: Scalars["Int"]["input"];
    usuarios?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type TerminalDelete = {
    __typename?: "TerminalDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type TerminalEgreso = {
    __typename?: "TerminalEgreso";
    codigo: Scalars["String"]["output"];
    id: Scalars["Int"]["output"];
    nombre: Scalars["String"]["output"];
};

export type TerminalFilterInput = {
    bodega_id?: InputMaybe<RelationsWhereInput>;
    codigo?: InputMaybe<StringWhereInput>;
    entidad_id?: InputMaybe<RelationsWhereInput>;
    enuso?: InputMaybe<NumberWhereInput>;
    estado?: InputMaybe<NumberWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
    recetaelectronica?: InputMaybe<NumberWhereInput>;
    tipotransaccion_id?: InputMaybe<RelationsWhereInput>;
};

export type TerminalUpdateInput = {
    bodega_id?: InputMaybe<Scalars["Int"]["input"]>;
    codigo?: InputMaybe<Scalars["String"]["input"]>;
    entidad_id?: InputMaybe<Scalars["Int"]["input"]>;
    estado?: InputMaybe<Scalars["Float"]["input"]>;
    id: Scalars["Int"]["input"];
    nombre?: InputMaybe<Scalars["String"]["input"]>;
    observacion?: InputMaybe<Scalars["String"]["input"]>;
    recetaelectronica?: InputMaybe<Scalars["Float"]["input"]>;
    tipotransaccion_id?: InputMaybe<Scalars["Int"]["input"]>;
    usuarios?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type TerminalUsuarioList = {
    __typename?: "TerminalUsuarioList";
    terminal: TerminalBasic;
    terminal_id: Scalars["Float"]["output"];
    usuario?: Maybe<Usuario>;
    usuario_id: Scalars["String"]["output"];
};

export type TipoDocumentoEgreso = {
    __typename?: "TipoDocumentoEgreso";
    descripcion: Scalars["String"]["output"];
    id: Scalars["Int"]["output"];
    nombre: Scalars["String"]["output"];
};

export type TipoDocumentoIngreso = {
    __typename?: "TipoDocumentoIngreso";
    descripcion: Scalars["String"]["output"];
    id: Scalars["Int"]["output"];
    nombre: Scalars["String"]["output"];
};

export type TipoTransaccion = {
    __typename?: "TipoTransaccion";
    codigo: Scalars["String"]["output"];
    id: Scalars["Int"]["output"];
    nombre: Scalars["String"]["output"];
};

export type TipoTransaccionAdministracion = {
    __typename?: "TipoTransaccionAdministracion";
    afectaconsumo?: Maybe<Scalars["Int"]["output"]>;
    afectapmp?: Maybe<Scalars["Int"]["output"]>;
    codigo: Scalars["String"]["output"];
    cttipo: CatalogoDetalleAdministracion;
    cttipo_id: Scalars["Int"]["output"];
    descripcion?: Maybe<Scalars["String"]["output"]>;
    egresocomprobante: Scalars["Float"]["output"];
    estado: Scalars["Int"]["output"];
    id?: Maybe<Scalars["Int"]["output"]>;
    modificable: Scalars["Float"]["output"];
    nombre: Scalars["String"]["output"];
    requierebodega: Scalars["Float"]["output"];
    requiereentidadint: Scalars["Float"]["output"];
    requiereproveedor?: Maybe<Scalars["Int"]["output"]>;
    requiereproveedorint: Scalars["Float"]["output"];
    requierereceta: Scalars["Float"]["output"];
    requieresustento?: Maybe<Scalars["Int"]["output"]>;
};

export type TipoTransaccionCollectionType = {
    __typename?: "TipoTransaccionCollectionType";
    data?: Maybe<Array<TipoTransaccionAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type TipoTransaccionCreateInput = {
    afectaconsumo?: InputMaybe<Scalars["Int"]["input"]>;
    afectapmp?: InputMaybe<Scalars["Int"]["input"]>;
    codigo: Scalars["String"]["input"];
    cttipo_id: Scalars["Int"]["input"];
    descripcion?: InputMaybe<Scalars["String"]["input"]>;
    egresocomprobante?: InputMaybe<Scalars["Int"]["input"]>;
    nombre: Scalars["String"]["input"];
    requierebodega?: InputMaybe<Scalars["Int"]["input"]>;
    requiereentidadint?: InputMaybe<Scalars["Int"]["input"]>;
    requiereproveedor?: InputMaybe<Scalars["Int"]["input"]>;
    requiereproveedorint?: InputMaybe<Scalars["Int"]["input"]>;
    requierereceta?: InputMaybe<Scalars["Int"]["input"]>;
    requieresustento?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TipoTransaccionDelete = {
    __typename?: "TipoTransaccionDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type TipoTransaccionEgreso = {
    __typename?: "TipoTransaccionEgreso";
    codigo: Scalars["String"]["output"];
    id: Scalars["Int"]["output"];
    nombre: Scalars["String"]["output"];
    requierebodega: Scalars["Float"]["output"];
    requiereentidadint: Scalars["Float"]["output"];
    requiereproveedor?: Maybe<Scalars["Int"]["output"]>;
    requiereproveedorint: Scalars["Float"]["output"];
    requierereceta: Scalars["Float"]["output"];
    requieresustento?: Maybe<Scalars["Int"]["output"]>;
};

export type TipoTransaccionEgresoFilterInput = {
    codigo?: InputMaybe<StringWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
    requierebodega?: InputMaybe<StateWhereInput>;
    requiereentidadint?: InputMaybe<StateWhereInput>;
    requiereproveedor?: InputMaybe<StateWhereInput>;
    requiereproveedorint?: InputMaybe<StateWhereInput>;
    requieresustento?: InputMaybe<StateWhereInput>;
};

export type TipoTransaccionFilterInput = {
    afectaconsumo?: InputMaybe<StateWhereInput>;
    afectapmp?: InputMaybe<StateWhereInput>;
    codigo?: InputMaybe<StringWhereInput>;
    cttipo_id?: InputMaybe<RelationsWhereInput>;
    egresocomprobante?: InputMaybe<StateWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    modificable?: InputMaybe<StateWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
    requierebodega?: InputMaybe<StateWhereInput>;
    requiereentidadint?: InputMaybe<StateWhereInput>;
    requiereproveedor?: InputMaybe<StateWhereInput>;
    requiereproveedorint?: InputMaybe<StateWhereInput>;
    requierereceta?: InputMaybe<StateWhereInput>;
    requieresustento?: InputMaybe<StateWhereInput>;
};

export type TipoTransaccionIngreso = {
    __typename?: "TipoTransaccionIngreso";
    codigo?: Maybe<Scalars["String"]["output"]>;
    egresocomprobante?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
    requiereproveedor?: Maybe<Scalars["Float"]["output"]>;
    requieresustento?: Maybe<Scalars["Float"]["output"]>;
};

export type TipoTransaccionIngresoFilterInput = {
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type TipoTransaccionReporte = {
    __typename?: "TipoTransaccionReporte";
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre: Scalars["String"]["output"];
};

export type TipoTransaccionUpdateInput = {
    afectaconsumo?: InputMaybe<Scalars["Int"]["input"]>;
    afectapmp?: InputMaybe<Scalars["Int"]["input"]>;
    codigo?: InputMaybe<Scalars["String"]["input"]>;
    cttipo_id?: InputMaybe<Scalars["Int"]["input"]>;
    descripcion?: InputMaybe<Scalars["String"]["input"]>;
    egresocomprobante?: InputMaybe<Scalars["Int"]["input"]>;
    estado?: InputMaybe<Scalars["Int"]["input"]>;
    id: Scalars["Int"]["input"];
    nombre?: InputMaybe<Scalars["String"]["input"]>;
    requierebodega?: InputMaybe<Scalars["Int"]["input"]>;
    requiereentidadint?: InputMaybe<Scalars["Int"]["input"]>;
    requiereproveedor?: InputMaybe<Scalars["Int"]["input"]>;
    requiereproveedorint?: InputMaybe<Scalars["Int"]["input"]>;
    requierereceta?: InputMaybe<Scalars["Int"]["input"]>;
    requieresustento?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TransaccionAdmin = {
    __typename?: "TransaccionAdmin";
    bodega?: Maybe<BodegaReporte>;
    bodega_id?: Maybe<Scalars["Int"]["output"]>;
    cantidad: Scalars["Float"]["output"];
    colaborador?: Maybe<ColaboradorReporte>;
    colaborador_id?: Maybe<Scalars["Int"]["output"]>;
    costo: Scalars["Decimal"]["output"];
    cttipo_id: Scalars["Int"]["output"];
    descripcion?: Maybe<Scalars["String"]["output"]>;
    egreso_id?: Maybe<Scalars["Int"]["output"]>;
    entidad?: Maybe<EntidadReporte>;
    entidad_id: Scalars["Int"]["output"];
    fechacreacion?: Maybe<Scalars["DateScalar"]["output"]>;
    fechamovimiento?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    ingreso_id?: Maybe<Scalars["Int"]["output"]>;
    lote?: Maybe<LoteReporte>;
    lote_id?: Maybe<Scalars["Int"]["output"]>;
    numerodocumento?: Maybe<Scalars["String"]["output"]>;
    pmp: Scalars["Decimal"]["output"];
    pmpbodega: Scalars["Float"]["output"];
    producto?: Maybe<ProductoReporte>;
    producto_id: Scalars["Int"]["output"];
    saldobodega: Scalars["Float"]["output"];
    saldocantidad: Scalars["Float"]["output"];
    saldocosto: Scalars["Decimal"]["output"];
    saldocostobodega: Scalars["Decimal"]["output"];
    tipomovimiento?: Maybe<CatalogoDetalleReporte>;
    tipotransaccion?: Maybe<TipoTransaccionReporte>;
    tipotransaccion_id: Scalars["Int"]["output"];
    valortotal?: Maybe<Scalars["Decimal"]["output"]>;
};

export type TransaccionCollectionType = {
    __typename?: "TransaccionCollectionType";
    data?: Maybe<Array<TransaccionAdmin>>;
    pageInfo?: Maybe<PageInfo>;
};

export type TransaccionFilterInput = {
    bodega_id?: InputMaybe<RelationsWhereInput>;
    cttipo_id?: InputMaybe<RelationsWhereInput>;
    descripcion?: InputMaybe<StringWhereInput>;
    entidad_id?: InputMaybe<RelationsWhereInput>;
    fechacreacion?: InputMaybe<DateWhereInput>;
    lote?: InputMaybe<LoteTransaccionFilterInput>;
    lote_id?: InputMaybe<RelationsWhereInput>;
    producto_id?: InputMaybe<RelationsWhereInput>;
    tipotransaccion_id?: InputMaybe<RelationsWhereInput>;
};

export type Turno = {
    __typename?: "Turno";
    estado?: Maybe<Scalars["Int"]["output"]>;
    fechacierre?: Maybe<Scalars["DateScalar"]["output"]>;
    fechainicio?: Maybe<Scalars["DateScalar"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    numerodispensacion?: Maybe<Scalars["Int"]["output"]>;
    numeroturno?: Maybe<Scalars["String"]["output"]>;
    observacioncierre?: Maybe<Scalars["String"]["output"]>;
    terminal?: Maybe<Terminal>;
    terminal_id?: Maybe<Scalars["Int"]["output"]>;
    usuario?: Maybe<Usuario>;
    usuario_id?: Maybe<Scalars["String"]["output"]>;
};

export type TurnoCloseInput = {
    id: Scalars["Int"]["input"];
    observacioncierre?: InputMaybe<Scalars["String"]["input"]>;
};

export type TurnoCollectionType = {
    __typename?: "TurnoCollectionType";
    data?: Maybe<Array<Turno>>;
    pageInfo?: Maybe<PageInfo>;
};

export type TurnoEgreso = {
    __typename?: "TurnoEgreso";
    fechacierre?: Maybe<Scalars["DateScalar"]["output"]>;
    fechainicio: Scalars["DateScalar"]["output"];
    id: Scalars["Int"]["output"];
    numerodispensacion: Scalars["Float"]["output"];
    numeroturno: Scalars["String"]["output"];
    terminal?: Maybe<TerminalEgreso>;
    terminal_id: Scalars["Float"]["output"];
};

export type TurnoFilterInput = {
    estado?: InputMaybe<NumberWhereInput>;
    fechainicio?: InputMaybe<DateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    numeroturno?: InputMaybe<StringWhereInput>;
    terminal?: InputMaybe<TerminalFilterInput>;
    terminal_id?: InputMaybe<RelationsWhereInput>;
    usuario?: InputMaybe<UsuarioDespachoFilterInput>;
    usuario_id?: InputMaybe<RelationsWhereInput>;
};

export type TurnoOpenInput = {
    terminal_id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UnidadMedida = {
    __typename?: "UnidadMedida";
    abreviatura?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type UnidadMedidaAdministracion = {
    __typename?: "UnidadMedidaAdministracion";
    abreviatura?: Maybe<Scalars["String"]["output"]>;
    cttipounidad?: Maybe<CatalogoDetalleAdministracion>;
    cttipounidad_id?: Maybe<Scalars["Int"]["output"]>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type UnidadMedidaCollectionType = {
    __typename?: "UnidadMedidaCollectionType";
    data?: Maybe<Array<UnidadMedidaAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type UnidadMedidaDelete = {
    __typename?: "UnidadMedidaDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UnidadMedidaEgreso = {
    __typename?: "UnidadMedidaEgreso";
    abreviatura?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type UnidadMedidaFilterInput = {
    abreviatura?: InputMaybe<StringWhereInput>;
    activo?: InputMaybe<StateWhereInput>;
    cttipounidad_id?: InputMaybe<NumberWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
};

export type UnidadMedidaIngreso = {
    __typename?: "UnidadMedidaIngreso";
    abreviatura?: Maybe<Scalars["String"]["output"]>;
    cttipounidad_id?: Maybe<Scalars["Int"]["output"]>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type UnidadMedidaInput = {
    abreviatura: Scalars["String"]["input"];
    cttipounidad_id: Scalars["Int"]["input"];
    descripcion?: InputMaybe<Scalars["String"]["input"]>;
    nombre: Scalars["String"]["input"];
};

export type UnidadMedidaReporte = {
    __typename?: "UnidadMedidaReporte";
    abreviatura?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type UnidadMedidaStock = {
    __typename?: "UnidadMedidaStock";
    abreviatura?: Maybe<Scalars["String"]["output"]>;
    cttipounidad?: Maybe<CatalogoDetalleStock>;
    cttipounidad_id?: Maybe<Scalars["Int"]["output"]>;
    descripcion?: Maybe<Scalars["String"]["output"]>;
    estado?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    nombre?: Maybe<Scalars["String"]["output"]>;
};

export type UnidadMedidaUpdateInput = {
    abreviatura?: InputMaybe<Scalars["String"]["input"]>;
    cttipounidad_id?: InputMaybe<Scalars["Int"]["input"]>;
    descripcion?: InputMaybe<Scalars["String"]["input"]>;
    estado?: InputMaybe<Scalars["Int"]["input"]>;
    id: Scalars["Int"]["input"];
    nombre?: InputMaybe<Scalars["String"]["input"]>;
};

export type Usuario = {
    __typename?: "Usuario";
    apellidos: Scalars["String"]["output"];
    estado: Scalars["Float"]["output"];
    id: Scalars["String"]["output"];
    nombre: Scalars["String"]["output"];
    nombres: Scalars["String"]["output"];
    nombreusuario: Scalars["String"]["output"];
};

export type UsuarioAIngreso = {
    __typename?: "UsuarioAIngreso";
    apellidos: Scalars["String"]["output"];
    estado: Scalars["Float"]["output"];
    id: Scalars["String"]["output"];
    nombre: Scalars["String"]["output"];
    nombres: Scalars["String"]["output"];
    nombreusuario: Scalars["String"]["output"];
};

export type UsuarioAdministracion = {
    __typename?: "UsuarioAdministracion";
    apellidos: Scalars["String"]["output"];
    estado: Scalars["Float"]["output"];
    id: Scalars["String"]["output"];
    nombre: Scalars["String"]["output"];
    nombres: Scalars["String"]["output"];
    nombreusuario: Scalars["String"]["output"];
};

export type UsuarioBodegaAdministracion = {
    __typename?: "UsuarioBodegaAdministracion";
    bodega?: Maybe<BodegaAdministracion>;
    bodega_id?: Maybe<Scalars["Int"]["output"]>;
    estado?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    responsable?: Maybe<Scalars["Float"]["output"]>;
    tipotransaccion?: Maybe<Array<TipoTransaccionAdministracion>>;
    usuario?: Maybe<UsuarioAdministracion>;
    usuario_id?: Maybe<Scalars["String"]["output"]>;
};

export type UsuarioBodegaCollectionType = {
    __typename?: "UsuarioBodegaCollectionType";
    data?: Maybe<Array<UsuarioBodegaAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type UsuarioBodegaCreateInput = {
    bodega_id: Scalars["Int"]["input"];
    responsable: Scalars["Float"]["input"];
    tipotransacciones?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    usuario_id: Scalars["String"]["input"];
    usuarios?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type UsuarioBodegaDelete = {
    __typename?: "UsuarioBodegaDelete";
    message?: Maybe<Scalars["String"]["output"]>;
    status?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UsuarioBodegaFilterInput = {
    bodega_id?: InputMaybe<RelationsWhereInput>;
    entidad_id?: InputMaybe<StateWhereInput>;
    id?: InputMaybe<NumberWhereInput>;
    responsable?: InputMaybe<StateWhereInput>;
    usuario_id?: InputMaybe<StringWhereInput>;
};

export type UsuarioBodegaUpdateInput = {
    bodega_id?: InputMaybe<Scalars["Int"]["input"]>;
    id: Scalars["Int"]["input"];
    responsable?: InputMaybe<Scalars["Float"]["input"]>;
    tipotransacciones?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    usuario_id?: InputMaybe<Scalars["String"]["input"]>;
    usuarios?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type UsuarioCollectionType = {
    __typename?: "UsuarioCollectionType";
    data?: Maybe<Array<UsuarioAdministracion>>;
    pageInfo?: Maybe<PageInfo>;
};

export type UsuarioDespachoFilterInput = {
    apellidos?: InputMaybe<StringWhereInput>;
    entidad_id?: InputMaybe<StateWhereInput>;
    estado?: InputMaybe<StateWhereInput>;
    id?: InputMaybe<StringWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
    nombres?: InputMaybe<StringWhereInput>;
    nombreusuario?: InputMaybe<StringWhereInput>;
};

export type UsuarioEgreso = {
    __typename?: "UsuarioEgreso";
    apellidos: Scalars["String"]["output"];
    estado: Scalars["Float"]["output"];
    id: Scalars["String"]["output"];
    nombre: Scalars["String"]["output"];
    nombres: Scalars["String"]["output"];
    nombreusuario: Scalars["String"]["output"];
};

export type UsuarioEgresoFilterInput = {
    activo?: InputMaybe<StateWhereInput>;
    apellidos?: InputMaybe<StringWhereInput>;
    estado: StateWhereInput;
    id?: InputMaybe<StringWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
    nombres?: InputMaybe<StringWhereInput>;
    nombreusuario?: InputMaybe<StringWhereInput>;
};

export type UsuarioFilterInput = {
    apellidos?: InputMaybe<StringWhereInput>;
    entidad_id?: InputMaybe<StateWhereInput>;
    estado: StateWhereInput;
    id?: InputMaybe<StringWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
    nombres?: InputMaybe<StringWhereInput>;
    nombreusuario?: InputMaybe<StringWhereInput>;
    responsable?: InputMaybe<StateWhereInput>;
    soloentidad?: InputMaybe<StateWhereInput>;
};

export type UsuarioIngresoFilterInput = {
    activo?: InputMaybe<StateWhereInput>;
    apellidos?: InputMaybe<StringWhereInput>;
    estado: StateWhereInput;
    id?: InputMaybe<StringWhereInput>;
    nombre?: InputMaybe<StringWhereInput>;
    nombres?: InputMaybe<StringWhereInput>;
    nombreusuario?: InputMaybe<StringWhereInput>;
};

export type UsuariosBodegaAdminInput = {
    bodega_id: Scalars["Int"]["input"];
    usuarios?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Filtros para cuando los filtros son de tipo date */
export type DateWhereInput = {
    between?: InputMaybe<Array<Scalars["String"]["input"]>>;
    gt_date?: InputMaybe<Scalars["String"]["input"]>;
    gte_date?: InputMaybe<Scalars["String"]["input"]>;
    is_date?: InputMaybe<Scalars["String"]["input"]>;
    lt_date?: InputMaybe<Scalars["String"]["input"]>;
    lte_date?: InputMaybe<Scalars["String"]["input"]>;
};

export type DespachoCreateFieldsFragment = {
    __typename?: "DespachoResult";
    code?: number | null;
    message?: string | null;
    status?: boolean | null;
};

export type ProductoBodegaCollectionFieldsFragment = {
    __typename?: "ProductoBodegaCollectionType";
    data?: Array<{
        __typename?: "ProductoBodegaAdministracion";
        bodega_id?: number | null;
        bodega?: { __typename?: "BodegaAdministracion"; descripcion?: string | null; nombre?: string | null } | null;
        producto?: {
            __typename?: "ProductoAdministracion";
            codigoproducto?: string | null;
            estado?: number | null;
            id?: number | null;
            nombre?: string | null;
            nombrecomercial?: string | null;
            manejacaducidad?: number | null;
            manejalote?: number | null;
            unidadmedida_id?: number | null;
        } | null;
    }> | null;
    pageInfo?: {
        __typename?: "PageInfo";
        count?: number | null;
        hasNextPage?: boolean | null;
        hasPreviousPage?: boolean | null;
        limit?: number | null;
        offset?: number | null;
    } | null;
};

export type ProductoStockBodegaFieldsFragment = {
    __typename?: "ProductoStockBodegaStock";
    bodega_id?: number | null;
    producto_id?: number | null;
    saldo?: number | null;
    stockcomprometido?: number | null;
    stockdespacho?: number | null;
    stockinicial?: number | null;
    valorpromedio?: number | null;
};

export type StockProductoBodegaFieldsFragment = {
    __typename?: "StockProductoBodegaList";
    CANTIDAD?: number | null;
    CANTIDADDISTRIBUIDA?: number | null;
    CODIGOPRODUCTO?: string | null;
    COSTO?: number | null;
    FECHACADUCIDAD?: any | null;
    LOTEID?: string | null;
    NOMBRE?: string | null;
    NUMEROLOTE?: string | null;
    PRODUCTOID?: number | null;
    UNIDADMEDIDAABREVIATURA?: string | null;
    UNIDADMEDIDAID?: number | null;
    UNIDADMEDIDANOMBRE?: string | null;
};

export type RecetaElectronicaFieldsFragment = {
    __typename?: "Receta";
    id?: number | null;
    oid?: string | null;
    acompaniante?: string | null;
    acompaniante_cedula?: string | null;
    fecha_caducidad?: any | null;
    fecha_receta?: any | null;
    numero_receta?: string | null;
    paciente?: {
        __typename?: "PacienteReceta";
        apellidos?: string | null;
        fecha_nacimiento?: string | null;
        identificacion?: string | null;
        nombres?: string | null;
        tipo_identificacion_id?: number | null;
    } | null;
    recetaDetalle?: Array<{
        __typename?: "RecetaDetalle";
        cantidad_dispensada: number;
        cantidad_prescrita: number;
        duracion_tratamiento?: number | null;
        id: number;
        medicamento_sku: string;
        oid: string;
    }> | null;
};

export type TerminalUsuarioListFieldsFragment = {
    __typename?: "TerminalUsuarioList";
    terminal_id: number;
    usuario_id: string;
    terminal: {
        __typename?: "TerminalBasic";
        nombre?: string | null;
        estado?: number | null;
        id?: number | null;
        enuso?: number | null;
        recetaelectronica?: number | null;
        entidad_id?: number | null;
        bodega?: { __typename?: "Bodega"; codigo?: string | null; id: number; nombre: string } | null;
    };
};

export type TurnoOpenCreateFieldsFragment = {
    __typename?: "Turno";
    terminal_id?: number | null;
    estado?: number | null;
    fechacierre?: any | null;
    fechainicio?: any | null;
    id?: number | null;
    numerodispensacion?: number | null;
    numeroturno?: string | null;
    observacioncierre?: string | null;
};

export type TurnoCloseCreateFieldsFragment = {
    __typename?: "Turno";
    terminal_id?: number | null;
    observacioncierre?: string | null;
};

export type DespachoCreateMutationVariables = Exact<{
    dataInput: DespachoCreateInput;
}>;

export type DespachoCreateMutation = {
    __typename?: "Mutation";
    despachoCreate?: {
        __typename?: "DespachoResult";
        code?: number | null;
        message?: string | null;
        status?: boolean | null;
    } | null;
};

export type TurnoOpenMutationVariables = Exact<{
    dataInput: TurnoOpenInput;
}>;

export type TurnoOpenMutation = {
    __typename?: "Mutation";
    turnoOpen?: {
        __typename?: "Turno";
        terminal_id?: number | null;
        estado?: number | null;
        fechacierre?: any | null;
        fechainicio?: any | null;
        id?: number | null;
        numerodispensacion?: number | null;
        numeroturno?: string | null;
        observacioncierre?: string | null;
    } | null;
};

export type TurnoCloseMutationVariables = Exact<{
    dataInput: TurnoCloseInput;
}>;

export type TurnoCloseMutation = {
    __typename?: "Mutation";
    turnoClose?: { __typename?: "Turno"; terminal_id?: number | null; observacioncierre?: string | null } | null;
};

export type ProductoBodegaCollectionQueryVariables = Exact<{
    inputWhere?: InputMaybe<ProductoBodegaFilterInput>;
    inputOrder?: InputMaybe<StringOrderInput>;
    inputPagination?: InputMaybe<PaginationInput>;
}>;

export type ProductoBodegaCollectionQuery = {
    __typename?: "Query";
    productoBodegaCollection?: {
        __typename?: "ProductoBodegaCollectionType";
        data?: Array<{
            __typename?: "ProductoBodegaAdministracion";
            bodega_id?: number | null;
            bodega?: { __typename?: "BodegaAdministracion"; descripcion?: string | null; nombre?: string | null } | null;
            producto?: {
                __typename?: "ProductoAdministracion";
                codigoproducto?: string | null;
                estado?: number | null;
                id?: number | null;
                nombre?: string | null;
                nombrecomercial?: string | null;
                manejacaducidad?: number | null;
                manejalote?: number | null;
                unidadmedida_id?: number | null;
            } | null;
        }> | null;
        pageInfo?: {
            __typename?: "PageInfo";
            count?: number | null;
            hasNextPage?: boolean | null;
            hasPreviousPage?: boolean | null;
            limit?: number | null;
            offset?: number | null;
        } | null;
    } | null;
};

export type ProductoStockBodegaQueryVariables = Exact<{
    bodegaId: Scalars["Int"]["input"];
    productoId: Scalars["Int"]["input"];
}>;

export type ProductoStockBodegaQuery = {
    __typename?: "Query";
    productoStockBodega?: Array<{
        __typename?: "ProductoStockBodegaStock";
        bodega_id?: number | null;
        producto_id?: number | null;
        saldo?: number | null;
        stockcomprometido?: number | null;
        stockdespacho?: number | null;
        stockinicial?: number | null;
        valorpromedio?: number | null;
    }> | null;
};

export type RecetaQueryVariables = Exact<{
    oid: Scalars["String"]["input"];
}>;

export type RecetaQuery = {
    __typename?: "Query";
    Receta?: {
        __typename?: "Receta";
        id?: number | null;
        oid?: string | null;
        acompaniante?: string | null;
        acompaniante_cedula?: string | null;
        fecha_caducidad?: any | null;
        fecha_receta?: any | null;
        numero_receta?: string | null;
        paciente?: {
            __typename?: "PacienteReceta";
            apellidos?: string | null;
            fecha_nacimiento?: string | null;
            identificacion?: string | null;
            nombres?: string | null;
            tipo_identificacion_id?: number | null;
        } | null;
        recetaDetalle?: Array<{
            __typename?: "RecetaDetalle";
            cantidad_dispensada: number;
            cantidad_prescrita: number;
            duracion_tratamiento?: number | null;
            id: number;
            medicamento_sku: string;
            oid: string;
        }> | null;
    } | null;
};

export type StockProductoBodegaListQueryVariables = Exact<{
    bodega_id: Scalars["Int"]["input"];
    caducado: Scalars["Boolean"]["input"];
    cantidad: Scalars["Int"]["input"];
    entidad_id: Scalars["Int"]["input"];
    producto_id: Scalars["Int"]["input"];
}>;

export type StockProductoBodegaListQuery = {
    __typename?: "Query";
    stockProductoBodegaList?: Array<{
        __typename?: "StockProductoBodegaList";
        CANTIDAD?: number | null;
        CANTIDADDISTRIBUIDA?: number | null;
        CODIGOPRODUCTO?: string | null;
        COSTO?: number | null;
        FECHACADUCIDAD?: any | null;
        LOTEID?: string | null;
        NOMBRE?: string | null;
        NUMEROLOTE?: string | null;
        PRODUCTOID?: number | null;
        UNIDADMEDIDAABREVIATURA?: string | null;
        UNIDADMEDIDAID?: number | null;
        UNIDADMEDIDANOMBRE?: string | null;
    }> | null;
};

export type TerminalUsuarioListQueryVariables = Exact<{
    usuario_id: Scalars["String"]["input"];
}>;

export type TerminalUsuarioListQuery = {
    __typename?: "Query";
    terminalUsuarioList?: Array<{
        __typename?: "TerminalUsuarioList";
        terminal_id: number;
        usuario_id: string;
        terminal: {
            __typename?: "TerminalBasic";
            nombre?: string | null;
            estado?: number | null;
            id?: number | null;
            enuso?: number | null;
            recetaelectronica?: number | null;
            entidad_id?: number | null;
            bodega?: { __typename?: "Bodega"; codigo?: string | null; id: number; nombre: string } | null;
        };
    }> | null;
};

export const DespachoCreateFieldsFragmentDoc = gql`
    fragment despachoCreateFields on DespachoResult {
        code
        message
        status
    }
`;
export const ProductoBodegaCollectionFieldsFragmentDoc = gql`
    fragment productoBodegaCollectionFields on ProductoBodegaCollectionType {
        data {
            bodega_id
            bodega {
                descripcion
                nombre
            }
            producto {
                codigoproducto
                estado
                id
                nombre
                nombrecomercial
                manejacaducidad
                manejalote
                unidadmedida_id
            }
        }
        pageInfo {
            count
            hasNextPage
            hasPreviousPage
            limit
            offset
        }
    }
`;
export const ProductoStockBodegaFieldsFragmentDoc = gql`
    fragment productoStockBodegaFields on ProductoStockBodegaStock {
        bodega_id
        producto_id
        saldo
        stockcomprometido
        stockdespacho
        stockinicial
        valorpromedio
    }
`;
export const StockProductoBodegaFieldsFragmentDoc = gql`
    fragment stockProductoBodegaFields on StockProductoBodegaList {
        CANTIDAD
        CANTIDADDISTRIBUIDA
        CODIGOPRODUCTO
        COSTO
        FECHACADUCIDAD
        LOTEID
        NOMBRE
        NUMEROLOTE
        PRODUCTOID
        UNIDADMEDIDAABREVIATURA
        UNIDADMEDIDAID
        UNIDADMEDIDANOMBRE
    }
`;
export const RecetaElectronicaFieldsFragmentDoc = gql`
    fragment recetaElectronicaFields on Receta {
        id
        oid
        acompaniante
        acompaniante_cedula
        fecha_caducidad
        fecha_receta
        numero_receta
        paciente {
            apellidos
            fecha_nacimiento
            identificacion
            nombres
            tipo_identificacion_id
        }
        recetaDetalle {
            cantidad_dispensada
            cantidad_prescrita
            duracion_tratamiento
            id
            medicamento_sku
            oid
        }
    }
`;
export const TerminalUsuarioListFieldsFragmentDoc = gql`
    fragment terminalUsuarioListFields on TerminalUsuarioList {
        terminal_id
        usuario_id
        terminal {
            nombre
            estado
            id
            enuso
            recetaelectronica
            entidad_id
            bodega {
                codigo
                id
                nombre
            }
        }
    }
`;
export const TurnoOpenCreateFieldsFragmentDoc = gql`
    fragment turnoOpenCreateFields on Turno {
        terminal_id
        estado
        fechacierre
        fechainicio
        id
        numerodispensacion
        numeroturno
        observacioncierre
    }
`;
export const TurnoCloseCreateFieldsFragmentDoc = gql`
    fragment turnoCloseCreateFields on Turno {
        terminal_id
        observacioncierre
    }
`;
export const DespachoCreateDocument = gql`
    mutation DespachoCreate($dataInput: DespachoCreateInput!) {
        despachoCreate(dataInput: $dataInput) {
            ...despachoCreateFields
        }
    }
    ${DespachoCreateFieldsFragmentDoc}
`;
export type DespachoCreateMutationFn = Apollo.MutationFunction<DespachoCreateMutation, DespachoCreateMutationVariables>;

/**
 * __useDespachoCreateMutation__
 *
 * To run a mutation, you first call `useDespachoCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDespachoCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [despachoCreateMutation, { data, loading, error }] = useDespachoCreateMutation({
 *   variables: {
 *      dataInput: // value for 'dataInput'
 *   },
 * });
 */
export function useDespachoCreateMutation(
    baseOptions?: Apollo.MutationHookOptions<DespachoCreateMutation, DespachoCreateMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<DespachoCreateMutation, DespachoCreateMutationVariables>(DespachoCreateDocument, options);
}
export type DespachoCreateMutationHookResult = ReturnType<typeof useDespachoCreateMutation>;
export type DespachoCreateMutationResult = Apollo.MutationResult<DespachoCreateMutation>;
export type DespachoCreateMutationOptions = Apollo.BaseMutationOptions<DespachoCreateMutation, DespachoCreateMutationVariables>;
export const TurnoOpenDocument = gql`
    mutation TurnoOpen($dataInput: TurnoOpenInput!) {
        turnoOpen(dataInput: $dataInput) {
            ...turnoOpenCreateFields
        }
    }
    ${TurnoOpenCreateFieldsFragmentDoc}
`;
export type TurnoOpenMutationFn = Apollo.MutationFunction<TurnoOpenMutation, TurnoOpenMutationVariables>;

/**
 * __useTurnoOpenMutation__
 *
 * To run a mutation, you first call `useTurnoOpenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTurnoOpenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [turnoOpenMutation, { data, loading, error }] = useTurnoOpenMutation({
 *   variables: {
 *      dataInput: // value for 'dataInput'
 *   },
 * });
 */
export function useTurnoOpenMutation(baseOptions?: Apollo.MutationHookOptions<TurnoOpenMutation, TurnoOpenMutationVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<TurnoOpenMutation, TurnoOpenMutationVariables>(TurnoOpenDocument, options);
}
export type TurnoOpenMutationHookResult = ReturnType<typeof useTurnoOpenMutation>;
export type TurnoOpenMutationResult = Apollo.MutationResult<TurnoOpenMutation>;
export type TurnoOpenMutationOptions = Apollo.BaseMutationOptions<TurnoOpenMutation, TurnoOpenMutationVariables>;
export const TurnoCloseDocument = gql`
    mutation TurnoClose($dataInput: TurnoCloseInput!) {
        turnoClose(dataInput: $dataInput) {
            ...turnoCloseCreateFields
        }
    }
    ${TurnoCloseCreateFieldsFragmentDoc}
`;
export type TurnoCloseMutationFn = Apollo.MutationFunction<TurnoCloseMutation, TurnoCloseMutationVariables>;

/**
 * __useTurnoCloseMutation__
 *
 * To run a mutation, you first call `useTurnoCloseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTurnoCloseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [turnoCloseMutation, { data, loading, error }] = useTurnoCloseMutation({
 *   variables: {
 *      dataInput: // value for 'dataInput'
 *   },
 * });
 */
export function useTurnoCloseMutation(
    baseOptions?: Apollo.MutationHookOptions<TurnoCloseMutation, TurnoCloseMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<TurnoCloseMutation, TurnoCloseMutationVariables>(TurnoCloseDocument, options);
}
export type TurnoCloseMutationHookResult = ReturnType<typeof useTurnoCloseMutation>;
export type TurnoCloseMutationResult = Apollo.MutationResult<TurnoCloseMutation>;
export type TurnoCloseMutationOptions = Apollo.BaseMutationOptions<TurnoCloseMutation, TurnoCloseMutationVariables>;
export const ProductoBodegaCollectionDocument = gql`
    query ProductoBodegaCollection(
        $inputWhere: ProductoBodegaFilterInput
        $inputOrder: StringOrderInput
        $inputPagination: PaginationInput
    ) {
        productoBodegaCollection(where: $inputWhere, order: $inputOrder, pagination: $inputPagination) {
            ...productoBodegaCollectionFields
        }
    }
    ${ProductoBodegaCollectionFieldsFragmentDoc}
`;

/**
 * __useProductoBodegaCollectionQuery__
 *
 * To run a query within a React component, call `useProductoBodegaCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductoBodegaCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductoBodegaCollectionQuery({
 *   variables: {
 *      inputWhere: // value for 'inputWhere'
 *      inputOrder: // value for 'inputOrder'
 *      inputPagination: // value for 'inputPagination'
 *   },
 * });
 */
export function useProductoBodegaCollectionQuery(
    baseOptions?: Apollo.QueryHookOptions<ProductoBodegaCollectionQuery, ProductoBodegaCollectionQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<ProductoBodegaCollectionQuery, ProductoBodegaCollectionQueryVariables>(
        ProductoBodegaCollectionDocument,
        options
    );
}
export function useProductoBodegaCollectionLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<ProductoBodegaCollectionQuery, ProductoBodegaCollectionQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<ProductoBodegaCollectionQuery, ProductoBodegaCollectionQueryVariables>(
        ProductoBodegaCollectionDocument,
        options
    );
}
export type ProductoBodegaCollectionQueryHookResult = ReturnType<typeof useProductoBodegaCollectionQuery>;
export type ProductoBodegaCollectionLazyQueryHookResult = ReturnType<typeof useProductoBodegaCollectionLazyQuery>;
export type ProductoBodegaCollectionQueryResult = Apollo.QueryResult<
    ProductoBodegaCollectionQuery,
    ProductoBodegaCollectionQueryVariables
>;
export const ProductoStockBodegaDocument = gql`
    query ProductoStockBodega($bodegaId: Int!, $productoId: Int!) {
        productoStockBodega(bodega_id: $bodegaId, producto_id: $productoId) {
            ...productoStockBodegaFields
        }
    }
    ${ProductoStockBodegaFieldsFragmentDoc}
`;

/**
 * __useProductoStockBodegaQuery__
 *
 * To run a query within a React component, call `useProductoStockBodegaQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductoStockBodegaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductoStockBodegaQuery({
 *   variables: {
 *      bodegaId: // value for 'bodegaId'
 *      productoId: // value for 'productoId'
 *   },
 * });
 */
export function useProductoStockBodegaQuery(
    baseOptions: Apollo.QueryHookOptions<ProductoStockBodegaQuery, ProductoStockBodegaQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<ProductoStockBodegaQuery, ProductoStockBodegaQueryVariables>(ProductoStockBodegaDocument, options);
}
export function useProductoStockBodegaLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<ProductoStockBodegaQuery, ProductoStockBodegaQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<ProductoStockBodegaQuery, ProductoStockBodegaQueryVariables>(
        ProductoStockBodegaDocument,
        options
    );
}
export type ProductoStockBodegaQueryHookResult = ReturnType<typeof useProductoStockBodegaQuery>;
export type ProductoStockBodegaLazyQueryHookResult = ReturnType<typeof useProductoStockBodegaLazyQuery>;
export type ProductoStockBodegaQueryResult = Apollo.QueryResult<ProductoStockBodegaQuery, ProductoStockBodegaQueryVariables>;
export const RecetaDocument = gql`
    query Receta($oid: String!) {
        Receta(oid: $oid) {
            ...recetaElectronicaFields
        }
    }
    ${RecetaElectronicaFieldsFragmentDoc}
`;

/**
 * __useRecetaQuery__
 *
 * To run a query within a React component, call `useRecetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecetaQuery({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useRecetaQuery(baseOptions: Apollo.QueryHookOptions<RecetaQuery, RecetaQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<RecetaQuery, RecetaQueryVariables>(RecetaDocument, options);
}
export function useRecetaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecetaQuery, RecetaQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<RecetaQuery, RecetaQueryVariables>(RecetaDocument, options);
}
export type RecetaQueryHookResult = ReturnType<typeof useRecetaQuery>;
export type RecetaLazyQueryHookResult = ReturnType<typeof useRecetaLazyQuery>;
export type RecetaQueryResult = Apollo.QueryResult<RecetaQuery, RecetaQueryVariables>;
export const StockProductoBodegaListDocument = gql`
    query StockProductoBodegaList(
        $bodega_id: Int!
        $caducado: Boolean!
        $cantidad: Int!
        $entidad_id: Int!
        $producto_id: Int!
    ) {
        stockProductoBodegaList(
            bodega_id: $bodega_id
            caducado: $caducado
            cantidad: $cantidad
            entidad_id: $entidad_id
            producto_id: $producto_id
        ) {
            ...stockProductoBodegaFields
        }
    }
    ${StockProductoBodegaFieldsFragmentDoc}
`;

/**
 * __useStockProductoBodegaListQuery__
 *
 * To run a query within a React component, call `useStockProductoBodegaListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockProductoBodegaListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockProductoBodegaListQuery({
 *   variables: {
 *      bodega_id: // value for 'bodega_id'
 *      caducado: // value for 'caducado'
 *      cantidad: // value for 'cantidad'
 *      entidad_id: // value for 'entidad_id'
 *      producto_id: // value for 'producto_id'
 *   },
 * });
 */
export function useStockProductoBodegaListQuery(
    baseOptions: Apollo.QueryHookOptions<StockProductoBodegaListQuery, StockProductoBodegaListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<StockProductoBodegaListQuery, StockProductoBodegaListQueryVariables>(
        StockProductoBodegaListDocument,
        options
    );
}
export function useStockProductoBodegaListLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<StockProductoBodegaListQuery, StockProductoBodegaListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<StockProductoBodegaListQuery, StockProductoBodegaListQueryVariables>(
        StockProductoBodegaListDocument,
        options
    );
}
export type StockProductoBodegaListQueryHookResult = ReturnType<typeof useStockProductoBodegaListQuery>;
export type StockProductoBodegaListLazyQueryHookResult = ReturnType<typeof useStockProductoBodegaListLazyQuery>;
export type StockProductoBodegaListQueryResult = Apollo.QueryResult<
    StockProductoBodegaListQuery,
    StockProductoBodegaListQueryVariables
>;
export const TerminalUsuarioListDocument = gql`
    query TerminalUsuarioList($usuario_id: String!) {
        terminalUsuarioList(usuario_id: $usuario_id) {
            ...terminalUsuarioListFields
        }
    }
    ${TerminalUsuarioListFieldsFragmentDoc}
`;

/**
 * __useTerminalUsuarioListQuery__
 *
 * To run a query within a React component, call `useTerminalUsuarioListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTerminalUsuarioListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTerminalUsuarioListQuery({
 *   variables: {
 *      usuario_id: // value for 'usuario_id'
 *   },
 * });
 */
export function useTerminalUsuarioListQuery(
    baseOptions: Apollo.QueryHookOptions<TerminalUsuarioListQuery, TerminalUsuarioListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<TerminalUsuarioListQuery, TerminalUsuarioListQueryVariables>(TerminalUsuarioListDocument, options);
}
export function useTerminalUsuarioListLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<TerminalUsuarioListQuery, TerminalUsuarioListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<TerminalUsuarioListQuery, TerminalUsuarioListQueryVariables>(
        TerminalUsuarioListDocument,
        options
    );
}
export type TerminalUsuarioListQueryHookResult = ReturnType<typeof useTerminalUsuarioListQuery>;
export type TerminalUsuarioListLazyQueryHookResult = ReturnType<typeof useTerminalUsuarioListLazyQuery>;
export type TerminalUsuarioListQueryResult = Apollo.QueryResult<TerminalUsuarioListQuery, TerminalUsuarioListQueryVariables>;
export const namedOperations = {
    Query: {
        ProductoBodegaCollection: "ProductoBodegaCollection",
        ProductoStockBodega: "ProductoStockBodega",
        Receta: "Receta",
        StockProductoBodegaList: "StockProductoBodegaList",
        TerminalUsuarioList: "TerminalUsuarioList",
    },
    Mutation: {
        DespachoCreate: "DespachoCreate",
        TurnoOpen: "TurnoOpen",
        TurnoClose: "TurnoClose",
    },
    Fragment: {
        despachoCreateFields: "despachoCreateFields",
        productoBodegaCollectionFields: "productoBodegaCollectionFields",
        productoStockBodegaFields: "productoStockBodegaFields",
        stockProductoBodegaFields: "stockProductoBodegaFields",
        recetaElectronicaFields: "recetaElectronicaFields",
        terminalUsuarioListFields: "terminalUsuarioListFields",
        turnoOpenCreateFields: "turnoOpenCreateFields",
        turnoCloseCreateFields: "turnoCloseCreateFields",
    },
};
