import { useEffect } from 'react';
import { useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';

export default function Videochat() {
  const [meeting, initMeeting] = useDyteClient();

  useEffect(() => {
    initMeeting({
      authToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjVhOWU3YTUxLTYxMDUtNDRkYy04ZWRhLTdlNThhZTkwNDhlMyIsIm1lZXRpbmdJZCI6ImJiYjg4ZjVmLTczMDAtNDI4NC05Y2E5LTRiYThmMjJjY2RmOCIsInBhcnRpY2lwYW50SWQiOiJhYWFiZDlhYS00OGIwLTRiZjItYWNkZi1hMjNiZTYxZTZhNDciLCJwcmVzZXRJZCI6ImM3NjQwZmJiLTY3OGEtNGY5Yy04YzlmLWU4OTUxOWFjZTMxMiIsImlhdCI6MTY5NTQ3MTUzNiwiZXhwIjoxNzA0MTExNTM2fQ.hqxOdXE-6-5ynVqQY08Mgkc0c2DWFBlbIGHlYyif4I81bMfPFqvGHFD9Wux38djUWBaLuLjhRxrT0NVEDOwQnlpJ5vGzqF5yO1YqQmc4fDmUIgH4eUTyjak0Y9qbPN6FsqGKGu_eH0MrXiXNjK93F5VdYqmuKF0szsUiMlpqzsZo4G2ROvaqbw_jElcCxo7zWVRUfXpVprkb9RL8e6s7d2BiQLOQqQ5qcA1mZpy7cDd8wgf5I7bSolpFrGAQqkmCBM_4jEZjEKvGm4PqZ5DwQNvkHqTz2eSh1Z7_V1bM4nzDtCg9KborfKcoaSfzeppEPBRelAYctMSMGJmmHkhgkQ",
      defaults: {
        audio: false,
        video: false,
      },
    });
  }, []);

  return <DyteMeeting meeting={meeting} />;
}