// export interface InputProps {
//   inputFunction: React.Dispatch<React.SetStateAction<string>>;
//   message: string;
//   type?: string;
// }

// const DefaultInput: React.FC<InputProps> = ({
//   inputFunction,
//   message,
//   type = "text",
// }) => {
//   return (
//     <div className="flex flex-col">
//       <label htmlFor="custom-email" className="pl-2">
//         {message}
//       </label>
//       <div className="relative">
//         <img
//           className="absolute top-1/2 -translate-y-1/2 left-2 pointer-events-none"
//           //   src={lockedIcon}
//           alt="Lock icon"
//           draggable="false"
//         ></img>
//         <input
//           autoComplete="off"
//           className="px-5 py-3 pl-10 w-full border-b-2
//                 dark:bg-gray-800"
//           id="custom-email"
//           type={type}
//           //   value={email}
//           onChange={(e) => inputFunction(e.target.value)}
//           placeholder="Enter your email"
//           required
//         />
//       </div>
//     </div>
//   );
// };

// export default DefaultInput;
