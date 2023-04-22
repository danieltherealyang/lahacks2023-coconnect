import {Svg, Path} from 'react-native-svg';

export default function User(props) {
  return (
    <Svg style={{width: props.size, height: props.size}} viewBox="0 0 42 41" fill="none">
      <Path
        d="M35 35.875V32.4583C35 30.646 34.2625 28.9079 32.9497 27.6264C31.637 26.3449 29.8565 25.625 28 25.625H14C12.1435 25.625 10.363 26.3449 9.05025 27.6264C7.7375 28.9079 7 30.646 7 32.4583V35.875"
        stroke={props.color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 18.7917C24.866 18.7917 28 15.7323 28 11.9583C28 8.18439 24.866 5.125 21 5.125C17.134 5.125 14 8.18439 14 11.9583C14 15.7323 17.134 18.7917 21 18.7917Z"
        stroke={props.color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}