
 if (window.File && window.FileReader && window.FileList) {
 console.log('Todas las APIs soportadas');
 } else {
 alert('La API de FILE no es soportada en este navegador.');
 }

function seleccionaVideo ( self )
{
	var file = document.getElementById( 'file' );
    var source = file.value;
    var formato = /(.mp4)$/i;

	if ( !formato.exec( source ) )
	{
		alert( "Elige un archivo con formato .mp4" );
		file.value = '';
		return false;
	}
	else
	{
		if ( file.files && file.files[ 0 ] )
		{
			var file = self.files[ 0 ];
			var reader = new FileReader();

			reader.onload = function ( e )
			{
				var src = e.target.result;
				var video = document.getElementById( "video" );
				var source = document.getElementById( "source" );

				source.setAttribute( "src", src );
				video.load();
				
				alert( " La operación puede demorarse unos minutos. " );
			};
			reader.readAsDataURL( file );
		}
	};
}