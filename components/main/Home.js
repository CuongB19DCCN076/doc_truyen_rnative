import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Card from '../component/Card';
import { TouchableOpacity } from 'react-native';
export const intiState = {
  home: [
    {
      id: 1,
      name: "One piece",
      avatar: "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
      author: "Harashi",
      state: "Đang tiến hành",
      introduce: "Kimetsu no Yaiba – Tanjirou là con cả của gia đình vừa mất cha. Một ngày nọ, Tanjirou đến thăm thị trấn khác để bán than, khi đêm về cậu ở nghỉ tại nhà người khác thay vì về nhà vì lời đồn thổi về ác quỷ luôn rình mò gần núi vào buổi tối. Khi cậu về nhà vào ngày hôm sau, bị kịch đang đợi chờ cậu…",
      category: ["Huyền Huyễn", "Phưu lưu", "Khám phá"],
      chapter: [
        {
          id: 1,
          content: [
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
          ],
        },
        {
          id: 2,
          content: [
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",

          ],
        },
        {
          id: 3,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
          ],
        },
        {
          id: 5,
          content: [
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
          ],
        },
        {
          id: 6,
          content: [
            
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
          ],
        },
        {
          id: 7,
          content: [
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
          ],
        },
        {
          id: 8,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
          ],
        },
        {
          id: 9,
          content: [
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1069/13.jpg",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1043/7.jpg",
            "https://img.ghienmanga.net/public/uploads/2020-05-22/506071/img-00010.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6zzrR14xvR1GH4ODpQJ9UgHaLV&pid=Api&P=0",
            "https://img.abctruyen.xyz/uploads/6366/chuong-1052/11.jpg",
          ],
        },
      ],
    },
    {
      id: 2,
      name: "OnePunch  Man",
      avatar: "https://tse3.explicit.bing.net/th?id=OIP.HMRiEvL2SYqlRvRSP2lbRAHaFQ&pid=Api&P=0",
      author: "Harashi",
      state: "Đang tiến hành",
      introduce: "Onepunch-man là câu chuyện của 1 chàng thanh niên 23 tuổi, đang là một nhân viên văn phòng điển trai nghiêm túc và tất nhiên là ế. Không hiểu vì biến cố gì mà tự nhiên lông tóc trên người của anh trụi lủi, sau đó anh mang trong mình khả năng siêu đặc biệt Đấm phát chết luôn nhằm bảo vệ trái đất và thành phố nơi anh sinh sống khỏi các sinh vật ngoài không gian (nhưng phá hoại cũng không kém).",
      category: ["Huyền Huyễn", "Phưu lưu", "Khám phá"],
      chapter: [
        {
          id: 1,
          content: [
            "https://i221.ntcdntempv3.com/data/images/4389/80034/002-fix.jpg?data=net",
            "https://i221.ntcdntempv3.com/data/images/4389/80034/003-fix.jpg?data=net",
            "https://i221.ntcdntempv3.com/data/images/4389/80034/005-fix.jpg?data=net",
            "https://i221.ntcdntempv3.com/data/images/4389/80034/006-fix.jpg?data=net",
            "https://i221.ntcdntempv3.com/data/images/4389/80034/007-fix.jpg?data=net",
            "https://i221.ntcdntempv3.com/data/images/4389/80034/008-fix.jpg?data=net"
          ],
        },
        {
          id: 2,
          content: [
            "https://i221.ntcdntempv3.com/data/images/4389/80035/002.jpg?data=net",
            "https://i221.ntcdntempv3.com/data/images/4389/80035/003.jpg?data=net",
            "https://i221.ntcdntempv3.com/data/images/4389/80035/005.jpg?data=net",
            "https://i221.ntcdntempv3.com/data/images/4389/80035/006.jpg?data=net",
            "https://i221.ntcdntempv3.com/data/images/4389/80035/007.jpg?data=net",
          ],
        },
        {
          id: 3,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Đại chiến người và thần",
      avatar: "https://tse2.mm.bing.net/th?id=OIP.xUOVO3wrkP5gLw-buMa1pgAAAA&pid=Api&P=0",
      author: "Harashi",
      state: "Đang tiến hành",
      introduce: "Kimetsu no Yaiba – Tanjirou là con cả của gia đình vừa mất cha. Một ngày nọ, Tanjirou đến thăm thị trấn khác để bán than, khi đêm về cậu ở nghỉ tại nhà người khác thay vì về nhà vì lời đồn thổi về ác quỷ luôn rình mò gần núi vào buổi tối. Khi cậu về nhà vào ngày hôm sau, bị kịch đang đợi chờ cậu…",
      category: ["Huyền Huyễn", "Phưu lưu", "Khám phá"],
      chapter: [
        {
          id: 1,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 2,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 3,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Dragon Ball",
      avatar: "https://tse3.mm.bing.net/th?id=OIP.SrLr4_27NyB6G8HQ1DHWHAHaKk&pid=Api&P=0",
      author: "Harashi",
      state: "Đang tiến hành",
      introduce: "Kimetsu no Yaiba – Tanjirou là con cả của gia đình vừa mất cha. Một ngày nọ, Tanjirou đến thăm thị trấn khác để bán than, khi đêm về cậu ở nghỉ tại nhà người khác thay vì về nhà vì lời đồn thổi về ác quỷ luôn rình mò gần núi vào buổi tối. Khi cậu về nhà vào ngày hôm sau, bị kịch đang đợi chờ cậu…",
      category: ["Huyền Huyễn", "Phưu lưu", "Khám phá"],
      chapter: [
        {
          id: 1,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 2,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 3,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Ta là tà đế",
      avatar: "https://st.ntcdntempv3.com/data/comics/161/ta-la-ta-de.jpg",
      author: "Harashi",
      state: "Đang tiến hành",
      introduce: "Kimetsu no Yaiba – Tanjirou là con cả của gia đình vừa mất cha. Một ngày nọ, Tanjirou đến thăm thị trấn khác để bán than, khi đêm về cậu ở nghỉ tại nhà người khác thay vì về nhà vì lời đồn thổi về ác quỷ luôn rình mò gần núi vào buổi tối. Khi cậu về nhà vào ngày hôm sau, bị kịch đang đợi chờ cậu…",
      category: ["Huyền Huyễn", "Phưu lưu", "Khám phá"],
      chapter: [
        {
          id: 1,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 2,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            ""
          ],
        },
        {
          id: 3,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Đấu phá thương khung",
      avatar: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1SUKpKXJyFrUl4eoxKw7oDanabn.jpg",
      author: "Harashi",
      state: "Đang tiến hành",
      introduce: "Kimetsu no Yaiba – Tanjirou là con cả của gia đình vừa mất cha. Một ngày nọ, Tanjirou đến thăm thị trấn khác để bán than, khi đêm về cậu ở nghỉ tại nhà người khác thay vì về nhà vì lời đồn thổi về ác quỷ luôn rình mò gần núi vào buổi tối. Khi cậu về nhà vào ngày hôm sau, bị kịch đang đợi chờ cậu…",
      category: ["Huyền Huyễn", "Phưu lưu", "Khám phá"],
      chapter: [
        {
          id: 1,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 2,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 3,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Ta trời sinh đã là nhân vật phải diện",
      avatar: "https://hhtrungquoc.com/wp-content/uploads/2022/07/ta-troi-sinh-da-la-nhan-vat-phan-dien.jpg",
      author: "Harashi",
      state: "Đang tiến hành",
      introduce: "Kimetsu no Yaiba – Tanjirou là con cả của gia đình vừa mất cha. Một ngày nọ, Tanjirou đến thăm thị trấn khác để bán than, khi đêm về cậu ở nghỉ tại nhà người khác thay vì về nhà vì lời đồn thổi về ác quỷ luôn rình mò gần núi vào buổi tối. Khi cậu về nhà vào ngày hôm sau, bị kịch đang đợi chờ cậu…",
      category: ["Huyền Huyễn", "Phưu lưu", "Khám phá"],
      chapter: [
        {
          id: 1,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 2,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 3,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
          ],
        },
      ],
    },
  ],
};
export default function Home({navigation}) {

  return (
    <ScrollView>
      <TouchableOpacity style={{margin:8, borderRadius: 10 , height: 50,justifyContent: 'center', alignItems: 'center', flexDirection: 'row',borderWidth: 1, borderColor: "red"}}>
        <Image
              source={require("../../images/search.png")}
              style={{ height:20, width: 20}}
            />
        <TextInput style={{width: "80%", padding: 13,height:50, fontSize: 16 }} placeholder='Nhập tên truyện cần tìm kiếm'>
        </TextInput>
      </TouchableOpacity>
      <View>
        <Text style={{fontWeight: '500', fontSize: 20, color: "#F26B8F"}}>Truyện hot</Text>
        <ScrollView horizontal style={{flexDirection: 'row', marginLeft: 4}}>
          {intiState.home.map((item, index) =>{
            return <Card id={item.id} key={index} name={item.name} avatar={item.avatar} author={item.author} navigation={navigation} category={item.category}/>
          })}
        </ScrollView>
      </View>
      <View>
        <Text style={{fontWeight: '500', fontSize: 20, color: "#F26B8F"}}>Truyện mới cập nhật</Text>
        <View  style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {intiState.home.map((item, index) =>{
            return <Card id={item.id} key={index} name={item.name} avatar={item.avatar} author={item.author} navigation={navigation} category={item.category}/>
          })}
          {intiState.home.map((item, index) =>{
            return <Card id={item.id} key={index} name={item.name} avatar={item.avatar} author={item.author} navigation={navigation} category={item.category}/>
          })}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})