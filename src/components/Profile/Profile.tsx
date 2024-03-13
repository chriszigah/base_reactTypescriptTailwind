import {FC} from 'react'

export interface IProfile {
    name: string
}

const Profile:FC<IProfile> = ({name}) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default Profile