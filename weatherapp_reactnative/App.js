import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

// export default function App() {
//   return <Loading />;
// }

export default class extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  };
  componentDidMount() {}
  render() {
    return <Loading />;
  }
}
