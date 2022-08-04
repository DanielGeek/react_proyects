import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: 'danielgeek',
  api_key: '821718144147991',
  api_secret: 'H44NijLU2ZDMRU3d-kTtp95PDPM',
  secure: true
});

describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {

      const imageUrl = 'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png';
      const resp = await fetch( imageUrl );
      const blob = await resp.blob();
      const file = new File([blob], 'foto.jpg');

      const url = await fileUpload( file );
      expect( typeof url ).toBe('string');

      // console.log(url);
      const segments = url.split('/');
      const imageId = segments[ segments.length - 1 ].replace('.png', '');

      const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
        resource_type: 'image'
      });
      // console.log({ cloudResp });

    });

    test('debe de retornar null', async() => {
      const file = new File([], 'foto.jpg');

      const url = await fileUpload( file );
      expect( url ).toBe(null);
    });

 });