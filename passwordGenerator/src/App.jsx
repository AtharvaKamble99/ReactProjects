import { useState, useEffect, useRef } from "react";
import { useCallback } from "react";

function App() {
  const [length, setLenght] = useState(8);
  const [noAllow, setnoAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz";

    if (noAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "!@#$%^&*()_+~{}[]`";
    }

    for (let i = 1; i <= length; i++) {
      let ind = Math.floor(Math.random() * str.length + 1); //+1 remaining
      pass += str.charAt(ind);
    }

    setPassword(pass);
  }, [length, noAllow, charAllow, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 25);

    //without using passwordRef the password gets directly copied to the clipboard whether or not you click the copy button
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, noAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md  rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-xl  pb-3 text-center">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="outline-none bg-blue-600 text-white shrink-0  ml-3 px-2 py-1 "
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label className="text-md ">Length : {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={noAllow}
              onChange={() => {
                setnoAllow((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                setcharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
