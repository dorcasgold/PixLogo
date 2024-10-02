import { useContext, useEffect, useState } from "react"
import { Slider } from "./ui/slider"
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem('value'));
  const [rounded, setRounded] = useState(storageValue ? storageValue?.bgRounded : 0);
  const [padding, setPadding] = useState(storageValue ? storageValue?.bgPadding : 0);
  const [color, setColor] = useState(storageValue ? storageValue?.bgColor : '#190b6e');
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color
    }
    setUpdateStorage(updatedValue)
    localStorage.setItem('value', JSON.stringify(updatedValue))
  })
  return (
    <div className="text-slate-50">
      <div className=" py-2">
        <label className="p-2 flex justify-between items-center">Rounded <span>{rounded} px</span></label>
        <Slider defaultValue={[0]} max={512} step={1}
          onValueChange={(event) => setRounded(event[0])}
        />
      </div>

      <div className=" py-2">
        <label className="p-2 flex justify-between items-center">Padding <span>{padding} px</span></label>
        <Slider defaultValue={[40]} max={100} step={1}
          onValueChange={(event) => setPadding(event[0])}
        />
      </div>
      <div className=" py-2">
        <label className="p-2 flex justify-between items-center">Icon Color</label>
        <ColorPickerController hideController={false}
          selectedColor={(color) => setColor(color)} />
      </div>
    </div>
  )
}

export default BackgroundController