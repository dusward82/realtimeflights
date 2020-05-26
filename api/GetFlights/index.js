module.exports = async function (context, req) {
    context.res = {
      body: { 
        text: "Howdy from the API" 
      }
    };
  };