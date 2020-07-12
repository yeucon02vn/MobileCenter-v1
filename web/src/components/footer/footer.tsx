import React from "react"
import styled from "styled-components"

const Container = styled.section`
  min-height: 200px;
`

const Col: React.FC<any> = ({ children }) => {
  return <div className="block min-w-full px-24 mx-24 sm:table-cell">{children}</div>
}

interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <Container className="relative z-50 items-center justify-center w-full w-screen py-8 mx-auto bg-white border-t border-gray-200">
      <div className="container items-center justify-center px-8 mx-auto ">
        <div className="self-center table mx-auto">
          <Col>
            <p className="text-sm uppercase text-grey sm:mb-6">Links</p>
            <ul className="mb-6 text-xs list-reset">
              <li className="inline-block mt-2 mr-2 sm:block sm:mr-0">
                <a href="/" className="text-grey hover:text-grey-dark">
                  FAQ
                </a>
              </li>
              <li className="inline-block mt-2 mr-2 sm:block sm:mr-0">
                <a href="/" className="text-grey hover:text-grey-dark">
                  Help
                </a>
              </li>
              <li className="inline-block mt-2 mr-2 sm:block sm:mr-0">
                <a href="/" className="text-grey hover:text-grey-dark">
                  Support
                </a>
              </li>
            </ul>
          </Col>

          <Col>
            <p className="text-sm uppercase text-grey sm:mb-6">Legal</p>
            <ul className="mb-6 text-xs list-reset">
              <li className="inline-block mt-2 mr-2 sm:block sm:mr-0">
                <a href="/" className="text-grey hover:text-grey-dark">
                  Terms
                </a>
              </li>
              <li className="inline-block mt-2 mr-2 sm:block sm:mr-0">
                <a href="/" className="text-grey hover:text-grey-dark">
                  Privacy
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <p className="text-sm uppercase text-grey sm:mb-6">Social</p>
            <ul className="mb-6 text-xs list-reset">
              <li className="inline-block mt-2 mr-2 sm:block sm:mr-0">
                <a href="/" className="text-grey hover:text-grey-dark">
                  Facebook
                </a>
              </li>
              <li className="inline-block mt-2 mr-2 sm:block sm:mr-0">
                <a href="/" className="text-grey hover:text-grey-dark">
                  Linkedin
                </a>
              </li>
              <li className="inline-block mt-2 mr-2 sm:block sm:mr-0">
                <a href="/" className="text-grey hover:text-grey-dark">
                  Twitter
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <p className="text-sm uppercase text-grey sm:mb-6">Company</p>
            <ul className="mb-6 text-xs list-reset">
              <li className="inline-block mt-2 mr-2 sm:block sm:mr-0">
                <a href="/" className="text-grey hover:text-grey-dark">
                  Official Blog
                </a>
              </li>
              <li className="inline-block mt-2 mr-2 sm:block sm:mr-0">
                <a href="/" className="text-grey hover:text-grey-dark">
                  About Us
                </a>
              </li>
              <li className="inline-block mt-2 mr-2 sm:block sm:mr-0">
                <a href="/" className="text-grey hover:text-grey-dark">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
        </div>
      </div>
    </Container>
  )
}
