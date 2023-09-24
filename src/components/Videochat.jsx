import { useEffect } from 'react';
import { useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';

export default function Videochat({authtoken}) {
  const [meeting, initMeeting] = useDyteClient();

  console.log(authtoken);

  useEffect(() => {
    initMeeting({
      authToken: authtoken,
      defaults: {
        audio: false,
        video: false,
      },
    });
  }, []);

  return <DyteMeeting meeting={meeting} />;
}