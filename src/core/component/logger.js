
var Logger = function(){
	this.write = function(message){
		try
		{
			if(console){
				console.log(message);
			}
		}
		catch(e){
			
		}
		
	};
};

$log = new Logger();