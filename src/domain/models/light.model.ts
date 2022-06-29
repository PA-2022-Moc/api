interface Light {
  id: string;
  powerOn: boolean;
  color: string;
  brightness: number;
  autoBrightness: boolean;
  randomMode: boolean;
  partyMode: boolean;
}

export { Light };
