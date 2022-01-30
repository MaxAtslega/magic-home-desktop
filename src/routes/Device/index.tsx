import React, { useEffect, useState } from "react";
import Header from '../../components/Header'
import { useLocation } from "react-router-dom";
import { Section, Input, SectionTitle, Button } from "./Device.styled";
import { SliderPicker  } from "react-color";
import Store from 'electron-store';
import { changeColorByAddress } from "../../utils/magic-home";

const store = new Store();
export default function Device() {

  const location = useLocation();

  const locationState: {name: string, address: string, color: {red: number, green: number, blue: number}} = location.state as {name: string, address: string, color: {red: number, green: number, blue: number}};

  const [name, setName] = useState(locationState.name)
  const [color, setColor] = useState(locationState.color)

  const [input, setInput] = useState(locationState.name)


  return (
    <React.Fragment>
      <Header title={'Device: '+ name}/>
      <Section>
        Change device name:
        <Input
          type="text"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <Button onClick={() => {
          setName(input)
          const devices: any[] = store.get("devices") ? store.get("devices")  as any[] : [];
          const newDevices: any[] = [];
          devices.forEach(device => {
            if(device.name === name){
              device.name = input;
              newDevices.push(device)
            }else{
              newDevices.push(device)
            }
          })

          store.set("devices", newDevices)

        }}>Save</Button>
      </Section>
      <Section>
        <SectionTitle>Select a color:</SectionTitle>
        <SliderPicker
          color={ {r: color.red, g: color.green, b: color.blue} }
          onChangeComplete={ (color) => {
            setColor({red: color.rgb.r, green: color.rgb.g, blue: color.rgb.b})
            changeColorByAddress(locationState.address, {red: color.rgb.r, green: color.rgb.g, blue: color.rgb.b})
          }}
        />
      </Section>
    </React.Fragment>
  )
}
