import { Box, Image, Link, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { brandingColors, brandingFonts } from "../config/brandingColors";
import { Link as LLink } from "react-scroll";

const Footer = () => {
  const [email, setEmail] = useState("");
  const emailChange = (e: any) => setEmail(e.target.value);
  const toast = useToast();
  async function submitEmail() {
    await fetch("https://api.axle.games/axlegames/api/v1/guest/email", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    return toast({
      title: "Thank you!",
      description: "you'll recieve updates from Axlegames.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  }
  return (
    <Box pt={{ base: 12, md: 32, lg: 40 }} bg={brandingColors.bgColor}>
      <Box bg={brandingColors.bgColor} id="footer-section">
        <Box bg={brandingColors.bgColor} className="container">
          <Box className="row">
            <Box
              p={{ base: "4", md: "0" }}
              borderRadius="xl"
              backgroundSize="cover"
              className="col-lg-12"
            >
              <Box
                transform={{ base: `scale(1)`, md: `scale(1.05)` }}
                boxShadow={"dark-lg"}
                className="footer-top"
              >
                <Box className="row justify-content-center">
                  <Box className="col-lg-6 col-md-8">
                    <Box
                      display={"flex"}
                      textAlign={"center"}
                      justifyContent="center"
                      alignItems={"center"}
                      my={{ base: 4, md: 0 }}
                      style={{ columnGap: "0.33rem" }}
                    >
                      <Box
                        my={4}
                        fontSize={{ base: "xl", md: "3xl" }}
                        color={brandingColors.secondaryTextColor}
                        fontFamily={brandingFonts.headingFont}
                      >
                        Subscribe to Our{" "}
                        <Box
                          display={"inline"}
                          color={brandingColors.primaryTextColor}
                        >
                          Newsletter
                        </Box>
                      </Box>
                    </Box>
                    <Box className="subscribe d-flex">
                      <input
                        onChange={emailChange}
                        style={{
                          fontFamily: brandingFonts.headingFont,
                          padding: "0 1rem",
                        }}
                        type="email"
                        id="email"
                        placeholder="Your Email Address"
                      />
                      <button
                        style={{ fontFamily: brandingFonts.headingFont }}
                        onClick={() => submitEmail()}
                        className="cmn-btn"
                      >
                        Subscribe
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="footer-mid pt-120">
          <Box className="container">
            <Box rowGap={"1rem"} className="row d-flex">
              <Box className="col-lg-3 col-md-3 d-flex justify-content-md-between justify-content-center align-items-center cus-grid">
                <Box className="logo-section">
                  <Box
                    className="site-logo site-title"
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      width={"32"}
                      src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/logo.png"
                      alt="site-logo"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                columnGap={{ base: "1rem", md: "2rem", lg: "4rem" }}
                className="col-lg-5 col-md-5 d-flex justify-content-center"
              >
                {links.map((link, index) => (
                  <Box
                    key={index}
                    width={"100%"}
                    display="flex"
                    alignItems="center"
                    flexDirection={"column"}
                    className="d-flex menu-side"
                  >
                    <Text
                      fontSize={{ base: "smaller" }}
                      fontFamily={brandingFonts.headingFont}
                      className="gradient-text"
                      cursor={"pointer"}
                    >
                      {link.title}
                    </Text>
                    <Box flexDirection={"column"} display={"flex"}>
                      {link.nav.map((nav, i) =>
                        !link.isLocal ? (
                          <Link
                            key={i}
                            rel="noopener noreferrer"
                            target="_blank"
                            href={nav.url}
                            cursor="pointer"
                          >
                            <Text
                              fontSize={{ base: "x-small", lg: "xs" }}
                              display={"block"}
                              textAlign={"center"}
                              fontFamily={brandingFonts.subFont}
                              fontWeight="bold"
                            >
                              {nav.name}
                            </Text>
                          </Link>
                        ) : (
                          <LLink
                            key={i}
                            style={{
                              display: "block",
                            }}
                            name={nav.url}
                            to={nav.url}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                          >
                            <Text
                              textAlign={"center"}
                              fontFamily={brandingFonts.subFont}
                              fontSize={{ base: "x-small", lg: "xs" }}
                              fontWeight="bold"
                              cursor="pointer"
                              _hover={{
                                textDecoration: "underline",
                              }}
                            >
                              {nav.name}
                            </Text>
                          </LLink>
                        )
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box className="col-lg-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
                <Box className="right-area">
                  <Box columnGap={"1rem"} display={"flex"}>
                    {socials.map((social, j) => (
                      <Link key={j} href={social.url} target="_blank">
                        <Image
                          _hover={{
                            bg: brandingColors.newHighlightColor,
                          }}
                          p={0.5}
                          boxShadow={`0px 0px 4px ${brandingColors.primaryTextColor}`}
                          borderRadius="3xl"
                          width={"8"}
                          height="8"
                          alt={j.toString()}
                          src={social.img}
                        />
                      </Link>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="footer-bottom">
          <Box className="container">
            <Box className="main-content">
              <Box className="row d-flex align-items-center justify-content-center">
                <Box className="col-lg-12 col-md-6">
                  <Box className="left-area text-center">
                    <Box
                      style={{ fontFamily: brandingFonts.headingFont }}
                      color={brandingColors.secondaryTextColor}
                      fontSize={{ base: "sm", lg: "lg" }}
                    >
                      Copyright © 2023. All Rights Reserved By
                      <Box
                        display={"inline"}
                        fontSize={{ base: "sm", lg: "lg" }}
                        style={{
                          cursor: "pointer",
                          color: "#eb6612",
                          margin: "0 .33rem",
                        }}
                      >
                        AXLEGAMES
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

const links = [
  {
    title: "Navigation",
    nav: [
      {
        name: "Home",
        url: "home",
      },
      {
        name: "Products",
        url: "products",
      },
      {
        name: "Tokenomics",
        url: "token",
      },
      {
        name: "Roadmap",
        url: "roadmap",
      },
    ],
    isLocal: true,
  },
  {
    title: "Products",
    nav: [
      {
        name: "Axle Games",
        url: "https://play.axle.games",
      },
      {
        name: "Axle Staking",
        url: "https://axle.games/dashboard",
      },
      {
        name: "Axle Swap",
        url: "https://axle.games/dashboard",
      },
      {
        name: "Axle Dao",
        url: "https://axle.games/dashboard",
      },
    ],
    isLocal: false,
  },
  {
    title: "Useful Links",
    nav: [
      {
        name: "White Paper",
        url: "https://whitepaper.axle.games/",
      },
      {
        name: "Economics Paper",
        url: "https://axlegames.s3.ap-south-1.amazonaws.com/AxleGames_EconomicsPaper.pdf",
      },
      {
        name: "Pitch Deck",
        url: "https://axlegames.s3.ap-south-1.amazonaws.com/Axlegames.pdf",
      },
      // {
      //   name: "Axle Presale",
      //   url: "https://sale.axle.games",
      // },
    ],
    isLocal: false,
  },
];

const socials = [
  {
    url: "https://instagram.com/axlegames",
    img: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/instagram.webp",
  },
  {
    url: "https://medium.com/@axlegames",
    img: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/medium.webp",
  },
  {
    url: "https://t.me/axlegames_en",
    img: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/telegram.webp",
  },
  {
    url: "https://twitter.com/AxleGames",
    img: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/twitter.webp",
  },
];
