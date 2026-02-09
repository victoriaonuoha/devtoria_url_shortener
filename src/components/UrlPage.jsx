import { useState } from "react";

export default function UrlPage() {
  const [longUrl, setLongUrl] = useState("");

  return (
    <div className="px-7 lg:px-28 bg-[#edeaea] relative ">
      <div className="absolute md:-top-10 -top-18 left-0 right-0 px-7 lg:px-28">
        <form
          action=""
          className=" flex flex-col md:flex-row space-y-5 md:space-y-0 p-5 rounded-xl img-form md:w-full md:gap-5"
        >
          <input
            className="bg-white px-3 py-3 rounded-md text-[#f46262] outline-[#f46262] font-semibold md:w-[70%] "
            placeholder="Shorten a link here..."
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 md:py-0 text-white font-bold  bg-[#2acfcf] rounded-md md:w-[20%] hover:bg-[#a6f3f3] transition duration-300 cursor-pointer"
          >
            Shorten It!
          </button>
        </form>
      </div>

      <div className="pt-24 md:pt-12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
        praesentium eaque, dolorem id totam quisquam enim officia tempora minima
        error ad repudiandae repellendus inventore illo deserunt nemo earum
        dolore nihil! Culpa, omnis perferendis? Reprehenderit fugit praesentium
        inventore reiciendis assumenda quae beatae cum excepturi eum velit.
        Ullam temporibus, numquam ea dolorem inventore nulla repudiandae enim
        officiis eaque sit, ab aut blanditiis? Animi aliquid amet aspernatur
        dolorum sequi quod id similique ipsa iusto, asperiores veniam, rem eum
        necessitatibus consequatur unde eos possimus molestias delectus
        veritatis, nulla quibusdam facere! Dolorem laborum quia debitis! Aliquam
        fuga perspiciatis laudantium obcaecati libero in deleniti amet vitae
        expedita numquam unde quas ratione repudiandae minima veniam delectus,
        labore magnam cumque iusto pariatur aperiam esse reiciendis rerum. Vel,
        est. Laboriosam numquam impedit accusantium id est cupiditate animi
        deleniti quae, officia aliquid dolorem! Consequuntur adipisci nisi
        dolor, fugiat dolore obcaecati quo repellat, aliquam laudantium iusto
        numquam rerum doloremque quasi nam!
      </div>
    </div>
  );
}
