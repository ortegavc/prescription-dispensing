import { ApolloClient, createHttpLink, InMemoryCache,from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import {Constantes} from "../helper/constantes";
import { onError } from "@apollo/client/link/error";


const httpLink = createHttpLink({
  uri: Constantes.URLCONEXIONGRAPQL
});

const errorLink = onError(({ graphQLErrors, networkError,response }) => {	
	
	if (graphQLErrors) {			
			graphQLErrors.map(({ message,extensions }:any) =>{
				if(extensions?.response?.statusCode == 403) {
					localStorage.setItem('errorGraphql', `[GraphQL error]: Message: ${message}, Code: ${extensions?.response?.statusCode}, Error: ${extensions?.response?.error}`);
				}else if(extensions?.response?.statusCode == 500){

				}else{
					throw Error(`[GraphQL error]: Message: ${message}, Code: ${extensions?.response?.statusCode}, Error: ${extensions?.response?.error}`)
				}
			}	
		);
	}

	if (networkError) {		
		throw Error(`[Network error]: ${networkError} | Servicio GRAPHQL no disponible`)
	}

});


const appLink = from([
  	errorLink, httpLink
])

const authLink = setContext((_, { headers }) => {  
	const token =sessionStorage.getItem('keycloakTokenInv_terminal'); 
	return {
		headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : "",
		}
	}
});

export const client = new ApolloClient({
	link: authLink.concat(appLink),
	cache: new InMemoryCache()
});
