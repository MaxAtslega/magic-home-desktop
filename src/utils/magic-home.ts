import { Control, Discovery } from 'magic-home';
const discovery = new Discovery();

export interface Device {
  address: string;
  name?: string;
  id: string;
  model: string;
  type?: number;
  on: boolean;
  mode?: string;
  speed?: number;
  color?: { red: number; green: number; blue: number };
  // eslint-disable-next-line camelcase
  warm_white?: number;
  // eslint-disable-next-line camelcase
  cold_white?: number;
}

export const getDevicesInformations = async (devices: any[]) => {
  const devicesList: Device[] = [];

  for await (const device of devices) {
    await getDeviceStateByAddress(device.address)
      .then((state) => {
        devicesList.push({ ...state, ...device, name: device.name });
      })
      .catch(() => {
        devicesList.push({ on: false, ...device, name: device.name });
      });
  }

  return devicesList;
};

export const getAllDeviceInTheNetwork = async () => {
  return await discovery.scan(3000);
};

export const getDeviceStateByAddress = async (address: string) => {
  const device = new Control(address, {
    connect_timeout: 1000,
  });
  return await device.queryState();
};

export const turnOffByAddress = async (address: string) => {
  const device = new Control(address, {
    connect_timeout: 1000,
  });
  await device.turnOff()
  return await device.queryState();
};

export const turnOnByAddress = async (address: string) => {
  const device = new Control(address, {
    connect_timeout: 1000,
  });

  await device.turnOn()
  return await device.queryState();
};

export const changeColorByAddress = async (address: string, color: {red: number, green: number, blue: number} ) => {
  const device = new Control(address, {
    connect_timeout: 1000,
  });

  await device.setColor(color.red, color.green, color.blue)
};
