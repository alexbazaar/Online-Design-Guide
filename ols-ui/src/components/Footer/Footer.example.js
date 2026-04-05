import React from "react";
import Footer, { FooterTop, FooterTopGroup, FooterTopGroupItem } from "./index";

module.exports = (
  <div>
    <FooterTop fluid>
      <FooterTopGroup label="Our Agency">
        <FooterTopGroupItem>About IRS</FooterTopGroupItem>
        <FooterTopGroupItem>Working at IRS</FooterTopGroupItem>
        <FooterTopGroupItem>Help</FooterTopGroupItem>
        <FooterTopGroupItem>Contact Your Local Office</FooterTopGroupItem>
        <FooterTopGroupItem>Tax Stats, Facts & Figures</FooterTopGroupItem>
      </FooterTopGroup>
      <FooterTopGroup label="Know Your Rights">
        <FooterTopGroupItem>Taxpayer Bill of Rights</FooterTopGroupItem>
        <FooterTopGroupItem>Taxpayer Advocation Service</FooterTopGroupItem>
        <FooterTopGroupItem>Civil Rights</FooterTopGroupItem>
        <FooterTopGroupItem>Freedom of Information Act</FooterTopGroupItem>
        <FooterTopGroupItem>No FEAR Act</FooterTopGroupItem>
      </FooterTopGroup>
      <FooterTopGroup label="Resolve an Issue">
        <FooterTopGroupItem>Respond to a Notice</FooterTopGroupItem>
        <FooterTopGroupItem>Office of Appeals</FooterTopGroupItem>
        <FooterTopGroupItem>Identity Theft Protection</FooterTopGroupItem>
        <FooterTopGroupItem>Report Phishing</FooterTopGroupItem>
      </FooterTopGroup>
      <FooterTopGroup label="Languages">
        <li><a href="https://www.irs.gov/es/spanish" target="" title="" lang="es" xmlLang="es">Español</a></li>
        <li><a href="https://www.irs.gov/zh-hant/chinese" target="" title="" lang="zh-hant" xmlLang="zh-hant">中文</a></li>
        <li><a href="https://www.irs.gov/ko/korean" target="" title="" lang="ko" xmlLang="ko">한국어</a></li>
        <li><a href="https://www.irs.gov/ru/russian" target="" title="" lang="ru" xmlLang="ru">Pусский</a></li>
        <li><a href="https://www.irs.gov/vi/vietnamese" target="" title="" lang="vi" xmlLang="vi">Tiếng Việt</a></li>
      </FooterTopGroup>
    </FooterTop>
    <Footer fluid />
  </div>
);
