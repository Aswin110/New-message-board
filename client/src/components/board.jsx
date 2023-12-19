

const Board = ({messages}) => {

 return(
   <div className="max-w-lg mx-auto my-8 p-4 border rounded shadow ">
      <div className="h-96 overflow-y-auto border mb-4 p-2">
         <div className="mb-2 w-full h-full" >
            {messages.map((message) => (
             <div key={message._id} className="mb-2 w-full flex items-start">
             <div className=" mr-12">
               <div className="bg-blue-500 text-white p-2 rounded ">
                 <strong>{message.name}</strong>
                 <p>{message.message}</p>
               </div>
             </div>
             <div className="text-grey-light text-xs ml-2">
               {new Date(message.date).toLocaleString()}
             </div>
           </div>
         ))}
         </div>
      </div>
      <form method="" action='\'>
         <div className="mb-4">
         <input
            type="text"
            required={true}
            placeholder="Enter your username..."
            className="p-2 border rounded"
         />
         </div>
         <div className="flex">
         <input
            type="text"
            required={true}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-l"
         />
         <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r"
         >
            Send
         </button>
         </div>
      </form>
    </div>
 )
}

export default Board;