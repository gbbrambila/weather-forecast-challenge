import axios from 'axios';

class IpInfoApi {

     getMyIp() {

        return new Promise( (resolve, reject) => {

            axios.get('https://ipinfo.io').then( (response) => {
                    
                resolve(response)

            }).catch( (error) => {

                reject(error)
                
            });

        });

    }

}

export default IpInfoApi;