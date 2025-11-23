'use client';
import { HexColorPicker } from "react-colorful";
import { useState } from "react";

interface ColorItem {
  name: string;
  value: string;
  setter: (val: string) => void;
}

const ColorControl = ({ name, value, setter }: ColorItem) => {
  const handleHexInput = (val: string) => {
    const hexRegex = /^#([0-9A-F]{0,6})$/i;
    if (hexRegex.test(val)) setter(val);
  };

  return (
    <div className="flex flex-col items-center gap-2 p-2">
      <p className="text-sm font-medium text-center">{name}</p>

      <HexColorPicker
        color={value}
        onChange={setter}
        style={{ width: "70px", height: "70px" }}
      />

      <input
        type="text"
        value={value}
        onChange={(e) => handleHexInput(e.target.value)}
        className="w-20 rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-mono text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

const CreateTheme = () => {
  const [accent, setAccent] = useState("#ff6b9d");
  const [background, setBackground] = useState("#1a1a1a");
  const [foreground, setForeground] = useState("#ffffff");
  const [black, setBlack] = useState("#2e3436");
  const [red, setRed] = useState("#cc0000");
  const [green, setGreen] = useState("#4e9a06");
  const [yellow, setYellow] = useState("#c4a000");
  const [blue, setBlue] = useState("#3465a4");
  const [magenta, setMagenta] = useState("#75507b");
  const [cyan, setCyan] = useState("#06989a");
  const [white, setWhite] = useState("#d3d7cf");

  const [brightBlack, setBrightBlack] = useState("#555753");
  const [brightRed, setBrightRed] = useState("#ef2929");
  const [brightGreen, setBrightGreen] = useState("#8ae234");
  const [brightYellow, setBrightYellow] = useState("#fce94f");
  const [brightBlue, setBrightBlue] = useState("#729fcf");
  const [brightMagenta, setBrightMagenta] = useState("#ad7fa8");
  const [brightCyan, setBrightCyan] = useState("#34e2e2");
  const [brightWhite, setBrightWhite] = useState("#eeeeec");

  const colors: ColorItem[] = [
    { name: "Accent", value: accent, setter: setAccent },
    { name: "Background", value: background, setter: setBackground },
    { name: "Foreground", value: foreground, setter: setForeground },
    { name: "Black", value: black, setter: setBlack },
    { name: "Red", value: red, setter: setRed },
    { name: "Green", value: green, setter: setGreen },
    { name: "Yellow", value: yellow, setter: setYellow },
    { name: "Blue", value: blue, setter: setBlue },
    { name: "Magenta", value: magenta, setter: setMagenta },
    { name: "Cyan", value: cyan, setter: setCyan },
    { name: "White", value: white, setter: setWhite },
  ];

  const brightColors: ColorItem[] = [
    { name: "Bright Black", value: brightBlack, setter: setBrightBlack },
    { name: "Bright Red", value: brightRed, setter: setBrightRed },
    { name: "Bright Green", value: brightGreen, setter: setBrightGreen },
    { name: "Bright Yellow", value: brightYellow, setter: setBrightYellow },
    { name: "Bright Blue", value: brightBlue, setter: setBrightBlue },
    { name: "Bright Magenta", value: brightMagenta, setter: setBrightMagenta },
    { name: "Bright Cyan", value: brightCyan, setter: setBrightCyan },
    { name: "Bright White", value: brightWhite, setter: setBrightWhite },
  ];

  return (
    <div className="p-8 min-h-screen space-y-10">
      
      {/* Standard Colors */}
      <div>
       
        <div className="grid grid-cols-11 gap-3">
          {colors.map((c) => (
            <ColorControl key={c.name} {...c} />
          ))}
        </div>
      </div>

      {/* Bright Colors */}
      <div>
        <div className="grid grid-cols-11 gap-3">
          {brightColors.map((c) => (
            <ColorControl key={c.name} {...c} />
          ))}
        </div>
      </div>

      {/* Your Terminal Preview (unchanged) */}
      <div
        className="rounded-lg shadow-2xl overflow-hidden max-w-4xl mx-auto font-mono text-sm"
        style={{ backgroundColor: background, color: foreground }}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-gray-400 text-xs">~/warp-themes</span>
        </div>

        <div className="p-6">
          <div className="mb-4" style={{ color: cyan }}>
            neofetch
          </div>
          
          <div className="flex gap-8">
            <div className="shrink-0">
              <pre className="leading-tight text-xs">
                <div style={{ color: accent }}>            .-.</div>
                <div style={{ color: accent }}>          ,*NMM,</div>
                <div style={{ color: accent }}>          .OMMMMO</div>
                <div style={{ color: accent }}>           OMMM0,</div>
                <div style={{ color: accent }}>     .:loddo:' loolodol:.</div>
                <div style={{ color: accent }}>   cKMMMMMMMMNWMMMMMMMMMM0:</div>
                <div style={{ color: red }}> .KMMMMMMMMMMMMMMMMMMMMMMMWd.</div>
                <div style={{ color: red }}> XMMMMMMMMMMMMMMMMMMMMMMMX.</div>
                <div style={{ color: yellow }}>:MMMMMMMMMMMMMMMMMMMMMMMM:</div>
                <div style={{ color: yellow }}>.MMMMMMMMMMMMMMMMMMMMMMMMX.</div>
                <div style={{ color: yellow }}>  kMMMMMMMMMMMMMMMMMMMMMMMMWd.</div>
                <div style={{ color: green }}>  .XMMMMMMMMMMMMMMMMMMMMMMMMMMk</div>
                <div style={{ color: green }}>   .XMMMMMMMMMMMMMMMMMMMMMMMMK.</div>
                <div style={{ color: blue }}>     kMMMMMMMMMMMMMMMMMMMMMMd</div>
                <div style={{ color: blue }}>      :KMMMMMMXXXMMMMMMMMk.</div>
                <div style={{ color: magenta }}>         .cooc,.  .,coo:.</div>
              </pre>
            </div>

            <div className="flex-1">
              <div className="mb-2 font-bold" style={{ color: accent }}>
                root@warp-themes
              </div>
              
              <hr className="opacity-30" />

              <div className="mt-2 space-y-1">
                <div><span style={{ color: accent }} className="font-bold">Host:</span> warp-themes.com</div>
                <div><span style={{ color: accent }} className="font-bold">Uptime:</span> 12 hours, 8 mins</div>
                <div><span style={{ color: accent }} className="font-bold">Shell:</span> zsh</div>
                <div><span style={{ color: accent }} className="font-bold">Terminal:</span> WarpTerminal</div>

                {/* Standard palette */}
                <div className="flex gap-1 mt-4">
                  <div className="w-8 h-4" style={{ backgroundColor: black }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: red }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: green }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: yellow }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: blue }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: magenta }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: cyan }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: white }}></div>
                </div>

                {/* Bright palette */}
                <div className="flex gap-1 mt-2">
                  <div className="w-8 h-4" style={{ backgroundColor: brightBlack }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: brightRed }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: brightGreen }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: brightYellow }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: brightBlue }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: brightMagenta }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: brightCyan }}></div>
                  <div className="w-8 h-4" style={{ backgroundColor: brightWhite }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <span style={{ color: cyan }}>~/warp-themes git:(main)</span><br />
            <span style={{ color: green }}>echo "Welcome to Warp-Themes!"</span>
            <span className="animate-pulse">▊</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateTheme;
