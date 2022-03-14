import React from 'react'
import { motion } from 'framer-motion';

const svgVariants = {
    hidden: { y: "100px" },
    show: {
      y: "-10px",
      transition: {
        delay: 1,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };
  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    show: {
      pathLength: 1,
      transition: {
        delay: 1,
        duration: 6,
        ease: "easeInOut",
      },
    },
  };

const Colosal = () => {
    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 920 451"
        id="colosalSvg"
        variants={svgVariants}
        initial="hidden"
        animate="show"
      >
        <motion.path
          variants={pathVariants}
          d="M494.41,288.39l-2-.78-.93,1.18c6.28,6,12.35,12.24,18.9,17.94,4.31,3.74,4.68,4.06,1,8.66-2.22,2.79-4.37,5.63-6.38,8.22,8.43,1.52,11.84-5.43,17.34-9.82-5.54,17.36-10.25,34.4-16.41,50.9-8.61,23.06-18.66,45.51-35.09,64.41-1.91,2.19-3.17,4.94-5.34,8.39l5.27-1,1.24,4.34c-12.09,10.86-26.69,12.75-41.95,8.2-5.37-1.59-12.48-3.41-13.43-11.82l4.9.33c-2-3.39-3.19-6.55-5.28-9-14.19-16.35-22.7-35.9-30.91-55.49-5.32-12.69-9.15-26-13.76-39-1.22-3.41-1.94-7.58-7.11-7.22-.62,0-1.23.1-2.19.19L348.87,291.6c8.3,13.75,19,25,31.29,34.82l1-.73-1.64-3.35H382c-.84-1.53-1.56-3-2.38-4.34-5.27-8.8-5.1-8.58,2.62-14.87a168.55,168.55,0,0,0,13.95-13.45c.89-.92.88-2.72,1.57-5.08,2.72-1.1,6-1,9.88,1.48,13.52,8.35,28.53,11.18,44.29,10.1,1.21-.08,2.34-1.4,2.8-1.69,1.25.38,2.4,1.15,3.2.88,7-2.32,14-4.73,20.94-7.33,3.16-1.18,6-3.54,9.25-4,2.18-.33,4.7,1.69,7.07,2.67Zm-34.15,18.9-.05,0c-.95,2.62-1.91,5.25-2.87,7.87-.53-1.37-.74-3-1.65-4.07-3.55-4.11-7.45-4.05-8.69-.09-1.62,5.19.5,10.74,6.05,14.47l4.52-9.88c2.31,2.34,4.12,5.87,8.91,3.57A83.4,83.4,0,0,0,464,309c-.45-1.21-2.46-1.85-3.75-2.75l.21-.21-.06.26ZM407,299.87l.22-.07-.08.2-.2.1ZM490.12,319l-.1.17c.31-.87.62-1.74.94-2.6l1.9-1.25.3.7.35-.19-.69-.74,3.46-.43c3.61-10-5.13-13.48-10.15-20.33,1,3.42,1.6,5.69,2.22,7.89l-4.69,2.06c1,5,1.14,10.22,7.32,11.76l-2,.93.13-.05-1.14,1.71,0-.17ZM481,310.81l-6-13-1,.17c.54,3.25,1.08,6.51,1.63,9.76-1-.44-1.31-1.21-1.83-1.74-1.27-1.3-2.66-2.49-4-3.73-.68,1.54-1.27,3.12-2.05,4.6-2.37,4.5,1.54,7.7,2.3,11.55s3.36,5.89,7.06,5.36,5.63-5.14,4.47-8.76a29.5,29.5,0,0,1-.72-4.32l3.35,6.55,1.34-.63q-2.29-6.57-4.58-13.14l-1.44.4Q480.31,307.33,481,310.81Zm-62.78-7.59.23-.18-.07.21-6.07,3.8v-5.54l-1.79-.55-7.39,18.28,7.18,3.75c.12.63.25,1.26.37,1.89,3.11-3,6.23-6,9.33-9,.44-.43.65-1.29,1.14-1.46,2.88-1,3.12-1.12,2.79-3.32-.28-1.87-.82-3.71-1.53-6.79L419.21,312C418.78,308.1,418.52,305.66,418.26,303.22ZM428,426.55a12.14,12.14,0,0,0,0-2.62c-3.42-11.12-6.75-22.26-10.4-33.3-.89-2.69-1.43-6.39-6.08-6.21V390c-1.44-3.39-2.58-6.1-3.73-8.81l-1.89.69,4.84,14.37c-3.12-5.65-5.11-11.64-7.44-17.5-.81-2-2.71-5.5-3.64-5.35-3.86.63-2.62,4.21-2.69,6.9a3.29,3.29,0,0,0,.22,1.47c5.87,12.46,11.69,24.94,17.77,37.29.58,1.19,2.73,1.61,4.16,2.38l.69-1c-.78-2.19-1.57-4.37-2.61-7.28Zm44.46-7.41c.4-.37,1.36-.88,1.73-1.67q8.22-17.31,16.25-34.7a6.13,6.13,0,0,0,.53-3.89,36.63,36.63,0,0,0-2.73-5.69c-1.1,1.45-2.57,2.75-3.22,4.38-1.74,4.29-3.12,8.73-4.64,13.11l-.83-.3c.68-2.89,1.35-5.78,2-8.67l-1.64-.52q-2.54,7.15-5.09,14.32l-.68-.23q1.33-5.25,2.65-10.52l-2-.77c-6,5-6,13.1-8.58,19.78-2.69,7-4.45,14.42-6.62,21.65l1.31.49,5.48-9.51Zm24.71-91.65c.14,5.38-3.11,7.09-6.48,9.06-7.84,4.58-14.45,11.32-24.17,12.47-5,.6-10,3.36-14.86,3.09A263.54,263.54,0,0,1,418.56,348c-4.39-.8-8.33-4-12.53-6-1.83-.87-3.78-1.48-5.68-2.22-.5,2.19-.51,3.3,0,3.62,5,3.21,9.68,7.49,15.17,9.16,12.64,3.86,25.82,3.65,39,3.34,17.21-.42,30.4-8.29,41.84-20.11C498.22,333.9,501.4,331.68,497.18,327.49Zm-107-9.56,2.23,1L404,297.66l-3.81,1.49a18.74,18.74,0,0,0,.66-2,12.58,12.58,0,0,0,0-1.91c-9.92,8-11.64,12-8.07,17.53Zm37.32,99.75c1.76-13.66.05-20.27-6.12-22.94C423.6,403.1,425.54,410.39,427.49,417.68ZM459,416.43l1.62.42q2.83-10.53,5.68-21l-2.48-.64C458.08,401.23,460.11,409.22,459,416.43Zm-25.77-99.9-4.58-3.78c-1.08,1.35-2.94,2.65-3,4.07-.08,1.24,1.82,2.61,2.85,3.92Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M474.18,195.6l2.63-5.55c.49,6.22,1,12.6,1.52,19h.61l.27-4.61,7.6,6.28c1.06-1.86,2.13-3.71,3.29-5.71,1.46,1.45-2.11,6.21,3.44,6,5.75-.27,4.08-4.55,4.9-7.84.26,2.41.48,4.52.82,7.82l14.1-10.17.82.65c-5.58,6.43-11.12,12.89-16.76,19.28a67.69,67.69,0,0,1-5,4.84c-3.35,3.09-6.88,3.67-10.83,1-3.44-2.33-7-4.49-10.57-6.63-2.76-1.66-5.23-1.54-7.29,1.35-3.15,4.4-6.44,8.71-10.34,14,5.3,1.36,9.5,2.9,13.83,3.46,10,1.27,16.87,5.51,19.17,16.1,1.14,5.23,3.66,10.17,5.37,14.74-4.25,2.16-8.17,3.38-11.15,5.79-8.76,7.09-19.26,9-29.77,9.48a120.67,120.67,0,0,1-27.56-2.43c-5.3-1-10.19-4.35-15.17-6.81-3.51-1.73-6.87-3.75-11.37-6.23,3.38-8,6.92-16.79,10.93-25.39.66-1.4,3.26-2.16,5.11-2.69,5.43-1.56,10.93-2.84,16.4-4.23,5.67-1.44,6-2.36,2.61-7.24a39.33,39.33,0,0,0-2.77-3.52c-8.81-9.86-6.25-9.4-18.35-2.35-1.43.84-2.62,2.12-4.08,2.86-3.67,1.86-7.46,2.35-10.58-.94-6.05-6.38-11.94-12.93-18.31-20.31,4.82,2.46,4.32-.81,4.23-3.4l5.66,7.33,1-.45v-7.05l.68-.17c.25,1.64.62,3.27.73,4.91.21,3.33,2.08,4.92,5.2,4.71,3.44-.23,2.37-2.82,2.19-4.92a3.5,3.5,0,0,1,1.07-2.9c.35,2.31.69,4.63,1,6.91,5.35.39,8.24-1.24,8.59-7.16.22-3.82,2.32-7.53,3.77-11.83v14.61l1,0c.37-2.74.73-5.48,1.1-8.22.15-1.14-.07-2.91.56-3.3,5.53-3.46,2.45-8.46,2.39-12.82-.05-3.48-.76-6.95-1.09-10.43-.24-2.56-1.93-4.31-3.78-2.55s-4.35.7-5.83,1.91a77.32,77.32,0,0,0-6.88,7c0-.35.19-2.1.4-4.34-3.46.22-6.82.55-10.19.62-12.57.28-21.26-7.12-29.57-15.17a4.24,4.24,0,0,1-.83-2.22c-1.14-6-2.23-12-3.42-18.45,4.54-6.37,11.43-7.76,19.43-6.27,15,2.8,30.11,5.48,45.17,8.2,7.9,1.43,15.45-6.67,13.24-14.19a14.71,14.71,0,0,1-.88-5.81c.88,1.77,1.49,3.75,2.7,5.25,1.69,2.11,3.54,4.82,5.84,5.49,2.07.61,4.84-1.19,7.58-2,.05.27.25,1.53.6,3.65l5.37-8.83c-.4,7,1.65,12.1,6.75,15.69a5.85,5.85,0,0,0,4,.85q24.66-4.75,49.28-9.76c6.63-1.34,14.07,1.65,17.45,7.5.58,1,.14,2.78-.19,4.1-.92,3.7-2.4,7.29-2.94,11-.51,3.55-.11,7.23-.83,10.85v-5.31c-9.75,9.17-19.32,17-33.46,15.34.33,3.6.61,6.66.9,9.86-3.38-2.93,1.43-10.82-7.33-10.43.12,2,.24,3.92.36,5.88-1.71-4.3-2.87-8.8-9.15-8.92l-2.4,3.83c0-1.12.27-2.06-.05-2.72a20.25,20.25,0,0,0-2.21-3.08c-.91.93-2.57,1.82-2.61,2.79-.33,7.25-.33,14.52-.44,21.79l.15-.07-1.14,1.71c0,.28,0,.57,0,.85C471.88,198.21,473,196.82,474.18,195.6ZM466.92,189c.1-.11.29-.23.27-.31a3.39,3.39,0,0,0-.27-.73l-1.19.49v-.15Zm-45-.92,1.07-1.2-.09-5.87c-.34-1-.68-2-1-3-.05-4,0-8.12-3.1-10.86l-2,.67q1.21,5.52,2.41,11l-.13-.24c.24.83.49,1.66.73,2.48v-.31c-.07,2.23-.15,4.47-.21,6.7v-.15l2.44.67Zm44.87-6.72c4.83-3.71,2.39-9.19,4.22-14.16-4.33,1.58-5.69,7.92-3.87,14.26-.25.37-.5.73-.23.33C467.05,182.27,466.93,181.82,466.81,181.38ZM460,206.45c0-3,.38-5-.09-6.92-.76-3-3.83-7.09-2.81-8.58,3-4.34.94-8,.06-11.75-1.14-4.86-2.73-9.28-1.27-14.68,1.15-4.29-.21-9.26-.46-13.93l-1.58-.18q-1.69,4.4-3.4,8.79l-1.11-.24c.6-4.27,1.21-8.55,1.73-12.19l-7.25,1.92-1.15,3.08-4.22-5.17c.54,4.78,1,9,1.5,13.17l-.79,0-4.74-9.69-1.63.41c-.29,4.25-1.74,8.85-.61,12.69,2,6.75-.29,12.5-1.95,18.56-.05.16-.07.33-.11.49-1.16,3.77-1.05,7.19,1.63,8.84-1.59,4-4.89,8.08-4,11,1.39,4.77-1.72,6.56-3.31,9.47-.76,1.4-1.79,2.67-3.46,5.13l17.67,4.64c4.26,6.1,5.21,6.15,10.54.29,5.32,1.43,6.59-4.63,10.66-4.89-.25,1.28-.45,2.37-.79,4.16L466.7,216Zm-10.43,62.41c.45,1.59.55,2.83,1.14,3.75a19.07,19.07,0,0,0,2.76,2.86c.66-1.18,1.64-2.3,1.92-3.57a17.25,17.25,0,0,0,.54-6.17c-.35-2.31-1.47-4.52-2.26-6.77l-1.67.27c-.49,1.47-1,2.94-1.45,4.32-2.07-.82-1.64-7.65-6.25-2.53-4-3.56-5.34-.33-6.71,2.84-.67-1.73-1.26-3.23-2-5-5,3.05-3.41,7.34-3.54,11-.07,1.82.84,3.67,1.31,5.51l4-2.47,3.61,4.21,2.33-2.87,4.84,1.84c.39-1.9.78-3.8,1.33-6.45H437.35l.06-.73Zm11.3-9.91-3,.14c-.32,3.53-.84,7.06-.89,10.6,0,1.8.77,3.61,1.19,5.42l4-2,4.07,1.78c.62-1.8,1.23-3.61,2.07-6.1l-6,.39C461.82,265.66,461.35,262.3,460.89,259Zm-30.05,5.83h-.07a4.24,4.24,0,0,0,0-1.47c-.57-1.41-1.25-2.76-1.88-4.14-1,1.28-2.67,2.47-2.84,3.85a42,42,0,0,0,.12,9.89c.13,1.07,1.75,1.95,2.7,2.93.66-1,1.79-2,1.9-3.06A76.17,76.17,0,0,0,430.84,264.78Zm29.89-71.95,1.06-.26V171.62l-1.06,0ZM424.16,259c-3.62,1.37-5.76,5.85-4.28,7.83a3,3,0,0,0,2.49.92,2.66,2.66,0,0,0,1.71-1.83C424.3,263.78,424.16,261.55,424.16,259Zm40.35-.46c-.34,1.69-.77,2.63-.66,3.49a36.86,36.86,0,0,0,1.34,5.77,9,9,0,0,0,2.48-.5,44.88,44.88,0,0,0-.62-6.95C467,259.86,465.87,259.5,464.51,258.58Zm-47.25-.2-2.06-.2c-.25,2.62-.54,5.23-.64,7.86,0,.19,1.36.44,2.09.67.44-2.23,1-4.44,1.29-6.68C418,259.52,417.5,258.93,417.26,258.38Zm55,.08-1.84.1c0,2.51-.06,5,.12,7.54,0,.2,1.66.3,2.55.44,0-2.31,0-4.62-.05-6.93C473,259.22,472.49,258.84,472.22,258.46Zm4.69,1.06-1.28-.1v12.95l1.28,0Zm-58.14,9.65c1.77,2.69,2.9,4.42,4,6.15.95-1.81,1.89-3.62,3.21-6.15Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M564.45,323.14,553,315.58l-1.35,1c.86,1.68,1.34,3.75,2.63,5C561,328,567.88,334.17,575.35,341l-5.93-3.76-.87.83c3.2,3.3,6.17,6.85,9.63,9.84a126.62,126.62,0,0,0,54,27.66,172.65,172.65,0,0,1,71,36.15c4.16,3.51,8.77,6.48,13.25,9.58,1.14.79,2.59,1.13,5,2.16-6.28.87-11.65,1.87-17.07,2.34-26,2.28-51.25-2.79-76.64-7.26-28.34-5-56.85-8.67-85.79-6.91-15.83,1-31.22,3.54-46.67,11.18,24.11-38.23,36.3-79.46,42.21-123.62l27.35,23.62Zm59.67,62.68L640.5,394l.7-1.21c-1.18-1.12-2.28-2.33-3.54-3.35-4.12-3.32-9.26-5.87-12.26-10-5.6-7.7-14.24-8.47-21.87-11.63-2.95-1.22-6.18-1.83-9-3.25-6.23-3.14-12.3-6.62-18.43-10l-.69,1.3,50,35.52a2.87,2.87,0,0,0-.19-2.42C624.91,388.33,624.72,387.64,624.12,385.82Zm-20.74,12c-5.5-11.41-12.17-21.85-23.85-28.07Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M319.59,336.5l-6.36,4.25c7.8-7.9,17.92-13.55,23.24-23.64l-1.3-1.52q-5.88,3.8-11.77,7.58l-.27-.36,27-23.32c6,43.75,18,84.95,41.16,121.55-8.94-2.39-18.18-5.43-27.64-7.27-19.27-3.75-38.84-3.64-58.18-1.14-26.8,3.47-53.4,8.41-80.18,12.1a203.3,203.3,0,0,1-52.74,0,19,19,0,0,1-4-1.21c6.56-4.89,13.57-10,20.42-15.23a184.93,184.93,0,0,1,71.5-34.07C284.7,368.57,303.61,355.09,319.59,336.5Zm-6.18,18.81c-1.77.28-2.76.2-3.5.59-6.15,3.27-12.22,6.68-18.39,9.91-1.69.88-3.65,1.24-5.44,2-7.26,3-15,5.21-21.61,9.19-5.7,3.42-10.21,8.84-15.22,13.41a32.31,32.31,0,0,0-2.39,2.69l.61.8L263.15,386c-.18,2-.3,3.28-.48,5.26Zm-4.66,14.27c-10.66,5.73-17.59,14.6-23.1,24.7l.94.82Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M639.7,444.84l19.62,4.21-.1.42-22.44-3-1.06,1.9,3.89,1.57-.68.94q-65.68,0-131.37,0c-10.72,0-19.45-11.2-16.74-21.66.41-1.57,2.34-3,3.92-4,11.46-6.73,24.26-9.28,37.2-9.94,15.24-.77,30.56-.18,45.88-.62L566,415.92c0,.59,0,1.18,0,1.76l24.52,3.14-.09.63-10.26-.58-.08.79c10.68,1.5,21.37,2.9,32,4.54,12.16,1.87,24.28,4,36.43,5.94,4.65.76,5.55,3.16,2.15,7.67,7.86,0,14.69.8,21.27-.17a106,106,0,0,1,43,2.49c-10.37,1.81-21.54,4.23-32.84,5.52-5.09.58-10.48-.87-15.66-1.8-5.88-1.07-11.63-2.93-17.53-3.77-3-.43-6.24.59-9.37,1C639.65,443.64,639.68,444.24,639.7,444.84Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M228.83,449l19.52-4.17.12-1.52c-2.92-.48-5.94-1.67-8.74-1.28a104.76,104.76,0,0,0-18,3.94c-8.25,2.71-16.36,2.29-24.62.68s-16.54-3.14-24.21-4.58c9.65-1.75,20-4.65,31-3.52,10.67,1.09,21.41,1.65,32.57,2.48-1.83-7.91-1.8-8,4.53-9,22.3-3.59,44.6-7.14,67-10.73h-9.44l-.1-.59,24.17-3.13-.06-1.36-10.5-1.43c22.5-1.06,45-1.42,66.93,4.48a78.17,78.17,0,0,1,14.66,6.07c5,2.52,5.39,12.41.85,17.71-4.38,5.12-9.47,8.06-16.79,8-42.8-.29-85.6-.14-128.91-.85l3.43-1.8-1-1.87-22.36,2.92Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M330.89,186.73c-.48-7.57-1-15.14-1.44-22.78l-3.16,1.78c-.07-5,5.81-9.49,1.29-14.9,6.35,4.16,7.39,10.68,8.29,17.33.5,3.74,1.4,7.43,1.89,11.18.68,5.21,2.64,10,.5,15.81C336,201.32,341,206.69,344,212c1.33,2.35,3,4.52,3.92,7.13-9.23-9-16-19.3-17.14-32.52q2.23,5.67,4.47,11.31l2-.54q-2-15-4-30h-1.64Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M556.33,188.41c-.26,2.22-.16,4.57-.85,6.64a53.48,53.48,0,0,1-4.75,11.3c-2.5,4-5.87,7.54-8.86,11.27l-1.1-.56c.92-2.08,1.52-4.39,2.81-6.2,4-5.67,7-11.23,4.76-18.75-.83-2.77,1.13-6.35,1.71-9.58,1.34-7.47,2.37-15,4-22.4a26.57,26.57,0,0,1,4.93-9.7c-3.86,5.53,2,9.81,1.82,15.1l-3.12-1.72q-.72,12.39-1.45,24.77c0-2-.07-4.11-.12-6.17q-.17-6.76-.35-13.54l-1.44.06c-1.45,9.24-4.46,18.32-3.58,27.8l1.37.32Q554.23,192.73,556.33,188.41Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M353,130.33l-3-3.76,1.26.36c1.06-4.18,2.73-8.31,3-12.54A141.07,141.07,0,0,0,354.54,92a25.66,25.66,0,0,0-11.88-19.92l1-1.53c1.51.76,3.84,1.13,4.4,2.34,3,6.36,6.32,12.73,8.05,19.48,2.46,9.54,4.35,19.43,1.62,29.3C357,124.62,354.77,127.24,353,130.33Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M531.66,192.16c.54,10.26,1.11,21.14,1.68,32l2.21.09,2-22.59c.32,3.25,1.1,7.82,1.13,12.39,0,4.79,0,9.75-1.21,14.33-1.13,4.34-3.78,8.28-4.92,10.65,0-2.86.43-7.84-.09-12.72-1-9.46-2.78-18.85-3.62-28.32C528.61,195.87,531,193.5,531.66,192.16Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M533.26,88.3c.2,4.47.55,9.57.61,14.68,0,1.59-.74,3.2-1.17,4.79-1.63,6,1.23,15.34,5.68,18.55-1.77,2.28-1.77,2.28,1.55,5.74-3.86-.31-9.19-5.78-9.68-11.09C529.19,109.61,529.7,98.32,533.26,88.3Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M354.08,188.39c3.28,4.35,5,8,4.12,13.57-1.88,11.41-2.34,23-3.27,33.34-3.92-10.35-6.76-22.36-4.5-33.81.64,6.57,1.41,14.43,2.18,22.29l2-.15C354.81,212.13,357.5,200.65,354.08,188.39Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M511.74,220.9c-.82,4.36-1.51,8-2.42,12.8-.54-2.21-.83-3.41-1.13-4.62l-1.13-.36c-.65,2.14-1.65,4.24-1.86,6.41-.37,3.78-.09,7.63-.42,11.41-.14,1.57-1.14,3.06-2.12,5.5C496.3,238.07,504.18,229.94,511.74,220.9Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M382.08,228.08c8.34,7.73,6,17.57,2.4,27.54-.47-3.31-1.11-6.61-1.37-9.93C382.64,239.65,382.39,233.6,382.08,228.08Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M550,150.12,547,148c.54,7.11,1,13.65,1.52,20-1.64-2.09-3.73-3.78-4.44-5.93s-.16-4.73,0-7.11a79.43,79.43,0,0,1,1.07-8.28,15.87,15.87,0,0,1,1.58-3.51c.71,1.12,1.51,2.19,2.12,3.37A28.52,28.52,0,0,1,550,150.12Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M371,287c1.52-5.29,3.09-10.57,4.55-15.88.54-2,.19-4.83,3.75-2.79a28.46,28.46,0,0,0,2.13-2.87l1.27.71-11.8,20.73Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M343.86,164.05c-1.32-7.66-2.4-13.89-3.69-21.37,1.72,1,3.54,1.57,3.56,2.18C344,150.85,343.86,156.85,343.86,164.05Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M514.58,282.28c-2.39-5.11-7.93-9.23-4.83-17.27C511.55,271.45,513.07,276.87,514.58,282.28Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M519.4,287.5c1.46-3.09,2.83-6,4.82-10.24-.45,3.45-.71,5.49-1,7.94l2.34-.82.59.85-7.23,4.86-2.78-3.93c.11-.19.22-.38.32-.57Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M544.36,70.9l-10.29,8.46L536,81.29C537.38,74.8,540.84,70.8,544.36,70.9Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M531.22,254.53l-1.4,20.19-1-.05q.45-10,.89-20Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M370.9,286.87c-.87.68-2.13,2.13-2.54,1.92-1.54-.8-3.74-2-4-3.29-.58-3.17-.18-6.52.25-10,.52,2.94,1.14,5.87,1.55,8.83.43,3.22,2.12,3.79,4.83,2.6Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M358.38,270.48q-.72-9.64-1.45-19.28l1.22-.09q.59,9.66,1.15,19.31Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M470.92,195.45c0-.28,0-.57,0-.85l1.14-1.71-.15.07,2.3,2.81Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M470.92,195.45l3.31.32-.05-.17C473,196.82,471.88,198.21,470.92,195.45Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M428,426.55l-10.82-13.42c1,2.91,1.83,5.09,2.61,7.28l-.69,1c-1.43-.77-3.58-1.19-4.16-2.38-6.08-12.35-11.9-24.83-17.77-37.29a3.29,3.29,0,0,1-.22-1.47c.07-2.69-1.17-6.27,2.69-6.9.93-.15,2.83,3.3,3.64,5.35,2.33,5.86,4.32,11.85,7.44,17.5l-4.84-14.37,1.89-.69c1.15,2.71,2.29,5.42,3.73,8.81v-5.6c4.65-.18,5.19,3.52,6.08,6.21,3.65,11,7,22.18,10.4,33.3A12.14,12.14,0,0,1,428,426.55Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M472.47,419.14l-6-2.74L461,425.91l-1.31-.49c2.17-7.23,3.93-14.61,6.62-21.65,2.55-6.68,2.6-14.79,8.58-19.78l2,.77q-1.32,5.26-2.65,10.52l.68.23q2.55-7.15,5.09-14.32l1.64.52c-.68,2.89-1.35,5.78-2,8.67l.83.3c1.52-4.38,2.9-8.82,4.64-13.11.65-1.63,2.12-2.93,3.22-4.38a36.63,36.63,0,0,1,2.73,5.69,6.13,6.13,0,0,1-.53,3.89q-8,17.4-16.25,34.7C473.83,418.26,472.87,418.77,472.47,419.14Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M497.18,327.49c4.22,4.19,1,6.41-.81,8.33-11.44,11.82-24.63,19.69-41.84,20.11-13.21.31-26.39.52-39-3.34-5.49-1.67-10.18-5.95-15.17-9.16-.49-.32-.48-1.43,0-3.62,1.9.74,3.85,1.35,5.68,2.22,4.2,2,8.14,5.2,12.53,6a263.54,263.54,0,0,0,33.11,4.08c4.87.27,9.84-2.49,14.86-3.09,9.72-1.15,16.33-7.89,24.17-12.47C494.07,334.58,497.32,332.87,497.18,327.49Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M418.26,303.22c.26,2.44.52,4.88.95,8.79l3.24-7.71c.71,3.08,1.25,4.92,1.53,6.79.33,2.2.09,2.31-2.79,3.32-.49.17-.7,1-1.14,1.46-3.1,3-6.22,6-9.33,9-.12-.63-.25-1.26-.37-1.89l-7.18-3.75L410.56,301l1.79.55v5.54l6.07-3.8Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M480.93,310.66a30.81,30.81,0,0,0,.73,4.33c1.16,3.62-.82,8.24-4.47,8.76s-6.29-1.48-7.06-5.36-4.67-7.05-2.3-11.55c.78-1.48,1.37-3.06,2.05-4.6,1.34,1.24,2.73,2.43,4,3.73.52.53.79,1.3,1.83,1.74-.55-3.25-1.09-6.51-1.63-9.76l1-.17,6,13Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M491,316c-6.18-1.54-6.29-6.79-7.32-11.76l4.69-2.06c-.62-2.2-1.25-4.47-2.22-7.89,5,6.85,13.76,10.33,10.15,20.33l-3.46.43c.09.13.1.21,0,.23l-1.9,1.25A.88.88,0,0,1,491,316Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M457.57,315.55l-4.52,9.88c-5.55-3.73-7.67-9.28-6.05-14.47,1.24-4,5.14-4,8.69.09.91,1.05,1.12,2.7,1.65,4.07A1.37,1.37,0,0,0,457.57,315.55Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M390.17,317.93l2.61-5.12c-3.57-5.56-1.85-9.56,8.07-17.53a12.58,12.58,0,0,1,0,1.91,18.74,18.74,0,0,1-.66,2l3.81-1.49L392.4,318.91Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M457.57,315.55a1.37,1.37,0,0,1-.23-.43q1.44-3.93,2.87-7.89l.05.06c.05-.34.1-.67.16-1l-.16,0c1.29.9,3.3,1.54,3.75,2.75a83.4,83.4,0,0,1,2.47,10.14C461.69,321.42,459.88,317.89,457.57,315.55Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M427.49,417.68c-1.95-7.29-3.89-14.58-6.12-22.94C427.54,397.41,429.25,404,427.49,417.68Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M459,416.43c1.1-7.21-.93-15.2,4.82-21.26l2.48.64q-2.83,10.51-5.68,21Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M433.24,316.53l-4.76,4.21c-1-1.31-2.93-2.68-2.85-3.92.09-1.42,1.95-2.72,3-4.07Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M481,310.81q-.72-3.48-1.43-7l1.44-.4q2.28,6.57,4.58,13.14l-1.34.63q-1.68-3.27-3.35-6.56A1.3,1.3,0,0,0,481,310.81Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M491,316a.88.88,0,0,0,0,.53c-.32.86-.63,1.73-.94,2.6-.36-.74-.72-1.47-1.07-2.2Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M492.86,315.29c.06,0,.05-.1,0-.23l.69.74-.35.19Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M489,316.94c.35.73.71,1.46,1.07,2.2l.1-.17-2.21-.54,0,.17,1.14-1.71Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M487.91,318.43l2.21.54Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M489.08,316.89l-1.14,1.71Z"
          transform="translate(-1 -1)"
        />
        <polygon points="406.1 299 406.18 298.8 405.96 298.87 406.1 299" />
        <polygon points="405.96 298.87 405.9 299.1 406.1 299 405.96 298.87" />
        <polygon points="417.26 302.22 417.42 302.25 417.49 302.04 417.26 302.22" />
        <polygon points="459.26 305.24 459.42 305.28 459.47 305.02 459.26 305.24" />
        <motion.path
          variants={pathVariants}
          d="M460.26,307.29l-.05-.06Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M460,206.45,466.7,216,459,220.92c.34-1.79.54-2.88.79-4.16-4.07.26-5.34,6.32-10.66,4.89-5.33,5.86-6.28,5.81-10.54-.29L421,216.72c1.67-2.46,2.7-3.73,3.46-5.13,1.59-2.91,4.7-4.7,3.31-9.47-.85-2.92,2.45-7,4-11-2.68-1.65-2.79-5.07-1.63-8.84,0-.16.06-.33.11-.49,1.66-6.06,3.94-11.81,1.95-18.56-1.13-3.84.32-8.44.61-12.69l1.63-.41,4.74,9.69.79,0c-.48-4.2-1-8.39-1.5-13.17l4.22,5.17,1.15-3.08,7.25-1.92c-.52,3.64-1.13,7.92-1.73,12.19l1.11.24q1.71-4.39,3.4-8.79l1.58.18c.25,4.67,1.61,9.64.46,13.93-1.46,5.4.13,9.82,1.27,14.68.88,3.77,2.9,7.41-.06,11.75-1,1.49,2.05,5.57,2.81,8.58C460.4,201.4,460,203.47,460,206.45Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M449.59,268.86H437.41l-.06.73h12.22c-.55,2.65-.94,4.55-1.33,6.45l-4.84-1.84-2.33,2.87-3.61-4.21-4,2.47c-.47-1.84-1.38-3.69-1.31-5.51.13-3.65-1.43-7.94,3.54-11,.7,1.8,1.29,3.3,2,5,1.37-3.17,2.73-6.4,6.71-2.84,4.61-5.12,4.18,1.71,6.25,2.53.46-1.38,1-2.85,1.45-4.32l1.67-.27c.79,2.25,1.91,4.46,2.26,6.77a17.25,17.25,0,0,1-.54,6.17c-.28,1.27-1.26,2.39-1.92,3.57a19.07,19.07,0,0,1-2.76-2.86C450.14,271.69,450,270.45,449.59,268.86Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M460.89,259c.46,3.35.93,6.71,1.41,10.2l6-.39c-.84,2.49-1.45,4.3-2.07,6.1l-4.07-1.78-4,2c-.42-1.81-1.22-3.62-1.19-5.42.05-3.54.57-7.07.89-10.6Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M430.84,264.78a76.17,76.17,0,0,1-.09,8c-.11,1.07-1.24,2-1.9,3.06-1-1-2.57-1.86-2.7-2.93A42,42,0,0,1,426,263c.17-1.38,1.85-2.57,2.84-3.85.63,1.38,1.31,2.73,1.88,4.14a4.24,4.24,0,0,1,0,1.47Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M467.16,181.48c-1.82-6.34-.46-12.68,3.87-14.26-1.83,5,.61,10.45-4.22,14.16Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M419.85,181.08c-.24-.82-.49-1.65-.73-2.48l.13.24q-1.2-5.52-2.41-11l2-.67c3.1,2.74,3.05,6.82,3.1,10.86l.14-.09-1.1,2.2.1-.2Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M460.73,192.83V171.64l1.06,0v20.95Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M424.16,259c0,2.51.14,4.74-.08,6.92a2.66,2.66,0,0,1-1.71,1.83,3,3,0,0,1-2.49-.92C418.4,264.89,420.54,260.41,424.16,259Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M464.51,258.58c1.36.92,2.45,1.28,2.54,1.81a44.88,44.88,0,0,1,.62,6.95,9,9,0,0,1-2.48.5,36.86,36.86,0,0,1-1.34-5.77C463.74,261.21,464.17,260.27,464.51,258.58Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M417.26,258.38c.24.55.75,1.14.68,1.65-.34,2.24-.85,4.45-1.29,6.68-.73-.23-2.1-.48-2.09-.67.1-2.63.39-5.24.64-7.86Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M472.22,258.46c.27.38.76.76.78,1.15.08,2.31.05,4.62.05,6.93-.89-.14-2.54-.24-2.55-.44-.18-2.51-.12-5-.12-7.54Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M476.91,259.52V272.4l-1.28,0V259.42Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M418.77,269.17H426c-1.32,2.53-2.26,4.34-3.21,6.15C421.67,273.59,420.54,271.86,418.77,269.17Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M419.64,187.47c.07-2.23.15-4.47.22-6.7.4.44.79.89,1.18,1.33l-.14-.14L422,183.1l-.06-.21,0,3.22-.06-.21,0,1.17.14-.14Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M422.92,181l.09,5.87.09.14L422,185.9l.06.21c0-1.07,0-2.15,0-3.22l.06.21,0-1.17-.15.15,1.16-1.16Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M421.91,178c.33,1,.67,2,1,3l.16-.11-1.16,1.16.15-.15-1.17,0,.14.14c0-.73,0-1.46,0-2.2l-.1.2,1.1-2.2Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M467.16,181.48l-.35-.1c.12.44.24.89.12.43C466.66,182.21,466.91,181.85,467.16,181.48Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M422.1,188l-2.44-.67Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M422.1,188l-2.44-.67v.15l2.42-.54c0,.39-.09.78-.13,1.17Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M421.05,179.9v2.2c-.39-.44-.78-.89-1.18-1.33v.31Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M472.08,192.89l-1.14,1.71Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M465.72,188.47l1.2-.49.14-.06Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M419.25,178.84l-.13-.24Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M421.94,188.1c0-.39.09-.78.13-1.17l-.14.14,1.17,0-.09-.14Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M466.92,189l-1.19-.7,1.32.77Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M466.92,188a3.39,3.39,0,0,1,.27.73c0,.08-.17.2-.27.31l.13.07c0-.39,0-.78,0-1.17Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M467.06,187.92c0,.39,0,.78,0,1.17l-1.32-.77v.15Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M624.12,385.82c.6,1.82.79,2.51,1.06,3.17a2.87,2.87,0,0,1,.19,2.42l-50-35.52.69-1.3c6.13,3.33,12.2,6.81,18.43,10,2.83,1.42,6.06,2,9,3.25,7.63,3.16,16.27,3.93,21.87,11.63,3,4.13,8.14,6.68,12.26,10,1.26,1,2.36,2.23,3.54,3.35l-.7,1.21Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M603.38,397.81l-23.85-28.07C591.21,376,597.88,386.4,603.38,397.81Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M313.41,355.31l-50.74,36c.18-2,.3-3.25.48-5.26l-15.68,7.86-.61-.8a32.31,32.31,0,0,1,2.39-2.69c5-4.57,9.52-10,15.22-13.41,6.65-4,14.35-6.23,21.61-9.19,1.79-.73,3.75-1.09,5.44-2,6.17-3.23,12.24-6.64,18.39-9.91C310.65,355.51,311.64,355.59,313.41,355.31Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M308.75,369.58,286.59,395.1l-.94-.82C291.16,384.18,298.09,375.31,308.75,369.58Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M330.89,186.73l.75-19.43h1.64q2,15,4,30l-2,.54q-2.24-5.64-4.47-11.31A1.3,1.3,0,0,0,330.89,186.73Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M556.33,188.41q-2.1,4.32-4.21,8.64l-1.37-.32c-.88-9.48,2.13-18.56,3.58-27.8l1.44-.06q.18,6.76.35,13.54c0,2.06.07,4.13.12,6.17Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M422.05,177.9l-1.1,2.2Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M422,182.89c0,1.07,0,2.15,0,3.22C422,185,422,184,422,182.89Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M423.1,187l-1.17,0,0-1.17Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M420.9,182l1.17,0,0,1.17Z"
          transform="translate(-1 -1)"
        />
        <motion.path
          variants={pathVariants}
          d="M421.92,182.08l1.16-1.16Z"
          transform="translate(-1 -1)"
        />
      </motion.svg>
    );
  };

export default Colosal
