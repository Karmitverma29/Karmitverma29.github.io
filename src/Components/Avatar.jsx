// import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react';


// export default function AvatarWithRipple() {
//   const size = '200px';
	
//     const color = '#ffb301';

//   const pulseRing = keyframes`
// 	0% {
//     transform: scale(0.33);
//   }
//   40%,
//   50% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 0;
//   }
// 	`;

//   return (
//     <Flex
//       justifyContent="center"
//       alignItems="center"
//       h="216px"
//       w="full"
//       overflow="hidden">
//       {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
//       <Box
//         as="div"
//         position="relative"
//         w={size}
//         h={size}
//         _before={{
//           content: "''",
//           position: 'relative',
//           display: 'block',
//           width: '300%',
//           height: '300%',
//           boxSizing: 'border-box',
//           marginLeft: '-100%',
//           marginTop: '-100%',
//           borderRadius: '50%',
//           bgColor: color,
//           animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
//         }}>
//         <Avatar
//           src={`${process.env.PUBLIC_URL}/karmit.jpg`} alt="Profile_pic"

//           // size="full"
//           // position="absolute"
//           top={0}
//           style={{ verticalAlign: "middle",
//             width: "50px",
//             height: "50px",
//             borderRadius: "50%"}}
         
//         />
//       </Box>
//     </Flex>
//   );
// }

        
function  AvatarWithRipple(){

  return <div>

<img style={{verticalAlign: "middle",
  width: "250px",
  height: "280px",
  borderRadius: "50%",margin:"auto"}} src={`${process.env.PUBLIC_URL}/karmitverma.jpg`}  alt="Avatar" class="avatar"/>


  </div>

  
}
export default AvatarWithRipple;