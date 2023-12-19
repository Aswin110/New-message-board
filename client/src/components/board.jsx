import LoadingSpinner from "./loading";

const Board = ({messages, postData, loading}) => {

 return(
   <div className="w-[30rem] mx-auto my-8 p-4 border rounded shadow ">
      <div className="h-96 overflow-y-auto border mb-4 p-2">
         <div className="mb-2 w-full h-full" >
            {loading ? 
            <div className="flex justify-center content-center h-full"> 
               <LoadingSpinner/> 
            </div>
            :(messages.map((message) => (
             <div key={message._id} className="mb-6 w-full flex items-end justify-between">
             <div className=" mr-12 flex items-end">
               <div className="text-left">
                 <strong>{message.name}</strong>
                 <p className="bg-blue-500 text-white p-2 rounded-e-xl rounded-es-xl " >{message.message}</p>
               </div>
             </div>
             <div className="text-grey-light text-xs ml-2 border-1 border-black">
               {new Date(message.date).toLocaleString()}
             </div>
           </div>
         )))}
         </div>
      </div>
      <form method="" action='\' onSubmit={(e)=>postData(e)}>
         <div className="mb-4">
         <input
            type="text"
            required={true}
            id='name'
            name='name'
            placeholder="Enter your username..."
            className="p-2 border rounded"
         />
         </div>
         <div className="flex">
         <input
            type="text"
            required={true}
            id='message'
            name="message"
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