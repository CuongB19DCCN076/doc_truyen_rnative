import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { TouchableOpacity } from "react-native";
import ItemSearch from "./ItemSearch";
import { useSelector } from "react-redux";
export const intiState = {
  home: [
    {
      id: 1,
      name: "One piece",
      avatar:
        "https://tse4.mm.bing.net/th?id=OIP.3e3fFY7V--D7x_GqOkKjiQHaFL&pid=Api&P=0",
      author: "Harashi",
      state: "Đang tiến hành",
      introduce:
        "One Piece xoay quanh 1 nhóm cướp biển được gọi là Băng Hải tặc Mũ Rơm - Straw Hat Pirates - được thành lập và lãnh đạo bởi thuyền trưởng Monkey D. Luffy. Cậu bé Luffy có ước mơ tìm thấy kho báu vĩ đại nhất, One Piece, của Vua Hải Tặc đời trước Gold D. Roger và trở thành Vua Hải Tặc đời kế tiếp. Ở Việt Nam hiện nay, truyện đang được Nhà xuất bản Thanh Hóa xuất bản nhưng không có bản quyền, với tên gọi là Đảo Hải tặc Cốt truyện: Monkey D. Luffy, 1 cậu bé rất thích hải tặc có ước mơ tìm được kho báu One Piece và trở thành Vua hải tặc - Pirate King. Lúc nhỏ, Luffy tình cờ ăn phải trái quỉ (Devil Fruit) Gomu Gomu, nó cho cơ thể cậu khả năng co dãn đàn hồi như cao su nhưng đổi lại cậu sẽ không bao giờ biết bơi. Sau đó Luffy lại được Shank cứu thoát tuy nhiên ông ta bị mất 1 cánh tay. Sau đấy Shank chia tay Luffy và để lại cho cậu cái mũ rơm (Straw Hat) và nói rằng: nói này đã thúc đầy Luffy trở thành 1 cướp biển thật sự.",
      category: ["Action", "Adventure", "Comedy", "Fantasy"],
      chapter: [
        {
          id: 1,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.Pv9twYJDpvMuKM1n2hWKhwHaLs&pid=Api&P=0",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/o/n/one_piece___tap_1___limited_edition_ki_niem_10_nam_one_piece_tai_viet_nam_7_2018_12_27_09_35_16.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/o/n/one_piece___tap_1___limited_edition_ki_niem_10_nam_one_piece_tai_viet_nam_6_2018_12_27_09_35_16.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/o/n/one_piece___tap_1___limited_edition_ki_niem_10_nam_one_piece_tai_viet_nam_8_2018_12_27_09_35_16.jpg",
            "https://images2.imgbox.com/05/77/K1MC4Cl7_o.png",
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
            "https://tse4.mm.bing.net/th?id=OIP.Ezf10dRcHzIh2lDIHEdSagAAAA&pid=Api&P=0",
            "https://tse2.explicit.bing.net/th?id=OIP.GnX6QzxUTlWumg7jXqMIKQHaKz&pid=Api&P=0",
            "https://3.bp.blogspot.com/-_ZRNzGDFDPA/VF4fAO58qeI/AAAAAAAABB0/EwoN9cYor2E/s1600/T%E1%BA%ADp%2B003%2B(15).jpg",
            "https://tse1.mm.bing.net/th?id=OIP.4gLQeWYpM-DRiSWf-kgjoAHaLH&pid=Api&P=0",
            "https://3.bp.blogspot.com/-QEv9SIcDwkc/VGLSNx2GHfI/AAAAAAAABcM/6aKkyLnMSWE/s1600/T%E1%BA%ADp%2B014%2B(16).jpg",
            "https://tse3.mm.bing.net/th?id=OIP.mStR2s6Syuvd80hTIgpUHQHaL-&pid=Api&P=0",
          ],
        },
        {
          id: 3,
          content: [
            "https://salt.tikicdn.com/cache/550x550/ts/product/2a/6c/7b/b43401e16d70bd9b028fddcf68981535.jpg",
            "https://tse4.mm.bing.net/th?id=OIP.r6x6aMX0ADJZ0LwtPFfHIwHaLP&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.fX8WB8hFMdjJr59rLbjLCgHaKt&pid=Api&P=0",
            "https://3.bp.blogspot.com/-aDwB246ccN8/U4vQ0resFfI/AAAAAAAAAI0/FTEQijlqG0Q/s1600/Chuong_001-OP01-40.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_piece_tap_3_thu_khong_the_noi_doi_tai_ban_2019/2020_10_05_14_37_44_13-390x510.jpg",
            "https://s16.directupload.net/images/190428/9vve3ob3.png",
            
          ],
        },
        {
          id: 4,
          content: [
            "https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece-magazine---tap-4_1.jpg",
            "https://www.funmanga.com/uploads/chapter_files/5404/4/p_00005.jpg",
            "https://tse2.explicit.bing.net/th?id=OIP.cnUFT-kBZGQiFKOZ4yd0yQHaLP&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.mueGbeYlLONQerJTc73mwAHaLP&pid=Api&P=0",
            "https://www.funmanga.com/uploads/chapter_files/5404/4/p_00019.jpg",
            "https://1.bp.blogspot.com/-cJ8h5Lfxw8g/VF4fBddxeAI/AAAAAAAABCI/87th7HjT7Io/s1600/T%E1%BA%ADp%2B003%2B(18).jpg",
          ],
        },
        {
          id: 5,
          content: [
            "https://nhatrangbooks.com/wp-content/uploads/2019/10/one-piece-tap-5.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_piece_tap_5_chuong_nguyen_vi_ai_tai_ban_2019/2020_10_05_14_34_04_8-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_piece_tap_5_chuong_nguyen_vi_ai_tai_ban_2019/2020_10_05_14_34_04_5-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_piece_tap_5_chuong_nguyen_vi_ai_tai_ban_2019/2020_10_05_14_34_04_11-390x510.jpg",
            "https://tse1.mm.bing.net/th?id=OIP.tqmc8Lge1IImZHU9KKq3owHaLP&pid=Api&P=0",
            "https://www.funmanga.com/uploads/chapter_files/5404/5/p_00007.jpg",
            
          ],
        },
        {
          id: 6,
          content: [
            "https://cf.shopee.vn/file/0e65627a361422a1740ebb6dcb218e7e",
            "https://s16.directupload.net/images/190426/dxzii2wl.png",
            "https://tse4.explicit.bing.net/th?id=OIP.yhFPLk_YPV_bQTBSkq5grwHaLP&pid=Api&P=0",
            "https://3.bp.blogspot.com/-QEv9SIcDwkc/VGLSNx2GHfI/AAAAAAAABcM/6aKkyLnMSWE/s1600/T%E1%BA%ADp%2B014%2B(16).jpg",
            "https://3.bp.blogspot.com/-aDwB246ccN8/U4vQ0resFfI/AAAAAAAAAI0/FTEQijlqG0Q/s1600/Chuong_001-OP01-40.jpg",
            "https://tse2.mm.bing.net/th?id=OIP.pIu5vDdMoPaqTx5YgiUQQgHaKl&pid=Api&P=0",
            
          ],
        },
        {
          id: 7,
          content: [
            "https://tse1.mm.bing.net/th?id=OIP.Yy2706hLQZbEXrGXSKzIBwAAAA&pid=Api&P=0",
            "https://tse1.explicit.bing.net/th?id=OIP.tgPqV6lL_Bem1i31kmuo_AHaLP&pid=Api&P=0",
            "https://3.bp.blogspot.com/-Zl7iJW7ePXM/VF4fCbC1XmI/AAAAAAAABCc/r-eIgZyfNrY/s1600/T%E1%BA%ADp%2B003%2B(19).jpg",
            "https://tse1.mm.bing.net/th?id=OIP.x5vHgrKKYRrWavpeHMAtrgHaLP&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.4gLQeWYpM-DRiSWf-kgjoAHaLH&pid=Api&P=0",
            "https://tse1.explicit.bing.net/th?id=OIP.UamlOVRjZh_2Gp8xS4o_4wDKEz&pid=Api&P=0",
            
          ],
        },
        {
          id: 8,
          content: [
            "https://tse2.mm.bing.net/th?id=OIP.PhkLBE3F1WMzmO0apEWhaAHaHa&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.NZmuGb9P9ZP-wqBBrlRrBgHaK1&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.we3KJesPMX5g3xK6IeoyYQHaLP&pid=Api&P=0",
            "https://images2.imgbox.com/05/77/K1MC4Cl7_o.png",
            "https://tse4.mm.bing.net/th?id=OIP.ay3O51vymRYQPqveM0l79QHaLP&pid=Api&P=0",
            "https://s199.imacdn.com/tt24/2022/09/09/ea10f8707e3e175c_2db89052837708fd_560205166270803211.jpg",
            
          ],
        },
        
      ],
    },
    {
      id: 2,
      name: "OnePunch  Man",
      avatar:
        "https://tse3.explicit.bing.net/th?id=OIP.HMRiEvL2SYqlRvRSP2lbRAHaFQ&pid=Api&P=0",
      author: "Kuroshi",
      state: "Đang tiến hành",
      introduce:
        "Một Manga thể loại siêu anh hùng với đặc trưng phồng tôm đấm phát chết luôn... và mang đậm tính chất troll của tác giả. Onepunch-man là câu chuyện của 1 chàng thanh niên 23 tuổi, đang là một nhân viên văn phòng điển trai nghiêm túc và tất nhiên là ế. Không hiểu vì biến cố gì mà tự nhiên lông tóc trên người của anh trụi lủi, sau đó anh mang trong mình khả năng siêu đặc biệt 'Đấm phát chết luôn' nhằm bảo vệ trái đất và thành phố nơi anh sinh sống khỏi các sinh vật ngoài không gian (nhưng phá hoại cũng không kém).",
      category: ["Huyền Huyễn", "Action", "Manga"],
      chapter: [
        {
          id: 1,
          content: [
            "https://tse2.mm.bing.net/th?id=OIP.VfRXDU3hZszifImwsnielwHaHa&pid=Api&P=0",
            "https://tse3.explicit.bing.net/th?id=OIP.Z5EvudXFRRFgqUg1E5MnQgHaKi&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.Csa35NScRPQpOfEziRI51gHaLo&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.qWb0gaH20pxLlXUzESZBXgHaLo&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.XwdQTvKE1WgnpbxDN7PsHgHaKi&pid=Api&P=0",
            "https://tse3.explicit.bing.net/th?id=OIP.8mGtWL9avQZsQCw0dfW0jwHaJ_&pid=Api&P=0",
          ],
        },
        {
          id: 2,
          content: [
            "https://tse2.mm.bing.net/th?id=OIP.0m0g_yZ2ftvDt6lSPFBZ7gHaHa&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.q9tD2JOb5LITnqFgpLVCEwHaKh&pid=Api&P=0",
            "https://tse1.explicit.bing.net/th?id=OIP.wKozkwjm_-YKQVhg4SgauwHaKi&pid=Api&P=0",
            "https://tse4.explicit.bing.net/th?id=OIP.ndQ6FTIIRHV7raFJ_ymhkQHaKe&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.1TdRSUY3wRCzTUMP1znlZwHaKp&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.0r1ARzcysDA-rCqsjKXMxgHaLo&pid=Api&P=0",
          ],
        },
        {
          id: 3,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.wVMNGHqETfiwPx5pcIyAiAHaKS&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.kKjmcSJ0BiHveY2hdQIG7wHaLo&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.h6uG4Yvds4QMMCnaZyTcbAHaLo&pid=Api&P=0",
            "https://tse3.explicit.bing.net/th?id=OIP.w41_SRFefSLkA6n_gODITwHaKi&pid=Api&P=0",
            "https://tse1.explicit.bing.net/th?id=OIP.uN0wB__GudB25J0taN6MJQHaLo&pid=Api&P=0",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.uY8ppODwKYE4YNFZkMvkvwHaFL&pid=Api&P=0",
            "https://tse3.explicit.bing.net/th?id=OIP.ljyq1LyS3sbb-u2fsEQ7nQHaLo&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.iEEJkQmaH7drsEWgh2swnwDSEp&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.t3ih22MP8t2ig-vjF2HQpgHaLo&pid=Api&P=0",
            "https://tse4.explicit.bing.net/th?id=OIP.9Sf1fN9j-PN5WSNhra_ngwHaKi&pid=Api&P=0",
            "https://tse4.explicit.bing.net/th?id=OIP.9Sf1fN9j-PN5WSNhra_ngwHaKi&pid=Api&P=0"
          ],
        },
        {
          id: 5,
          content: [
            "https://tse3.mm.bing.net/th?id=OIP.eYhxPYJ-IctzxndkMOwu8AHaKd&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.5jhtc1hA4OHlr1CZp0NhEgHaLo&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.uZWsaFSLqobRoO93_eIM-QHaNL&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.03SNsivJCVDWcllL7oVmwAHaKp&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.KV2AXt8euZPKSlXJjI9B7gHaKd&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.O-nyjJkmjyjdCPmczH_FqAHaH5&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.Xqlj3EZd6WI7sSSUeokujwHaKi&pid=Api&P=0"
          ],
        },
        {
          id: 6,
          content: [
            "https://tse1.mm.bing.net/th?id=OIP.HvRfy24sSGe5cojY8Z2vRQHaHa&pid=Api&P=0",
            "https://tse4.explicit.bing.net/th?id=OIP.m1bcnjNhJ8uJGw6v-xTFtAHaLv&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.C-PCHRXoqg1cGniAPDwSLwHaLo&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.xBjbMdgXfnP-d-SUdjQMtwHaKi&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.xI6yQ_WAC8LX8geTZ_1UhAHaKi&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.fyZp4J1yhlYJ2i6lc8BvpwHaKi&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.YrHOsCasVq47_UZL0SbSEwHaKp&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.ZhfaJE2kET2oKiTyoYkiswHaLo&pid=Api&P=0"
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Đại chiến người và thần",
      avatar:
        "https://tse2.mm.bing.net/th?id=OIP.xUOVO3wrkP5gLw-buMa1pgAAAA&pid=Api&P=0",
      author: "Harashi",
      state: "Đang tiến hành",
      introduce:
        "Truyện Shuumatsu no Valkyrie kể về ngày tận thế của con người, khi các vị thần đã quyết định kết liễu nhân loại, tất cả vị thần đều đồng ý, chỉ riêng Brunhild đã đứng lên ngăn chặn, đề nghị một cuộc chiến 1:1 giữa con người với các vị thần, và cuộc chiến này cũng chính là sự quyết định sống còn của nhân loại. Là một bộ thể loại Lịch Sử, với các vị thần Hi Lạp thì chắc chắn sẽ không gây thất vọng cho các bạn đam mê thể loại này.",
      category: ["Huyền Huyễn", "Phưu lưu", "Khám phá"],
      chapter: [
        {
          id: 1,
          content: [
            "https://2.bp.blogspot.com/-oUujNlPkjqE/YMy4NbOdvLI/AAAAAAABfmw/JKdopzFQp60P5-TddcU0_oKIJWW1zsQAACLcBGAsYHQ/s0/PhimNay_poster_dai-chien-nguoi-va-than.jpg",
            "https://tse1.mm.bing.net/th?id=OIP.vijOCat6-LOdF6V6jK0yNQHaKu&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.C_PvyDWnitZi6UHp_xUDZwHaLH&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.hsZsJu2QD-60qvuw94ZjHQHaKi&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.aP-lKeeSZcWY7nUnv0-WvwHaKn&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.Ph8wFhFgoWmQj-rp_VQK6AHaKn&pid=Api&P=0",
          ],
        },
        {
          id: 2,
          content: [
            "https://tse1.mm.bing.net/th?id=OIP.dW_t3Pfc0g8ItEGghFLXLwHaKj&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.f07RAx87QN4DelPLyz56TQHaKi&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.-BxPTNkPVuH2AeDZo9ocSAHaKn&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.FGjoWshc2hV0A5vsMknTKgHaKi&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.y0mfpSo4xkVaGR58ZOa3LwHaLH&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.gFPoi60c-zWs6f8-9Ro5LwHaKi&pid=Api&P=0",
          ],
        },
        {
          id: 3,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.573Wu77bKThtRMoNVND8bQAAAA&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.niU8gGyMY9ryx4hgxNmkfgHaKi&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.6lAPCINhQt8dg5lUivtYmwHaKj&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP._jDxJI2b4alPeCiBOe68BAHaKe&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.fBrKwXr02UO9A0XdK1AMhQHaKk&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.-Fvh4C7muUe236g_lqBx9QHaKj&pid=Api&P=0",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse3.mm.bing.net/th?id=OIP.sVUqllzyA4SG3w_fUSXOvQAAAA&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.yGi0mWB_c642Ps4mPRj5QwHaKn&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.PtLJJV5rhnrLKiQhRGoDWAHaKt&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.nl_OwB0b3kd3mv2KTqV9MAHaKi&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.3io5quS8y-SZJnXk8SjXvwHaKj&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.H3k9esXdHscTRd0soVDIIQHaKt&pid=Api&P=0"
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Dragon Ball",
      avatar:
        "https://tse3.mm.bing.net/th?id=OIP.SrLr4_27NyB6G8HQ1DHWHAHaKk&pid=Api&P=0",
      author: "Harashi",
      state: "Đang tiến hành",
      introduce:
        "Kimetsu no Yaiba – Tanjirou là con cả của gia đình vừa mất cha. Một ngày nọ, Tanjirou đến thăm thị trấn khác để bán than, khi đêm về cậu ở nghỉ tại nhà người khác thay vì về nhà vì lời đồn thổi về ác quỷ luôn rình mò gần núi vào buổi tối. Khi cậu về nhà vào ngày hôm sau, bị kịch đang đợi chờ cậu…",
      category: ["Huyền Huyễn", "Phưu lưu", "Khám phá"],
      chapter: [
        {
          id: 1,
          content: [
            "https://tse2.mm.bing.net/th?id=OIP.abhCNMFbXy6_i1gRK8-9iQAAAA&pid=Api&P=0",
            "https://tse3.explicit.bing.net/th?id=OIP.MATkFGLgHb-A0zWJLcAXhAHaLH&pid=Api&P=0",
            "https://tse3.explicit.bing.net/th?id=OIP.mBCBtFN3jJtEotbmCWgefwHaK3&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.falKjNSByd4sOtyw3HgsjAHaLI&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.LldBlNP9UbwZneA31-xFHQHaLI&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.ueUsPmePk6D_adFziTpmcgHaLH&pid=Api&P=0",
            "https://tse4.explicit.bing.net/th?id=OIP.7uMgmhdF_Dh3GmbQNhpamQHaKf&pid=Api&P=0",
          ],
        },
        {
          id: 2,
          content: [
            "https://tse1.mm.bing.net/th?id=OIP.W5sI5jSiABWj6uhUM3Lx5gHaLH&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.cQcOALm6DROUW1rxUU3MKgHaLH&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.9U5oMngCrSPzgJpPmrA2mwHaLH&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.fmq7D-1EZE_LsmPZxWn9egHaIU&pid=Api&P=0",
            "https://tse4.explicit.bing.net/th?id=OIP.VU7hColZzrRQhxd-EiLixAHaLH&pid=Api&P=0",
          ],
        },
        {
          id: 3,
          content: [
            "https://tse2.mm.bing.net/th?id=OIP.PpW6LxFhon7go2huV3-kxgHaLH&pid=Api&P=0",
            "https://tse2.explicit.bing.net/th?id=OIP.xkmX5muB00dmqxl4AgXtvgHaLH&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.xs59d31tHiOBZU1Z3u1ApgHaLH&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.ccQnhDB4C_9BsXTIiRWQ8gHaLH&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.p1jvBYe4YmKQzaOaiBmoUQHaK3&pid=Api&P=0",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse3.explicit.bing.net/th?id=OIP.LmyIdxQ2vi-Xhb3I-p4GuAHaLe&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.cQImmlw_iCFWLOLrN7xbfwHaLH&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.-ku2IW84SrOjhug1cqtjTwHaLH&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.b1S6msMWET4A-kraGRlmUgHaLH&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.7FuSVR-f_9Xmx3tXd6dE8QHaLH&pid=Api&P=0",
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
      introduce:
        "Kimetsu no Yaiba – Tanjirou là con cả của gia đình vừa mất cha. Một ngày nọ, Tanjirou đến thăm thị trấn khác để bán than, khi đêm về cậu ở nghỉ tại nhà người khác thay vì về nhà vì lời đồn thổi về ác quỷ luôn rình mò gần núi vào buổi tối. Khi cậu về nhà vào ngày hôm sau, bị kịch đang đợi chờ cậu…",
      category: ["Huyền Huyễn", "Phưu lưu", "Khám phá"],
      chapter: [
        {
          id: 1,
          content: [
            "https://tse3.mm.bing.net/th?id=OIP.Lm1AN3pCk8ON11fbC6nUXwAAAA&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.ok9xCzIOu4GoJsqq9W0khQHaNC&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.dIHlI2TTUyQ9zWKHtMbclwHaOj&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.0mjAJJGdccK1eK-FgWJ2swHaNZ&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.txILB7isx9p-UuFFr3ynywHaNz&pid=Api&P=0",
          ],
        },
        {
          id: 2,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.dtQnreyJ4OOEUWwq8KINMgHaJb&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.Kl8vnzythz-FWlKGH3KtaQHaJ4&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.wuvhrTfVPblCd7BXY6Q5iAHaMW&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.kOpytG7_rIzfG7qXekxw7gHaMr&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.2uf5FXR0-2TgKNw-3yhJSgHaOh&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.I950USrMGp06L6trRp9yQAHaPs&pid=Api&P=0",
          ],
        },
        {
          id: 3,
          content: [
            "https://tse2.mm.bing.net/th?id=OIP.eQZ3oYwDV0IZxuJIXgCclQHaKX&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.opWG118NrGG-LwXJtjWtoAHaMN&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.gtoeFegBxrUOqo8LKMFoUQHaOi&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.dL5n-axp-N2NuYufP-3C4QHaJc&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.kBZtkvnVEYFBCMm8SXRRJQHaK-&pid=Api&P=0",
            "https://tse2.explicit.bing.net/th?id=OIP.Uug13j6qzCpB5Qwv_PGEBAHaLd&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.bT6P17WzYeuratigopZXJAHaI7&pid=Api&P=0",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse2.explicit.bing.net/th?id=OIP.p8j2y-5ET9KYtkELvztIsQHaNZ&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.UrgKXj_UzOI8ovxW35PuqwHaMW&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.CwGx9L7SlcDmVJSg5n1DbQHaMv&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.KCVUaPKVDVATLNdzkl2-NgHaLZ&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.vjIO62zGOmjcO87dIvujjAHaQ2&pid=Api&P=0",
          ],
        },
        {
          id: 5,
          content: [
            "https://tse3.mm.bing.net/th?id=OIP.fYbU2UVpnccv3SdadbhI7wHaO_&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.waS7-ts7BVTKNSpTg154yAHaQ3&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.v28Hfa11_6YlSI-jqQRnMgHaLI&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.FzI7neKjCfMElezgM6wqXQHaJ_&pid=Api&P=0",
            "https://tse3.explicit.bing.net/th?id=OIP.H6ov1pLlfPpOkNV2Tqh3lQHaOe&pid=Api&P=0",
            "https://tse1.explicit.bing.net/th?id=OIP.1UbVkPLQv4n9nwHgHNtFEgHaKa&pid=Api&P=0"
          ],
        },
        {
          id: 6,
          content: [
            "https://tse1.mm.bing.net/th?id=OIP.LNKpjbX41lrBN8kceq8XuwHaOz&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.Z-xaaMq-U4uNE2tgs6mOpgHaGB&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.1ApGm-O3Y9L8_-9EYaxdAQHaJc&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.mevjs5CpWjrNqnaasF89VwHaOo&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.O-isMmh2FFaJAV95-GsuJQHaJ2&pid=Api&P=0",
            "https://tse2.explicit.bing.net/th?id=OIP.yM6H3_icd9DQt8sw-nJnXgHaLR&pid=Api&P=0"
          ],
        },
        {
          id: 7,
          content: [
            "https://tse1.explicit.bing.net/th?id=OIP.nbec4MjFNp3R-Lk7ohMliAHaKa&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.cV3wPDkPbkFT0yp6YiYZiAHaQ3&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.QrgKAwwWMKagQaQDdPsvXgHaLH&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.pb3KOtWq76yywZXlhYru_AHaNr&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.Ve6mxoxK9-GXdFYgtzy4tAHaKa&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.fTbkSi3a62mc8Ix_X6rdnAHaKS&pid=Api&P=0"
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Đấu phá thương khung",
      avatar:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1SUKpKXJyFrUl4eoxKw7oDanabn.jpg",
      author: "Harashi",
      state: "Đang tiến hành",
      introduce:
        "Kimetsu no Yaiba – Tanjirou là con cả của gia đình vừa mất cha. Một ngày nọ, Tanjirou đến thăm thị trấn khác để bán than, khi đêm về cậu ở nghỉ tại nhà người khác thay vì về nhà vì lời đồn thổi về ác quỷ luôn rình mò gần núi vào buổi tối. Khi cậu về nhà vào ngày hôm sau, bị kịch đang đợi chờ cậu…",
      category: ["Huyền Huyễn", "Phưu lưu", "Khám phá"],
      chapter: [
        {
          id: 1,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.9VkvDbaZWJnvTuy-2QsQvQHaLg&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.xGP9_ReHn4SPKKW5ce3CqwHaLe&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.R2bMcMRnpmN5mqjNFR4-6wHaLf&pid=Api&P=0",
            "https://tse1.explicit.bing.net/th?id=OIP.ZZWHREE3jYn5UJ1PosM4OwHaLZ&pid=Api&P=0",
            "https://tse2.explicit.bing.net/th?id=OIP.2eoNkTM6bptPCvZv97BzdQHaLj&pid=Api&P=0",
          ],
        },
        {
          id: 2,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.0KAtqd6a3qXmV_nUsBWyIQHaLR&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.N88y6cRSliQN98XAuCxz3wHaLf&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.J17NGuuT0YY4YfS-74MxCAHaLu&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.N88y6cRSliQN98XAuCxz3wHaLf&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.PswL8iwLAwLv6RAg3bWKXwHaLo&pid=Api&P=0",
          ],
        },
        {
          id: 3,
          content: [
            "https://tse1.mm.bing.net/th?id=OIP.As9Mj-oP9hAkZ6Z7PkMFAAHaLo&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.e7Z8xWqlRPdeDIg5TpwC3wHaIO&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.6axKkM3KVGcv7_VcX9AzTQHaLS&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.Xw32FdWexIws67a6um4BMwHaLY&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.MV_0iOev2po_qfPscBPa3QHaLb&pid=Api&P=0",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.CZ04PpLbKMLUj80NpU9hOwDJE2&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.kz2TDFnq_CYlcf_gf-jmXgHaIO&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.BbExSSmyZlmE4ERXnnGlJQHaLo&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.pLdH2y53ibRdT4FwZkGTjgDBEs&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.XNcoB9bsLAgSEbOHJ16pJwHaL9&pid=Api&P=0",
          ],
        },
        {
          id: 5,
          content: [
            "https://tse2.mm.bing.net/th?id=OIP.cYrXqVM40_smHhTfqFcKIgHaDh&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.XNcoB9bsLAgSEbOHJ16pJwHaL9&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP._gc3L-ZGDYTKdSkv6jcYwwHaIO&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.PBFEb3ow3_YfdALNoQwlWgHaLi&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.riLEmweQ4rOm9b81kN5bLwHaLv&pid=Api&P=0",
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Ta trời sinh đã là nhân vật phải diện",
      avatar:
        "https://hhtrungquoc.com/wp-content/uploads/2022/07/ta-troi-sinh-da-la-nhan-vat-phan-dien.jpg",
      author: "Harashi",
      state: "Đang tiến hành",
      introduce:
        "Kimetsu no Yaiba – Tanjirou là con cả của gia đình vừa mất cha. Một ngày nọ, Tanjirou đến thăm thị trấn khác để bán than, khi đêm về cậu ở nghỉ tại nhà người khác thay vì về nhà vì lời đồn thổi về ác quỷ luôn rình mò gần núi vào buổi tối. Khi cậu về nhà vào ngày hôm sau, bị kịch đang đợi chờ cậu…",
      category: ["Huyền Huyễn", "Phưu lưu", "Khám phá"],
      chapter: [
        {
          id: 1,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.J9WxpbXWtZC6vlK_6mXT9AHaN9&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.YsA8kyZz6YvZ2SXZnzf0tgHaIS&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.dRMFXrzSyC5nA_Df4JJeGgHaPb&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.f2-_uiUgQ59HbBn2iYGwjQHaKO&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIP.vVUpLMf94jFvd0jdUBMGaQHaH9&pid=Api&P=0",
          ],
        },
        {
          id: 2,
          content: [
            "https://tse3.mm.bing.net/th?id=OIP.0Dqwh97yMhIjFa3H4TWMzgHaKJ&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.a4f5IBMYQ3HoF1VisHulhQHaMJ&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.XCZ3Mf0MsXwCNbzw2t-r7AHaKJ&pid=Api&P=0",
            "https://tse4.explicit.bing.net/th?id=OIP.nQUs0Rlrhn3qyJ6gsVScbAHaKR&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.F2i6OXbsinAYa1Fa_fMSlAHaKL&pid=Api&P=0",
          ],
        },
        {
          id: 3,
          content: [
            "https://tse2.mm.bing.net/th?id=OIP._oxZaYlKDc1rHKMqDE9S9AHaJa&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.lrioqphsRhtxspiuBCB54gHaMM&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.Tl54lkokEagx07mNuw05iwHaJ-&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.SBWiRLP-_sgK0jcsgY54jQHaOm&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.tfQJPVFPsf50kg1mqzVkWgHaKR&pid=Api&P=0",
          ],
        },
        {
          id: 4,
          content: [
            "https://tse4.mm.bing.net/th?id=OIP.Xq43GX9CLfDZJNVlviU2ywHaP9&pid=Api&P=0",
            "https://tse2.mm.bing.net/th?id=OIP.2V4d545cyldQSI7m7Jwq2AHaLI&pid=Api&P=0",
            "https://tse1.mm.bing.net/th?id=OIP.jkTLQVkVklclEZEX0JhbNwHaP9&pid=Api&P=0",
            "https://tse4.mm.bing.net/th?id=OIP.I7b6PZqKMmusE1KNsnD4yAHaQk&pid=Api&P=0",
            "https://tse3.mm.bing.net/th?id=OIF.HMxA%2bLnjpG%2byVc0FzakyiA&pid=Api&P=0",
          ],
        },
      ],
    },
  ],
};
export default function Home({ navigation }) {
  const theme = useSelector((state) => {
    return state.reTheme;
  }); 
  const [search, setSearch] = useState("");
  const [itemSearch, setItemSearch] = useState([]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newSea = intiState.home.filter((item) =>
        item.name.includes(search)
      );
      setItemSearch(newSea);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);
  return (
    <ScrollView style={{
      backgroundColor: theme.theme === "white" ? "#ddd" : "black"
    }}>
      <TouchableOpacity
        style={{
          margin: 8,
          borderRadius: 10,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "red",
          zIndex: 9999,
          backgroundColor: "#ddd"
        }}
      >
        <Image
          source={require("../../images/search.png")}
          style={{ height: 20, width: 20 }}
        />
        <TextInput
          style={{ width: "80%", padding: 13, height: 50, fontSize: 16 }}
          placeholder="Nhập tên truyện cần tìm kiếm"
          value={search}
          onChangeText={(newSearch) => setSearch(newSearch)}
        ></TextInput>
        {search && (
          <ScrollView
            style={{
              width: "100%",
              height: "auto",
              backgroundColor: "white",
              position: "absolute",
              top: 50,
              zIndex: 9999,
              marginTop: 5,
              borderRadius: 5,
            }}
          >
            {itemSearch.length === 0 ? (
              <View
                style={{
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>Không thấy truyện cần tìm</Text>
              </View>
            ) : (
              itemSearch.map((item, index) => {
                return (
                  <ItemSearch
                    item={item}
                    key={item.id}
                    navigation={navigation}
                  />
                );
              })
            )}
          </ScrollView>
        )}
      </TouchableOpacity>
      <View>
        <Text style={{ fontWeight: "500", fontSize: 20, color: "#F26B8F" }}>
          Truyện hot
        </Text>
        <ScrollView horizontal style={{ flexDirection: "row", marginLeft: 4 }}>
          {intiState.home.map((item, index) => {
            return (
              <Card
                id={item.id}
                key={item.id}
                name={item.name}
                avatar={item.avatar}
                author={item.author}
                navigation={navigation}
                category={item.category}
              />
            );
          })}
        </ScrollView>
      </View>
      <View>
        <Text style={{ fontWeight: "500", fontSize: 20, color: "#F26B8F" }}>
          Truyện mới cập nhật
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {intiState.home.map((item, index) => {
            return (
              <Card
                id={item.id}
                key={item.id}
                name={item.name}
                avatar={item.avatar}
                author={item.author}
                navigation={navigation}
                category={item.category}
              />
            );
          })}
          {intiState.home.map((item, index) => {
            return (
              <Card
                id={item.id}
                key={item.id}
                name={item.name}
                avatar={item.avatar}
                author={item.author}
                navigation={navigation}
                category={item.category}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
