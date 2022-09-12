import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  background: white;
  border: 1px solid #000;
  padding: 24px 16px;
  min-width: 320px;
`;

export const Backdrop = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
