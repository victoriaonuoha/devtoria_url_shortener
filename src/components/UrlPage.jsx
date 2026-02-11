import { useEffect, useState } from "react";

export default function UrlPage() {
  const [longUrl, setLongUrl] = useState("");
  const [error, setError] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const [shorten, setShorten] = useState(false);
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("urlHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // UseEffects

  // Load history from localStorage
  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem("urlHistory"));
  //   if (saved) setHistory(saved);
  // }, []);

  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem("urlHistory", JSON.stringify(history));
  }, [history]);

  const normalizeUrl = (url) => {
    if (!url.startsWith("https://") && !url.startsWith("http://")) {
      return "https://" + url;
    }
    return url;
  };

  const isValidUrl = (url) => {
    try {
      const parsed = new URL(url);

      // Require at least one dot in hostname (e.g. google.com)
      if (!parsed.hostname.includes(".")) return false;

      return true;
    } catch {
      return false;
    }
  };

  const handlesubmit = async () => {
    if (!longUrl.trim()) {
      setError("Please input a valid link");
      return;
    }
    const fixedUrl = normalizeUrl(longUrl.trim());

    if (!isValidUrl(fixedUrl)) {
      setError("Please input a valid link with correct format");
      return;
    }

    setError("");
    setLoading(true);
    setShorten(true);

    // Actually fetching the shirtened url from api
    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: fixedUrl }),
      });
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setShortUrl(data.result_url);

        // Save to history
        const newEntry = {
          long: fixedUrl,
          short: data.result_url,
        };

        setHistory((prevHistory) => [newEntry, ...prevHistory]);
      }

      console.log(data.result_url); // short URL
    } catch (error) {
      setError("Network error");
    } finally {
      setLoading(false);
      setShorten(false);
    }
  };
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
  };

  return (
    <div className="px-5 lg:px-28 bg-[#edeaea] pb-28 relative ">
      <div className="absolute md:-top-10  -top-18 left-0 right-0 px-5 lg:px-28">
        <form
          action=""
          className=" flex flex-col md:flex-row md:items-start space-y-5 md:space-y-0 p-5 rounded-xl img-form md:w-full md:gap-5"
        >
          <div className=" w-full md:w-[100%]">
            <input
              className="bg-white px-3 py-3 rounded-md text-[#f46262] outline-[#f46262] w-full font-semibold "
              placeholder="Shorten a link here..."
              type="text"
              value={longUrl}
              onChange={(e) => {
                setLongUrl(e.target.value);
                setError(""); // Clear error message on input change
              }}
            />
            {error && (
              <p className="text-[#f46262] pt-2 italic pl-2">{error}</p>
            )}
          </div>

          <button
            type="button"
            onClick={handlesubmit}
            className="w-full py-3 h-12 md:py-0 text-white font-bold  bg-[#2acfcf] rounded-md md:w-[20%] hover:bg-[#a6f3f3] transition duration-300 cursor-pointer"
          >
            {shorten ? "Shortening" : "Shorten It"}
          </button>
        </form>
      </div>

      <div className="pt-28 md:pt-20">
        {history.map((item, index) => (
          <div
            key={index}
            className="border-none flex flex-col md:justify-between bg-white  px-4 py-2 rounded md:items-center mb-2 md:flex-row  gap-1"
          >
            <h1 className=" break-all">
              <b>{item.long}</b>
            </h1>
            <hr className="md:hidden" />
            <div className="flex flex-col md:flex-row md:gap-6 space-y-2 md:space-y-0 md:items-center ">
              <h1 className="text-sm break-all text-blue-600">
                <a
                  className="text-[#2acfcf] font-semibold"
                  href={item.short}
                  target="_blank"
                >
                  {item.short}
                </a>
              </h1>

              <button
                onClick={() => copyToClipboard(item.short, index)}
                className={`px-5 py-2 font-semibold cursor-pointer rounded text-sm md:w-fit w-full text-white 
  ${
    copiedIndex === index
      ? "bg-[#2f2d32] hover:bg-[#443c4d]"
      : "bg-[#2acfcf] hover:bg-[#a6f3f3]"
  }`}
              >
                {copiedIndex === index ? "Copied!" : "Copy"}

              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
