import LoadingSpinner from "./loading";
import { useRef, useEffect, useState } from "react";

const Board = ({messages, postData, loading}) => {
   const ref = useRef(null);
   const [messageInput, setMessageInput] = useState("");

   const scrollToBottom = () => {
      const lastChildElement = ref.current?.lastElementChild;
      lastChildElement?.scrollIntoView({behavior:'smooth'});
   };

   useEffect(() => {
      scrollToBottom();
   },[messages])

   const handleFormSubmit = async (e) => {
      e.preventDefault();
      await postData(e);
      setMessageInput("");
    };

 return(
   <div className="w-[30rem] mx-auto my-8 p-4 border rounded shadow "> 

      <div className="h-96 overflow-y-auto border mb-4 p-2 scroll-smooth">
         <div className="mb-2 w-full h-full" >
            <div ref={ref}>
               {loading ? 
               <div className="flex justify-center content-center h-full"> 
                  <LoadingSpinner/> 
               </div>
               :(messages.map((message) => (
               <div key={message._id} className="mb-6 w-full flex items-end justify-between">
               <div className=" mr-12 flex items-end mb-2">
                  <div className="text-left">
                  <strong>{message.name}</strong>
                  <p className="bg-blue-500 text-white p-2 rounded-e-xl rounded-es-xl " >{message.message}</p>
                  </div>
               </div>
               <div className="text-grey-light text-xs ml-2 border-1 border-black mb-2">
                  {new Date(message.date).toLocaleString()}
               </div>
            </div>
            )))}
            </div>
         </div>        
      </div >
      
      <form method="POST" action='\' onSubmit={handleFormSubmit}>
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
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
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