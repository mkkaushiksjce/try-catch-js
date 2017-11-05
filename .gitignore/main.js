let genericFunction = {
    callbackAccepter : (callback)=>{
        callback();
    }
}; 

function mainFunction(){

    try{
        genericFunction.callbackAccepter(()=>{
            try{
                debugger;
                genericFunction.callbackAccepter(()=>{
                    try{
                        throw new Error("There is an error");
                    }finally{
                        debugger;
                        console.log("no errro");
                    }
                });
            }
            finally{
                debugger;
                console.log("no error")
            }
        });
    }
    catch(exception){
        console.log("error", exception.message);
    }

};

mainFunction();
