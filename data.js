// Du lieu cau hoi trac nghiem tu 7 chuong
const quizData = [
  {
    "id": "Chương 1_Q1",
    "chapter": "Chương 1",
    "number": 1,
    "question": "Chủ nghĩa xã hội khoa học theo nghĩa hẹp là gì?",
    "options": [
      {
        "label": "A",
        "text": "Là chủ nghĩa Mác - Lênin."
      },
      {
        "label": "B",
        "text": "Là một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin."
      },
      {
        "label": "C",
        "text": "Là sự luận giải từ góc độ triết học về sự chuyển biến của xã hội."
      },
      {
        "label": "D",
        "text": "Là sự luận giải từ góc độ kinh tế về sự chuyển biến của xã hội."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": "Chương 1_Q2",
    "chapter": "Chương 1",
    "number": 2,
    "question": "Điều kiện kinh tế - xã hội nào dẫn đến sự ra đời của Chủ nghĩa xã hội khoa học?",
    "options": [
      {
        "label": "A",
        "text": "Sự ra đời của phương thức sản xuất phong kiến."
      },
      {
        "label": "B",
        "text": "Sự phát triển mạnh mẽ của cách mạng công nghiệp và nền đại công nghiệp."
      },
      {
        "label": "C",
        "text": "Sự ra đời của giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Sự ra đời của chủ nghĩa tư bản độc quyền."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": "Chương 1_Q3",
    "chapter": "Chương 1",
    "number": 3,
    "question": "Mâu thuẫn cơ bản trong lòng chủ nghĩa tư bản những năm 40 của thế kỷ XIX là gì?",
    "options": [
      {
        "label": "A",
        "text": "Mâu thuẫn giữa giai cấp nông dân và giai cấp địa chủ."
      },
      {
        "label": "B",
        "text": "Mâu thuẫn giữa lực lượng sản xuất mang tính xã hội với quan hệ sản xuất dựa trên chiếm hữu tư nhân TBCN."
      },
      {
        "label": "C",
        "text": "Mâu thuẫn giữa giai cấp tư sản và giai cấp phong kiến."
      },
      {
        "label": "D",
        "text": "Mâu thuẫn giữa các nước đế quốc."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": "Chương 1_Q4",
    "chapter": "Chương 1",
    "number": 4,
    "question": "Ba phát minh \"vạch thời đại\" trong khoa học tự nhiên cuối thế kỷ XVIII, đầu thế kỷ XIX là gì?",
    "options": [
      {
        "label": "A",
        "text": "Học thuyết tiến hóa, Định luật bảo toàn và chuyển hóa năng lượng, Học thuyết tế bào."
      },
      {
        "label": "B",
        "text": "Phát minh ra máy hơi nước, Phát minh ra điện, Phát minh ra thuyết tương đối."
      },
      {
        "label": "C",
        "text": "Học thuyết nguyên tử, Học thuyết tế bào, Định luật vạn vật hấp dẫn."
      },
      {
        "label": "D",
        "text": "Định luật bảo toàn vật chất, Học thuyết tiến hóa, Thuyết Nhật tâm."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q5",
    "chapter": "Chương 1",
    "number": 5,
    "question": "Tiền đề lý luận trực tiếp cho sự ra đời của Chủ nghĩa xã hội khoa học là gì?",
    "options": [
      {
        "label": "A",
        "text": "Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh, Chủ nghĩa không tưởng phê phán."
      },
      {
        "label": "B",
        "text": "Triết học Phục hưng, Kinh tế chính trị học cổ điển Pháp, Chủ nghĩa xã hội không tưởng Anh."
      },
      {
        "label": "C",
        "text": "Triết học khai sáng Pháp, Kinh tế chính trị học cổ điển Đức, Chủ nghĩa xã hội không tưởng Đức."
      },
      {
        "label": "D",
        "text": "Triết học cổ điển Hy Lạp, Kinh tế chính trị học cổ điển Ý, Chủ nghĩa không tưởng Tây Ban Nha."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q6",
    "chapter": "Chương 1",
    "number": 6,
    "question": "Ai là đại biểu của Triết học cổ điển Đức được C.Mác và Ph.Ăngghen kế thừa?",
    "options": [
      {
        "label": "A",
        "text": "A.Xmít và D.Ricácđô."
      },
      {
        "label": "B",
        "text": "H.Xanh Ximông và S.Phuriê."
      },
      {
        "label": "C",
        "text": "Ph. Hêghen và L.Phoiơbắc."
      },
      {
        "label": "D",
        "text": "R.Oen và T.More."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": "Chương 1_Q7",
    "chapter": "Chương 1",
    "number": 7,
    "question": "Ai là đại biểu của Kinh tế chính trị học cổ điển Anh?",
    "options": [
      {
        "label": "A",
        "text": "Ph. Hêghen và L.Phoiơbắc."
      },
      {
        "label": "B",
        "text": "H.Xanh Ximông và S.Phuriê."
      },
      {
        "label": "C",
        "text": "R.Oen và S.Phuriê."
      },
      {
        "label": "D",
        "text": "A.Xmít và D.Ricácđô."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": "Chương 1_Q8",
    "chapter": "Chương 1",
    "number": 8,
    "question": "Ai là những đại biểu của Chủ nghĩa không tưởng phê phán?",
    "options": [
      {
        "label": "A",
        "text": "H.Xanh Ximông, S.Phuriê, R.Oen."
      },
      {
        "label": "B",
        "text": "Ph. Hêghen, L.Phoiơbắc, A.Xmít."
      },
      {
        "label": "C",
        "text": "A.Xmít, D.Ricácđô, H.Xanh Ximông."
      },
      {
        "label": "D",
        "text": "C.Mác, Ph.Ăngghen, V.I.Lênin."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q9",
    "chapter": "Chương 1",
    "number": 9,
    "question": "Một trong những ưu điểm của chủ nghĩa không tưởng phê phán là gì?",
    "options": [
      {
        "label": "A",
        "text": "Phát hiện ra quy luật vận động của chủ nghĩa tư bản."
      },
      {
        "label": "B",
        "text": "Phát hiện ra sứ mệnh lịch sử của giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Thể hiện tinh thần phê phán, lên án chế độ tư bản chủ nghĩa."
      },
      {
        "label": "D",
        "text": "Chỉ ra được biện pháp hiện thực để cải tạo xã hội."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": "Chương 1_Q10",
    "chapter": "Chương 1",
    "number": 10,
    "question": "Hạn chế lớn nhất của chủ nghĩa xã hội không tưởng phê phán là gì?",
    "options": [
      {
        "label": "A",
        "text": "Không phê phán mạnh mẽ chế độ tư bản."
      },
      {
        "label": "B",
        "text": "Không phát hiện ra lực lượng xã hội tiên phong (giai cấp công nhân) và không chỉ ra được biện pháp hiện thực."
      },
      {
        "label": "C",
        "text": "Không đưa ra được mô hình xã hội tương lai."
      },
      {
        "label": "D",
        "text": "Không có tinh thần nhân đạo."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": "Chương 1_Q12",
    "chapter": "Chương 1",
    "number": 12,
    "question": "Tác phẩm nào của Ph.Ăngghen đánh dấu sự chuyển biến lập trường sang chủ nghĩa cộng sản?",
    "options": [
      {
        "label": "A",
        "text": "\"Lược khảo khoa kinh tế - chính trị\" và \"Tình cảnh nước Anh\"."
      },
      {
        "label": "B",
        "text": "\"Góp phần phê phán triết học pháp quyền của Hêghen\"."
      },
      {
        "label": "C",
        "text": "\"Bản thảo kinh tế - triết học năm 1844\"."
      },
      {
        "label": "D",
        "text": "\"Gia đình thần thánh\"."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q13",
    "chapter": "Chương 1",
    "number": 13,
    "question": "Ba phát kiến vĩ đại của C.Mác và Ph.Ăngghen là gì?",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa duy vật lịch sử, Học thuyết về giá trị thặng dư, Học thuyết về sứ mệnh lịch sử của giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Phép biện chứng duy vật, Học thuyết về giá trị, Học thuyết về nhà nước."
      },
      {
        "label": "C",
        "text": "Chủ nghĩa duy vật biện chứng, Học thuyết về hàng hóa, Học thuyết về cách mạng."
      },
      {
        "label": "D",
        "text": "Kinh tế chính trị học Mácxít, Triết học Mácxít, Chủ nghĩa xã hội khoa học."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q14",
    "chapter": "Chương 1",
    "number": 14,
    "question": "Phát kiến nào của C.Mác và Ph.Ăngghen khẳng định sự diệt vong không tránh khỏi của CNTB và sự ra đời tất yếu của CNXH về phương diện kinh tế?",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa duy vật lịch sử."
      },
      {
        "label": "B",
        "text": "Học thuyết về giá trị thặng dư."
      },
      {
        "label": "C",
        "text": "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Phép biện chứng duy vật."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": "Chương 1_Q15",
    "chapter": "Chương 1",
    "number": 15,
    "question": "Phát kiến nào của C.Mác và Ph.Ăngghen đã khắc phục triệt để những hạn chế của CNXH không tưởng?",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa duy vật lịch sử."
      },
      {
        "label": "B",
        "text": "Học thuyết về giá trị thặng dư."
      },
      {
        "label": "C",
        "text": "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Học thuyết tế bào."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": "Chương 1_Q16",
    "chapter": "Chương 1",
    "number": 16,
    "question": "Tác phẩm nào được xem là đánh dấu sự ra đời của Chủ nghĩa xã hội khoa học?",
    "options": [
      {
        "label": "A",
        "text": "\"Tuyên ngôn của Đảng Cộng sản\" (2/1848)."
      },
      {
        "label": "B",
        "text": "\"Hệ tư tưởng Đức\" (1845-1846)."
      },
      {
        "label": "C",
        "text": "\"Tư bản\", quyển I (1867)."
      },
      {
        "label": "D",
        "text": "\"Chống Đuyrinh\" (1878)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q17",
    "chapter": "Chương 1",
    "number": 17,
    "question": "\"Tuyên ngôn của Đảng Cộng sản\" (1848) được xem là gì?",
    "options": [
      {
        "label": "A",
        "text": "Cương lĩnh chính trị, kim chỉ nam hành động của toàn bộ phong trào cộng sản và công nhân quốc tế."
      },
      {
        "label": "B",
        "text": "Tác phẩm triết học vĩ đại nhất."
      },
      {
        "label": "C",
        "text": "Tác phẩm kinh tế chính trị học đầu tiên."
      },
      {
        "label": "D",
        "text": "Tác phẩm phân tích về Công xã Pari."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q18",
    "chapter": "Chương 1",
    "number": 18,
    "question": "Giai đoạn C.Mác và Ph.Ăngghen phát triển CNXHKH từ 1848 đến Công xã Pari (1871) được đánh dấu bởi sự kiện nào?",
    "options": [
      {
        "label": "A",
        "text": "Sự ra đời của Quốc tế I (1864) và xuất bản bộ \"Tư bản\" (1867)."
      },
      {
        "label": "B",
        "text": "Cách mạng Tháng Mười Nga (1917)."
      },
      {
        "label": "C",
        "text": "Chiến tranh thế giới thứ nhất."
      },
      {
        "label": "D",
        "text": "Sự ra đời của Quốc tế II."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q19",
    "chapter": "Chương 1",
    "number": 19,
    "question": "Bộ \"Tư bản\" của C.Mác được V.I.Lênin khẳng định là tác phẩm chủ yếu và cơ bản trình bày vấn đề gì?",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa xã hội khoa học."
      },
      {
        "label": "B",
        "text": "Triết học duy vật biện chứng."
      },
      {
        "label": "C",
        "text": "Triết học duy tâm."
      },
      {
        "label": "D",
        "text": "Chủ nghĩa xã hội không tưởng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q20",
    "chapter": "Chương 1",
    "number": 20,
    "question": "Sau Công xã Pari (1871), C.Mác và Ph.Ăngghen đã bổ sung và phát triển tư tưởng gì?",
    "options": [
      {
        "label": "A",
        "text": "Tư tưởng về đập tan bộ máy nhà nước quan liêu, không đập tan toàn bộ bộ máy nhà nước tư sản."
      },
      {
        "label": "B",
        "text": "Tư tưởng về khả năng cách mạng nổ ra ở một nước."
      },
      {
        "label": "C",
        "text": "Tư tưởng về chủ nghĩa tư bản nhà nước."
      },
      {
        "label": "D",
        "text": "Tư tưởng về chính sách kinh tế mới."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q21",
    "chapter": "Chương 1",
    "number": 21,
    "question": "Tác phẩm nào của Ph.Ăngghen luận chứng sự phát triển của chủ nghĩa xã hội từ không tưởng đến khoa học?",
    "options": [
      {
        "label": "A",
        "text": "\"Chống Đuyrinh\" (1878)."
      },
      {
        "label": "B",
        "text": "\"Nguồn gốc của gia đình, của chế độ tư hữu và của nhà nước\" (1884)."
      },
      {
        "label": "C",
        "text": "\"Tình cảnh nước Anh\" (1843)."
      },
      {
        "label": "D",
        "text": "\"Biện chứng của tự nhiên\"."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q22",
    "chapter": "Chương 1",
    "number": 22,
    "question": "Theo Ph.Ăngghen, nhiệm vụ của Chủ nghĩa xã hội khoa học là gì?",
    "options": [
      {
        "label": "A",
        "text": "Nghiên cứu những điều kiện lịch sử và bản chất của sự biến đổi xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ nghiên cứu về triết học."
      },
      {
        "label": "C",
        "text": "Chỉ nghiên cứu về kinh tế."
      },
      {
        "label": "D",
        "text": "Chỉ nghiên cứu về xã hội tương lai."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q23",
    "chapter": "Chương 1",
    "number": 23,
    "question": "V.I. Lênin (1870-1924) đã vận dụng và phát triển CNXHKH trong thời đại nào?",
    "options": [
      {
        "label": "A",
        "text": "Thời đại tan rã chủ nghĩa tư bản, sự sụp đổ trong nội bộ chủ nghĩa tư bản, thời đại cách mạng cộng sản."
      },
      {
        "label": "B",
        "text": "Thời đại chủ nghĩa tư bản tự do cạnh tranh."
      },
      {
        "label": "C",
        "text": "Thời đại của cách mạng công nghiệp lần thứ nhất."
      },
      {
        "label": "D",
        "text": "Thời đại của chủ nghĩa phong kiến."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q24",
    "chapter": "Chương 1",
    "number": 24,
    "question": "Công lao của V.I. Lênin đối với chủ nghĩa xã hội là gì?",
    "options": [
      {
        "label": "A",
        "text": "Biến chủ nghĩa xã hội từ không tưởng thành khoa học."
      },
      {
        "label": "B",
        "text": "Biến chủ nghĩa xã hội từ khoa học, từ lý luận thành hiện thực."
      },
      {
        "label": "C",
        "text": "Sáng lập ra chủ nghĩa xã hội không tưởng."
      },
      {
        "label": "D",
        "text": "Chỉ phát triển về mặt lý luận triết học."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": "Chương 1_Q25",
    "chapter": "Chương 1",
    "number": 25,
    "question": "Sự kiện nào đánh dấu V.I. Lênin biến chủ nghĩa xã hội từ lý luận thành hiện thực?",
    "options": [
      {
        "label": "A",
        "text": "Cách mạng Tháng Mười Nga (1917)."
      },
      {
        "label": "B",
        "text": "Công xã Pari (1871)."
      },
      {
        "label": "C",
        "text": "Cách mạng tư sản Pháp (1789)."
      },
      {
        "label": "D",
        "text": "Quốc tế I (1864)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q26",
    "chapter": "Chương 1",
    "number": 26,
    "question": "Trước Cách mạng Tháng Mười Nga, V.I. Lênin đã làm gì để bảo vệ và phát triển CNXHKH?",
    "options": [
      {
        "label": "A",
        "text": "Đấu tranh chống các trào lưu phi mácxít (dân túy, phái kinh tế...)."
      },
      {
        "label": "B",
        "text": "Xây dựng lý luận về cách mạng ở các nước tư bản phát triển."
      },
      {
        "label": "C",
        "text": "Đề ra Chính sách kinh tế mới (NEP)."
      },
      {
        "label": "D",
        "text": "Tổng kết kinh nghiệm Công xã Pari."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q27",
    "chapter": "Chương 1",
    "number": 27,
    "question": "V.I. Lênin đã phát hiện ra quy luật nào của chủ nghĩa tư bản trong thời kỳ đế quốc chủ nghĩa?",
    "options": [
      {
        "label": "A",
        "text": "Quy luật phát triển không đều về kinh tế và chính trị."
      },
      {
        "label": "B",
        "text": "Quy luật giá trị."
      },
      {
        "label": "C",
        "text": "Quy luật cung cầu."
      },
      {
        "label": "D",
        "text": "Quy luật giá trị thặng dư."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q28",
    "chapter": "Chương 1",
    "number": 28,
    "question": "Từ quy luật phát triển không đều, V.I. Lênin đã đi đến kết luận quan trọng nào?",
    "options": [
      {
        "label": "A",
        "text": "Cách mạng vô sản chỉ có thể thắng lợi đồng thời ở tất cả các nước."
      },
      {
        "label": "B",
        "text": "Cách mạng vô sản có thể nổ ra và thắng lợi ở một số nước, thậm chí ở một nước riêng lẻ."
      },
      {
        "label": "C",
        "text": "Cách mạng vô sản không thể nổ ra ở các nước thuộc địa."
      },
      {
        "label": "D",
        "text": "Chủ nghĩa tư bản là vĩnh viễn."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": "Chương 1_Q29",
    "chapter": "Chương 1",
    "number": 29,
    "question": "Sau Cách mạng Tháng Mười Nga, V.I. Lênin định nghĩa chuyên chính vô sản là gì?",
    "options": [
      {
        "label": "A",
        "text": "Một hình thức nhà nước mới, dân chủ với người vô sản và chuyên chính với giai cấp tư sản."
      },
      {
        "label": "B",
        "text": "Một hình thức nhà nước tư sản kiểu mới."
      },
      {
        "label": "C",
        "text": "Một hình thức nhà nước dân chủ thuần túy."
      },
      {
        "label": "D",
        "text": "Một hình thức nhà nước siêu giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q30",
    "chapter": "Chương 1",
    "number": 30,
    "question": "Theo V.I. Lênin, cơ sở và nguyên tắc cao nhất của chuyên chính vô sản là gì?",
    "options": [
      {
        "label": "A",
        "text": "Sự liên minh của giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác."
      },
      {
        "label": "B",
        "text": "Sự liên minh của giai cấp tư sản và giai cấp vô sản."
      },
      {
        "label": "C",
        "text": "Sự lãnh đạo của giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Sự tồn tại của chế độ tư hữu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q31",
    "chapter": "Chương 1",
    "number": 31,
    "question": "V.I. Lênin nhấn mạnh, chuyên chính vô sản không phải chỉ là bạo lực, mà chủ yếu là gì?",
    "options": [
      {
        "label": "A",
        "text": "Việc giai cấp công nhân đưa ra và thực hiện được kiểu tổ chức lao động xã hội cao hơn."
      },
      {
        "label": "B",
        "text": "Việc sử dụng bạo lực liên tục."
      },
      {
        "label": "C",
        "text": "Việc đàn áp giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Việc củng cố quân đội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q32",
    "chapter": "Chương 1",
    "number": 32,
    "question": "Về chế độ dân chủ, V.I. Lênin khẳng định chế độ dân chủ vô sản so với dân chủ tư sản thì...",
    "options": [
      {
        "label": "A",
        "text": "Dân chủ hơn gấp triệu lần."
      },
      {
        "label": "B",
        "text": "Kém dân chủ hơn."
      },
      {
        "label": "C",
        "text": "Tương đương nhau."
      },
      {
        "label": "D",
        "text": "Chỉ là dân chủ hình thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q33",
    "chapter": "Chương 1",
    "number": 33,
    "question": "Trong cương lĩnh xây dựng CNXH ở Nga, V.I. Lênin đã nêu ra nhiều luận điểm, trong đó có...",
    "options": [
      {
        "label": "A",
        "text": "Cần có những bước quá độ nhỏ trong thời kỳ quá độ."
      },
      {
        "label": "B",
        "text": "Phải tiến hành công nghiệp hóa ngay lập tức."
      },
      {
        "label": "C",
        "text": "Chỉ phát triển công nghiệp nặng."
      },
      {
        "label": "D",
        "text": "Xóa bỏ hoàn toàn kinh tế hàng hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q34",
    "chapter": "Chương 1",
    "number": 34,
    "question": "V.I. Lênin nhấn mạnh, trong thời kỳ quá độ lên CNXH, cần thiết phải phát triển loại kinh tế nào?",
    "options": [
      {
        "label": "A",
        "text": "Kinh tế hàng hoá nhiều thành phần."
      },
      {
        "label": "B",
        "text": "Kinh tế tự cung tự cấp."
      },
      {
        "label": "C",
        "text": "Chỉ kinh tế nhà nước."
      },
      {
        "label": "D",
        "text": "Chỉ kinh tế tập thể."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q35",
    "chapter": "Chương 1",
    "number": 35,
    "question": "Ba nguyên tắc cơ bản trong Cương lĩnh dân tộc của V.I. Lênin là gì?",
    "options": [
      {
        "label": "A",
        "text": "Quyền bình đẳng dân tộc, Quyền dân tộc tự quyết, Tình đoàn kết của giai cấp vô sản các dân tộc."
      },
      {
        "label": "B",
        "text": "Dân tộc tự quyết, Dân tộc ly khai, Dân tộc liên hiệp."
      },
      {
        "label": "C",
        "text": "Bình đẳng, Chủ quyền, Không can thiệp."
      },
      {
        "label": "D",
        "text": "Hợp tác, Bình đẳng, Cùng có lợi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q36",
    "chapter": "Chương 1",
    "number": 36,
    "question": "Ai là người kế tục V.I. Lênin và gắn lý luận, tên tuổi của C.Mác với V.I.Lênin thành \"Chủ nghĩa Mác - Lênin\"?",
    "options": [
      {
        "label": "A",
        "text": "J.Xtalin."
      },
      {
        "label": "B",
        "text": "M. Gorbachev."
      },
      {
        "label": "C",
        "text": "L. Trotsky."
      },
      {
        "label": "D",
        "text": "G. Đi-mi-trốp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q37",
    "chapter": "Chương 1",
    "number": 37,
    "question": "Hội nghị đại biểu các Đảng Cộng sản và công nhân quốc tế (11/1957) đã tổng kết và thông qua bao nhiêu quy luật chung của công cuộc xây dựng CNXH?",
    "options": [
      {
        "label": "A",
        "text": "9 quy luật."
      },
      {
        "label": "B",
        "text": "5 quy luật."
      },
      {
        "label": "C",
        "text": "7 quy luật."
      },
      {
        "label": "D",
        "text": "12 quy luật."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q38",
    "chapter": "Chương 1",
    "number": 38,
    "question": "Sự sụp đổ của mô hình CNXH ở Liên Xô và Đông Âu diễn ra vào thời gian nào?",
    "options": [
      {
        "label": "A",
        "text": "Cuối thập niên 80, đầu thập niên 90 của thế kỷ XX."
      },
      {
        "label": "B",
        "text": "Những năm 50 của thế kỷ XX."
      },
      {
        "label": "C",
        "text": "Những năm 70 của thế kỷ XX."
      },
      {
        "label": "D",
        "text": "Những năm 60 của thế kỷ XX."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q39",
    "chapter": "Chương 1",
    "number": 39,
    "question": "Đảng Cộng sản Trung Quốc tiến hành cải cách, mở cửa từ năm nào?",
    "options": [
      {
        "label": "A",
        "text": "1978 (Hội nghị Trung ương 3 khóa XI)."
      },
      {
        "label": "B",
        "text": "1949."
      },
      {
        "label": "C",
        "text": "1966."
      },
      {
        "label": "D",
        "text": "1991."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q40",
    "chapter": "Chương 1",
    "number": 40,
    "question": "Lý luận \"Chủ nghĩa xã hội đặc sắc Trung Quốc\" gắn liền với sự lãnh đạo của Đảng nào?",
    "options": [
      {
        "label": "A",
        "text": "Đảng Cộng sản Trung Quốc."
      },
      {
        "label": "B",
        "text": "Đảng Cộng sản Liên Xô."
      },
      {
        "label": "C",
        "text": "Đảng Cộng sản Việt Nam."
      },
      {
        "label": "D",
        "text": "Đảng Lao động Triều Tiên."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q41",
    "chapter": "Chương 1",
    "number": 41,
    "question": "Đảng Cộng sản Việt Nam khởi xướng công cuộc đổi mới từ Đại hội lần thứ mấy (năm nào)?",
    "options": [
      {
        "label": "A",
        "text": "Đại hội VI (1986)."
      },
      {
        "label": "B",
        "text": "Đại hội IV (1976)."
      },
      {
        "label": "C",
        "text": "Đại hội V (1982)."
      },
      {
        "label": "D",
        "text": "Đại hội VII (1991)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q42",
    "chapter": "Chương 1",
    "number": 42,
    "question": "Một trong những đóng góp lý luận của Đảng Cộng sản Việt Nam qua công cuộc đổi mới là gì?",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng và phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Xây dựng nền kinh tế kế hoạch hóa tập trung."
      },
      {
        "label": "C",
        "text": "Xóa bỏ kinh tế nhiều thành phần."
      },
      {
        "label": "D",
        "text": "Chỉ phát triển kinh tế tư nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q43",
    "chapter": "Chương 1",
    "number": 43,
    "question": "Bài học kinh nghiệm lớn được Đảng Cộng sản Việt Nam rút ra qua 35 năm đổi mới là gì?",
    "options": [
      {
        "label": "A",
        "text": "Phải luôn quán triệt quan điểm \"dân là gốc”."
      },
      {
        "label": "B",
        "text": "Phải dựa vào viện trợ nước ngoài."
      },
      {
        "label": "C",
        "text": "Phải ưu tiên phát triển chính trị."
      },
      {
        "label": "D",
        "text": "Phải đóng cửa, tự lực cánh sinh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q44",
    "chapter": "Chương 1",
    "number": 44,
    "question": "Đâu là câu nói của Ph.Ăngghen về đối tượng nghiên cứu của mọi khoa học?",
    "options": [
      {
        "label": "A",
        "text": "\"Mọi khoa học đều có đối tượng nghiên cứu riêng là những quy luật, tính quy luật thuộc khách thể nghiên cứu của nó\"."
      },
      {
        "label": "B",
        "text": "\"Triết học là khoa học của mọi khoa học\"."
      },
      {
        "label": "C",
        "text": "\"Khoa học là sức mạnh\"."
      },
      {
        "label": "D",
        "text": "\"Tôi tư duy, nên tôi tồn tại\"."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q45",
    "chapter": "Chương 1",
    "number": 45,
    "question": "Đối tượng nghiên cứu của Chủ nghĩa xã hội khoa học là gì?",
    "options": [
      {
        "label": "A",
        "text": "Những quy luật, tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái KT-XH cộng sản chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Những quy luật của tự nhiên."
      },
      {
        "label": "C",
        "text": "Những quy luật của tư duy."
      },
      {
        "label": "D",
        "text": "Những quy luật của thị trường."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q46",
    "chapter": "Chương 1",
    "number": 46,
    "question": "So với Triết học Mác - Lênin và Kinh tế chính trị học Mác - Lênin, Chủ nghĩa xã hội khoa học là khoa học chỉ ra...",
    "options": [
      {
        "label": "A",
        "text": "Con đường thực hiện bước chuyển biến từ CNTB lên CNXH."
      },
      {
        "label": "B",
        "text": "Tính tất yếu thay thế CNTB bằng CNXH về mặt triết học."
      },
      {
        "label": "C",
        "text": "Tính tất yếu thay thế CNTB bằng CNXH về mặt kinh tế."
      },
      {
        "label": "D",
        "text": "Quy luật vận động chung nhất của tự nhiên, xã hội, tư duy."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q47",
    "chapter": "Chương 1",
    "number": 47,
    "question": "Phương pháp luận chung nhất của Chủ nghĩa xã hội khoa học là gì?",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử."
      },
      {
        "label": "B",
        "text": "Phương pháp so sánh."
      },
      {
        "label": "C",
        "text": "Phương pháp thực nghiệm."
      },
      {
        "label": "D",
        "text": "Phương pháp phân tích."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q48",
    "chapter": "Chương 1",
    "number": 48,
    "question": "Ngoài phương pháp luận chung, CNXHKH còn sử dụng phương pháp cụ thể nào?",
    "options": [
      {
        "label": "A",
        "text": "Phương pháp kết hợp lôgíc và lịch sử."
      },
      {
        "label": "B",
        "text": "Phương pháp mô hình hóa."
      },
      {
        "label": "C",
        "text": "Phương pháp thực chứng."
      },
      {
        "label": "D",
        "text": "Phương pháp diễn dịch."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q49",
    "chapter": "Chương 1",
    "number": 49,
    "question": "Một trong những phương pháp nghiên cứu quan trọng của CNXHKH là gì?",
    "options": [
      {
        "label": "A",
        "text": "Phương pháp khảo sát và phân tích về mặt chính trị - xã hội dựa trên điều kiện kinh tế - xã hội cụ thể."
      },
      {
        "label": "B",
        "text": "Phương pháp giả định."
      },
      {
        "label": "C",
        "text": "Phương pháp nội quan."
      },
      {
        "label": "D",
        "text": "Phương pháp loại trừ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q50",
    "chapter": "Chương 1",
    "number": 50,
    "question": "Ý nghĩa của việc nghiên cứu Chủ nghĩa xã hội khoa học về mặt lý luận là gì?",
    "options": [
      {
        "label": "A",
        "text": "Trang bị nhận thức chính trị - xã hội và phương pháp luận khoa học về quá trình tất yếu của hình thái KT-XH cộng sản chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Chỉ để giải thích thế giới."
      },
      {
        "label": "C",
        "text": "Chỉ để trang bị kiến thức kinh tế."
      },
      {
        "label": "D",
        "text": "Chỉ để trang bị kiến thức triết học."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q51",
    "chapter": "Chương 1",
    "number": 51,
    "question": "Ý nghĩa của việc nghiên cứu Chủ nghĩa xã hội khoa học về mặt thực tiễn là gì?",
    "options": [
      {
        "label": "A",
        "text": "Góp phần giáo dục niềm tin khoa học cho nhân dân vào mục tiêu, lý tưởng xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Chỉ dùng để phê phán chủ nghĩa tư bản."
      },
      {
        "label": "C",
        "text": "Chỉ dùng để xây dựng đảng."
      },
      {
        "label": "D",
        "text": "Chỉ dùng để phát triển kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q52",
    "chapter": "Chương 1",
    "number": 52,
    "question": "\"Góp phần định hướng chính trị - xã hội cho hoạt động thực tiễn của Đảng Cộng sản, Nhà nước XHCN và nhân dân...\" là ý nghĩa nào của việc nghiên cứu CNXHKH?",
    "options": [
      {
        "label": "A",
        "text": "Ý nghĩa về mặt lý luận."
      },
      {
        "label": "B",
        "text": "Ý nghĩa về mặt thực tiễn."
      },
      {
        "label": "C",
        "text": "Ý nghĩa về mặt kinh tế."
      },
      {
        "label": "D",
        "text": "Ý nghĩa về mặt văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q53",
    "chapter": "Chương 1",
    "number": 53,
    "question": "Phong trào đấu tranh nào của giai cấp công nhân đòi hỏi phải có một hệ thống lý luận soi đường?",
    "options": [
      {
        "label": "A",
        "text": "Phong trào Hiến chương ở Anh, khởi nghĩa công nhân Lyon (Pháp), khởi nghĩa công nhân Siledi (Đức)."
      },
      {
        "label": "B",
        "text": "Cách mạng tư sản Pháp."
      },
      {
        "label": "C",
        "text": "Công xã Pari."
      },
      {
        "label": "D",
        "text": "Cách mạng Tháng Mười Nga."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q54",
    "chapter": "Chương 1",
    "number": 54,
    "question": "Giá trị của Triết học cổ điển Đức mà C.Mác và Ph.Ăngghen đã kế thừa là gì?",
    "options": [
      {
        "label": "A",
        "text": "Phép biện chứng của Hêghen và chủ nghĩa duy vật của Phoiơbắc."
      },
      {
        "label": "B",
        "text": "Chủ nghĩa duy tâm của Hêghen và phép siêu hình của Phoiơbắc."
      },
      {
        "label": "C",
        "text": "Toàn bộ triết học của Hêghen."
      },
      {
        "label": "D",
        "text": "Toàn bộ triết học của Phoiơbắc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q55",
    "chapter": "Chương 1",
    "number": 55,
    "question": "Giá trị của Kinh tế chính trị học cổ điển Anh mà C.Mác và Ph.Ăngghen đã kế thừa là gì?",
    "options": [
      {
        "label": "A",
        "text": "Lý luận về giá trị - lao động."
      },
      {
        "label": "B",
        "text": "Lý luận về chủ nghĩa trọng thương."
      },
      {
        "label": "C",
        "text": "Lý luận về chủ nghĩa trọng nông."
      },
      {
        "label": "D",
        "text": "Lý luận về kinh tế thị trường."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q56",
    "chapter": "Chương 1",
    "number": 56,
    "question": "\"Cái hạt nhân hợp lý\" trong triết học Hêghen là gì?",
    "options": [
      {
        "label": "A",
        "text": "Phép biện chứng."
      },
      {
        "label": "B",
        "text": "Chủ nghĩa duy tâm."
      },
      {
        "label": "C",
        "text": "Thuyết không thể biết."
      },
      {
        "label": "D",
        "text": "Chủ nghĩa hoài nghi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q57",
    "chapter": "Chương 1",
    "number": 57,
    "question": "Hạn chế trong triết học của L.Phoiơbắc là gì?",
    "options": [
      {
        "label": "A",
        "text": "Quan điểm siêu hình."
      },
      {
        "label": "B",
        "text": "Quan điểm duy tâm."
      },
      {
        "label": "C",
        "text": "Quan điểm biện chứng."
      },
      {
        "label": "D",
        "text": "Quan điểm hoài nghi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q58",
    "chapter": "Chương 1",
    "number": 58,
    "question": "Phát kiến vĩ đại thứ nhất của C.Mác và Ph.Ăngghen là gì?",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa duy vật lịch sử."
      },
      {
        "label": "B",
        "text": "Học thuyết về giá trị thặng dư."
      },
      {
        "label": "C",
        "text": "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Chủ nghĩa duy vật biện chứng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q59",
    "chapter": "Chương 1",
    "number": 59,
    "question": "Tác phẩm \"Tuyên ngôn của Đảng Cộng sản\" ra đời theo yêu cầu của tổ chức nào?",
    "options": [
      {
        "label": "A",
        "text": "Đồng minh hội của những người cộng sản."
      },
      {
        "label": "B",
        "text": "Quốc tế I."
      },
      {
        "label": "C",
        "text": "Quốc tế II."
      },
      {
        "label": "D",
        "text": "Đảng Công nhân xã hội dân chủ Nga."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q60",
    "chapter": "Chương 1",
    "number": 60,
    "question": "Nội dung nào sau đây không phải là tiền đề lý luận cho sự ra đời của CNXHKH?",
    "options": [
      {
        "label": "A",
        "text": "Triết học cổ điển Hy Lạp."
      },
      {
        "label": "B",
        "text": "Triết học cổ điển Đức."
      },
      {
        "label": "C",
        "text": "Kinh tế chính trị học cổ điển Anh."
      },
      {
        "label": "D",
        "text": "Chủ nghĩa không tưởng phê phán."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q61",
    "chapter": "Chương 1",
    "number": 61,
    "question": "Chủ nghĩa Mác - Lênin được hợp thành từ mấy bộ phận?",
    "options": [
      {
        "label": "A",
        "text": "3 bộ phận (Triết học, Kinh tế chính trị, CNXHKH)."
      },
      {
        "label": "B",
        "text": "2 bộ phận (Triết học, Kinh tế chính trị)."
      },
      {
        "label": "C",
        "text": "4 bộ phận (Triết học, Kinh tế chính trị, CNXHKH, Đạo đức học)."
      },
      {
        "label": "D",
        "text": "1 bộ phận duy nhất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q62",
    "chapter": "Chương 1",
    "number": 62,
    "question": "Theo nghĩa rộng, Chủ nghĩa xã hội khoa học được hiểu là gì?",
    "options": [
      {
        "label": "A",
        "text": "Là chủ nghĩa Mác - Lênin."
      },
      {
        "label": "B",
        "text": "Chỉ là một bộ phận của chủ nghĩa Mác - Lênin."
      },
      {
        "label": "C",
        "text": "Chỉ là học thuyết về sứ mệnh lịch sử của giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Chỉ là học thuyết về triết học."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q64",
    "chapter": "Chương 1",
    "number": 64,
    "question": "Luận điểm \"Lịch sử đã chỉ rõ rằng trạng thái phát triển kinh tế trên lục địa lúc bấy giờ còn rất lâu mới chín muồi để xóa bỏ phương thức sản xuất tư bản chủ nghĩa\" là của ai?",
    "options": [
      {
        "label": "A",
        "text": "Ph.Ăngghen."
      },
      {
        "label": "B",
        "text": "C.Mác."
      },
      {
        "label": "C",
        "text": "V.I.Lênin."
      },
      {
        "label": "D",
        "text": "J.Xtalin."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q65",
    "chapter": "Chương 1",
    "number": 65,
    "question": "\"Học thuyết của Mác là học thuyết vạn năng vì nó là một học thuyết chính xác\" là nhận định của ai?",
    "options": [
      {
        "label": "A",
        "text": "V.I.Lênin."
      },
      {
        "label": "B",
        "text": "C.Mác."
      },
      {
        "label": "C",
        "text": "Ph.Ăngghen."
      },
      {
        "label": "D",
        "text": "Hồ Chí Minh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q66",
    "chapter": "Chương 1",
    "number": 66,
    "question": "V.I.Lênin đã đấu tranh chống trào lưu \"chủ nghĩa dân túy tự do\", \"phái kinh tế\", \"phái mácxít hợp pháp\" ở đâu?",
    "options": [
      {
        "label": "A",
        "text": "Nước Nga."
      },
      {
        "label": "B",
        "text": "Nước Đức."
      },
      {
        "label": "C",
        "text": "Nước Anh."
      },
      {
        "label": "D",
        "text": "Nước Pháp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q67",
    "chapter": "Chương 1",
    "number": 67,
    "question": "V.I. Lênin đã xây dựng lý luận về loại đảng nào?",
    "options": [
      {
        "label": "A",
        "text": "Đảng cách mạng kiểu mới của giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Đảng dân chủ tư sản."
      },
      {
        "label": "C",
        "text": "Đảng của giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Đảng của tầng lớp trí thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q68",
    "chapter": "Chương 1",
    "number": 68,
    "question": "V.I. Lênin đã hoàn chỉnh lý luận về cách mạng xã hội chủ nghĩa và...",
    "options": [
      {
        "label": "A",
        "text": "Chuyên chính vô sản."
      },
      {
        "label": "B",
        "text": "Nhà nước pháp quyền tư sản."
      },
      {
        "label": "C",
        "text": "Chủ nghĩa tư bản nhà nước."
      },
      {
        "label": "D",
        "text": "Kinh tế thị trường."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q69",
    "chapter": "Chương 1",
    "number": 69,
    "question": "V.I. Lênin cho rằng, để cải tạo nông nghiệp cần bằng con đường nào?",
    "options": [
      {
        "label": "A",
        "text": "Con đường hợp tác xã theo nguyên tắc xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Con đường phát triển kinh tế trang trại tư nhân."
      },
      {
        "label": "C",
        "text": "Con đường tập thể hóa cưỡng bức."
      },
      {
        "label": "D",
        "text": "Con đường phát canh thu tô."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q70",
    "chapter": "Chương 1",
    "number": 70,
    "question": "Khẩu hiệu \"Vô sản tất cả các nước và các dân tộc bị áp bức đoàn kết lại!\" là của ai?",
    "options": [
      {
        "label": "A",
        "text": "V.I.Lênin."
      },
      {
        "label": "B",
        "text": "C.Mác."
      },
      {
        "label": "C",
        "text": "Ph.Ăngghen."
      },
      {
        "label": "D",
        "text": "J.Xtalin."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q71",
    "chapter": "Chương 1",
    "number": 71,
    "question": "Ai là người có ảnh hưởng lớn nhất đối với Quốc tế III (Quốc tế Cộng sản) sau khi Lênin qua đời?",
    "options": [
      {
        "label": "A",
        "text": "J.Xtalin."
      },
      {
        "label": "B",
        "text": "G. Đi-mi-trốp."
      },
      {
        "label": "C",
        "text": "C.Mác."
      },
      {
        "label": "D",
        "text": "Ph.Ăngghen."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q72",
    "chapter": "Chương 1",
    "number": 72,
    "question": "Thời kỳ sau Lênin (1924-1953) còn được gọi là gì?",
    "options": [
      {
        "label": "A",
        "text": "Thời đoạn Xtalin."
      },
      {
        "label": "B",
        "text": "Thời kỳ cải tổ."
      },
      {
        "label": "C",
        "text": "Thời kỳ đổi mới."
      },
      {
        "label": "D",
        "text": "Thời kỳ Chiến tranh Lạnh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q73",
    "chapter": "Chương 1",
    "number": 73,
    "question": "Khái niệm \"thời đại hiện nay\" (thời đại quá độ từ CNTB lên CNXH trên toàn thế giới) được đưa ra tại Hội nghị nào?",
    "options": [
      {
        "label": "A",
        "text": "Hội nghị đại biểu 81 Đảng Cộng sản và công nhân quốc tế (1960)."
      },
      {
        "label": "B",
        "text": "Hội nghị Matxcova (1957)."
      },
      {
        "label": "C",
        "text": "Đại hội XX Đảng Cộng sản Liên Xô (1956)."
      },
      {
        "label": "D",
        "text": "Hội nghị Yalta (1945)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q74",
    "chapter": "Chương 1",
    "number": 74,
    "question": "Lý luận \"Một quốc gia, hai chế độ\" là sự phát triển lý luận của Đảng nào?",
    "options": [
      {
        "label": "A",
        "text": "Đảng Cộng sản Trung Quốc."
      },
      {
        "label": "B",
        "text": "Đảng Cộng sản Việt Nam."
      },
      {
        "label": "C",
        "text": "Đảng Cộng sản Liên Xô."
      },
      {
        "label": "D",
        "text": "Đảng Cộng sản Cu Ba."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q75",
    "chapter": "Chương 1",
    "number": 75,
    "question": "Đại hội nào của Đảng Cộng sản Trung Quốc đã khẳng định mục tiêu xây dựng Trung Quốc trở thành cường quốc hiện đại hóa XHCN vào năm 2050?",
    "options": [
      {
        "label": "A",
        "text": "Đại hội lần thứ XIX (2017)."
      },
      {
        "label": "B",
        "text": "Đại hội lần thứ XVI (2002)."
      },
      {
        "label": "C",
        "text": "Đại hội lần thứ XI (1978)."
      },
      {
        "label": "D",
        "text": "Đại hội lần thứ XVIII (2012)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q76",
    "chapter": "Chương 1",
    "number": 76,
    "question": "\"Đất nước chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay\" là nhận định của Đảng Cộng sản Việt Nam tại Đại hội nào?",
    "options": [
      {
        "label": "A",
        "text": "Đại hội XIII (2021)."
      },
      {
        "label": "B",
        "text": "Đại hội VI (1986)."
      },
      {
        "label": "C",
        "text": "Đại hội IX (2001)."
      },
      {
        "label": "D",
        "text": "Đại hội XI (2011)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q77",
    "chapter": "Chương 1",
    "number": 77,
    "question": "Một trong những phương hướng được Đảng Cộng sản Việt Nam xác định trong Cương lĩnh (bổ sung, phát triển 2011) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng nền dân chủ xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Xây dựng nền dân chủ tư sản."
      },
      {
        "label": "C",
        "text": "Xây dựng chế độ quân chủ lập hiến."
      },
      {
        "label": "D",
        "text": "Xây dựng chế độ đa đảng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q78",
    "chapter": "Chương 1",
    "number": 78,
    "question": "Môn học Chủ nghĩa xã hội khoa học nghiên cứu lĩnh vực nào của đời sống xã hội?",
    "options": [
      {
        "label": "A",
        "text": "Lĩnh vực chính trị - xã hội."
      },
      {
        "label": "B",
        "text": "Lĩnh vực kinh tế."
      },
      {
        "label": "C",
        "text": "Lĩnh vực văn hóa."
      },
      {
        "label": "D",
        "text": "Lĩnh vực tự nhiên."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q79",
    "chapter": "Chương 1",
    "number": 79,
    "question": "CNXHKH luận giải về phương diện nào để chứng minh sự thay thế tất yếu của CNTB bằng CNXH?",
    "options": [
      {
        "label": "A",
        "text": "Luận cứ chính trị - xã hội."
      },
      {
        "label": "B",
        "text": "Luận cứ triết học."
      },
      {
        "label": "C",
        "text": "Luận cứ kinh tế."
      },
      {
        "label": "D",
        "text": "Luận cứ đạo đức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q80",
    "chapter": "Chương 1",
    "number": 80,
    "question": "CNXHKH có chức năng gì đối với giai cấp công nhân?",
    "options": [
      {
        "label": "A",
        "text": "Giác ngộ và hướng dẫn giai cấp công nhân thực hiện sứ mệnh lịch sử của mình."
      },
      {
        "label": "B",
        "text": "Chỉ giác ngộ về mặt lý luận."
      },
      {
        "label": "C",
        "text": "Chỉ hướng dẫn về mặt kinh tế."
      },
      {
        "label": "D",
        "text": "Chỉ hướng dẫn về mặt quân sự."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q81",
    "chapter": "Chương 1",
    "number": 81,
    "question": "Nhiệm vụ nào sau đây không phải của CNXHKH?",
    "options": [
      {
        "label": "A",
        "text": "Nghiên cứu các quy luật vật lý."
      },
      {
        "label": "B",
        "text": "Luận chứng tính tất yếu của sự thay thế CNTB bằng CNXH."
      },
      {
        "label": "C",
        "text": "Phê phán, đấu tranh bác bỏ các trào lưu tư tưởng chống cộng, chống CNXH."
      },
      {
        "label": "D",
        "text": "Luận giải về phương hướng, nguyên tắc của chiến lược, sách lược của giai cấp công nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q82",
    "chapter": "Chương 1",
    "number": 82,
    "question": "Phương pháp nào không được CNXHKH sử dụng?",
    "options": [
      {
        "label": "A",
        "text": "Phương pháp duy tâm thần bí."
      },
      {
        "label": "B",
        "text": "Phương pháp kết hợp lôgíc và lịch sử."
      },
      {
        "label": "C",
        "text": "Phương pháp khảo sát và phân tích chính trị - xã hội."
      },
      {
        "label": "D",
        "text": "Phương pháp so sánh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q83",
    "chapter": "Chương 1",
    "number": 83,
    "question": "Việc nghiên cứu CNXHKH góp phần đấu tranh chống lại điều gì?",
    "options": [
      {
        "label": "A",
        "text": "Những nhận thức sai lệch, những tuyên truyền chống phá của các thế lực thù địch."
      },
      {
        "label": "B",
        "text": "Sự phát triển của khoa học tự nhiên."
      },
      {
        "label": "C",
        "text": "Sự phát triển của kinh tế thị trường."
      },
      {
        "label": "D",
        "text": "Sự giao lưu văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q84",
    "chapter": "Chương 1",
    "number": 84,
    "question": "Sự ra đời của hai giai cấp cơ bản: tư sản và công nhân là hệ quả của điều gì?",
    "options": [
      {
        "label": "A",
        "text": "Cách mạng công nghiệp và sự ra đời của nền đại công nghiệp."
      },
      {
        "label": "B",
        "text": "Cách mạng nông nghiệp."
      },
      {
        "label": "C",
        "text": "Cách mạng văn hóa."
      },
      {
        "label": "D",
        "text": "Sự sụp đổ của chế độ phong kiến."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q85",
    "chapter": "Chương 1",
    "number": 85,
    "question": "Ba phát minh KHTN (Học thuyết tiến hóa, tế bào, bảo toàn năng lượng) là tiền đề khoa học cho sự ra đời của học thuyết nào?",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử."
      },
      {
        "label": "B",
        "text": "Chủ nghĩa duy tâm khách quan."
      },
      {
        "label": "C",
        "text": "Chủ nghĩa duy tâm chủ quan."
      },
      {
        "label": "D",
        "text": "Thuyết không thể biết."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q86",
    "chapter": "Chương 1",
    "number": 86,
    "question": "Giá trị trong học thuyết của A.Xmít và D.Ricácđô mà Mác kế thừa là gì?",
    "options": [
      {
        "label": "A",
        "text": "Đặt nền móng cho lý luận giá trị - lao động."
      },
      {
        "label": "B",
        "text": "Lý luận về hàng hóa."
      },
      {
        "label": "C",
        "text": "Lý luận về địa tô chênh lệch."
      },
      {
        "label": "D",
        "text": "Lý luận về lợi nhuận."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q87",
    "chapter": "Chương 1",
    "number": 87,
    "question": "Các nhà xã hội chủ nghĩa không tưởng đã \"thức tỉnh giai cấp công nhân\" trong cuộc đấu tranh nào?",
    "options": [
      {
        "label": "A",
        "text": "Chống chế độ quân chủ chuyên chế và chế độ tư bản chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Chống chế độ phong kiến."
      },
      {
        "label": "C",
        "text": "Chống chế độ chiếm hữu nô lệ."
      },
      {
        "label": "D",
        "text": "Chống chủ nghĩa thực dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q88",
    "chapter": "Chương 1",
    "number": 88,
    "question": "Hạn chế của chủ nghĩa xã hội không tưởng là do đâu?",
    "options": [
      {
        "label": "A",
        "text": "Do điều kiện lịch sử (chủ nghĩa tư bản chưa phát triển, mâu thuẫn giai cấp chưa bộc lộ)."
      },
      {
        "label": "B",
        "text": "Do các nhà tư tưởng này kém thông minh."
      },
      {
        "label": "C",
        "text": "Do họ không muốn xây dựng xã hội mới."
      },
      {
        "label": "D",
        "text": "Do họ ủng hộ giai cấp tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q90",
    "chapter": "Chương 1",
    "number": 90,
    "question": "Tác phẩm \"Tuyên ngôn của Đảng Cộng sản\" (1848) thâu tóm hầu như toàn bộ những luận điểm của...",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa xã hội khoa học."
      },
      {
        "label": "B",
        "text": "Triết học Mác."
      },
      {
        "label": "C",
        "text": "Kinh tế chính trị Mác."
      },
      {
        "label": "D",
        "text": "Cả ba bộ phận của Chủ nghĩa Mác."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q91",
    "chapter": "Chương 1",
    "number": 91,
    "question": "Thời kỳ từ 1848 đến 1871, C.Mác và Ph.Ăngghen đã bổ sung tư tưởng về...",
    "options": [
      {
        "label": "A",
        "text": "Đập tan bộ máy nhà nước tư sản, thiết lập chuyên chính vô sản."
      },
      {
        "label": "B",
        "text": "Khả năng thắng lợi của CMVS ở một nước."
      },
      {
        "label": "C",
        "text": "Chính sách kinh tế mới."
      },
      {
        "label": "D",
        "text": "Chủ nghĩa tư bản nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q92",
    "chapter": "Chương 1",
    "number": 92,
    "question": "Công xã Pari (1871) được C.Mác và Ph.Ăngghen thừa nhận là...",
    "options": [
      {
        "label": "A",
        "text": "Một hình thái nhà nước của giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Một hình thái nhà nước tư sản kiểu mới."
      },
      {
        "label": "C",
        "text": "Một hình thái nhà nước phong kiến."
      },
      {
        "label": "D",
        "text": "Một thất bại hoàn toàn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q93",
    "chapter": "Chương 1",
    "number": 93,
    "question": "Khẩu hiệu \"Giai cấp vô sản toàn thế giới và các dân tộc bị áp bức đoàn kết lại!\" là sự phát triển khẩu hiệu nào của C.Mác?",
    "options": [
      {
        "label": "A",
        "text": "\"Vô sản tất cả các nước đoàn kết lại!\"."
      },
      {
        "label": "B",
        "text": "\"Tất cả vì con người\"."
      },
      {
        "label": "C",
        "text": "\"Tự do - Bình đẳng - Bác ái\"."
      },
      {
        "label": "D",
        "text": "\"Hòa bình - Hữu nghị - Hợp tác\"."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q94",
    "chapter": "Chương 1",
    "number": 94,
    "question": "Giai đoạn sau 1991, CNXH đứng trước thử thách nghiêm trọng nào?",
    "options": [
      {
        "label": "A",
        "text": "Sự sụp đổ của mô hình CNXH ở Liên Xô và Đông Âu."
      },
      {
        "label": "B",
        "text": "Sự bùng nổ của Chiến tranh Lạnh."
      },
      {
        "label": "C",
        "text": "Sự phát triển của chủ nghĩa phát xít."
      },
      {
        "label": "D",
        "text": "Sự bùng nổ của cách mạng công nghiệp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q95",
    "chapter": "Chương 1",
    "number": 95,
    "question": "Lý luận của Đảng Cộng sản Việt Nam về \"Độc lập dân tộc gắn liền với chủ nghĩa xã hội\" là...",
    "options": [
      {
        "label": "A",
        "text": "Sự vận dụng và phát triển sáng tạo CNXHKH."
      },
      {
        "label": "B",
        "text": "Sự sao chép mô hình Liên Xô."
      },
      {
        "label": "C",
        "text": "Sự sao chép mô hình Trung Quốc."
      },
      {
        "label": "D",
        "text": "Một lý luận duy ý chí."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q96",
    "chapter": "Chương 1",
    "number": 96,
    "question": "\"Kết hợp sức mạnh dân tộc với sức mạnh thời đại\" là một trong những...",
    "options": [
      {
        "label": "A",
        "text": "Đóng góp lý luận của Đảng Cộng sản Việt Nam."
      },
      {
        "label": "B",
        "text": "Hạn chế của Đảng Cộng sản Việt Nam."
      },
      {
        "label": "C",
        "text": "Luận điểm của chủ nghĩa xã hội không tưởng."
      },
      {
        "label": "D",
        "text": "Luận điểm của chủ nghĩa duy vật lịch sử."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q97",
    "chapter": "Chương 1",
    "number": 97,
    "question": "CNXHKH khác với các khoa học xã hội khác ở...",
    "options": [
      {
        "label": "A",
        "text": "Đối tượng nghiên cứu (quy luật chính trị - xã hội của sự ra đời hình thái KT-XH CSCN)."
      },
      {
        "label": "B",
        "text": "Phương pháp nghiên cứu."
      },
      {
        "label": "C",
        "text": "Mục đích nghiên cứu."
      },
      {
        "label": "D",
        "text": "Tính khoa học."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q98",
    "chapter": "Chương 1",
    "number": 98,
    "question": "Nghiên cứu CNXHKH giúp sinh viên...",
    "options": [
      {
        "label": "A",
        "text": "Có niềm tin vào mục tiêu lý tưởng và sự thành công của công cuộc đổi mới."
      },
      {
        "label": "B",
        "text": "Chỉ có kiến thức về triết học."
      },
      {
        "label": "C",
        "text": "Chỉ có kiến thức về kinh tế."
      },
      {
        "label": "D",
        "text": "Chỉ có kiến thức về lịch sử."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q99",
    "chapter": "Chương 1",
    "number": 99,
    "question": "Phương pháp nghiên cứu nào của CNXHKH đòi hỏi phải xem xét các sự kiện trong bối cảnh lịch sử cụ thể của nó?",
    "options": [
      {
        "label": "A",
        "text": "Phương pháp kết hợp lôgíc và lịch sử."
      },
      {
        "label": "B",
        "text": "Phương pháp khảo sát."
      },
      {
        "label": "C",
        "text": "Phương pháp so sánh."
      },
      {
        "label": "D",
        "text": "Phương pháp phân tích."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 1_Q100",
    "chapter": "Chương 1",
    "number": 100,
    "question": "Đối tượng nghiên cứu của CNXHKH là những quy luật mang tính...",
    "options": [
      {
        "label": "A",
        "text": "Chính trị - xã hội."
      },
      {
        "label": "B",
        "text": "Kinh tế."
      },
      {
        "label": "C",
        "text": "Tự nhiên."
      },
      {
        "label": "D",
        "text": "Tư duy."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q1",
    "chapter": "Chương 2",
    "number": 1,
    "question": "Nội dung chủ yếu và điểm căn bản của chủ nghĩa Mác - Lênin, phạm trù trung tâm của Chủ nghĩa xã hội khoa học là gì?",
    "options": [
      {
        "label": "A",
        "text": "Vấn đề dân tộc."
      },
      {
        "label": "B",
        "text": "Vấn đề tôn giáo."
      },
      {
        "label": "C",
        "text": "Sứ mệnh lịch sử thế giới của giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Vấn đề gia đình."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": "Chương 2_Q2",
    "chapter": "Chương 2",
    "number": 2,
    "question": "Theo chủ nghĩa Mác - Lênin, giai cấp công nhân là một tập đoàn xã hội ổn định, hình thành và phát triển cùng với quá trình nào?",
    "options": [
      {
        "label": "A",
        "text": "Quá trình phát triển của nền công nghiệp hiện đại."
      },
      {
        "label": "B",
        "text": "Quá trình phát triển của sản xuất nông nghiệp."
      },
      {
        "label": "C",
        "text": "Quá trình phát triển của thương nghiệp."
      },
      {
        "label": "D",
        "text": "Quá trình phát triển của chủ nghĩa phong kiến."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q3",
    "chapter": "Chương 2",
    "number": 3,
    "question": "Dưới góc độ kinh tế - xã hội, giai cấp công nhân trong chế độ tư bản chủ nghĩa là những người...",
    "options": [
      {
        "label": "A",
        "text": "Có sở hữu tư liệu sản xuất chủ yếu của xã hội."
      },
      {
        "label": "B",
        "text": "Không có hoặc về cơ bản không có tư liệu sản xuất, phải làm thuê."
      },
      {
        "label": "C",
        "text": "Vừa có tư liệu sản xuất, vừa đi làm thuê."
      },
      {
        "label": "D",
        "text": "Đại diện cho quan hệ sản xuất tư hữu."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": "Chương 2_Q4",
    "chapter": "Chương 2",
    "number": 4,
    "question": "Trong quan hệ sản xuất tư bản chủ nghĩa, giai cấp công nhân bị giai cấp tư sản bóc lột cái gì?",
    "options": [
      {
        "label": "A",
        "text": "Bóc lột giá trị thặng dư."
      },
      {
        "label": "B",
        "text": "Bóc lột lao động thặng dư."
      },
      {
        "label": "C",
        "text": "Bóc lột toàn bộ sản phẩm lao động."
      },
      {
        "label": "D",
        "text": "Bóc lột ruộng đất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q5",
    "chapter": "Chương 2",
    "number": 5,
    "question": "Mâu thuẫn cơ bản của phương thức sản xuất tư bản chủ nghĩa là mâu thuẫn giữa:",
    "options": [
      {
        "label": "A",
        "text": "Lực lượng sản xuất xã hội hóa ngày càng rộng lớn với quan hệ sản xuất tư bản chủ nghĩa dựa trên chế độ tư hữu."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân và giai cấp địa chủ."
      },
      {
        "label": "C",
        "text": "Giai cấp công nhân và giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Các nước tư bản với các nước thuộc địa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q6",
    "chapter": "Chương 2",
    "number": 6,
    "question": "Về phương diện chính trị - xã hội, mâu thuẫn cơ bản của phương thức sản xuất TBCN biểu hiện thành mâu thuẫn nào?",
    "options": [
      {
        "label": "A",
        "text": "Mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản."
      },
      {
        "label": "B",
        "text": "Mâu thuẫn giữa giai cấp công nhân và giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Mâu thuẫn giữa giai cấp tư sản và giai cấp phong kiến."
      },
      {
        "label": "D",
        "text": "Mâu thuẫn giữa thành thị và nông thôn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q7",
    "chapter": "Chương 2",
    "number": 7,
    "question": "Đặc điểm chủ yếu nào của giai cấp công nhân quy định vai trò lãnh đạo cách mạng của họ?",
    "options": [
      {
        "label": "A",
        "text": "Lao động bằng phương thức công nghiệp, đại biểu cho LLSX tiên tiến, có tính tổ chức kỷ luật cao, có tinh thần cách mạng triệt để."
      },
      {
        "label": "B",
        "text": "Là giai cấp nghèo khổ nhất, đông đảo nhất trong xã hội."
      },
      {
        "label": "C",
        "text": "Là giai cấp có trình độ văn hóa cao nhất."
      },
      {
        "label": "D",
        "text": "Là giai cấp bị áp bức bóc lột nặng nề nhất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q8",
    "chapter": "Chương 2",
    "number": 8,
    "question": "Sứ mệnh lịch sử tổng quát của giai cấp công nhân là gì?",
    "options": [
      {
        "label": "A",
        "text": "Xóa bỏ chế độ tư bản chủ nghĩa, xóa bỏ chế độ người bóc lột người, xây dựng xã hội cộng sản chủ nghĩa văn minh."
      },
      {
        "label": "B",
        "text": "Giành chính quyền và chia đều tài sản cho mọi người."
      },
      {
        "label": "C",
        "text": "Trở thành giai cấp lãnh đạo thay thế giai cấp tư sản để bóc lột giai cấp khác."
      },
      {
        "label": "D",
        "text": "Cải cách chủ nghĩa tư bản để nó trở nên tốt đẹp hơn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q9",
    "chapter": "Chương 2",
    "number": 9,
    "question": "Nội dung kinh tế trong sứ mệnh lịch sử của giai cấp công nhân là gì?",
    "options": [
      {
        "label": "A",
        "text": "Cải tạo quan hệ sản xuất tư nhân TBCN, xây dựng quan hệ sản xuất mới - xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Lật đổ sự thống trị của giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Xây dựng nền văn hóa mới."
      },
      {
        "label": "D",
        "text": "Giành chính quyền về tay nhân dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q10",
    "chapter": "Chương 2",
    "number": 10,
    "question": "Nội dung chính trị - xã hội trong sứ mệnh lịch sử của giai cấp công nhân là gì?",
    "options": [
      {
        "label": "A",
        "text": "Lật đổ sự thống trị của giai cấp tư sản, thiết lập nhà nước của GC công nhân và nhân dân, xây dựng nền dân chủ XHCN."
      },
      {
        "label": "B",
        "text": "Phát triển lực lượng sản xuất, tăng năng suất lao động."
      },
      {
        "label": "C",
        "text": "Xóa bỏ sự khác biệt giữa thành thị và nông thôn."
      },
      {
        "label": "D",
        "text": "Xây dựng hệ tư tưởng chính trị của giai cấp tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q11",
    "chapter": "Chương 2",
    "number": 11,
    "question": "Nội dung văn hóa, tư tưởng trong sứ mệnh lịch sử của giai cấp công nhân là gì?",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng nền văn hóa mới, trên nền tảng hệ tư tưởng chính trị của giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Giữ gìn các giá trị văn hóa của chế độ tư bản."
      },
      {
        "label": "C",
        "text": "Phát triển kinh tế, nâng cao đời sống vật chất."
      },
      {
        "label": "D",
        "text": "Thiết lập nhà nước chuyên chính vô sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q12",
    "chapter": "Chương 2",
    "number": 12,
    "question": "Sứ mệnh lịch sử của giai cấp công nhân ở các nước TBCN hiện nay về kinh tế là gì?",
    "options": [
      {
        "label": "A",
        "text": "Cải tạo quan hệ sản xuất tư nhân TBCN, xây dựng QHSX mới - XHCN."
      },
      {
        "label": "B",
        "text": "Tiếp tục củng cố QHSX TBCN."
      },
      {
        "label": "C",
        "text": "Đòi quyền dân sinh, dân chủ."
      },
      {
        "label": "D",
        "text": "Xây dựng cơ sở vật chất kỹ thuật cho CNXH."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q13",
    "chapter": "Chương 2",
    "number": 13,
    "question": "Sứ mệnh lịch sử của giai cấp công nhân ở các nước XHCN hiện nay về kinh tế là gì?",
    "options": [
      {
        "label": "A",
        "text": "Tiếp tục củng cố và xây dựng QHSX XHCN, phát triển lực lượng sản xuất."
      },
      {
        "label": "B",
        "text": "Đấu tranh lật đổ chính quyền tư sản."
      },
      {
        "label": "C",
        "text": "Đấu tranh đòi quyền dân sinh, dân chủ."
      },
      {
        "label": "D",
        "text": "Xóa bỏ hoàn toàn chế độ tư hữu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q14",
    "chapter": "Chương 2",
    "number": 14,
    "question": "Mục tiêu đấu tranh lâu dài của giai cấp công nhân ở các nước TBCN hiện nay về chính trị là gì?",
    "options": [
      {
        "label": "A",
        "text": "Giành chính quyền về tay giai cấp công nhân và nhân dân lao động."
      },
      {
        "label": "B",
        "text": "Chống bất công và bất bình đẳng xã hội."
      },
      {
        "label": "C",
        "text": "Đòi quyền dân sinh, dân chủ."
      },
      {
        "label": "D",
        "text": "Cải cách chế độ tư bản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q15",
    "chapter": "Chương 2",
    "number": 15,
    "question": "Nội dung chính trị của sứ mệnh lịch sử GC CN ở các nước XHCN hiện nay là gì?",
    "options": [
      {
        "label": "A",
        "text": "Lãnh đạo sự nghiệp cải cách, đổi mới để xây dựng CNXH, xây dựng Đảng cầm quyền trong sạch, vững mạnh."
      },
      {
        "label": "B",
        "text": "Đấu tranh giành chính quyền."
      },
      {
        "label": "C",
        "text": "Đấu tranh chống bất công xã hội."
      },
      {
        "label": "D",
        "text": "Xóa bỏ nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q16",
    "chapter": "Chương 2",
    "number": 16,
    "question": "Đặc điểm sứ mệnh lịch sử của giai cấp công nhân là gì?",
    "options": [
      {
        "label": "A",
        "text": "Xóa bỏ triệt để chế độ tư hữu về tư liệu sản xuất."
      },
      {
        "label": "B",
        "text": "Thay thế chế độ sở hữu tư nhân này bằng một chế độ sở hữu tư nhân khác."
      },
      {
        "label": "C",
        "text": "Chỉ giải phóng cho giai cấp mình."
      },
      {
        "label": "D",
        "text": "Là sự nghiệp cách mạng của riêng giai cấp công nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q17",
    "chapter": "Chương 2",
    "number": 17,
    "question": "Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân là gì?",
    "options": [
      {
        "label": "A",
        "text": "Địa vị kinh tế - xã hội và đặc điểm chính trị - xã hội của giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Sự phát triển về số lượng và chất lượng của giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Sự ra đời của Đảng Cộng sản."
      },
      {
        "label": "D",
        "text": "Sự liên minh giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q18",
    "chapter": "Chương 2",
    "number": 18,
    "question": "Tại sao nói giai cấp công nhân là lực lượng quyết định phá vỡ quan hệ sản xuất TBCN?",
    "options": [
      {
        "label": "A",
        "text": "Vì họ là đại diện cho lực lượng sản xuất tiên tiến, có tính xã hội hóa cao."
      },
      {
        "label": "B",
        "text": "Vì họ là giai cấp nghèo khổ nhất."
      },
      {
        "label": "C",
        "text": "Vì họ chiếm đa số trong dân cư."
      },
      {
        "label": "D",
        "text": "Vì họ có trình độ văn hóa cao."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q19",
    "chapter": "Chương 2",
    "number": 19,
    "question": "Đặc điểm chính trị - xã hội nào của giai cấp công nhân thể hiện họ là giai cấp tiên tiến nhất?",
    "options": [
      {
        "label": "A",
        "text": "Họ đại diện cho phương thức sản xuất tiên tiến, gắn với LLSX hiện đại."
      },
      {
        "label": "B",
        "text": "Họ có bản chất quốc tế."
      },
      {
        "label": "C",
        "text": "Họ có ý thức tổ chức kỷ luật cao."
      },
      {
        "label": "D",
        "text": "Họ có tinh thần cách mạng triệt để."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q20",
    "chapter": "Chương 2",
    "number": 20,
    "question": "Đặc điểm nào của giai cấp công nhân thể hiện họ có tinh thần cách mạng triệt để nhất?",
    "options": [
      {
        "label": "A",
        "text": "Họ không có tư liệu sản xuất, bị bóc lột nặng nề, lợi ích đối lập trực tiếp với GCTS."
      },
      {
        "label": "B",
        "text": "Họ có bản chất quốc tế."
      },
      {
        "label": "C",
        "text": "Họ có ý thức tổ chức kỷ luật cao."
      },
      {
        "label": "D",
        "text": "Họ là giai cấp tiên tiến."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q21",
    "chapter": "Chương 2",
    "number": 21,
    "question": "Bản chất quốc tế của giai cấp công nhân xuất phát từ đâu?",
    "options": [
      {
        "label": "A",
        "text": "Do địa vị kinh tế và địa vị chính trị của họ trong chủ nghĩa tư bản."
      },
      {
        "label": "B",
        "text": "Do họ làm việc trong các công ty đa quốc gia."
      },
      {
        "label": "C",
        "text": "Do họ có cùng ngôn ngữ."
      },
      {
        "label": "D",
        "text": "Do họ có cùng màu da."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q22",
    "chapter": "Chương 2",
    "number": 22,
    "question": "Điều kiện chủ quan quan trọng nhất để giai cấp công nhân thực hiện sứ mệnh lịch sử là gì?",
    "options": [
      {
        "label": "A",
        "text": "Sự ra đời và phát triển của Đảng Cộng sản - đội tiên phong của giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Sự phát triển của bản thân giai cấp công nhân về số lượng và chất lượng."
      },
      {
        "label": "C",
        "text": "Sự liên minh giai cấp giữa GC công nhân với GC nông dân và các tầng lớp khác."
      },
      {
        "label": "D",
        "text": "Sự giúp đỡ của các nước XHCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q23",
    "chapter": "Chương 2",
    "number": 23,
    "question": "Quy luật ra đời và phát triển của Đảng Cộng sản là gì?",
    "options": [
      {
        "label": "A",
        "text": "Sự kết hợp giữa chủ nghĩa xã hội khoa học (chủ nghĩa Mác) với phong trào công nhân."
      },
      {
        "label": "B",
        "text": "Sự kết hợp giữa chủ nghĩa Mác với phong trào nông dân."
      },
      {
        "label": "C",
        "text": "Sự kết hợp giữa chủ nghĩa Mác với phong trào yêu nước."
      },
      {
        "label": "D",
        "text": "Sự ra đời tự phát của phong trào công nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q24",
    "chapter": "Chương 2",
    "number": 24,
    "question": "Mối quan hệ giữa Đảng Cộng sản và giai cấp công nhân là mối quan hệ như thế nào?",
    "options": [
      {
        "label": "A",
        "text": "Gắn bó hữu cơ, Đảng là đội tiên phong, lãnh tụ chính trị, bộ tham mưu chiến đấu của giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Đảng Cộng sản là tổ chức quần chúng của giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Giai cấp công nhân là cơ sở xã hội của Đảng, nhưng Đảng không mang bản chất giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Đảng Cộng sản và giai cấp công nhân là hai thực thể độc lập."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q25",
    "chapter": "Chương 2",
    "number": 25,
    "question": "Tại sao Đảng Cộng sản là nhân tố quyết định đến việc thực hiện SMLS của giai cấp công nhân?",
    "options": [
      {
        "label": "A",
        "text": "Vì Đảng có trình độ lý luận và tổ chức cao nhất để lãnh đạo."
      },
      {
        "label": "B",
        "text": "Vì Đảng là tổ chức duy nhất của giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Vì Đảng có số lượng đảng viên đông nhất."
      },
      {
        "label": "D",
        "text": "Vì Đảng được nhà nước tư sản cho phép hoạt động."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q26",
    "chapter": "Chương 2",
    "number": 26,
    "question": "Ngoài Đảng Cộng sản, nhân tố chủ quan nào khác cũng quan trọng để GC CN thực hiện SMLS?",
    "options": [
      {
        "label": "A",
        "text": "Sự liên minh giai cấp giữa GC công nhân với GC nông dân và các tầng lớp lao động khác."
      },
      {
        "label": "B",
        "text": "Sự phát triển của tầng lớp trí thức."
      },
      {
        "label": "C",
        "text": "Sự ủng hộ của giai cấp tư sản dân tộc."
      },
      {
        "label": "D",
        "text": "Sự phát triển của kinh tế hàng hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q27",
    "chapter": "Chương 2",
    "number": 27,
    "question": "Trong các điểm sau, đâu là điểm tương đối ổn định của giai cấp công nhân hiện nay so với thế kỷ XIX?",
    "options": [
      {
        "label": "A",
        "text": "Vẫn đang là lực lượng sản xuất hàng đầu của xã hội hiện đại."
      },
      {
        "label": "B",
        "text": "Tất cả đều là công nhân \"áo xanh\" (lao động chân tay)."
      },
      {
        "label": "C",
        "text": "Tất cả đều có cổ phần trong công ty."
      },
      {
        "label": "D",
        "text": "Tất cả đều có trình độ cao."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q28",
    "chapter": "Chương 2",
    "number": 28,
    "question": "Giai cấp công nhân hiện nay ở các nước TBCN có còn bị bóc lột giá trị thặng dư không?",
    "options": [
      {
        "label": "A",
        "text": "Có, vẫn bị bóc lột giá trị thặng dư dưới nhiều hình thức tinh vi hơn."
      },
      {
        "label": "B",
        "text": "Không, họ đã trở thành \"trung lưu\" và không còn bị bóc lột."
      },
      {
        "label": "C",
        "text": "Chỉ một bộ phận nhỏ bị bóc lột."
      },
      {
        "label": "D",
        "text": "Họ đã trở thành chủ sở hữu của các tư liệu sản xuất."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": "Chương 2_Q29",
    "chapter": "Chương 2",
    "number": 29,
    "question": "Xu hướng \"trí tuệ hóa\" của giai cấp công nhân hiện đại là do đâu?",
    "options": [
      {
        "label": "A",
        "text": "Do cách mạng khoa học và công nghệ hiện đại, phát triển kinh tế tri thức."
      },
      {
        "label": "B",
        "text": "Do giai cấp tư sản tự nguyện nâng cao trình độ cho công nhân."
      },
      {
        "label": "C",
        "text": "Do giai cấp công nhân không muốn lao động chân tay."
      },
      {
        "label": "D",
        "text": "Do sự sụp đổ của các ngành công nghiệp truyền thống."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q30",
    "chapter": "Chương 2",
    "number": 30,
    "question": "Xu hướng \"trung lưu hóa\" của một bộ phận giai cấp công nhân hiện đại có nghĩa là gì?",
    "options": [
      {
        "label": "A",
        "text": "Một bộ phận công nhân có sở hữu một lượng tư liệu sản xuất thông qua cổ phần hóa."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân đã trở thành giai cấp trung lưu."
      },
      {
        "label": "C",
        "text": "Giai cấp công nhân đã xóa bỏ được tình trạng bị bóc lột."
      },
      {
        "label": "D",
        "text": "Giai cấp công nhân đã từ bỏ sứ mệnh lịch sử của mình."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q31",
    "chapter": "Chương 2",
    "number": 31,
    "question": "Mặc dù có xu hướng \"trung lưu hóa\", giai cấp công nhân có thực sự kiểm soát được sản xuất không?",
    "options": [
      {
        "label": "A",
        "text": "Không, quyền quyết định vẫn thuộc về các cổ đông lớn (giai cấp tư sản)."
      },
      {
        "label": "B",
        "text": "Có, họ đã hoàn toàn kiểm soát được sản xuất."
      },
      {
        "label": "C",
        "text": "Chỉ một số ít công nhân cấp cao kiểm soát được."
      },
      {
        "label": "D",
        "text": "Họ không quan tâm đến việc kiểm soát sản xuất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q32",
    "chapter": "Chương 2",
    "number": 32,
    "question": "Ở các nước xã hội chủ nghĩa, giai cấp công nhân có biến đổi gì so với các nước TBCN?",
    "options": [
      {
        "label": "A",
        "text": "Đã trở thành giai cấp lãnh đạo và Đảng Cộng sản trở thành Đảng cầm quyền."
      },
      {
        "label": "B",
        "text": "Vẫn là giai cấp bị trị và bị bóc lột."
      },
      {
        "label": "C",
        "text": "Không có sự khác biệt nào."
      },
      {
        "label": "D",
        "text": "Đã bị tan rã, không còn là một giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q33",
    "chapter": "Chương 2",
    "number": 33,
    "question": "Nội dung kinh tế - xã hội trong SMLS của GC CN hiện nay thể hiện ở đâu?",
    "options": [
      {
        "label": "A",
        "text": "Đấu tranh chống chế độ bóc lột giá trị thặng dư, vì một trật tự xã hội công bằng."
      },
      {
        "label": "B",
        "text": "Chỉ đấu tranh vì tăng lương, giảm giờ làm."
      },
      {
        "label": "C",
        "text": "Chỉ đấu tranh để trở thành \"trung lưu\"."
      },
      {
        "label": "D",
        "text": "Chấp nhận sự bóc lột để duy trì việc làm."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q34",
    "chapter": "Chương 2",
    "number": 34,
    "question": "Nội dung chính trị - xã hội trong SMLS của GC CN hiện nay ở các nước TBCN là gì?",
    "options": [
      {
        "label": "A",
        "text": "Mục tiêu trước mắt là dân sinh, dân chủ; mục tiêu lâu dài là giành chính quyền."
      },
      {
        "label": "B",
        "text": "Chỉ tập trung vào mục tiêu giành chính quyền ngay lập tức."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung vào mục tiêu dân sinh, dân chủ."
      },
      {
        "label": "D",
        "text": "Từ bỏ mục tiêu giành chính quyền."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q35",
    "chapter": "Chương 2",
    "number": 35,
    "question": "Nội dung văn hóa, tư tưởng trong SMLS của GC CN hiện nay là gì?",
    "options": [
      {
        "label": "A",
        "text": "Đấu tranh ý thức hệ giữa chủ nghĩa xã hội và chủ nghĩa tư bản."
      },
      {
        "label": "B",
        "text": "Chấp nhận hệ tư tưởng của giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Xóa bỏ mọi hệ tư tưởng."
      },
      {
        "label": "D",
        "text": "Chỉ tập trung vào phát triển văn hóa dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q36",
    "chapter": "Chương 2",
    "number": 36,
    "question": "Giai cấp công nhân Việt Nam ra đời gắn với sự kiện nào?",
    "options": [
      {
        "label": "A",
        "text": "Cuộc khai thác thuộc địa của thực dân Pháp (đầu thế kỷ XX)."
      },
      {
        "label": "B",
        "text": "Quá trình công nghiệp hóa tự thân của đất nước."
      },
      {
        "label": "C",
        "text": "Sự ra đời của chế độ phong kiến."
      },
      {
        "label": "D",
        "text": "Sau khi đất nước giành độc lập (1945)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q37",
    "chapter": "Chương 2",
    "number": 37,
    "question": "Đặc điểm nào sau đây là của giai cấp công nhân Việt Nam truyền thống?",
    "options": [
      {
        "label": "A",
        "text": "Có tinh thần dân tộc, truyền thống yêu nước, đoàn kết."
      },
      {
        "label": "B",
        "text": "Ra đời trước giai cấp tư sản dân tộc."
      },
      {
        "label": "C",
        "text": "Có nguồn gốc chủ yếu từ nông dân."
      },
      {
        "label": "D",
        "text": "Tất cả các phương án trên."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": "Chương 2_Q38",
    "chapter": "Chương 2",
    "number": 38,
    "question": "Tại sao giai cấp công nhân Việt Nam sớm có tinh thần cách mạng triệt để?",
    "options": [
      {
        "label": "A",
        "text": "Vì sớm có Đảng lãnh đạo, bị áp bức nặng nề, có quan hệ gắn bó với nông dân."
      },
      {
        "label": "B",
        "text": "Vì họ có số lượng đông đảo nhất."
      },
      {
        "label": "C",
        "text": "Vì họ có trình độ học vấn cao."
      },
      {
        "label": "D",
        "text": "Vì họ được thực dân Pháp ưu ái."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q39",
    "chapter": "Chương 2",
    "number": 39,
    "question": "Giai cấp công nhân Việt Nam hiện nay có đặc điểm gì mới?",
    "options": [
      {
        "label": "A",
        "text": "Tăng nhanh về số lượng và chất lượng, đa dạng về cơ cấu, hình thành đội ngũ công nhân tri thức."
      },
      {
        "label": "B",
        "text": "Giảm về số lượng do tự động hóa."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung trong khu vực kinh tế nhà nước."
      },
      {
        "label": "D",
        "text": "Trình độ học vấn, tay nghề nhìn chung không thay đổi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q40",
    "chapter": "Chương 2",
    "number": 40,
    "question": "Đội ngũ công nhân ở khu vực kinh tế nào được xem là tiêu biểu, đóng vai trò nòng cốt ở Việt Nam hiện nay?",
    "options": [
      {
        "label": "A",
        "text": "Khu vực kinh tế nhà nước."
      },
      {
        "label": "B",
        "text": "Khu vực kinh tế tư nhân."
      },
      {
        "label": "C",
        "text": "Khu vực kinh tế có vốn đầu tư nước ngoài (FDI)."
      },
      {
        "label": "D",
        "text": "Khu vực kinh tế tập thể."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q41",
    "chapter": "Chương 2",
    "number": 41,
    "question": "\"Công nhân tri thức\" là bộ phận công nhân...",
    "options": [
      {
        "label": "A",
        "text": "Nắm vững khoa học - công nghệ tiên tiến, lao động ở các ngành kinh tế mũi nhọn."
      },
      {
        "label": "B",
        "text": "Chỉ làm việc trong các trường đại học, viện nghiên cứu."
      },
      {
        "label": "C",
        "text": "Chỉ là những người có bằng đại học."
      },
      {
        "label": "D",
        "text": "Không còn là giai cấp công nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q42",
    "chapter": "Chương 2",
    "number": 42,
    "question": "Một trong những hạn chế, bất cập của giai cấp công nhân Việt Nam hiện nay là gì?",
    "options": [
      {
        "label": "A",
        "text": "Thiếu nghiêm trọng các chuyên gia kỹ thuật, cán bộ quản lý giỏi, công nhân lành nghề."
      },
      {
        "label": "B",
        "text": "Số lượng quá ít, không đủ để tác động đến nền kinh tế."
      },
      {
        "label": "C",
        "text": "Không có bản lĩnh chính trị."
      },
      {
        "label": "D",
        "text": "Hoàn toàn không có tác phong công nghiệp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q43",
    "chapter": "Chương 2",
    "number": 43,
    "question": "Nội dung kinh tế của SMLS của GC CN Việt Nam hiện nay là gì?",
    "options": [
      {
        "label": "A",
        "text": "Là lực lượng đi đầu trong sự nghiệp đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước."
      },
      {
        "label": "B",
        "text": "Chỉ tập trung vào phát triển nông nghiệp."
      },
      {
        "label": "C",
        "text": "Xóa bỏ nền kinh tế thị trường."
      },
      {
        "label": "D",
        "text": "Chỉ làm việc trong các doanh nghiệp nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q44",
    "chapter": "Chương 2",
    "number": 44,
    "question": "Nội dung chính trị - xã hội của SMLS của GC CN Việt Nam hiện nay là gì?",
    "options": [
      {
        "label": "A",
        "text": "Củng cố và hoàn thiện hệ thống chính trị XHCN, xây dựng nhà nước pháp quyền XHCN."
      },
      {
        "label": "B",
        "text": "Đấu tranh lật đổ chính quyền."
      },
      {
        "label": "C",
        "text": "Xây dựng chế độ đa nguyên, đa đảng."
      },
      {
        "label": "D",
        "text": "Chỉ tập trung vào phát triển kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q45",
    "chapter": "Chương 2",
    "number": 45,
    "question": "Nội dung văn hóa - tư tưởng của SMLS của GC CN Việt Nam hiện nay là gì?",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc, bảo vệ nền tảng tư tưởng của Đảng."
      },
      {
        "label": "B",
        "text": "Tiếp thu toàn bộ văn hóa phương Tây, xóa bỏ văn hóa truyền thống."
      },
      {
        "label": "C",
        "text": "Phủ nhận chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh."
      },
      {
        "label": "D",
        "text": "Xây dựng nền văn hóa dựa trên hệ tư tưởng tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q46",
    "chapter": "Chương 2",
    "number": 46,
    "question": "Phương hướng nào sau đây không phải là để xây dựng giai cấp công nhân Việt Nam hiện nay?",
    "options": [
      {
        "label": "A",
        "text": "Giảm số lượng công nhân, tăng số lượng nông dân."
      },
      {
        "label": "B",
        "text": "Nâng cao bản lĩnh chính trị, trình độ học vấn, chuyên môn."
      },
      {
        "label": "C",
        "text": "Bảo đảm việc làm, nhà ở, các công trình phúc lợi cho công nhân."
      },
      {
        "label": "D",
        "text": "Sửa đổi, bổ sung các chính sách, pháp luật về tiền lương, bảo hiểm."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q47",
    "chapter": "Chương 2",
    "number": 47,
    "question": "Giải pháp nào được coi là nhiệm vụ chiến lược để xây dựng giai cấp công nhân Việt Nam hiện nay?",
    "options": [
      {
        "label": "A",
        "text": "Đào tạo, bồi dưỡng, nâng cao trình độ mọi mặt cho công nhân, không ngừng trí thức hóa giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Chỉ tập trung phát triển về số lượng."
      },
      {
        "label": "C",
        "text": "Giữ nguyên trình độ và cơ cấu hiện có."
      },
      {
        "label": "D",
        "text": "Chỉ dựa vào nguồn lao động nhập khẩu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q48",
    "chapter": "Chương 2",
    "number": 48,
    "question": "Việc xây dựng giai cấp công nhân Việt Nam lớn mạnh là trách nhiệm của ai?",
    "options": [
      {
        "label": "A",
        "text": "Của cả hệ thống chính trị, của toàn xã hội và sự nỗ lực của bản thân mỗi công nhân."
      },
      {
        "label": "B",
        "text": "Chỉ của Đảng Cộng sản."
      },
      {
        "label": "C",
        "text": "Chỉ của Nhà nước."
      },
      {
        "label": "D",
        "text": "Chỉ của các doanh nghiệp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q49",
    "chapter": "Chương 2",
    "number": 49,
    "question": "Giai cấp công nhân thế kỷ XIX chủ yếu là công nhân trong ngành nào?",
    "options": [
      {
        "label": "A",
        "text": "Công nghiệp (lao động cơ khí, chân tay)."
      },
      {
        "label": "B",
        "text": "Dịch vụ."
      },
      {
        "label": "C",
        "text": "Nông nghiệp công nghệ cao."
      },
      {
        "label": "D",
        "text": "Công nghệ thông tin."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q50",
    "chapter": "Chương 2",
    "number": 50,
    "question": "Giai cấp công nhân hiện đại (thế kỷ XXI) bao gồm cả những người lao động trong lĩnh vực nào?",
    "options": [
      {
        "label": "A",
        "text": "Công nghiệp, dịch vụ, công nghệ cao, \"công nhân tri thức\"."
      },
      {
        "label": "B",
        "text": "Chỉ trong lĩnh vực công nghiệp nặng."
      },
      {
        "label": "C",
        "text": "Chỉ trong lĩnh vực dệt may, da giày."
      },
      {
        "label": "D",
        "text": "Chỉ trong lĩnh vực khai khoáng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q51",
    "chapter": "Chương 2",
    "number": 51,
    "question": "\"Giai cấp công nhân là một tập đoàn xã hội ổn định...\", từ \"ổn định\" ở đây có nghĩa là gì?",
    "options": [
      {
        "label": "A",
        "text": "Ổn định về vị trí của họ trong hệ thống sản xuất (phương thức lao động và quan hệ sản xuất)."
      },
      {
        "label": "B",
        "text": "Ổn định về số lượng, không tăng không giảm."
      },
      {
        "label": "C",
        "text": "Ổn định về thu nhập, không thay đổi."
      },
      {
        "label": "D",
        "text": "Ổn Bịnh về nơi ở, không di chuyển."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q52",
    "chapter": "Chương 2",
    "number": 52,
    "question": "Tại sao nói giai cấp công nhân là \"đại diện cho lực lượng sản xuất tiên tiến\"?",
    "options": [
      {
        "label": "A",
        "text": "Vì họ lao động bằng phương thức công nghiệp, gắn liền với máy móc, công nghệ hiện đại."
      },
      {
        "label": "B",
        "text": "Vì họ là những người thông minh nhất."
      },
      {
        "label": "C",
        "text": "Vì họ là những người giàu có nhất."
      },
      {
        "label": "D",
        "text": "Vì họ là những người nắm quyền lực chính trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q53",
    "chapter": "Chương 2",
    "number": 53,
    "question": "Lao động của giai cấp công nhân mang tính chất gì?",
    "options": [
      {
        "label": "A",
        "text": "Xã hội hóa cao."
      },
      {
        "label": "B",
        "text": "Cá nhân, riêng lẻ."
      },
      {
        "label": "C",
        "text": "Thủ công, lạc hậu."
      },
      {
        "label": "D",
        "text": "Tự cung tự cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q54",
    "chapter": "Chương 2",
    "number": 54,
    "question": "Phẩm chất nào của giai cấp công nhân được hình thành từ nền sản xuất công nghiệp hiện đại?",
    "options": [
      {
        "label": "A",
        "text": "Tính tổ chức, kỷ luật lao động, tinh thần hợp tác."
      },
      {
        "label": "B",
        "text": "Tính tự do, vô kỷ luật."
      },
      {
        "label": "C",
        "text": "Tính tư hữu, ích kỷ."
      },
      {
        "label": "D",
        "text": "Tính bảo thủ, trì trệ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q55",
    "chapter": "Chương 2",
    "number": 55,
    "question": "Việc giai cấp công nhân \"xóa bỏ triệt để chế độ tư hữu\" khác gì so với các cuộc cách mạng trước đó?",
    "options": [
      {
        "label": "A",
        "text": "Các cuộc cách mạng trước chỉ thay thế hình thức tư hữu này bằng hình thức tư hữu khác."
      },
      {
        "label": "B",
        "text": "Các cuộc cách mạng trước cũng xóa bỏ mọi hình thức tư hữu."
      },
      {
        "label": "C",
        "text": "Các cuộc cách mạng trước không liên quan đến chế độ sở hữu."
      },
      {
        "label": "D",
        "text": "Các cuộc cách mạng trước chỉ xóa bỏ chế độ công hữu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q56",
    "chapter": "Chương 2",
    "number": 56,
    "question": "Mục tiêu cao nhất trong SMLS của giai cấp công nhân là gì?",
    "options": [
      {
        "label": "A",
        "text": "Giải phóng con người, tạo điều kiện cho con người phát triển toàn diện."
      },
      {
        "label": "B",
        "text": "Giành được quyền lực và thống trị các giai cấp khác."
      },
      {
        "label": "C",
        "text": "Tích lũy tư bản và của cải."
      },
      {
        "label": "D",
        "text": "Duy trì trật tự xã hội cũ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q57",
    "chapter": "Chương 2",
    "number": 57,
    "question": "Địa vị kinh tế - xã hội của GC CN là điều kiện khách quan. Địa vị đó được thể hiện ở chỗ:",
    "options": [
      {
        "label": "A",
        "text": "Họ là bộ phận quan trọng nhất của LLSX và không có tư liệu sản xuất."
      },
      {
        "label": "B",
        "text": "Họ là bộ phận sở hữu tư liệu sản xuất chủ yếu."
      },
      {
        "label": "C",
        "text": "Họ là giai cấp đông đảo nhất trong xã hội."
      },
      {
        "label": "D",
        "text": "Họ là giai cấp có địa vị chính trị cao nhất trong CNTB."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q58",
    "chapter": "Chương 2",
    "number": 58,
    "question": "Sự phát triển của bản thân giai cấp công nhân về số lượng và chất lượng là điều kiện gì?",
    "options": [
      {
        "label": "A",
        "text": "Điều kiện chủ quan."
      },
      {
        "label": "B",
        "text": "Điều kiện khách quan."
      },
      {
        "label": "C",
        "text": "Điều kiện không cần thiết."
      },
      {
        "label": "D",
        "text": "Điều kiện tiên quyết."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q59",
    "chapter": "Chương 2",
    "number": 59,
    "question": "Ai là \"người bạn đồng minh tự nhiên\" của giai cấp công nhân trong cuộc đấu tranh chống tư bản?",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "B",
        "text": "Giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Tầng lớp trí thức."
      },
      {
        "label": "D",
        "text": "Tầng lớp tiểu chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q60",
    "chapter": "Chương 2",
    "number": 60,
    "question": "Giai cấp công nhân mang bản chất quốc tế vì:",
    "options": [
      {
        "label": "A",
        "text": "Kẻ thù của họ (GCTS) mang tính quốc tế và mục tiêu của họ (CNCS) mang tính quốc tế."
      },
      {
        "label": "B",
        "text": "Họ phải đi làm việc ở nhiều nước."
      },
      {
        "label": "C",
        "text": "Họ nói được nhiều ngoại ngữ."
      },
      {
        "label": "D",
        "text": "Họ không có tổ quốc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q61",
    "chapter": "Chương 2",
    "number": 61,
    "question": "Vai trò của Đảng Cộng sản đối với giai cấp công nhân là:",
    "options": [
      {
        "label": "A",
        "text": "Đem lại sự giác ngộ, sức mạnh đoàn kết, trí tuệ và hành động cách mạng."
      },
      {
        "label": "B",
        "text": "Chỉ là một tổ chức quần chúng bình thường."
      },
      {
        "label": "C",
        "text": "Tổ chức thay mặt công nhân đàm phán lương."
      },
      {
        "label": "D",
        "text": "Không có vai trò gì quan trọng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q62",
    "chapter": "Chương 2",
    "number": 62,
    "question": "Lý luận Mác - Lênin về SMLS của GC CN hiện nay còn giá trị không?",
    "options": [
      {
        "label": "A",
        "text": "Vẫn mang giá trị khoa học và cách mạng, có ý nghĩa thực tiễn to lớn."
      },
      {
        "label": "B",
        "text": "Đã hoàn toàn lỗi thời, không còn giá trị."
      },
      {
        "label": "C",
        "text": "Chỉ có giá trị ở các nước tư bản."
      },
      {
        "label": "D",
        "text": "Chỉ có giá trị ở các nước XHCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q63",
    "chapter": "Chương 2",
    "number": 63,
    "question": "Những chủ thể bóc lột mới đối với giai cấp công nhân hiện đại là ai?",
    "options": [
      {
        "label": "A",
        "text": "Các tập đoàn xuyên quốc gia, nhà nước của các nước tư bản phát triển."
      },
      {
        "label": "B",
        "text": "Chỉ là các chủ xưởng nhỏ lẻ."
      },
      {
        "label": "C",
        "text": "Giai cấp địa chủ phong kiến."
      },
      {
        "label": "D",
        "text": "Giai cấp nông dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q64",
    "chapter": "Chương 2",
    "number": 64,
    "question": "Ở các nước XHCN, nơi Đảng Cộng sản cầm quyền, nội dung SMLS của GC CN là:",
    "options": [
      {
        "label": "A",
        "text": "Lãnh đạo thành công sự nghiệp đổi mới, giải quyết nhiệm vụ thời kỳ quá độ."
      },
      {
        "label": "B",
        "text": "Đấu tranh lật đổ chính quyền nhà nước."
      },
      {
        "label": "C",
        "text": "Đòi tăng lương, giảm giờ làm."
      },
      {
        "label": "D",
        "text": "Xây dựng chế độ đa nguyên."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q65",
    "chapter": "Chương 2",
    "number": 65,
    "question": "Cuộc đấu tranh ý thức hệ hiện nay diễn ra giữa hai hệ tư tưởng nào?",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa xã hội và chủ nghĩa tư bản."
      },
      {
        "label": "B",
        "text": "Chủ nghĩa phong kiến và chủ nghĩa tư bản."
      },
      {
        "label": "C",
        "text": "Chủ nghĩa xã hội và chủ nghĩa phong kiến."
      },
      {
        "label": "D",
        "text": "Chủ nghĩa dân tộc và chủ nghĩa quốc tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q66",
    "chapter": "Chương 2",
    "number": 66,
    "question": "Giai cấp công nhân Việt Nam ra đời trong hoàn cảnh nào?",
    "options": [
      {
        "label": "A",
        "text": "Một nước thuộc địa, nửa phong kiến."
      },
      {
        "label": "B",
        "text": "Một nước tư bản phát triển."
      },
      {
        "label": "C",
        "text": "Một nước phong kiến độc lập."
      },
      {
        "label": "D",
        "text": "Một nước XHCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q67",
    "chapter": "Chương 2",
    "number": 67,
    "question": "Tại sao nói GC CN Việt Nam gắn bó mật thiết với các tầng lớp nhân dân lao động?",
    "options": [
      {
        "label": "A",
        "text": "Vì có nguồn gốc chủ yếu từ nông dân."
      },
      {
        "label": "B",
        "text": "Vì họ sống tách biệt với nông dân."
      },
      {
        "label": "C",
        "text": "Vì họ là giai cấp giàu có."
      },
      {
        "label": "D",
        "text": "Vì họ là giai cấp thống trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q68",
    "chapter": "Chương 2",
    "number": 68,
    "question": "GC CN Việt Nam đối kháng trực tiếp với đối tượng nào?",
    "options": [
      {
        "label": "A",
        "text": "Tư bản thực dân Pháp (và bè lũ tay sai)."
      },
      {
        "label": "B",
        "text": "Giai cấp tư sản dân tộc Việt Nam."
      },
      {
        "label": "C",
        "text": "Giai cấp nông dân Việt Nam."
      },
      {
        "label": "D",
        "text": "Giai cấp địa chủ Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q69",
    "chapter": "Chương 2",
    "number": 69,
    "question": "Sự thống nhất tư tưởng và tổ chức của GC CN Việt Nam sớm có được là nhờ:",
    "options": [
      {
        "label": "A",
        "text": "Sớm có Đảng Cộng sản lãnh đạo."
      },
      {
        "label": "B",
        "text": "Số lượng công nhân rất đông."
      },
      {
        "label": "C",
        "text": "Được thực dân Pháp đào tạo."
      },
      {
        "label": "D",
        "text": "Sự phát triển tự phát."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q70",
    "chapter": "Chương 2",
    "number": 70,
    "question": "Sự \"đa dạng về cơ cấu nghề nghiệp\" của GC CN Việt Nam hiện nay có nghĩa là gì?",
    "options": [
      {
        "label": "A",
        "text": "Họ có mặt trong mọi thành phần kinh tế (nhà nước, tư nhân, FDI...)."
      },
      {
        "label": "B",
        "text": "Họ chỉ làm trong một ngành nghề duy nhất."
      },
      {
        "label": "C",
        "text": "Họ chỉ làm trong khu vực nhà nước."
      },
      {
        "label": "D",
        "text": "Họ chỉ làm trong khu vực FDI."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q71",
    "chapter": "Chương 2",
    "number": 71,
    "question": "Tác phong công nghiệp và kỷ luật lao động của công nhân Việt Nam hiện nay được đánh giá là:",
    "options": [
      {
        "label": "A",
        "text": "Vẫn còn nhiều hạn chế."
      },
      {
        "label": "B",
        "text": "Rất cao, vượt qua các nước phát triển."
      },
      {
        "label": "C",
        "text": "Hoàn toàn không có."
      },
      {
        "label": "D",
        "text": "Chỉ có ở khu vực FDI."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q72",
    "chapter": "Chương 2",
    "number": 72,
    "question": "Thực hiện SMLS của GC CN Việt Nam về kinh tế gắn liền với việc phát huy vai trò của khối nào?",
    "options": [
      {
        "label": "A",
        "text": "Khối liên minh công – nông – trí thức."
      },
      {
        "label": "B",
        "text": "Chỉ giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Chỉ đội ngũ trí thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q73",
    "chapter": "Chương 2",
    "number": 73,
    "question": "Mục tiêu của CNH, HĐH đất nước ở Việt Nam là gì?",
    "options": [
      {
        "label": "A",
        "text": "Làm cho nước ta trở thành một nước công nghiệp theo hướng hiện đại, định hướng XHCN."
      },
      {
        "label": "B",
        "text": "Trở thành một nước tư bản chủ nghĩa."
      },
      {
        "label": "C",
        "text": "Giữ nguyên tình trạng nông nghiệp lạc hậu."
      },
      {
        "label": "D",
        "text": "Chỉ phát triển dịch vụ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q74",
    "chapter": "Chương 2",
    "number": 74,
    "question": "Bảo vệ sự trong sáng của chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh là nội dung SMLS của GC CN Việt Nam trên lĩnh vực nào?",
    "options": [
      {
        "label": "A",
        "text": "Văn hóa - tư tưởng."
      },
      {
        "label": "B",
        "text": "Kinh tế."
      },
      {
        "label": "C",
        "text": "Chính trị - xã hội."
      },
      {
        "label": "D",
        "text": "Quân sự."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q75",
    "chapter": "Chương 2",
    "number": 75,
    "question": "Phương hướng xây dựng GC CN Việt Nam hiện nay là:",
    "options": [
      {
        "label": "A",
        "text": "Nâng cao bản lĩnh chính trị, trình độ học vấn, chuyên môn, kỹ năng nghề nghiệp."
      },
      {
        "label": "B",
        "text": "Chỉ tập trung tăng số lượng."
      },
      {
        "label": "C",
        "text": "Giảm số lượng, tăng chất lượng."
      },
      {
        "label": "D",
        "text": "Giữ nguyên hiện trạng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q76",
    "chapter": "Chương 2",
    "number": 76,
    "question": "Xây dựng giai cấp công nhân lớn mạnh phải gắn kết hữu cơ với xây dựng, phát huy sức mạnh của:",
    "options": [
      {
        "label": "A",
        "text": "Liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức."
      },
      {
        "label": "B",
        "text": "Chỉ giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ đội ngũ trí thức."
      },
      {
        "label": "D",
        "text": "Chỉ giai cấp nông dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q77",
    "chapter": "Chương 2",
    "number": 77,
    "question": "\"Trí thức hóa giai cấp công nhân\" là một...",
    "options": [
      {
        "label": "A",
        "text": "Nhiệm vụ chiến lược."
      },
      {
        "label": "B",
        "text": "Khẩu hiệu viển vông."
      },
      {
        "label": "C",
        "text": "Nhiệm vụ không cần thiết."
      },
      {
        "label": "D",
        "text": "Nhiệm vụ đã hoàn thành."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q78",
    "chapter": "Chương 2",
    "number": 78,
    "question": "Giai cấp công nhân được C.Mác và Ph.Ăngghen xem là:",
    "options": [
      {
        "label": "A",
        "text": "Sản phẩm xã hội của quá trình phát triển tư bản chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Sản phẩm của chế độ phong kiến."
      },
      {
        "label": "C",
        "text": "Sản phẩm của chế độ chiếm hữu nô lệ."
      },
      {
        "label": "D",
        "text": "Giai cấp tồn tại vĩnh viễn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q79",
    "chapter": "Chương 2",
    "number": 79,
    "question": "Nguồn gốc giá trị thặng dư và sự giàu có của giai cấp tư sản là từ đâu?",
    "options": [
      {
        "label": "A",
        "text": "Lao động sống (lao động không công) của công nhân."
      },
      {
        "label": "B",
        "text": "Từ máy móc, thiết bị."
      },
      {
        "label": "C",
        "text": "Từ tài năng kinh doanh của nhà tư bản."
      },
      {
        "label": "D",
        "text": "Từ thị trường."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q80",
    "chapter": "Chương 2",
    "number": 80,
    "question": "\"Giai cấp của những người lao động không sở hữu tư liệu sản xuất chủ yếu của xã hội\" là nói về:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân (trên phương diện kinh tế - xã hội)."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Tầng lớp trí thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q81",
    "chapter": "Chương 2",
    "number": 81,
    "question": "\"Giai cấp đại diện cho lực lượng sản xuất tiên tiến\" là đặc điểm nào của GC CN?",
    "options": [
      {
        "label": "A",
        "text": "Đặc điểm kinh tế - xã hội."
      },
      {
        "label": "B",
        "text": "Đặc điểm chính trị - xã hội."
      },
      {
        "label": "C",
        "text": "Đặc điểm văn hóa."
      },
      {
        "label": "D",
        "text": "Đặc điểm tư tưởng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q82",
    "chapter": "Chương 2",
    "number": 82,
    "question": "Giai cấp công nhân là giai cấp có tinh thần cách mạng triệt để vì:",
    "options": [
      {
        "label": "A",
        "text": "Họ bị bóc lột nặng nề nhất và không có gì để mất ngoài xiềng xích."
      },
      {
        "label": "B",
        "text": "Họ có nhiều tài sản."
      },
      {
        "label": "C",
        "text": "Họ được giai cấp tư sản đào tạo."
      },
      {
        "label": "D",
        "text": "Họ là giai cấp đông đảo nhất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q83",
    "chapter": "Chương 2",
    "number": 83,
    "question": "Trong giai đoạn hiện nay, ở các nước TBCN, mục tiêu đấu tranh trước mắt của GC CN là gì?",
    "options": [
      {
        "label": "A",
        "text": "Chống bất công và bất bình đẳng xã hội, đòi quyền dân sinh, dân chủ."
      },
      {
        "label": "B",
        "text": "Giành chính quyền ngay lập tức."
      },
      {
        "label": "C",
        "text": "Xóa bỏ hoàn toàn CNTB."
      },
      {
        "label": "D",
        "text": "Di cư sang các nước XHCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q84",
    "chapter": "Chương 2",
    "number": 84,
    "question": "Sứ mệnh lịch sử của giai cấp công nhân có phải là thay thế chế độ tư hữu này bằng chế độ tư hữu khác không?",
    "options": [
      {
        "label": "A",
        "text": "Không, mà là xóa bỏ triệt để chế độ tư hữu về tư liệu sản xuất."
      },
      {
        "label": "B",
        "text": "Có, là thay thế tư hữu TBCN bằng tư hữu XHCN."
      },
      {
        "label": "C",
        "text": "Chỉ thay đổi tên gọi của chế độ tư hữu."
      },
      {
        "label": "D",
        "text": "Không liên quan đến chế độ sở hữu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q85",
    "chapter": "Chương 2",
    "number": 85,
    "question": "Việc giai cấp công nhân giành lấy quyền lực thống trị xã hội là tiền đề để làm gì?",
    "options": [
      {
        "label": "A",
        "text": "Cải tạo toàn diện, sâu sắc xã hội cũ và xây dựng thành công xã hội mới."
      },
      {
        "label": "B",
        "text": "Thay giai cấp tư sản bóc lột các giai cấp khác."
      },
      {
        "label": "C",
        "text": "Chia lại tài sản của xã hội."
      },
      {
        "label": "D",
        "text": "Duy trì sự áp bức giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q86",
    "chapter": "Chương 2",
    "number": 86,
    "question": "\"Chủ thể của quá trình sản xuất vật chất hiện đại\" là nói về:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Tầng lớp trí thức."
      },
      {
        "label": "D",
        "text": "Giai cấp tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q87",
    "chapter": "Chương 2",
    "number": 87,
    "question": "Ai là người đưa ra luận điểm: \"Trong tất cả các giai cấp hiện đang đối lập với giai cấp tư sản thì chỉ có giai cấp vô sản là giai cấp thực sự cách mạng\"?",
    "options": [
      {
        "label": "A",
        "text": "C.Mác và Ph.Ăngghen."
      },
      {
        "label": "B",
        "text": "V.I.Lênin."
      },
      {
        "label": "C",
        "text": "J.Xtalin."
      },
      {
        "label": "D",
        "text": "Hồ Chí Minh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q88",
    "chapter": "Chương 2",
    "number": 88,
    "question": "Sự phát triển của giai cấp công nhân về \"chất lượng\" bao gồm:",
    "options": [
      {
        "label": "A",
        "text": "Trình độ chuyên môn, kỹ năng nghề nghiệp, ý thức chính trị, kỷ luật lao động."
      },
      {
        "label": "B",
        "text": "Chỉ số lượng công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ trình độ học vấn."
      },
      {
        "label": "D",
        "text": "Chỉ sức khỏe thể chất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q89",
    "chapter": "Chương 2",
    "number": 89,
    "question": "Đảng Cộng sản mang bản chất của giai cấp nào?",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Tầng lớp trí thức."
      },
      {
        "label": "D",
        "text": "Toàn thể nhân dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q90",
    "chapter": "Chương 2",
    "number": 90,
    "question": "\"Đảng Cộng sản là đội tiên phong của giai cấp công nhân\" có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Đảng bao gồm những thành viên ưu tú nhất, có lý luận tiên phong dẫn đường."
      },
      {
        "label": "B",
        "text": "Đảng chỉ bao gồm công nhân."
      },
      {
        "label": "C",
        "text": "Đảng đi trước trong mọi cuộc xung phong."
      },
      {
        "label": "D",
        "text": "Đảng là tổ chức duy nhất của công nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q91",
    "chapter": "Chương 2",
    "number": 91,
    "question": "\"Phong trào cộng sản và công nhân ở nhiều nước vẫn luôn là lực lượng đi đầu\" trong các cuộc đấu tranh nào?",
    "options": [
      {
        "label": "A",
        "text": "Vì hòa bình, hợp tác và phát triển, vì dân sinh, dân chủ, tiến bộ xã hội."
      },
      {
        "label": "B",
        "text": "Vì lợi ích của giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Vì chiến tranh và xung đột."
      },
      {
        "label": "D",
        "text": "Vì duy trì trật tự cũ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q92",
    "chapter": "Chương 2",
    "number": 92,
    "question": "Lý luận về SMLS của GC CN của Mác - Lênin vẫn có ý nghĩa gì hiện nay?",
    "options": [
      {
        "label": "A",
        "text": "Vẫn mang giá trị khoa học, cách mạng và ý nghĩa thực tiễn to lớn."
      },
      {
        "label": "B",
        "text": "Đã lỗi thời, cần phải vứt bỏ."
      },
      {
        "label": "C",
        "text": "Chỉ còn giá trị tham khảo."
      },
      {
        "label": "D",
        "text": "Chỉ đúng với thế kỷ XIX."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q93",
    "chapter": "Chương 2",
    "number": 93,
    "question": "Sự biến đổi của giai cấp công nhân hiện đại (trí tuệ hóa, trung lưu hóa...) có làm mất đi SMLS của họ không?",
    "options": [
      {
        "label": "A",
        "text": "Không, mà chỉ làm cho SMLS của họ có những biểu hiện mới."
      },
      {
        "label": "B",
        "text": "Có, họ đã từ bỏ SMLS của mình."
      },
      {
        "label": "C",
        "text": "Có, họ đã trở thành đồng minh của giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Chỉ còn một bộ phận nhỏ giữ SMLS."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q94",
    "chapter": "Chương 2",
    "number": 94,
    "question": "Giai cấp công nhân Việt Nam ra đời khi nào so với giai cấp tư sản dân tộc?",
    "options": [
      {
        "label": "A",
        "text": "Ra đời trước."
      },
      {
        "label": "B",
        "text": "Ra đời sau."
      },
      {
        "label": "C",
        "text": "Ra đời cùng lúc."
      },
      {
        "label": "D",
        "text": "Không có giai cấp tư sản dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q95",
    "chapter": "Chương 2",
    "number": 95,
    "question": "Đặc điểm \"có nguồn gốc chủ yếu từ nông dân\" của GC CN Việt Nam dẫn đến:",
    "options": [
      {
        "label": "A",
        "text": "Có mối liên hệ mật thiết với nông dân, dễ dàng xây dựng khối liên minh công nông."
      },
      {
        "label": "B",
        "text": "Khó tiếp thu lý luận Mác - Lênin."
      },
      {
        "label": "C",
        "text": "Dễ thỏa hiệp với thực dân."
      },
      {
        "label": "D",
        "text": "Mang nặng tư tưởng tư hữu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q96",
    "chapter": "Chương 2",
    "number": 96,
    "question": "\"Trưởng thành nhanh chóng về ý thức chính trị, thống nhất tư tưởng và tổ chức\" là đặc điểm của:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân Việt Nam."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân Việt Nam."
      },
      {
        "label": "C",
        "text": "Giai cấp tư sản Việt Nam."
      },
      {
        "label": "D",
        "text": "Tầng lớp trí thức Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q97",
    "chapter": "Chương 2",
    "number": 97,
    "question": "Hiện nay, giai cấp công nhân Việt Nam đang có mặt trong:",
    "options": [
      {
        "label": "A",
        "text": "Mọi thành phần kinh tế."
      },
      {
        "label": "B",
        "text": "Chỉ thành phần kinh tế nhà nước."
      },
      {
        "label": "C",
        "text": "Chỉ thành phần kinh tế tư nhân."
      },
      {
        "label": "D",
        "text": "Chỉ thành phần kinh tế có vốn FDI."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q98",
    "chapter": "Chương 2",
    "number": 98,
    "question": "Nguồn lực lao động qua đào tạo của Việt Nam hiện nay được đánh giá là:",
    "options": [
      {
        "label": "A",
        "text": "Vừa thiếu lại vừa thừa do mất cân đối trong cơ cấu đào tạo."
      },
      {
        "label": "B",
        "text": "Rất dồi dào và cân đối."
      },
      {
        "label": "C",
        "text": "Hoàn toàn không có."
      },
      {
        "label": "D",
        "text": "Chỉ thừa, không thiếu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q99",
    "chapter": "Chương 2",
    "number": 99,
    "question": "Để thực hiện SMLS, điểm then chốt đối với GC CN Việt Nam hiện nay là gì?",
    "options": [
      {
        "label": "A",
        "text": "Phải đặc biệt coi trọng công tác xây dựng, chỉnh đốn Đảng."
      },
      {
        "label": "B",
        "text": "Chỉ tập trung phát triển kinh tế."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung vào hội nhập quốc tế."
      },
      {
        "label": "D",
        "text": "Chỉ tập trung vào phát triển văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q100",
    "chapter": "Chương 2",
    "number": 100,
    "question": "Nội dung SMLS của GC CN Việt Nam hiện nay có gì khác so với trước khi giành độc lập?",
    "options": [
      {
        "label": "A",
        "text": "Chuyển từ nhiệm vụ lật đổ ách thống trị sang lãnh đạo xây dựng CNXH."
      },
      {
        "label": "B",
        "text": "Không có gì khác biệt."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung vào đấu tranh vũ trang."
      },
      {
        "label": "D",
        "text": "Đã hoàn thành SMLS."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q101",
    "chapter": "Chương 2",
    "number": 101,
    "question": "Giai cấp công nhân là sản phẩm của:",
    "options": [
      {
        "label": "A",
        "text": "Nền đại công nghiệp."
      },
      {
        "label": "B",
        "text": "Nền sản xuất nông nghiệp."
      },
      {
        "label": "C",
        "text": "Nền sản xuất thủ công."
      },
      {
        "label": "D",
        "text": "Nền kinh tế tri thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q102",
    "chapter": "Chương 2",
    "number": 102,
    "question": "\"Không sở hữu tư liệu sản xuất, phải bán sức lao động\" là đặc trưng của GC CN trên phương diện:",
    "options": [
      {
        "label": "A",
        "text": "Kinh tế - xã hội (trong CNTB)."
      },
      {
        "label": "B",
        "text": "Chính trị - xã hội."
      },
      {
        "label": "C",
        "text": "Văn hóa - tư tưởng."
      },
      {
        "label": "D",
        "text": "Dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q103",
    "chapter": "Chương 2",
    "number": 103,
    "question": "Mâu thuẫn về lợi ích giữa giai cấp công nhân và giai cấp tư sản là mâu thuẫn:",
    "options": [
      {
        "label": "A",
        "text": "Đối kháng không thể điều hòa (trong CNTB)."
      },
      {
        "label": "B",
        "text": "Không đối kháng, có thể điều hòa."
      },
      {
        "label": "C",
        "text": "Chỉ là mâu thuẫn tạm thời."
      },
      {
        "label": "D",
        "text": "Không phải là mâu thuẫn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q104",
    "chapter": "Chương 2",
    "number": 104,
    "question": "Đặc trưng \"lao động bằng phương thức công nghiệp\" mang lại cho GC CN phẩm chất gì?",
    "options": [
      {
        "label": "A",
        "text": "Tính tổ chức, kỷ luật cao."
      },
      {
        "label": "B",
        "text": "Tính tự do, tản mạn."
      },
      {
        "label": "C",
        "text": "Tính bảo thủ, trì trệ."
      },
      {
        "label": "D",
        "text": "Tính cá nhân, ích kỷ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q105",
    "chapter": "Chương 2",
    "number": 105,
    "question": "Giai cấp công nhân là \"giai cấp cách mạng\" vì:",
    "options": [
      {
        "label": "A",
        "text": "Họ đại diện cho LLSX tiên tiến, có SMLS xóa bỏ CNTB, xây dựng CNXH."
      },
      {
        "label": "B",
        "text": "Họ nghèo khổ nhất."
      },
      {
        "label": "C",
        "text": "Họ đông đảo nhất."
      },
      {
        "label": "D",
        "text": "Họ bị áp bức nhất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q106",
    "chapter": "Chương 2",
    "number": 106,
    "question": "\"Xây dựng nền văn hóa mới... thay thế hệ tư tưởng chính trị của giai cấp tư sản\" là nội dung SMLS trên lĩnh vực:",
    "options": [
      {
        "label": "A",
        "text": "Văn hóa, tư tưởng."
      },
      {
        "label": "B",
        "text": "Kinh tế."
      },
      {
        "label": "C",
        "text": "Chính trị - xã hội."
      },
      {
        "label": "D",
        "text": "Quân sự."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q107",
    "chapter": "Chương 2",
    "number": 107,
    "question": "Sứ mệnh của giai cấp công nhân là sự nghiệp của:",
    "options": [
      {
        "label": "A",
        "text": "Bản thân giai cấp công nhân cùng với đông đảo quần chúng, vì lợi ích cho đa số."
      },
      {
        "label": "B",
        "text": "Chỉ riêng giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ riêng Đảng Cộng sản."
      },
      {
        "label": "D",
        "text": "Chỉ riêng giai cấp nông dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q108",
    "chapter": "Chương 2",
    "number": 108,
    "question": "Giai cấp công nhân là giai cấp tiên tiến nhất vì:",
    "options": [
      {
        "label": "A",
        "text": "Họ đại diện cho phương thức sản xuất tiên tiến nhất."
      },
      {
        "label": "B",
        "text": "Họ có trình độ học vấn cao nhất."
      },
      {
        "label": "C",
        "text": "Họ giàu có nhất."
      },
      {
        "label": "D",
        "text": "Họ nắm quyền lực nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q109",
    "chapter": "Chương 2",
    "number": 109,
    "question": "Điều kiện nào sau đây là điều kiện chủ quan để GC CN thực hiện SMLS?",
    "options": [
      {
        "label": "A",
        "text": "Sự liên minh giai cấp giữa công nhân, nông dân và trí thức."
      },
      {
        "label": "B",
        "text": "Địa vị kinh tế - xã hội của GC CN."
      },
      {
        "label": "C",
        "text": "Đặc điểm chính trị - xã hội của GC CN."
      },
      {
        "label": "D",
        "text": "Sự phát triển của nền đại công nghiệp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q110",
    "chapter": "Chương 2",
    "number": 110,
    "question": "Đảng Cộng sản lấy hệ tư tưởng nào làm nền tảng?",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa Mác - Lênin."
      },
      {
        "label": "B",
        "text": "Chủ nghĩa tư bản."
      },
      {
        "label": "C",
        "text": "Chủ nghĩa dân tộc."
      },
      {
        "label": "D",
        "text": "Chủ nghĩa xã hội không tưởng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q111",
    "chapter": "Chương 2",
    "number": 111,
    "question": "Giai cấp công nhân là cơ sở xã hội và nguồn bổ sung lực lượng quan trọng nhất của:",
    "options": [
      {
        "label": "A",
        "text": "Đảng Cộng sản."
      },
      {
        "label": "B",
        "text": "Nhà nước tư sản."
      },
      {
        "label": "C",
        "text": "Giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Giai cấp nông dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q112",
    "chapter": "Chương 2",
    "number": 112,
    "question": "Ở các nước TBCN hiện nay, GC CN vẫn là lực lượng đi đầu trong các cuộc đấu tranh vì:",
    "options": [
      {
        "label": "A",
        "text": "Hòa bình, hợp tác và phát triển, dân sinh, dân chủ."
      },
      {
        "label": "B",
        "text": "Lợi ích của giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Chiến tranh xâm lược."
      },
      {
        "label": "D",
        "text": "Bảo vệ chế độ TBCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q113",
    "chapter": "Chương 2",
    "number": 113,
    "question": "Sự biến đổi của GC CN hiện đại (trí tuệ hóa, trung lưu hóa) làm cho:",
    "options": [
      {
        "label": "A",
        "text": "Cơ cấu xã hội, nghề nghiệp, thu nhập của GC CN thay đổi, đa dạng."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân bị xóa sổ."
      },
      {
        "label": "C",
        "text": "Giai cấp công nhân trở nên thuần nhất."
      },
      {
        "label": "D",
        "text": "Sứ mệnh lịch sử của GC CN kết thúc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q114",
    "chapter": "Chương 2",
    "number": 114,
    "question": "Ở các nước XHCN, GC CN thực hiện SMLS của mình thông qua vai trò:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp lãnh đạo (thông qua Đảng Cộng sản cầm quyền)."
      },
      {
        "label": "B",
        "text": "Giai cấp bị lãnh đạo."
      },
      {
        "label": "C",
        "text": "Giai cấp bị bóc lột."
      },
      {
        "label": "D",
        "text": "Giai cấp không còn tồn tại."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q115",
    "chapter": "Chương 2",
    "number": 115,
    "question": "Giai cấp công nhân Việt Nam có đặc điểm riêng biệt là:",
    "options": [
      {
        "label": "A",
        "text": "Ra đời trước giai cấp tư sản dân tộc."
      },
      {
        "label": "B",
        "text": "Ra đời sau giai cấp tư sản dân tộc."
      },
      {
        "label": "C",
        "text": "Ra đời cùng lúc với giai cấp tư sản dân tộc."
      },
      {
        "label": "D",
        "text": "Không có đặc điểm gì riêng biệt."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q116",
    "chapter": "Chương 2",
    "number": 116,
    "question": "Hạn chế về \"trình độ văn hóa và tay nghề\" của công nhân Việt Nam hiện nay đòi hỏi phải:",
    "options": [
      {
        "label": "A",
        "text": "Đẩy mạnh công tác đào tạo, bồi dưỡng, \"trí thức hóa\" công nhân."
      },
      {
        "label": "B",
        "text": "Chấp nhận tình trạng này."
      },
      {
        "label": "C",
        "text": "Nhập khẩu toàn bộ lao động nước ngoài."
      },
      {
        "label": "D",
        "text": "Chỉ sử dụng công nhân trong các ngành giản đơn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q117",
    "chapter": "Chương 2",
    "number": 117,
    "question": "Nội dung kinh tế của SMLS GC CN Việt Nam (đi đầu trong CNH, HĐH) đòi hỏi GC CN phải:",
    "options": [
      {
        "label": "A",
        "text": "Nâng cao trình độ, nắm vững khoa học công nghệ."
      },
      {
        "label": "B",
        "text": "Chỉ cần tăng về số lượng."
      },
      {
        "label": "C",
        "text": "Chỉ cần có sức khỏe."
      },
      {
        "label": "D",
        "text": "Chỉ cần có kỷ luật."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q118",
    "chapter": "Chương 2",
    "number": 118,
    "question": "Việc GC CN Việt Nam \"bảo vệ thành quả của cách mạng xã hội chủ nghĩa\" là nội dung SMLS trên lĩnh vực:",
    "options": [
      {
        "label": "A",
        "text": "Chính trị - xã hội."
      },
      {
        "label": "B",
        "text": "Kinh tế."
      },
      {
        "label": "C",
        "text": "Văn hóa - tư tưởng."
      },
      {
        "label": "D",
        "text": "Đối ngoại."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q119",
    "chapter": "Chương 2",
    "number": 119,
    "question": "\"Nâng cao bản lĩnh chính trị\" là một trong những phương hướng để:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng giai cấp công nhân Việt Nam hiện nay."
      },
      {
        "label": "B",
        "text": "Xây dựng giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Xây dựng đội ngũ trí thức."
      },
      {
        "label": "D",
        "text": "Xây dựng tầng lớp doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 2_Q120",
    "chapter": "Chương 2",
    "number": 120,
    "question": "\"Xây dựng giai cấp công nhân lớn mạnh\" là trách nhiệm của:",
    "options": [
      {
        "label": "A",
        "text": "Cả hệ thống chính trị, toàn xã hội và bản thân công nhân."
      },
      {
        "label": "B",
        "text": "Chỉ của công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ của nhà nước."
      },
      {
        "label": "D",
        "text": "Chỉ của các doanh nghiệp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q1",
    "chapter": "Chương 3",
    "number": 1,
    "question": "Chủ nghĩa xã hội khoa học tiếp cận chủ nghĩa xã hội với tư cách là:",
    "options": [
      {
        "label": "A",
        "text": "Một phong trào thực tiễn, một trào lưu tư tưởng, một khoa học, một chế độ xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ là một chế độ xã hội tốt đẹp trong tương lai."
      },
      {
        "label": "C",
        "text": "Chỉ là một phong trào đấu tranh của giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Chỉ là một học thuyết lý luận."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q2",
    "chapter": "Chương 3",
    "number": 2,
    "question": "Theo chủ nghĩa Mác - Lênin, học thuyết nào đã vạch rõ những quy luật cơ bản của vận động xã hội và chỉ ra phương pháp khoa học để giải thích lịch sử?",
    "options": [
      {
        "label": "A",
        "text": "Học thuyết về hình thái kinh tế - xã hội."
      },
      {
        "label": "B",
        "text": "Học thuyết về giá trị thặng dư."
      },
      {
        "label": "C",
        "text": "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Học thuyết về đấu tranh giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q3",
    "chapter": "Chương 3",
    "number": 3,
    "question": "Chủ nghĩa Mác - Lênin chỉ ra tính tất yếu thay thế hình thái kinh tế - xã hội tư bản chủ nghĩa bằng hình thái kinh tế - xã hội cộng sản chủ nghĩa là một quá trình:",
    "options": [
      {
        "label": "A",
        "text": "Lịch sử - tự nhiên."
      },
      {
        "label": "B",
        "text": "Lịch sử - ngẫu nhiên."
      },
      {
        "label": "C",
        "text": "Duy ý chí."
      },
      {
        "label": "D",
        "text": "Bắt buộc về chính trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q4",
    "chapter": "Chương 3",
    "number": 4,
    "question": "Sự thay thế CNTB bằng CNCS được thực hiện thông qua:",
    "options": [
      {
        "label": "A",
        "text": "Cách mạng xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Cải cách xã hội."
      },
      {
        "label": "C",
        "text": "Sự phát triển tự thân của chủ nghĩa tư bản."
      },
      {
        "label": "D",
        "text": "Đấu tranh nghị trường."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q5",
    "chapter": "Chương 3",
    "number": 5,
    "question": "Hai tiền đề vật chất quan trọng nhất cho sự ra đời của CNCS là:",
    "options": [
      {
        "label": "A",
        "text": "Sự phát triển của lực lượng sản xuất và sự trưởng thành của giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Sự khủng hoảng của chủ nghĩa tư bản."
      },
      {
        "label": "C",
        "text": "Sự mâu thuẫn giữa các nước đế quốc."
      },
      {
        "label": "D",
        "text": "Sự phát triển của khoa học kỹ thuật."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q7",
    "chapter": "Chương 3",
    "number": 7,
    "question": "Trong tác phẩm nào, C.Mác khẳng định: \"Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ cải biến cách mạng...\"?",
    "options": [
      {
        "label": "A",
        "text": "\"Phê phán cương lĩnh Gôta\" (1875)."
      },
      {
        "label": "B",
        "text": "\"Tuyên ngôn của Đảng Cộng sản\" (1848)."
      },
      {
        "label": "C",
        "text": "\"Tư bản\" (1867)."
      },
      {
        "label": "D",
        "text": "\"Hệ tư tưởng Đức\" (1845)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q8",
    "chapter": "Chương 3",
    "number": 8,
    "question": "Thích ứng với thời kỳ cải biến cách mạng từ CNTB lên CNCS là một thời kỳ quá độ chính trị, và nhà nước của thời kỳ ấy là:",
    "options": [
      {
        "label": "A",
        "text": "Nền chuyên chính cách mạng của giai cấp vô sản."
      },
      {
        "label": "B",
        "text": "Nhà nước pháp quyền tư sản."
      },
      {
        "label": "C",
        "text": "Nhà nước dân chủ chủ nô."
      },
      {
        "label": "D",
        "text": "Nhà nước phong kiến."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q9",
    "chapter": "Chương 3",
    "number": 9,
    "question": "V.I. Lênin cho rằng, đối với những nước chưa có CNTB phát triển cao, \"cần phải có...\"",
    "options": [
      {
        "label": "A",
        "text": "Thời kỳ quá độ khá lâu dài từ chủ nghĩa tư bản lên chủ nghĩa xã hội."
      },
      {
        "label": "B",
        "text": "Quá độ trực tiếp lên chủ nghĩa cộng sản."
      },
      {
        "label": "C",
        "text": "Một cuộc cách mạng tư sản."
      },
      {
        "label": "D",
        "text": "Sự giúp đỡ của các nước tư bản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q10",
    "chapter": "Chương 3",
    "number": 10,
    "question": "Hai điều kiện chủ yếu cho sự ra đời của chủ nghĩa xã hội là gì?",
    "options": [
      {
        "label": "A",
        "text": "Điều kiện kinh tế và điều kiện chính trị - xã hội."
      },
      {
        "label": "B",
        "text": "Điều kiện văn hóa và điều kiện xã hội."
      },
      {
        "label": "C",
        "text": "Điều kiện tự nhiên và điều kiện dân cư."
      },
      {
        "label": "D",
        "text": "Điều kiện quốc tế và điều kiện dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q11",
    "chapter": "Chương 3",
    "number": 11,
    "question": "Điều kiện kinh tế cho sự ra đời của CNXH là:",
    "options": [
      {
        "label": "A",
        "text": "Mâu thuẫn giữa LLSX xã hội hóa cao với QHSX dựa trên chiếm hữu tư nhân TBCN."
      },
      {
        "label": "B",
        "text": "Sự phát triển của sản xuất thủ công."
      },
      {
        "label": "C",
        "text": "Sự ra đời của các công trường thủ công."
      },
      {
        "label": "D",
        "text": "Sự ra đời của nền kinh tế tự cung tự cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q12",
    "chapter": "Chương 3",
    "number": 12,
    "question": "Điều kiện chính trị - xã hội cho sự ra đời của CNXH là:",
    "options": [
      {
        "label": "A",
        "text": "Mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản, sự trưởng thành của GC công nhân và Đảng Cộng sản."
      },
      {
        "label": "B",
        "text": "Mâu thuẫn giữa nông dân và địa chủ."
      },
      {
        "label": "C",
        "text": "Mâu thuẫn giữa tư sản và phong kiến."
      },
      {
        "label": "D",
        "text": "Sự ra đời của nhà nước tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q13",
    "chapter": "Chương 3",
    "number": 13,
    "question": "Luận điểm \"giai cấp tư sản không chỉ tạo vũ khí sẽ giết mình mà còn tạo ra những người sử dụng vũ khí đó, những công nhân hiện đại...\" là của ai?",
    "options": [
      {
        "label": "A",
        "text": "C.Mác và Ph.Ăngghen."
      },
      {
        "label": "B",
        "text": "V.I.Lênin."
      },
      {
        "label": "C",
        "text": "J.Xtalin."
      },
      {
        "label": "D",
        "text": "Hồ Chí Minh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q14",
    "chapter": "Chương 3",
    "number": 14,
    "question": "Sự ra đời của hình thái kinh tế - xã hội cộng sản chủ nghĩa:",
    "options": [
      {
        "label": "A",
        "text": "Không tự nhiên ra đời, mà phải thông qua cách mạng vô sản."
      },
      {
        "label": "B",
        "text": "Tự nhiên ra đời khi CNTB phát triển đến đỉnh cao."
      },
      {
        "label": "C",
        "text": "Ra đời bằng con đường cải cách, thỏa hiệp."
      },
      {
        "label": "D",
        "text": "Ra đời bằng con đường duy nhất là hòa bình."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q15",
    "chapter": "Chương 3",
    "number": 15,
    "question": "Đặc trưng cơ bản đầu tiên của chủ nghĩa xã hội là:",
    "options": [
      {
        "label": "A",
        "text": "Giải phóng giai cấp, giải phóng dân tộc, giải phóng xã hội, giải phóng con người."
      },
      {
        "label": "B",
        "text": "Có nền kinh tế phát triển cao."
      },
      {
        "label": "C",
        "text": "Do nhân dân lao động làm chủ."
      },
      {
        "label": "D",
        "text": "Có nhà nước kiểu mới."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q16",
    "chapter": "Chương 3",
    "number": 16,
    "question": "Mục tiêu cao nhất, cuối cùng của những cải tạo xã hội chủ nghĩa theo V.I.Lênin là thực hiện nguyên tắc:",
    "options": [
      {
        "label": "A",
        "text": "Làm theo năng lực, hưởng theo nhu cầu."
      },
      {
        "label": "B",
        "text": "Làm theo năng lực, hưởng theo lao động."
      },
      {
        "label": "C",
        "text": "Phân phối bình quân."
      },
      {
        "label": "D",
        "text": "Hưởng thụ theo địa vị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q17",
    "chapter": "Chương 3",
    "number": 17,
    "question": "Đặc trưng \"Chủ nghĩa xã hội là chế độ xã hội do nhân dân lao động làm chủ\" thể hiện thuộc tính:",
    "options": [
      {
        "label": "A",
        "text": "Bản chất của chủ nghĩa xã hội, xã hội vì con người và do con người."
      },
      {
        "label": "B",
        "text": "Bản chất kinh tế."
      },
      {
        "label": "C",
        "text": "Bản chất văn hóa."
      },
      {
        "label": "D",
        "text": "Bản chất nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q18",
    "chapter": "Chương 3",
    "number": 18,
    "question": "Luận điểm \"... bước thứ nhất trong cách mạng công nhân là giai cấp vô sản biến thành giai cấp thống trị là giành lấy dân chủ\" là của ai?",
    "options": [
      {
        "label": "A",
        "text": "C.Mác và Ph.Ăngghen."
      },
      {
        "label": "B",
        "text": "V.I.Lênin."
      },
      {
        "label": "C",
        "text": "Hồ Chí Minh."
      },
      {
        "label": "D",
        "text": "J.Xtalin."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q19",
    "chapter": "Chương 3",
    "number": 19,
    "question": "V.I. Lênin khẳng định: \"Chế độ dân chủ vô sản so với bất kỳ chế độ dân chủ tư sản nào cũng dân chủ hơn...\"",
    "options": [
      {
        "label": "A",
        "text": "Gấp triệu lần."
      },
      {
        "label": "B",
        "text": "Gấp trăm lần."
      },
      {
        "label": "C",
        "text": "Tương đương."
      },
      {
        "label": "D",
        "text": "Kém hơn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q20",
    "chapter": "Chương 3",
    "number": 20,
    "question": "Đặc trưng về phương diện kinh tế của chủ nghĩa xã hội là:",
    "options": [
      {
        "label": "A",
        "text": "Có nền kinh tế phát triển cao dựa trên LLSX hiện đại và chế độ công hữu về TLSX chủ yếu."
      },
      {
        "label": "B",
        "text": "Dựa trên chế độ tư hữu về tư liệu sản xuất."
      },
      {
        "label": "C",
        "text": "Dựa trên chế độ sở hữu hỗn hợp."
      },
      {
        "label": "D",
        "text": "Nền kinh tế kế hoạch hóa tập trung, bao cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q21",
    "chapter": "Chương 3",
    "number": 21,
    "question": "Nguyên tắc phân phối chủ yếu trong giai đoạn xã hội chủ nghĩa là gì?",
    "options": [
      {
        "label": "A",
        "text": "Phân phối theo lao động."
      },
      {
        "label": "B",
        "text": "Phân phối theo nhu cầu."
      },
      {
        "label": "C",
        "text": "Phân phối bình quân."
      },
      {
        "label": "D",
        "text": "Phân phối theo vốn góp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q22",
    "chapter": "Chương 3",
    "number": 22,
    "question": "Theo Ph.Ăngghen, trong giai đoạn đầu của CNCS (CNXH), có thể thủ tiêu ngay lập tức chế độ tư hữu không?",
    "options": [
      {
        "label": "A",
        "text": "Không, không thể được, mà phải cải tạo dần dần."
      },
      {
        "label": "B",
        "text": "Có, phải thủ tiêu ngay lập tức."
      },
      {
        "label": "C",
        "text": "Tùy thuộc vào điều kiện mỗi nước."
      },
      {
        "label": "D",
        "text": "Chỉ thủ tiêu sở hữu nhỏ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q23",
    "chapter": "Chương 3",
    "number": 23,
    "question": "V.I. Lênin cho rằng, để nâng cao năng suất lao động trong CNXH, cần phải:",
    "options": [
      {
        "label": "A",
        "text": "Thiết lập một chế độ xã hội cao hơn CNTB, tổ chức lao động theo trình độ cao hơn."
      },
      {
        "label": "B",
        "text": "Kéo dài ngày lao động."
      },
      {
        "label": "C",
        "text": "Tăng cường độ lao động."
      },
      {
        "label": "D",
        "text": "Giảm tiền lương công nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q24",
    "chapter": "Chương 3",
    "number": 24,
    "question": "Đối với những nước chưa trải qua CNTB đi lên CNXH, V.I. Lênin chỉ rõ tất yếu phải \"bắc những chiếc cầu nhỏ vững chắc\" xuyên qua:",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa tư bản nhà nước."
      },
      {
        "label": "B",
        "text": "Chủ nghĩa tư bản tự do cạnh tranh."
      },
      {
        "label": "C",
        "text": "Chủ nghĩa phong kiến."
      },
      {
        "label": "D",
        "text": "Nền kinh tế tự nhiên."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q25",
    "chapter": "Chương 3",
    "number": 25,
    "question": "Đặc trưng của CNXH về nhà nước là:",
    "options": [
      {
        "label": "A",
        "text": "Có nhà nước kiểu mới mang bản chất giai cấp công nhân, đại biểu cho lợi ích nhân dân."
      },
      {
        "label": "B",
        "text": "Có nhà nước pháp quyền tư sản."
      },
      {
        "label": "C",
        "text": "Nhà nước tự tiêu vong."
      },
      {
        "label": "D",
        "text": "Nhà nước đứng trên giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q26",
    "chapter": "Chương 3",
    "number": 26,
    "question": "Nhà nước vô sản, theo V.I.Lênin, thực hiện dân chủ cho:",
    "options": [
      {
        "label": "A",
        "text": "Tuyệt đại đa số nhân dân."
      },
      {
        "label": "B",
        "text": "Chỉ giai cấp vô sản."
      },
      {
        "label": "C",
        "text": "Giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Mọi giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q27",
    "chapter": "Chương 3",
    "number": 27,
    "question": "Đặc trưng của CNXH về văn hóa là:",
    "options": [
      {
        "label": "A",
        "text": "Có nền văn hóa phát triển cao, kế thừa giá trị dân tộc và tinh hoa nhân loại."
      },
      {
        "label": "B",
        "text": "Xóa bỏ hoàn toàn văn hóa cũ."
      },
      {
        "label": "C",
        "text": "Chỉ tiếp thu văn hóa phương Tây."
      },
      {
        "label": "D",
        "text": "Chỉ giữ gìn văn hóa dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q28",
    "chapter": "Chương 3",
    "number": 28,
    "question": "V.I. Lênin khẳng định, chỉ có thể xây dựng được nền văn hóa vô sản khi:",
    "options": [
      {
        "label": "A",
        "text": "Hiểu biết chính xác và cải tạo nền văn hóa được sáng tạo trong toàn bộ lịch sử nhân loại."
      },
      {
        "label": "B",
        "text": "Phá hủy toàn bộ di sản văn hóa quá khứ."
      },
      {
        "label": "C",
        "text": "Chỉ dựa trên văn hóa của giai cấp vô sản."
      },
      {
        "label": "D",
        "text": "Chỉ học tập văn hóa tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q29",
    "chapter": "Chương 3",
    "number": 29,
    "question": "Đặc trưng của CNXH về quan hệ dân tộc và quốc tế là:",
    "options": [
      {
        "label": "A",
        "text": "Bảo đảm bình đẳng, đoàn kết giữa các dân tộc và quan hệ hữu nghị, hợp tác quốc tế."
      },
      {
        "label": "B",
        "text": "Thực hiện chủ nghĩa dân tộc hẹp hòi."
      },
      {
        "label": "C",
        "text": "Phân biệt chủng tộc."
      },
      {
        "label": "D",
        "text": "Đóng cửa, không hợp tác quốc tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q30",
    "chapter": "Chương 3",
    "number": 30,
    "question": "Quan điểm của chủ nghĩa Mác - Lênin về giải quyết vấn đề dân tộc là:",
    "options": [
      {
        "label": "A",
        "text": "\"Xóa bỏ tình trạng người bóc lột người thì tình trạng dân tộc này bóc lột dân tộc khác cũng bị xóa bỏ\"."
      },
      {
        "label": "B",
        "text": "\"Ưu tiên phát triển dân tộc đa số\"."
      },
      {
        "label": "C",
        "text": "\"Đồng hóa các dân tộc thiểu số\"."
      },
      {
        "label": "D",
        "text": "\"Các dân tộc phải hoàn toàn tách biệt\"."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q31",
    "chapter": "Chương 3",
    "number": 31,
    "question": "Cương lĩnh dân tộc của V.I. Lênin bao gồm 3 nội dung cơ bản nào?",
    "options": [
      {
        "label": "A",
        "text": "Các dân tộc hoàn toàn bình đẳng; các dân tộc được quyền tự quyết; liên hiệp công nhân tất cả các dân tộc."
      },
      {
        "label": "B",
        "text": "Độc lập dân tộc; chủ quyền quốc gia; toàn vẹn lãnh thổ."
      },
      {
        "label": "C",
        "text": "Tự do; bình đẳng; bác ái."
      },
      {
        "label": "D",
        "text": "Dân tộc; tôn giáo; tín ngưỡng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q32",
    "chapter": "Chương 3",
    "number": 32,
    "question": "Khẩu hiệu \"Vô sản tất cả các nước và các dân tộc bị áp bức đoàn kết lại!\" là của ai?",
    "options": [
      {
        "label": "A",
        "text": "V.I.Lênin."
      },
      {
        "label": "B",
        "text": "C.Mác."
      },
      {
        "label": "C",
        "text": "Ph.Ăngghen."
      },
      {
        "label": "D",
        "text": "Hồ Chí Minh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q33",
    "chapter": "Chương 3",
    "number": 33,
    "question": "Tính tất yếu khách quan của thời kỳ quá độ lên chủ nghĩa xã hội là do:",
    "options": [
      {
        "label": "A",
        "text": "Sự khác biệt về chất giữa CNXH và CNTB, CNXH cần thời gian để xây dựng cơ sở vật chất - kỹ thuật."
      },
      {
        "label": "B",
        "text": "Mong muốn chủ quan của giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Quy định của pháp luật quốc tế."
      },
      {
        "label": "D",
        "text": "CNTB tự nguyện nhường chỗ cho CNXH."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q34",
    "chapter": "Chương 3",
    "number": 34,
    "question": "Luận điểm \"Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ cải biến cách mạng...\" là của ai?",
    "options": [
      {
        "label": "A",
        "text": "C.Mác."
      },
      {
        "label": "B",
        "text": "V.I.Lênin."
      },
      {
        "label": "C",
        "text": "Ph.Ăngghen."
      },
      {
        "label": "D",
        "text": "J.Xtalin."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q35",
    "chapter": "Chương 3",
    "number": 35,
    "question": "Có mấy loại hình quá độ từ CNTB lên CNCS?",
    "options": [
      {
        "label": "A",
        "text": "Hai loại: quá độ trực tiếp và quá độ gián tiếp."
      },
      {
        "label": "B",
        "text": "Một loại: quá độ trực tiếp."
      },
      {
        "label": "C",
        "text": "Một loại: quá độ gián tiếp."
      },
      {
        "label": "D",
        "text": "Ba loại: trực tiếp, gián tiếp, hỗn hợp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q36",
    "chapter": "Chương 3",
    "number": 36,
    "question": "Quá độ trực tiếp lên CNCS là hình thức quá độ dành cho:",
    "options": [
      {
        "label": "A",
        "text": "Những nước đã trải qua chủ nghĩa tư bản phát triển."
      },
      {
        "label": "B",
        "text": "Những nước chưa trải qua chủ nghĩa tư bản phát triển."
      },
      {
        "label": "C",
        "text": "Những nước thuộc địa, nửa phong kiến."
      },
      {
        "label": "D",
        "text": "Tất cả các nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q37",
    "chapter": "Chương 3",
    "number": 37,
    "question": "Quá độ gián tiếp lên CNCS là hình thức quá độ dành cho:",
    "options": [
      {
        "label": "A",
        "text": "Những nước chưa trải qua chủ nghĩa tư bản phát triển."
      },
      {
        "label": "B",
        "text": "Những nước đã trải qua chủ nghĩa tư bản phát triển."
      },
      {
        "label": "C",
        "text": "Chỉ các nước Tây Âu."
      },
      {
        "label": "D",
        "text": "Chỉ các nước Bắc Mỹ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q38",
    "chapter": "Chương 3",
    "number": 38,
    "question": "Việt Nam, Trung Quốc, Liên Xô (trước đây) đi lên CNXH theo hình thức nào?",
    "options": [
      {
        "label": "A",
        "text": "Quá độ gián tiếp."
      },
      {
        "label": "B",
        "text": "Quá độ trực tiếp."
      },
      {
        "label": "C",
        "text": "Không qua quá độ."
      },
      {
        "label": "D",
        "text": "Quá độ rút ngắn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q39",
    "chapter": "Chương 3",
    "number": 39,
    "question": "Quan điểm \"các nước lạc hậu có thể rút ngắn được quá trình phát triển\" lên CNXH là của ai?",
    "options": [
      {
        "label": "A",
        "text": "C.Mác và Ph.Ăngghen."
      },
      {
        "label": "B",
        "text": "V.I.Lênin."
      },
      {
        "label": "C",
        "text": "Cả C.Mác, Ph.Ăngghen và V.I.Lênin."
      },
      {
        "label": "D",
        "text": "Chỉ V.I.Lênin."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": "Chương 3_Q40",
    "chapter": "Chương 3",
    "number": 40,
    "question": "V.I. Lênin khẳng định, các nước lạc hậu có thể tiến lên CNCS không qua giai đoạn TBCN với điều kiện:",
    "options": [
      {
        "label": "A",
        "text": "Với sự giúp đỡ của giai cấp vô sản các nước tiên tiến."
      },
      {
        "label": "B",
        "text": "Tự lực hoàn toàn."
      },
      {
        "label": "C",
        "text": "Với sự giúp đỡ của các nước tư bản."
      },
      {
        "label": "D",
        "text": "Không cần điều kiện gì."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q41",
    "chapter": "Chương 3",
    "number": 41,
    "question": "Thực chất của thời kỳ quá độ lên chủ nghĩa xã hội là:",
    "options": [
      {
        "label": "A",
        "text": "Thời kỳ cải biến cách mạng từ xã hội tiền TBCN và TBCN sang xã hội XHCN."
      },
      {
        "label": "B",
        "text": "Thời kỳ ổn định, không có đấu tranh."
      },
      {
        "label": "C",
        "text": "Thời kỳ xây dựng hoàn chỉnh chủ nghĩa cộng sản."
      },
      {
        "label": "D",
        "text": "Thời kỳ phát triển của chủ nghĩa tư bản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q42",
    "chapter": "Chương 3",
    "number": 42,
    "question": "Đặc điểm cơ bản nhất của thời kỳ quá độ lên CNXH là gì?",
    "options": [
      {
        "label": "A",
        "text": "Là thời kỳ cải tạo cách mạng sâu sắc, triệt để xã hội TBCN trên tất cả các lĩnh vực."
      },
      {
        "label": "B",
        "text": "Là thời kỳ ngắn ngủi, diễn ra nhanh chóng."
      },
      {
        "label": "C",
        "text": "Chỉ cải tạo về kinh tế."
      },
      {
        "label": "D",
        "text": "Chỉ cải tạo về chính trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q43",
    "chapter": "Chương 3",
    "number": 43,
    "question": "Đặc điểm nổi bật trên lĩnh vực kinh tế của thời kỳ quá độ là gì?",
    "options": [
      {
        "label": "A",
        "text": "Tồn tại nền kinh tế nhiều thành phần, trong đó có thành phần đối lập."
      },
      {
        "label": "B",
        "text": "Chỉ tồn tại thành phần kinh tế XHCN."
      },
      {
        "label": "C",
        "text": "Chỉ tồn tại thành phần kinh tế tư bản."
      },
      {
        "label": "D",
        "text": "Nền kinh tế thuần nhất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q44",
    "chapter": "Chương 3",
    "number": 44,
    "question": "V.I. Lênin chỉ ra mấy thành phần kinh tế tồn tại trong thời kỳ quá độ ở Nga?",
    "options": [
      {
        "label": "A",
        "text": "5 thành phần."
      },
      {
        "label": "B",
        "text": "3 thành phần."
      },
      {
        "label": "C",
        "text": "2 thành phần."
      },
      {
        "label": "D",
        "text": "4 thành phần."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q45",
    "chapter": "Chương 3",
    "number": 45,
    "question": "5 thành phần kinh tế ở Nga trong thời kỳ quá độ theo Lênin là:",
    "options": [
      {
        "label": "A",
        "text": "Kinh tế gia trưởng, kinh tế hàng hóa nhỏ, kinh tế tư bản, kinh tế tư bản nhà nước, kinh tế XHCN."
      },
      {
        "label": "B",
        "text": "Kinh tế nhà nước, kinh tế tập thể, kinh tế tư nhân, kinh tế tư bản nhà nước, kinh tế FDI."
      },
      {
        "label": "C",
        "text": "Kinh tế nông nghiệp, kinh tế công nghiệp, kinh tế dịch vụ."
      },
      {
        "label": "D",
        "text": "Kinh tế trung ương, kinh tế địa phương, kinh tế tư nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q46",
    "chapter": "Chương 3",
    "number": 46,
    "question": "Đặc điểm trên lĩnh vực chính trị của thời kỳ quá độ là:",
    "options": [
      {
        "label": "A",
        "text": "Thiết lập, tăng cường chuyên chính vô sản, tiếp tục đấu tranh giai cấp."
      },
      {
        "label": "B",
        "text": "Xóa bỏ nhà nước, xóa bỏ đấu tranh giai cấp."
      },
      {
        "label": "C",
        "text": "Thiết lập nhà nước tư sản."
      },
      {
        "label": "D",
        "text": "Giai cấp tư sản và vô sản cùng nhau cầm quyền."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q47",
    "chapter": "Chương 3",
    "number": 47,
    "question": "Cuộc đấu tranh giai cấp trong thời kỳ quá độ diễn ra trong điều kiện mới là:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân đã trở thành giai cấp cầm quyền."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân vẫn là giai cấp bị trị."
      },
      {
        "label": "C",
        "text": "Giai cấp tư sản đã bị tiêu diệt hoàn toàn."
      },
      {
        "label": "D",
        "text": "Không còn đấu tranh giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q48",
    "chapter": "Chương 3",
    "number": 48,
    "question": "Hình thức đấu tranh giai cấp trong thời kỳ quá độ là:",
    "options": [
      {
        "label": "A",
        "text": "Cơ bản là hòa bình tổ chức xây dựng."
      },
      {
        "label": "B",
        "text": "Chỉ là bạo lực vũ trang."
      },
      {
        "label": "C",
        "text": "Chỉ là đấu tranh kinh tế."
      },
      {
        "label": "D",
        "text": "Không có đấu tranh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q49",
    "chapter": "Chương 3",
    "number": 49,
    "question": "Đặc điểm trên lĩnh vực tư tưởng - văn hóa của thời kỳ quá độ là:",
    "options": [
      {
        "label": "A",
        "text": "Còn tồn tại nhiều tư tưởng khác nhau, chủ yếu là tư tưởng vô sản và tư sản."
      },
      {
        "label": "B",
        "text": "Chỉ tồn tại tư tưởng vô sản."
      },
      {
        "label": "C",
        "text": "Chỉ tồn tại tư tưởng tư sản."
      },
      {
        "label": "D",
        "text": "Không tồn tại hệ tư tưởng nào."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q50",
    "chapter": "Chương 3",
    "number": 50,
    "question": "Đặc điểm trên lĩnh vực xã hội của thời kỳ quá độ là:",
    "options": [
      {
        "label": "A",
        "text": "Còn tồn tại nhiều giai cấp, tầng lớp, vừa hợp tác vừa đấu tranh, còn nhiều khác biệt."
      },
      {
        "label": "B",
        "text": "Xã hội không còn giai cấp."
      },
      {
        "label": "C",
        "text": "Các giai cấp, tầng lớp hoàn toàn thống nhất, không mâu thuẫn."
      },
      {
        "label": "D",
        "text": "Chỉ còn giai cấp công nhân và nông dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q51",
    "chapter": "Chương 3",
    "number": 51,
    "question": "Nguyên tắc phân phối chủ đạo trong thời kỳ quá độ là gì?",
    "options": [
      {
        "label": "A",
        "text": "Phân phối theo lao động."
      },
      {
        "label": "B",
        "text": "Phân phối theo nhu cầu."
      },
      {
        "label": "C",
        "text": "Phân phối bình quân."
      },
      {
        "label": "D",
        "text": "Phân phối theo vốn và tài sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q52",
    "chapter": "Chương 3",
    "number": 52,
    "question": "Đặc điểm quá độ lên CNXH ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Bỏ qua chế độ tư bản chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Trải qua chế độ tư bản chủ nghĩa phát triển."
      },
      {
        "label": "C",
        "text": "Quá độ trực tiếp."
      },
      {
        "label": "D",
        "text": "Không cần thời kỳ quá độ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q53",
    "chapter": "Chương 3",
    "number": 53,
    "question": "Xuất phát điểm của Việt Nam khi bước vào thời kỳ quá độ là:",
    "options": [
      {
        "label": "A",
        "text": "Một xã hội thuộc địa, nửa phong kiến, lực lượng sản xuất rất thấp, trải qua chiến tranh."
      },
      {
        "label": "B",
        "text": "Một nước tư bản chủ nghĩa phát triển cao."
      },
      {
        "label": "C",
        "text": "Một nước công nghiệp hiện đại."
      },
      {
        "label": "D",
        "text": "Một nước phong kiến độc lập."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q54",
    "chapter": "Chương 3",
    "number": 54,
    "question": "Thời đại ngày nay vẫn được xác định là:",
    "options": [
      {
        "label": "A",
        "text": "Thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội trên phạm vi toàn thế giới."
      },
      {
        "label": "B",
        "text": "Thời đại của chủ nghĩa tư bản."
      },
      {
        "label": "C",
        "text": "Thời đại của chủ nghĩa đế quốc."
      },
      {
        "label": "D",
        "text": "Thời đại của cách mạng khoa học công nghệ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q55",
    "chapter": "Chương 3",
    "number": 55,
    "question": "Cương lĩnh năm 1930 của Đảng Cộng sản Việt Nam đã chỉ rõ:",
    "options": [
      {
        "label": "A",
        "text": "Sau khi hoàn thành cách mạng dân tộc, dân chủ nhân dân, sẽ tiến lên chủ nghĩa xã hội."
      },
      {
        "label": "B",
        "text": "Tiến hành ngay cách mạng xã hội chủ nghĩa."
      },
      {
        "label": "C",
        "text": "Chỉ làm cách mạng dân tộc, dân chủ nhân dân."
      },
      {
        "label": "D",
        "text": "Xây dựng chế độ tư bản chủ nghĩa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q56",
    "chapter": "Chương 3",
    "number": 56,
    "question": "\"Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa\" được Đảng ta xác định tại Đại hội nào?",
    "options": [
      {
        "label": "A",
        "text": "Đại hội IX."
      },
      {
        "label": "B",
        "text": "Đại hội VI."
      },
      {
        "label": "C",
        "text": "Đại hội VII."
      },
      {
        "label": "D",
        "text": "Đại hội XI."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q57",
    "chapter": "Chương 3",
    "number": 57,
    "question": "\"Bỏ qua chế độ tư bản chủ nghĩa\" ở Việt Nam được hiểu là:",
    "options": [
      {
        "label": "A",
        "text": "Bỏ qua việc xác lập vị trí thống trị của QHSX và kiến trúc thượng tầng TBCN."
      },
      {
        "label": "B",
        "text": "Bỏ qua hoàn toàn sự phát triển của chủ nghĩa tư bản."
      },
      {
        "label": "C",
        "text": "Bỏ qua cả lực lượng sản xuất và quan hệ sản xuất TBCN."
      },
      {
        "label": "D",
        "text": "Bỏ qua các thành tựu khoa học, công nghệ của TBCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q58",
    "chapter": "Chương 3",
    "number": 58,
    "question": "\"Bỏ qua chế độ TBCN\" nhưng phải tiếp thu, kế thừa:",
    "options": [
      {
        "label": "A",
        "text": "Những thành tựu mà nhân loại đã đạt được dưới chế độ TBCN, đặc biệt về khoa học và công nghệ."
      },
      {
        "label": "B",
        "text": "Sự áp bức, bóc lột của chủ nghĩa tư bản."
      },
      {
        "label": "C",
        "text": "Kiến trúc thượng tầng tư bản chủ nghĩa."
      },
      {
        "label": "D",
        "text": "Quan hệ sản xuất tư bản chủ nghĩa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q59",
    "chapter": "Chương 3",
    "number": 59,
    "question": "Quá độ lên CNXH bỏ qua chế độ TBCN ở Việt Nam là một sự nghiệp:",
    "options": [
      {
        "label": "A",
        "text": "Rất khó khăn, phức tạp, lâu dài."
      },
      {
        "label": "B",
        "text": "Dễ dàng, nhanh chóng."
      },
      {
        "label": "C",
        "text": "Chỉ cần vài năm là hoàn thành."
      },
      {
        "label": "D",
        "text": "Không thể thực hiện được."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q60",
    "chapter": "Chương 3",
    "number": 60,
    "question": "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (1991) đã xác định mô hình CNXH ở nước ta với mấy đặc trưng?",
    "options": [
      {
        "label": "A",
        "text": "6 đặc trưng."
      },
      {
        "label": "B",
        "text": "5 đặc trưng."
      },
      {
        "label": "C",
        "text": "7 đặc trưng."
      },
      {
        "label": "D",
        "text": "8 đặc trưng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q61",
    "chapter": "Chương 3",
    "number": 61,
    "question": "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (bổ sung, phát triển năm 2011) đã xác định mô hình CNXH ở nước ta với mấy đặc trưng?",
    "options": [
      {
        "label": "A",
        "text": "8 đặc trưng."
      },
      {
        "label": "B",
        "text": "6 đặc trưng."
      },
      {
        "label": "C",
        "text": "7 đặc trưng."
      },
      {
        "label": "D",
        "text": "9 đặc trưng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q62",
    "chapter": "Chương 3",
    "number": 62,
    "question": "Đặc trưng nào sau đây là đặc trưng mục tiêu tổng quát của CNXH ở Việt Nam theo Cương lĩnh 2011?",
    "options": [
      {
        "label": "A",
        "text": "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
      },
      {
        "label": "B",
        "text": "Do nhân dân làm chủ."
      },
      {
        "label": "C",
        "text": "Có nền kinh tế phát triển cao."
      },
      {
        "label": "D",
        "text": "Có nhà nước pháp quyền XHCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q63",
    "chapter": "Chương 3",
    "number": 63,
    "question": "Đặc trưng về chủ thể của CNXH ở Việt Nam theo Cương lĩnh 2011 là:",
    "options": [
      {
        "label": "A",
        "text": "Do nhân dân làm chủ."
      },
      {
        "label": "B",
        "text": "Do giai cấp công nhân làm chủ."
      },
      {
        "label": "C",
        "text": "Do Đảng Cộng sản làm chủ."
      },
      {
        "label": "D",
        "text": "Do nhà nước làm chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q64",
    "chapter": "Chương 3",
    "number": 64,
    "question": "Đặc trưng về kinh tế của CNXH ở Việt Nam (Cương lĩnh 2011) là:",
    "options": [
      {
        "label": "A",
        "text": "Có nền kinh tế phát triển cao dựa trên LLSX hiện đại và QHSX tiến bộ phù hợp."
      },
      {
        "label": "B",
        "text": "Có nền kinh tế kế hoạch hóa tập trung."
      },
      {
        "label": "C",
        "text": "Có nền kinh tế thị trường tư bản chủ nghĩa."
      },
      {
        "label": "D",
        "text": "Có nền kinh tế tự cung tự cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q65",
    "chapter": "Chương 3",
    "number": 65,
    "question": "Đặc trưng về văn hóa của CNXH ở Việt Nam (Cương lĩnh 2011) là:",
    "options": [
      {
        "label": "A",
        "text": "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc."
      },
      {
        "label": "B",
        "text": "Có nền văn hóa hoàn toàn du nhập từ phương Tây."
      },
      {
        "label": "C",
        "text": "Xóa bỏ văn hóa dân tộc."
      },
      {
        "label": "D",
        "text": "Chỉ phát triển văn hóa truyền thống."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q66",
    "chapter": "Chương 3",
    "number": 66,
    "question": "Đặc trưng về con người của CNXH ở Việt Nam (Cương lĩnh 2011) là:",
    "options": [
      {
        "label": "A",
        "text": "Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện."
      },
      {
        "label": "B",
        "text": "Con người chỉ được ấm no về vật chất."
      },
      {
        "label": "C",
        "text": "Con người chỉ được tự do về tinh thần."
      },
      {
        "label": "D",
        "text": "Con người phát triển một cách phiến diện."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q67",
    "chapter": "Chương 3",
    "number": 67,
    "question": "Đặc trưng về dân tộc của CNXH ở Việt Nam (Cương lĩnh 2011) là:",
    "options": [
      {
        "label": "A",
        "text": "Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển."
      },
      {
        "label": "B",
        "text": "Ưu tiên dân tộc đa số."
      },
      {
        "label": "C",
        "text": "Đồng hóa các dân tộc thiểu số."
      },
      {
        "label": "D",
        "text": "Các dân tộc phát triển tách biệt."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q68",
    "chapter": "Chương 3",
    "number": 68,
    "question": "Đặc trưng về nhà nước của CNXH ở Việt Nam (Cương lĩnh 2011) là:",
    "options": [
      {
        "label": "A",
        "text": "Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo."
      },
      {
        "label": "B",
        "text": "Có nhà nước pháp quyền tư sản."
      },
      {
        "label": "C",
        "text": "Có nhà nước quân chủ chuyên chế."
      },
      {
        "label": "D",
        "text": "Nhà nước không do Đảng lãnh đạo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q69",
    "chapter": "Chương 3",
    "number": 69,
    "question": "Đặc trưng về quan hệ quốc tế của CNXH ở Việt Nam (Cương lĩnh 2011) là:",
    "options": [
      {
        "label": "A",
        "text": "Có quan hệ hữu nghị và hợp tác với các nước trên thế giới."
      },
      {
        "label": "B",
        "text": "Đóng cửa, không quan hệ với các nước."
      },
      {
        "label": "C",
        "text": "Chỉ quan hệ với các nước XHCN."
      },
      {
        "label": "D",
        "text": "Chỉ quan hệ với các nước tư bản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q70",
    "chapter": "Chương 3",
    "number": 70,
    "question": "Cương lĩnh (bổ sung, phát triển 2011) đã xác định mấy phương hướng cơ bản xây dựng CNXH ở Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "8 phương hướng."
      },
      {
        "label": "B",
        "text": "6 phương hướng."
      },
      {
        "label": "C",
        "text": "7 phương hướng."
      },
      {
        "label": "D",
        "text": "9 phương hướng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q71",
    "chapter": "Chương 3",
    "number": 71,
    "question": "Phương hướng đầu tiên trong 8 phương hướng (Cương lĩnh 2011) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên, môi trường."
      },
      {
        "label": "B",
        "text": "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa."
      },
      {
        "label": "C",
        "text": "Xây dựng nền văn hoá tiên tiến, đậm đà bản sắc dân tộc."
      },
      {
        "label": "D",
        "text": "Bảo đảm vững chắc quốc phòng và an ninh quốc gia."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q72",
    "chapter": "Chương 3",
    "number": 72,
    "question": "Phương hướng thứ hai trong 8 phương hướng (Cương lĩnh 2011) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Đẩy mạnh công nghiệp hoá, hiện đại hoá."
      },
      {
        "label": "C",
        "text": "Xây dựng nền văn hoá tiên tiến."
      },
      {
        "label": "D",
        "text": "Thực hiện đường lối đối ngoại độc lập, tự chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q73",
    "chapter": "Chương 3",
    "number": 73,
    "question": "Phương hướng thứ ba trong 8 phương hướng (Cương lĩnh 2011) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng nền văn hoá tiên tiến, đậm đà bản sắc dân tộc; xây dựng con người."
      },
      {
        "label": "B",
        "text": "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa."
      },
      {
        "label": "C",
        "text": "Đẩy mạnh công nghiệp hoá, hiện đại hoá."
      },
      {
        "label": "D",
        "text": "Xây dựng nền dân chủ xã hội chủ nghĩa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q74",
    "chapter": "Chương 3",
    "number": 74,
    "question": "Phương hướng thứ tư trong 8 phương hướng (Cương lĩnh 2011) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Bảo đảm vững chắc quốc phòng và an ninh quốc gia, trật tự, an toàn xã hội."
      },
      {
        "label": "B",
        "text": "Xây dựng nền văn hoá tiên tiến."
      },
      {
        "label": "C",
        "text": "Thực hiện đường lối đối ngoại độc lập, tự chủ."
      },
      {
        "label": "D",
        "text": "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q75",
    "chapter": "Chương 3",
    "number": 75,
    "question": "Phương hướng thứ năm trong 8 phương hướng (Cương lĩnh 2011) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Thực hiện đường lối đối ngoại độc lập, tự chủ, hoà bình, hữu nghị, hợp tác và phát triển."
      },
      {
        "label": "B",
        "text": "Bảo đảm vững chắc quốc phòng và an ninh quốc gia."
      },
      {
        "label": "C",
        "text": "Xây dựng nền dân chủ xã hội chủ nghĩa."
      },
      {
        "label": "D",
        "text": "Xây dựng Đảng trong sạch, vững mạnh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q76",
    "chapter": "Chương 3",
    "number": 76,
    "question": "Phương hướng thứ sáu trong 8 phương hướng (Cương lĩnh 2011) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng nền dân chủ xã hội chủ nghĩa, thực hiện đại đoàn kết toàn dân tộc."
      },
      {
        "label": "B",
        "text": "Thực hiện đường lối đối ngoại độc lập, tự chủ."
      },
      {
        "label": "C",
        "text": "Bảo đảm vững chắc quốc phòng và an ninh quốc gia."
      },
      {
        "label": "D",
        "text": "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q77",
    "chapter": "Chương 3",
    "number": 77,
    "question": "Phương hướng thứ bảy trong 8 phương hướng (Cương lĩnh 2011) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân."
      },
      {
        "label": "B",
        "text": "Xây dựng nền dân chủ xã hội chủ nghĩa."
      },
      {
        "label": "C",
        "text": "Thực hiện đường lối đối ngoại độc lập, tự chủ."
      },
      {
        "label": "D",
        "text": "Xây dựng Đảng trong sạch, vững mạnh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q78",
    "chapter": "Chương 3",
    "number": 78,
    "question": "Phương hướng thứ tám trong 8 phương hướng (Cương lĩnh 2011) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng Đảng trong sạch, vững mạnh."
      },
      {
        "label": "B",
        "text": "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa."
      },
      {
        "label": "C",
        "text": "Xây dựng nền dân chủ xã hội chủ nghĩa."
      },
      {
        "label": "D",
        "text": "Thực hiện đường lối đối ngoại độc lập, tự chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q79",
    "chapter": "Chương 3",
    "number": 79,
    "question": "Cương lĩnh (bổ sung, phát triển 2011) yêu cầu phải đặc biệt chú trọng nắm vững và giải quyết tốt mấy mối quan hệ lớn?",
    "options": [
      {
        "label": "A",
        "text": "8 mối quan hệ lớn."
      },
      {
        "label": "B",
        "text": "6 mối quan hệ lớn."
      },
      {
        "label": "C",
        "text": "7 mối quan hệ lớn."
      },
      {
        "label": "D",
        "text": "9 mối quan hệ lớn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q80",
    "chapter": "Chương 3",
    "number": 80,
    "question": "Đâu là mối quan hệ lớn đầu tiên được Cương lĩnh (2011) nêu ra?",
    "options": [
      {
        "label": "A",
        "text": "Quan hệ giữa đổi mới, ổn định và phát triển."
      },
      {
        "label": "B",
        "text": "Quan hệ giữa đổi mới kinh tế và đổi mới chính trị."
      },
      {
        "label": "C",
        "text": "Quan hệ giữa kinh tế thị trường và định hướng xã hội chủ nghĩa."
      },
      {
        "label": "D",
        "text": "Quan hệ giữa Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q81",
    "chapter": "Chương 3",
    "number": 81,
    "question": "Đâu là mối quan hệ lớn thứ hai được Cương lĩnh (2011) nêu ra?",
    "options": [
      {
        "label": "A",
        "text": "Quan hệ giữa đổi mới kinh tế và đổi mới chính trị."
      },
      {
        "label": "B",
        "text": "Quan hệ giữa đổi mới, ổn định và phát triển."
      },
      {
        "label": "C",
        "text": "Quan hệ giữa kinh tế thị trường và định hướng xã hội chủ nghĩa."
      },
      {
        "label": "D",
        "text": "Quan hệ giữa phát triển lực lượng sản xuất và xây dựng quan hệ sản xuất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q82",
    "chapter": "Chương 3",
    "number": 82,
    "question": "Đâu là mối quan hệ lớn thứ ba được Cương lĩnh (2011) nêu ra?",
    "options": [
      {
        "label": "A",
        "text": "Quan hệ giữa kinh tế thị trường và định hướng xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Quan hệ giữa đổi mới kinh tế và đổi mới chính trị."
      },
      {
        "label": "C",
        "text": "Quan hệ giữa đổi mới, ổn định và phát triển."
      },
      {
        "label": "D",
        "text": "Quan hệ giữa tăng trưởng kinh tế và phát triển văn hoá."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q83",
    "chapter": "Chương 3",
    "number": 83,
    "question": "Đâu là mối quan hệ lớn thứ tư được Cương lĩnh (2011) nêu ra?",
    "options": [
      {
        "label": "A",
        "text": "Quan hệ giữa phát triển lực lượng sản xuất và xây dựng, hoàn thiện từng bước quan hệ sản xuất XHCN."
      },
      {
        "label": "B",
        "text": "Quan hệ giữa kinh tế thị trường và định hướng xã hội chủ nghĩa."
      },
      {
        "label": "C",
        "text": "Quan hệ giữa tăng trưởng kinh tế và phát triển văn hoá."
      },
      {
        "label": "D",
        "text": "Quan hệ giữa xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q84",
    "chapter": "Chương 3",
    "number": 84,
    "question": "Đâu là mối quan hệ lớn thứ năm được Cương lĩnh (2011) nêu ra?",
    "options": [
      {
        "label": "A",
        "text": "Quan hệ giữa tăng trưởng kinh tế và phát triển văn hoá, thực hiện tiến bộ và công bằng xã hội."
      },
      {
        "label": "B",
        "text": "Quan hệ giữa phát triển lực lượng sản xuất và xây dựng quan hệ sản xuất."
      },
      {
        "label": "C",
        "text": "Quan hệ giữa kinh tế thị trường và định hướng xã hội chủ nghĩa."
      },
      {
        "label": "D",
        "text": "Quan hệ giữa độc lập, tự chủ và hội nhập quốc tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q85",
    "chapter": "Chương 3",
    "number": 85,
    "question": "Đâu là mối quan hệ lớn thứ sáu được Cương lĩnh (2011) nêu ra?",
    "options": [
      {
        "label": "A",
        "text": "Quan hệ giữa xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Quan hệ giữa tăng trưởng kinh tế và phát triển văn hoá."
      },
      {
        "label": "C",
        "text": "Quan hệ giữa phát triển lực lượng sản xuất và xây dựng quan hệ sản xuất."
      },
      {
        "label": "D",
        "text": "Quan hệ giữa Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q86",
    "chapter": "Chương 3",
    "number": 86,
    "question": "Đâu là mối quan hệ lớn thứ bảy được Cương lĩnh (2011) nêu ra?",
    "options": [
      {
        "label": "A",
        "text": "Quan hệ giữa độc lập, tự chủ và hội nhập quốc tế."
      },
      {
        "label": "B",
        "text": "Quan hệ giữa xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc."
      },
      {
        "label": "C",
        "text": "Quan hệ giữa tăng trưởng kinh tế và phát triển văn hoá."
      },
      {
        "label": "D",
        "text": "Quan hệ giữa đổi mới, ổn định và phát triển."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q87",
    "chapter": "Chương 3",
    "number": 87,
    "question": "Đâu là mối quan hệ lớn thứ tám được Cương lĩnh (2011) nêu ra?",
    "options": [
      {
        "label": "A",
        "text": "Quan hệ giữa Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ."
      },
      {
        "label": "B",
        "text": "Quan hệ giữa độc lập, tự chủ và hội nhập quốc tế."
      },
      {
        "label": "C",
        "text": "Quan hệ giữa xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc."
      },
      {
        "label": "D",
        "text": "Quan hệ giữa đổi mới kinh tế và đổi mới chính trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q88",
    "chapter": "Chương 3",
    "number": 88,
    "question": "Đại hội XIII của Đảng Cộng sản Việt Nam đã xác định mục tiêu đến năm 2025 là:",
    "options": [
      {
        "label": "A",
        "text": "Là nước đang phát triển, có công nghiệp theo hướng hiện đại, thu nhập trung bình thấp."
      },
      {
        "label": "B",
        "text": "Là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao."
      },
      {
        "label": "C",
        "text": "Trở thành nước phát triển, thu nhập cao."
      },
      {
        "label": "D",
        "text": "Trở thành nước công nghiệp hiện đại."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q89",
    "chapter": "Chương 3",
    "number": 89,
    "question": "Đại hội XIII của Đảng Cộng sản Việt Nam đã xác định mục tiêu đến năm 2030 (kỷ niệm 100 năm thành lập Đảng) là:",
    "options": [
      {
        "label": "A",
        "text": "Là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao."
      },
      {
        "label": "B",
        "text": "Là nước đang phát triển, có công nghiệp theo hướng hiện đại, thu nhập trung bình thấp."
      },
      {
        "label": "C",
        "text": "Trở thành nước phát triển, thu nhập cao."
      },
      {
        "label": "D",
        "text": "Hoàn thành cơ bản công nghiệp hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q90",
    "chapter": "Chương 3",
    "number": 90,
    "question": "Đại hội XIII của Đảng Cộng sản Việt Nam đã xác định mục tiêu đến năm 2045 (kỷ niệm 100 năm thành lập nước) là:",
    "options": [
      {
        "label": "A",
        "text": "Trở thành nước phát triển, thu nhập cao."
      },
      {
        "label": "B",
        "text": "Là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao."
      },
      {
        "label": "C",
        "text": "Là nước đang phát triển, thu nhập trung bình thấp."
      },
      {
        "label": "D",
        "text": "Hoàn thành công nghiệp hóa, hiện đại hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q91",
    "chapter": "Chương 3",
    "number": 91,
    "question": "Đại hội XIII của Đảng Cộng sản Việt Nam đã xác định bao nhiêu định hướng phát triển đất nước giai đoạn 2021-2030?",
    "options": [
      {
        "label": "A",
        "text": "12 định hướng."
      },
      {
        "label": "B",
        "text": "10 định hướng."
      },
      {
        "label": "C",
        "text": "8 định hướng."
      },
      {
        "label": "D",
        "text": "6 định hướng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q92",
    "chapter": "Chương 3",
    "number": 92,
    "question": "Định hướng đầu tiên trong 12 định hướng (Đại hội XIII) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Tiếp tục đổi mới mạnh mẽ tư duy, xây dựng, hoàn thiện đồng bộ thể chế phát triển bền vững."
      },
      {
        "label": "B",
        "text": "Hoàn thiện toàn diện, đồng bộ thể chế phát triển nền kinh tế thị trường định hướng XHCN."
      },
      {
        "label": "C",
        "text": "Tạo đột phá trong đổi mới căn bản, toàn diện giáo dục và đào tạo, phát triển nguồn nhân lực."
      },
      {
        "label": "D",
        "text": "Phát triển con người toàn diện và xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q93",
    "chapter": "Chương 3",
    "number": 93,
    "question": "Định hướng thứ hai trong 12 định hướng (Đại hội XIII) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Hoàn thiện toàn diện, đồng bộ thể chế phát triển nền kinh tế thị trường định hướng XHCN."
      },
      {
        "label": "B",
        "text": "Tiếp tục đổi mới mạnh mẽ tư duy."
      },
      {
        "label": "C",
        "text": "Tạo đột phá trong đổi mới giáo dục và đào tạo."
      },
      {
        "label": "D",
        "text": "Quản lý phát triển xã hội có hiệu quả."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q94",
    "chapter": "Chương 3",
    "number": 94,
    "question": "Định hướng thứ ba trong 12 định hướng (Đại hội XIII) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Tạo đột phá trong đổi mới căn bản, toàn diện giáo dục và đào tạo, khoa học và công nghệ."
      },
      {
        "label": "B",
        "text": "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN."
      },
      {
        "label": "C",
        "text": "Phát triển con người toàn diện."
      },
      {
        "label": "D",
        "text": "Chủ động thích ứng với biến đổi khí hậu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q95",
    "chapter": "Chương 3",
    "number": 95,
    "question": "Định hướng thứ tư trong 12 định hướng (Đại hội XIII) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Phát triển con người toàn diện và xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc."
      },
      {
        "label": "B",
        "text": "Tạo đột phá trong đổi mới giáo dục và đào tạo."
      },
      {
        "label": "C",
        "text": "Quản lý phát triển xã hội có hiệu quả."
      },
      {
        "label": "D",
        "text": "Kiên quyết, kiên trì bảo vệ vững chắc độc lập, chủ quyền."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q96",
    "chapter": "Chương 3",
    "number": 96,
    "question": "Định hướng thứ năm trong 12 định hướng (Đại hội XIII) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Quản lý phát triển xã hội có hiệu quả, nghiêm minh, bảo đảm an ninh xã hội, an ninh con người."
      },
      {
        "label": "B",
        "text": "Phát triển con người toàn diện và xây dựng nền văn hóa."
      },
      {
        "label": "C",
        "text": "Chủ động thích ứng với biến đổi khí hậu."
      },
      {
        "label": "D",
        "text": "Tiếp tục thực hiện đường lối đối ngoại độc lập, tự chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q97",
    "chapter": "Chương 3",
    "number": 97,
    "question": "Định hướng thứ sáu trong 12 định hướng (Đại hội XIII) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Chủ động thích ứng có hiệu quả với biến đổi khí hậu, phòng, chống thiên tai, dịch bệnh."
      },
      {
        "label": "B",
        "text": "Quản lý phát triển xã hội có hiệu quả."
      },
      {
        "label": "C",
        "text": "Kiên quyết, kiên trì bảo vệ vững chắc độc lập, chủ quyền."
      },
      {
        "label": "D",
        "text": "Thực hành và phát huy rộng rãi dân chủ XHCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q98",
    "chapter": "Chương 3",
    "number": 98,
    "question": "Định hướng thứ bảy trong 12 định hướng (Đại hội XIII) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Kiên quyết, kiên trì bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của Tổ quốc."
      },
      {
        "label": "B",
        "text": "Chủ động thích ứng với biến đổi khí hậu."
      },
      {
        "label": "C",
        "text": "Tiếp tục thực hiện đường lối đối ngoại độc lập, tự chủ."
      },
      {
        "label": "D",
        "text": "Xây dựng và hoàn thiện Nhà nước pháp quyền XHCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q99",
    "chapter": "Chương 3",
    "number": 99,
    "question": "Định hướng thứ tám trong 12 định hướng (Đại hội XIII) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Tiếp tục thực hiện đường lối đối ngoại độc lập, tự chủ, đa phương hoá, đa dạng hoá."
      },
      {
        "label": "B",
        "text": "Kiên quyết, kiên trì bảo vệ vững chắc độc lập, chủ quyền."
      },
      {
        "label": "C",
        "text": "Thực hành và phát huy rộng rãi dân chủ XHCN."
      },
      {
        "label": "D",
        "text": "Tiếp tục xây dựng, chỉnh đốn Đảng toàn diện."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q100",
    "chapter": "Chương 3",
    "number": 100,
    "question": "Định hướng thứ chín trong 12 định hướng (Đại hội XIII) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Thực hành và phát huy rộng rãi dân chủ xã hội chủ nghĩa, quyền làm chủ và vai trò tự quản của nhân dân."
      },
      {
        "label": "B",
        "text": "Tiếp tục thực hiện đường lối đối ngoại độc lập, tự chủ."
      },
      {
        "label": "C",
        "text": "Xây dựng và hoàn thiện Nhà nước pháp quyền XHCN."
      },
      {
        "label": "D",
        "text": "Tiếp tục nắm vững và xử lý tốt các quan hệ lớn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q101",
    "chapter": "Chương 3",
    "number": 101,
    "question": "Định hướng thứ mười trong 12 định hướng (Đại hội XIII) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng và hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa trong sạch, vững mạnh, tinh gọn."
      },
      {
        "label": "B",
        "text": "Thực hành và phát huy rộng rãi dân chủ XHCN."
      },
      {
        "label": "C",
        "text": "Tiếp tục xây dựng, chỉnh đốn Đảng toàn diện."
      },
      {
        "label": "D",
        "text": "Tiếp tục thực hiện đường lối đối ngoại độc lập, tự chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q102",
    "chapter": "Chương 3",
    "number": 102,
    "question": "Định hướng thứ mười một trong 12 định hướng (Đại hội XIII) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Tiếp tục xây dựng, chỉnh đốn Đảng toàn diện; tăng cường bản chất giai cấp công nhân của Đảng."
      },
      {
        "label": "B",
        "text": "Xây dựng và hoàn thiện Nhà nước pháp quyền XHCN."
      },
      {
        "label": "C",
        "text": "Thực hành và phát huy rộng rãi dân chủ XHCN."
      },
      {
        "label": "D",
        "text": "Tiếp tục nắm vững và xử lý tốt các quan hệ lớn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q103",
    "chapter": "Chương 3",
    "number": 103,
    "question": "Định hướng thứ mười hai trong 12 định hướng (Đại hội XIII) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Tiếp tục nắm vững và xử lý tốt các quan hệ lớn."
      },
      {
        "label": "B",
        "text": "Tiếp tục xây dựng, chỉnh đốn Đảng toàn diện."
      },
      {
        "label": "C",
        "text": "Xây dựng và hoàn thiện Nhà nước pháp quyền XHCN."
      },
      {
        "label": "D",
        "text": "Thực hành và phát huy rộng rãi dân chủ XHCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q104",
    "chapter": "Chương 3",
    "number": 104,
    "question": "Chủ nghĩa xã hội được xem là giai đoạn đầu (giai đoạn thấp) của hình thái kinh tế - xã hội nào?",
    "options": [
      {
        "label": "A",
        "text": "Hình thái kinh tế - xã hội cộng sản chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Hình thái kinh tế - xã hội tư bản chủ nghĩa."
      },
      {
        "label": "C",
        "text": "Hình thái kinh tế - xã hội phong kiến."
      },
      {
        "label": "D",
        "text": "Hình thái kinh tế - xã hội chiếm hữu nô lệ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q105",
    "chapter": "Chương 3",
    "number": 105,
    "question": "V.I. Lênin gọi xã hội của thời kỳ quá độ là xã hội \"còn mang nhiều dấu vết của xã hội cũ\" trong tác phẩm nào của C.Mác?",
    "options": [
      {
        "label": "A",
        "text": "\"Phê phán cương lĩnh Gôta\"."
      },
      {
        "label": "B",
        "text": "\"Tuyên ngôn của Đảng Cộng sản\"."
      },
      {
        "label": "C",
        "text": "\"Tư bản\"."
      },
      {
        "label": "D",
        "text": "\"Hệ tư tưởng Đức\"."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q106",
    "chapter": "Chương 3",
    "number": 106,
    "question": "V.I. Lênin cho rằng, xã hội của thời kỳ quá độ là một xã hội:",
    "options": [
      {
        "label": "A",
        "text": "Vừa thoát thai từ xã hội tư bản chủ nghĩa, chưa phát triển trên cơ sở của chính nó."
      },
      {
        "label": "B",
        "text": "Đã phát triển hoàn thiện trên cơ sở của chính nó."
      },
      {
        "label": "C",
        "text": "Một xã hội tư bản chủ nghĩa kiểu mới."
      },
      {
        "label": "D",
        "text": "Một xã hội không còn giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q107",
    "chapter": "Chương 3",
    "number": 107,
    "question": "Vai trò của chủ nghĩa tư bản được Mác và Ăngghen thừa nhận là:",
    "options": [
      {
        "label": "A",
        "text": "Tạo ra bước phát triển vượt bậc của lực lượng sản xuất."
      },
      {
        "label": "B",
        "text": "Kìm hãm sự phát triển của lực lượng sản xuất."
      },
      {
        "label": "C",
        "text": "Tạo ra một xã hội công bằng, bình đẳng."
      },
      {
        "label": "D",
        "text": "Là hình thái kinh tế - xã hội cuối cùng của nhân loại."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q108",
    "chapter": "Chương 3",
    "number": 108,
    "question": "Cách mạng vô sản là cuộc cách mạng của:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân và nhân dân lao động dưới sự lãnh đạo của Đảng Cộng sản."
      },
      {
        "label": "B",
        "text": "Giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Tầng lớp trí thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q109",
    "chapter": "Chương 3",
    "number": 109,
    "question": "Cách mạng vô sản về lý thuyết có thể tiến hành bằng con đường hòa bình không?",
    "options": [
      {
        "label": "A",
        "text": "Có, nhưng vô cùng hiếm, quý và trên thực tế chưa xảy ra."
      },
      {
        "label": "B",
        "text": "Không, bắt buộc phải dùng bạo lực."
      },
      {
        "label": "C",
        "text": "Chỉ có thể dùng con đường hòa bình."
      },
      {
        "label": "D",
        "text": "Tùy thuộc vào giai cấp tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q110",
    "chapter": "Chương 3",
    "number": 110,
    "question": "\"Thay cho xã hội tư bản cũ... sẽ xuất hiện một liên hợp, trong đó sự phát triển tự do của mỗi người là điều kiện phát triển tự do của tất cả mọi người\" là luận điểm trong tác phẩm:",
    "options": [
      {
        "label": "A",
        "text": "\"Tuyên ngôn của Đảng Cộng sản\"."
      },
      {
        "label": "B",
        "text": "\"Phê phán cương lĩnh Gôta\"."
      },
      {
        "label": "C",
        "text": "\"Tư bản\"."
      },
      {
        "label": "D",
        "text": "\"Chống Đuyrinh\"."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q111",
    "chapter": "Chương 3",
    "number": 111,
    "question": "Tên gọi \"Đảng Cộng sản\" được V.I. Lênin cho là duy nhất chính xác về mặt khoa học vì:",
    "options": [
      {
        "label": "A",
        "text": "Mục đích cuối cùng là thiết lập xã hội cộng sản chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Chỉ để phân biệt với các đảng xã hội dân chủ."
      },
      {
        "label": "C",
        "text": "Chỉ để lãnh đạo giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Do C.Mác đặt tên."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q112",
    "chapter": "Chương 3",
    "number": 112,
    "question": "Mục đích cao cả của chủ nghĩa xã hội theo V.I. Lênin là:",
    "options": [
      {
        "label": "A",
        "text": "Xóa bỏ sự phân chia xã hội thành giai cấp, biến tất cả thành người lao động."
      },
      {
        "label": "B",
        "text": "Duy trì sự phân chia giai cấp."
      },
      {
        "label": "C",
        "text": "Biến giai cấp công nhân thành giai cấp thống trị mới."
      },
      {
        "label": "D",
        "text": "Xây dựng nhà nước chuyên chính."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q113",
    "chapter": "Chương 3",
    "number": 113,
    "question": "Cơ sở kinh tế của nhà nước xã hội chủ nghĩa là gì?",
    "options": [
      {
        "label": "A",
        "text": "Chế độ công hữu về các tư liệu sản xuất chủ yếu."
      },
      {
        "label": "B",
        "text": "Chế độ tư hữu về các tư liệu sản xuất chủ yếu."
      },
      {
        "label": "C",
        "text": "Chế độ sở hữu hỗn hợp."
      },
      {
        "label": "D",
        "text": "Chế độ sở hữu nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q114",
    "chapter": "Chương 3",
    "number": 114,
    "question": "V.I. Lênin cho rằng, trong thời kỳ quá độ, phải \"Dùng cả hai tay mà lấy những cái tốt của nước ngoài\", ví dụ như:",
    "options": [
      {
        "label": "A",
        "text": "Trật tự ở đường sắt Phổ, kỹ thuật và tổ chức các tơ-rớt ở Mỹ."
      },
      {
        "label": "B",
        "text": "Hệ thống chính trị tư sản."
      },
      {
        "label": "C",
        "text": "Quan hệ bóc lột tư bản chủ nghĩa."
      },
      {
        "label": "D",
        "text": "Chủ nghĩa thực dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q115",
    "chapter": "Chương 3",
    "number": 115,
    "question": "Nhà nước chuyên chính vô sản thực hành dân chủ với ai và chuyên chính với ai?",
    "options": [
      {
        "label": "A",
        "text": "Dân chủ với nhân dân lao động, chuyên chính với bọn bóc lột, áp bức."
      },
      {
        "label": "B",
        "text": "Dân chủ với mọi giai cấp, chuyên chính với kẻ thù."
      },
      {
        "label": "C",
        "text": "Dân chủ với giai cấp tư sản, chuyên chính với vô sản."
      },
      {
        "label": "D",
        "text": "Chuyên chính với tất cả mọi người."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q116",
    "chapter": "Chương 3",
    "number": 116,
    "question": "Luận điểm \"Người ta chỉ có thể trở thành người cộng sản khi biết làm giàu trí óc của mình bằng sự hiểu biết tất cả những kho tàng tri thức mà nhân loại đã tạo ra\" là của ai?",
    "options": [
      {
        "label": "A",
        "text": "V.I.Lênin."
      },
      {
        "label": "B",
        "text": "C.Mác."
      },
      {
        "label": "C",
        "text": "Ph.Ăngghen."
      },
      {
        "label": "D",
        "text": "Hồ Chí Minh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q117",
    "chapter": "Chương 3",
    "number": 117,
    "question": "Cơ sở để xây dựng cộng đồng dân tộc bình đẳng, đoàn kết trong CNXH là gì?",
    "options": [
      {
        "label": "A",
        "text": "Cơ sở chính trị - pháp lý, kinh tế - xã hội và văn hóa."
      },
      {
        "label": "B",
        "text": "Chỉ cơ sở chính trị."
      },
      {
        "label": "C",
        "text": "Chỉ cơ sở kinh tế."
      },
      {
        "label": "D",
        "text": "Chỉ cơ sở văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q118",
    "chapter": "Chương 3",
    "number": 118,
    "question": "Thời kỳ quá độ lên CNXH bắt đầu từ khi nào và kết thúc khi nào?",
    "options": [
      {
        "label": "A",
        "text": "Bắt đầu từ khi giai cấp công nhân giành được chính quyền đến khi xây dựng thành công CNXH."
      },
      {
        "label": "B",
        "text": "Bắt đầu từ khi CNTB ra đời đến khi nó sụp đổ."
      },
      {
        "label": "C",
        "text": "Bắt đầu từ khi CNXH sụp đổ ở Liên Xô."
      },
      {
        "label": "D",
        "text": "Bắt đầu từ khi xây dựng được giai đoạn cao của CNCS."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q119",
    "chapter": "Chương 3",
    "number": 119,
    "question": "Ở Việt Nam, quan điểm \"bỏ qua chế độ tư bản chủ nghĩa\" có nghĩa là bỏ qua:",
    "options": [
      {
        "label": "A",
        "text": "Việc xác lập vị trí thống trị của QHSX và KTTT TBCN."
      },
      {
        "label": "B",
        "text": "Tất cả các yếu tố của CNTB, kể cả khoa học công nghệ."
      },
      {
        "label": "C",
        "text": "Sự phát triển của lực lượng sản xuất."
      },
      {
        "label": "D",
        "text": "Nền kinh tế hàng hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q120",
    "chapter": "Chương 3",
    "number": 120,
    "question": "\"Dân giàu, nước mạnh, dân chủ, công bằng, văn minh\" là đặc trưng:",
    "options": [
      {
        "label": "A",
        "text": "Mục tiêu tổng quát của CNXH Việt Nam."
      },
      {
        "label": "B",
        "text": "Về kinh tế."
      },
      {
        "label": "C",
        "text": "Về chính trị."
      },
      {
        "label": "D",
        "text": "Về văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q121",
    "chapter": "Chương 3",
    "number": 121,
    "question": "\"Do nhân dân làm chủ\" là đặc trưng về:",
    "options": [
      {
        "label": "A",
        "text": "Chủ thể của CNXH Việt Nam."
      },
      {
        "label": "B",
        "text": "Mục tiêu của CNXH Việt Nam."
      },
      {
        "label": "C",
        "text": "Kinh tế của CNXH Việt Nam."
      },
      {
        "label": "D",
        "text": "Văn hóa của CNXH Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q122",
    "chapter": "Chương 3",
    "number": 122,
    "question": "\"Có nền kinh tế phát triển cao...\" là đặc trưng về:",
    "options": [
      {
        "label": "A",
        "text": "Kinh tế của CNXH Việt Nam."
      },
      {
        "label": "B",
        "text": "Văn hóa của CNXH Việt Nam."
      },
      {
        "label": "C",
        "text": "Xã hội của CNXH Việt Nam."
      },
      {
        "label": "D",
        "text": "Chính trị của CNXH Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q123",
    "chapter": "Chương 3",
    "number": 123,
    "question": "\"Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc\" là đặc trưng về:",
    "options": [
      {
        "label": "A",
        "text": "Văn hóa của CNXH Việt Nam."
      },
      {
        "label": "B",
        "text": "Kinh tế của CNXH Việt Nam."
      },
      {
        "label": "C",
        "text": "Con người của CNXH Việt Nam."
      },
      {
        "label": "D",
        "text": "Dân tộc của CNXH Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q124",
    "chapter": "Chương 3",
    "number": 124,
    "question": "\"Con người có cuộc sống ấm no, tự do, hạnh phúc...\" là đặc trưng về:",
    "options": [
      {
        "label": "A",
        "text": "Con người của CNXH Việt Nam."
      },
      {
        "label": "B",
        "text": "Mục tiêu của CNXH Việt Nam."
      },
      {
        "label": "C",
        "text": "Xã hội của CNXH Việt Nam."
      },
      {
        "label": "D",
        "text": "Kinh tế của CNXH Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q125",
    "chapter": "Chương 3",
    "number": 125,
    "question": "\"Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết...\" là đặc trưng về:",
    "options": [
      {
        "label": "A",
        "text": "Dân tộc của CNXH Việt Nam."
      },
      {
        "label": "B",
        "text": "Văn hóa của CNXH Việt Nam."
      },
      {
        "label": "C",
        "text": "Chính trị của CNXH Việt Nam."
      },
      {
        "label": "D",
        "text": "Đối ngoại của CNXH Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q126",
    "chapter": "Chương 3",
    "number": 126,
    "question": "\"Có Nhà nước pháp quyền XHCN...\" là đặc trưng về:",
    "options": [
      {
        "label": "A",
        "text": "Nhà nước (Chính trị) của CNXH Việt Nam."
      },
      {
        "label": "B",
        "text": "Kinh tế của CNXH Việt Nam."
      },
      {
        "label": "C",
        "text": "Xã hội của CNXH Việt Nam."
      },
      {
        "label": "D",
        "text": "Văn hóa của CNXH Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q127",
    "chapter": "Chương 3",
    "number": 127,
    "question": "\"Có quan hệ hữu nghị và hợp tác với các nước...\" là đặc trưng về:",
    "options": [
      {
        "label": "A",
        "text": "Đối ngoại của CNXH Việt Nam."
      },
      {
        "label": "B",
        "text": "Dân tộc của CNXH Việt Nam."
      },
      {
        "label": "C",
        "text": "Chính trị của CNXH Việt Nam."
      },
      {
        "label": "D",
        "text": "Kinh tế của CNXH Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q128",
    "chapter": "Chương 3",
    "number": 128,
    "question": "\"Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa\" là:",
    "options": [
      {
        "label": "A",
        "text": "Một phương hướng cơ bản xây dựng CNXH ở Việt Nam."
      },
      {
        "label": "B",
        "text": "Một đặc trưng của CNXH Việt Nam."
      },
      {
        "label": "C",
        "text": "Một mục tiêu của CNXH Việt Nam."
      },
      {
        "label": "D",
        "text": "Một mối quan hệ lớn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q129",
    "chapter": "Chương 3",
    "number": 129,
    "question": "\"Xây dựng Đảng trong sạch, vững mạnh\" là:",
    "options": [
      {
        "label": "A",
        "text": "Một phương hướng cơ bản xây dựng CNXH ở Việt Nam."
      },
      {
        "label": "B",
        "text": "Một đặc trưng của CNXH Việt Nam."
      },
      {
        "label": "C",
        "text": "Một mục tiêu của CNXH Việt Nam."
      },
      {
        "label": "D",
        "text": "Một mối quan hệ lớn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q130",
    "chapter": "Chương 3",
    "number": 130,
    "question": "\"Quan hệ giữa đổi mới, ổn định và phát triển\" là:",
    "options": [
      {
        "label": "A",
        "text": "Một trong 8 mối quan hệ lớn cần giải quyết."
      },
      {
        "label": "B",
        "text": "Một trong 8 phương hướng xây dựng CNXH."
      },
      {
        "label": "C",
        "text": "Một trong 8 đặc trưng của CNXH."
      },
      {
        "label": "D",
        "text": "Một trong 12 định hướng của Đại hội XIII."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q131",
    "chapter": "Chương 3",
    "number": 131,
    "question": "\"Quan hệ giữa kinh tế thị trường và định hướng xã hội chủ nghĩa\" là:",
    "options": [
      {
        "label": "A",
        "text": "Một trong 8 mối quan hệ lớn cần giải quyết."
      },
      {
        "label": "B",
        "text": "Một trong 8 phương hướng xây dựng CNXH."
      },
      {
        "label": "C",
        "text": "Một trong 8 đặc trưng của CNXH."
      },
      {
        "label": "D",
        "text": "Một trong 12 định hướng của Đại hội XIII."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q132",
    "chapter": "Chương 3",
    "number": 132,
    "question": "\"Quan hệ giữa Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ\" là:",
    "options": [
      {
        "label": "A",
        "text": "Một trong 8 mối quan hệ lớn cần giải quyết."
      },
      {
        "label": "B",
        "text": "Một trong 8 phương hướng xây dựng CNXH."
      },
      {
        "label": "C",
        "text": "Một trong 8 đặc trưng của CNXH."
      },
      {
        "label": "D",
        "text": "Một trong 12 định hướng của Đại hội XIII."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q133",
    "chapter": "Chương 3",
    "number": 133,
    "question": "Mục tiêu đến năm 2025, Việt Nam trở thành:",
    "options": [
      {
        "label": "A",
        "text": "Nước đang phát triển, có công nghiệp theo hướng hiện đại, thu nhập trung bình thấp."
      },
      {
        "label": "B",
        "text": "Nước phát triển, thu nhập cao."
      },
      {
        "label": "C",
        "text": "Nước công nghiệp hiện đại."
      },
      {
        "label": "D",
        "text": "Nước có thu nhập trung bình cao."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q134",
    "chapter": "Chương 3",
    "number": 134,
    "question": "Mục tiêu đến năm 2030, Việt Nam trở thành:",
    "options": [
      {
        "label": "A",
        "text": "Nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao."
      },
      {
        "label": "B",
        "text": "Nước phát triển, thu nhập cao."
      },
      {
        "label": "C",
        "text": "Nước công nghiệp theo hướng hiện đại."
      },
      {
        "label": "D",
        "text": "Nước có thu nhập trung bình thấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q135",
    "chapter": "Chương 3",
    "number": 135,
    "question": "Mục tiêu đến năm 2045, Việt Nam trở thành:",
    "options": [
      {
        "label": "A",
        "text": "Nước phát triển, thu nhập cao."
      },
      {
        "label": "B",
        "text": "Nước đang phát triển, thu nhập trung bình cao."
      },
      {
        "label": "C",
        "text": "Nước công nghiệp hiện đại."
      },
      {
        "label": "D",
        "text": "Nước có thu nhập trung bình thấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q136",
    "chapter": "Chương 3",
    "number": 136,
    "question": "Đại hội XIII của Đảng xác định định hướng nào liên quan đến giáo dục, đào tạo, khoa học, công nghệ?",
    "options": [
      {
        "label": "A",
        "text": "Tạo đột phá trong đổi mới căn bản, toàn diện."
      },
      {
        "label": "B",
        "text": "Giữ nguyên hiện trạng."
      },
      {
        "label": "C",
        "text": "Chỉ phát triển giáo dục."
      },
      {
        "label": "D",
        "text": "Chỉ phát triển khoa học."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q137",
    "chapter": "Chương 3",
    "number": 137,
    "question": "Đại hội XIII của Đảng xác định định hướng nào liên quan đến văn hóa, con người?",
    "options": [
      {
        "label": "A",
        "text": "Phát triển con người toàn diện và xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc."
      },
      {
        "label": "B",
        "text": "Chỉ phát triển con người."
      },
      {
        "label": "C",
        "text": "Chỉ phát triển văn hóa."
      },
      {
        "label": "D",
        "text": "Tiếp thu toàn bộ văn hóa nước ngoài."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q138",
    "chapter": "Chương 3",
    "number": 138,
    "question": "Đại hội XIII của Đảng xác định định hướng nào liên quan đến an ninh, quốc phòng?",
    "options": [
      {
        "label": "A",
        "text": "Kiên quyết, kiên trì bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ."
      },
      {
        "label": "B",
        "text": "Chỉ tập trung phát triển kinh tế."
      },
      {
        "label": "C",
        "text": "Giảm ngân sách quốc phòng."
      },
      {
        "label": "D",
        "text": "Chỉ bảo vệ chủ quyền biển đảo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q139",
    "chapter": "Chương 3",
    "number": 139,
    "question": "Đại hội XIII của Đảng xác định định hướng nào liên quan đến đối ngoại?",
    "options": [
      {
        "label": "A",
        "text": "Tiếp tục thực hiện đường lối đối ngoại độc lập, tự chủ, đa phương hoá, đa dạng hoá."
      },
      {
        "label": "B",
        "text": "Đóng cửa, không hội nhập."
      },
      {
        "label": "C",
        "text": "Chỉ hội nhập kinh tế."
      },
      {
        "label": "D",
        "text": "Chỉ quan hệ với các nước lớn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q140",
    "chapter": "Chương 3",
    "number": 140,
    "question": "Đại hội XIII của Đảng xác định định hướng nào liên quan đến xây dựng Đảng?",
    "options": [
      {
        "label": "A",
        "text": "Tiếp tục xây dựng, chỉnh đốn Đảng toàn diện."
      },
      {
        "label": "B",
        "text": "Giảm vai trò lãnh đạo của Đảng."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung phát triển đảng viên mới."
      },
      {
        "label": "D",
        "text": "Không cần xây dựng Đảng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q141",
    "chapter": "Chương 3",
    "number": 141,
    "question": "Chủ nghĩa Mác - Lênin xem xét CNXH là giai đoạn đầu của HTKT-XH CSCN dựa trên:",
    "options": [
      {
        "label": "A",
        "text": "Quan điểm duy vật lịch sử."
      },
      {
        "label": "B",
        "text": "Quan điểm duy tâm."
      },
      {
        "label": "C",
        "text": "Mong muốn chủ quan."
      },
      {
        "label": "D",
        "text": "Lý tưởng tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q142",
    "chapter": "Chương 3",
    "number": 142,
    "question": "Điều kiện tiên quyết để thực hiện bước quá độ từ CNTB lên CNXH là gì?",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân phải giành được chính quyền."
      },
      {
        "label": "B",
        "text": "Giai cấp tư sản tự nguyện từ bỏ chính quyền."
      },
      {
        "label": "C",
        "text": "Khoa học kỹ thuật phát triển vượt bậc."
      },
      {
        "label": "D",
        "text": "Năng suất lao động đạt mức tối đa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q143",
    "chapter": "Chương 3",
    "number": 143,
    "question": "Đặc trưng nào thể hiện bản chất nhân văn, nhân đạo của CNXH?",
    "options": [
      {
        "label": "A",
        "text": "Giải phóng giai cấp, giải phóng dân tộc, giải phóng xã hội, giải phóng con người."
      },
      {
        "label": "B",
        "text": "Có nền kinh tế phát triển cao."
      },
      {
        "label": "C",
        "text": "Có nhà nước kiểu mới."
      },
      {
        "label": "D",
        "text": "Có nền văn hóa phát triển."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q144",
    "chapter": "Chương 3",
    "number": 144,
    "question": "Tại sao trong CNXH, nhân dân lao động là chủ thể của xã hội?",
    "options": [
      {
        "label": "A",
        "text": "Vì CNXH được xây dựng trên nền tảng chế độ công hữu về TLSX, xóa bỏ áp bức, bóc lột."
      },
      {
        "label": "B",
        "text": "Vì nhân dân lao động chiếm đa số."
      },
      {
        "label": "C",
        "text": "Vì giai cấp tư sản đã bị tiêu diệt."
      },
      {
        "label": "D",
        "text": "Vì nhà nước XHCN quy định như vậy."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q145",
    "chapter": "Chương 3",
    "number": 145,
    "question": "\"Chế độ công hữu về tư liệu sản xuất chủ yếu\" là cơ sở kinh tế để:",
    "options": [
      {
        "label": "A",
        "text": "Thực hiện sự bình đẳng, dân chủ trong xã hội."
      },
      {
        "label": "B",
        "text": "Duy trì sự bất bình đẳng."
      },
      {
        "label": "C",
        "text": "Tạo ra giai cấp bóc lột mới."
      },
      {
        "label": "D",
        "text": "Kìm hãm lực lượng sản xuất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q146",
    "chapter": "Chương 3",
    "number": 146,
    "question": "Nhà nước XHCN là nhà nước \"kiểu mới\" vì:",
    "options": [
      {
        "label": "A",
        "text": "Mang bản chất giai cấp công nhân, thực hiện dân chủ cho đa số nhân dân."
      },
      {
        "label": "B",
        "text": "Là nhà nước đầu tiên trong lịch sử."
      },
      {
        "label": "C",
        "text": "Là nhà nước không còn chức năng trấn áp."
      },
      {
        "label": "D",
        "text": "Là nhà nước do giai cấp tư sản lãnh đạo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q147",
    "chapter": "Chương 3",
    "number": 147,
    "question": "V.I. Lênin nhấn mạnh, để xây dựng CNXH ở các nước lạc hậu, cần phải học hỏi kinh nghiệm từ:",
    "options": [
      {
        "label": "A",
        "text": "Các nước tư bản phát triển (về kỹ thuật, quản lý...)."
      },
      {
        "label": "B",
        "text": "Chỉ các nước phong kiến."
      },
      {
        "label": "C",
        "text": "Tự mình mày mò."
      },
      {
        "label": "D",
        "text": "Chỉ các nước XHCN khác."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q148",
    "chapter": "Chương 3",
    "number": 148,
    "question": "Đặc điểm của thời kỳ quá độ là sự \"đan xen\" giữa:",
    "options": [
      {
        "label": "A",
        "text": "Những tàn dư của xã hội cũ và những yếu tố mới của xã hội XHCN."
      },
      {
        "label": "B",
        "text": "Chỉ các yếu tố của xã hội XHCN."
      },
      {
        "label": "C",
        "text": "Chỉ các tàn dư của xã hội cũ."
      },
      {
        "label": "D",
        "text": "Các yếu tố của xã hội phong kiến và tư bản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q149",
    "chapter": "Chương 3",
    "number": 149,
    "question": "\"Bỏ qua chế độ TBCN\" ở Việt Nam có phải là bỏ qua sự phát triển của LLSX không?",
    "options": [
      {
        "label": "A",
        "text": "Không, mà phải phát triển nhanh lực lượng sản xuất, xây dựng nền kinh tế hiện đại."
      },
      {
        "label": "B",
        "text": "Có, bỏ qua cả LLSX."
      },
      {
        "label": "C",
        "text": "Chỉ phát triển LLSX thủ công."
      },
      {
        "label": "D",
        "text": "Giữ nguyên LLSX lạc hậu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 3_Q150",
    "chapter": "Chương 3",
    "number": 150,
    "question": "8 đặc trưng của CNXH Việt Nam (Cương lĩnh 2011) thể hiện:",
    "options": [
      {
        "label": "A",
        "text": "Nhận thức của Đảng ta về CNXH ngày càng sáng tỏ, hoàn thiện."
      },
      {
        "label": "B",
        "text": "Sự sao chép mô hình của Liên Xô."
      },
      {
        "label": "C",
        "text": "Sự xa rời lý luận Mác - Lênin."
      },
      {
        "label": "D",
        "text": "Mục tiêu đã hoàn thành."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q1",
    "chapter": "Chương 4",
    "number": 1,
    "question": "Từ \"Demokratos\" (Dân chủ) trong tiếng Hy Lạp cổ có nghĩa là gì?",
    "options": [
      {
        "label": "A",
        "text": "Quyền lực thuộc về nhân dân."
      },
      {
        "label": "B",
        "text": "Quyền lực thuộc về nhà vua."
      },
      {
        "label": "C",
        "text": "Quyền lực thuộc về giai cấp thống trị."
      },
      {
        "label": "D",
        "text": "Quyền lực thuộc về các nhà quý tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q2",
    "chapter": "Chương 4",
    "number": 2,
    "question": "Theo quan điểm của chủ nghĩa Mác - Lênin, dân chủ được xem xét dưới các góc độ nào?",
    "options": [
      {
        "label": "A",
        "text": "Là sản phẩm tiến hóa của lịch sử, là một hình thái nhà nước, là một nguyên tắc tổ chức."
      },
      {
        "label": "B",
        "text": "Chỉ là một giá trị nhân loại chung."
      },
      {
        "label": "C",
        "text": "Chỉ là một hình thức nhà nước."
      },
      {
        "label": "D",
        "text": "Chỉ là một nguyên tắc của Đảng Cộng sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q3",
    "chapter": "Chương 4",
    "number": 3,
    "question": "Theo V.I.Lênin, dân chủ là bình đẳng, là...",
    "options": [
      {
        "label": "A",
        "text": "Xóa bỏ phân chia giai cấp."
      },
      {
        "label": "B",
        "text": "Chấp nhận sự phân chia giai cấp."
      },
      {
        "label": "C",
        "text": "Quyền lực của giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Quyền lực của thiểu số."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q4",
    "chapter": "Chương 4",
    "number": 4,
    "question": "Trong xã hội có giai cấp, dân chủ luôn mang bản chất của:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp thống trị."
      },
      {
        "label": "B",
        "text": "Giai cấp bị trị."
      },
      {
        "label": "C",
        "text": "Toàn thể nhân dân."
      },
      {
        "label": "D",
        "text": "Giai cấp công nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q5",
    "chapter": "Chương 4",
    "number": 5,
    "question": "Theo quan điểm Mác - Lênin, có \"dân chủ phi giai cấp\" không?",
    "options": [
      {
        "label": "A",
        "text": "Không."
      },
      {
        "label": "B",
        "text": "Có."
      },
      {
        "label": "C",
        "text": "Chỉ có trong chủ nghĩa tư bản."
      },
      {
        "label": "D",
        "text": "Chỉ có trong chủ nghĩa xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q6",
    "chapter": "Chương 4",
    "number": 6,
    "question": "Quan điểm của Hồ Chí Minh về dân chủ là gì?",
    "options": [
      {
        "label": "A",
        "text": "Dân chủ là dân là chủ và dân làm chủ."
      },
      {
        "label": "B",
        "text": "Dân chủ là một giá trị vĩnh viễn, bất biến."
      },
      {
        "label": "C",
        "text": "Dân chủ là nhà nước cai trị nhân dân."
      },
      {
        "label": "D",
        "text": "Dân chủ là quyền lực của Đảng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q7",
    "chapter": "Chương 4",
    "number": 7,
    "question": "Dân chủ với tư cách là một phạm trù lịch sử có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Dân chủ gắn với quá trình ra đời, phát triển của lịch sử xã hội nhân loại."
      },
      {
        "label": "B",
        "text": "Dân chủ là một giá trị vĩnh hằng, không thay đổi."
      },
      {
        "label": "C",
        "text": "Dân chủ chỉ xuất hiện trong chủ nghĩa tư bản."
      },
      {
        "label": "D",
        "text": "Dân chủ không tồn tại trong chế độ phong kiến."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q8",
    "chapter": "Chương 4",
    "number": 8,
    "question": "Hình thức dân chủ sơ khai \"dân chủ quân sự\" tồn tại trong chế độ xã hội nào?",
    "options": [
      {
        "label": "A",
        "text": "Cộng sản nguyên thủy."
      },
      {
        "label": "B",
        "text": "Chiếm hữu nô lệ."
      },
      {
        "label": "C",
        "text": "Phong kiến."
      },
      {
        "label": "D",
        "text": "Tư bản chủ nghĩa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q9",
    "chapter": "Chương 4",
    "number": 9,
    "question": "Nền dân chủ chủ nô thực chất là dân chủ dành cho:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp chủ nô và một phần công dân tự do."
      },
      {
        "label": "B",
        "text": "Toàn bộ nhân dân, bao gồm cả nô lệ."
      },
      {
        "label": "C",
        "text": "Chỉ dành cho nô lệ."
      },
      {
        "label": "D",
        "text": "Chỉ dành cho các nhà buôn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q10",
    "chapter": "Chương 4",
    "number": 10,
    "question": "Chế độ xã hội nào đã xóa bỏ nền dân chủ chủ nô và thay bằng chế độ độc tài chuyên chế?",
    "options": [
      {
        "label": "A",
        "text": "Chế độ phong kiến."
      },
      {
        "label": "B",
        "text": "Chế độ tư bản chủ nghĩa."
      },
      {
        "label": "C",
        "text": "Chế độ cộng sản nguyên thủy."
      },
      {
        "label": "D",
        "text": "Chế độ xã hội chủ nghĩa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q11",
    "chapter": "Chương 4",
    "number": 11,
    "question": "Nền dân chủ tư sản ra đời là một bước tiến lớn, nhưng về thực chất nó vẫn là:",
    "options": [
      {
        "label": "A",
        "text": "Nền dân chủ của thiểu số (giai cấp tư sản) đối với đại đa số (nhân dân lao động)."
      },
      {
        "label": "B",
        "text": "Nền dân chủ cho toàn thể nhân dân."
      },
      {
        "label": "C",
        "text": "Nền dân chủ cho giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Nền dân chủ cho giai cấp nông dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q12",
    "chapter": "Chương 4",
    "number": 12,
    "question": "Nền dân chủ tư sản được xây dựng trên nền tảng kinh tế nào?",
    "options": [
      {
        "label": "A",
        "text": "Chế độ tư hữu về tư liệu sản xuất."
      },
      {
        "label": "B",
        "text": "Chế độ công hữu về tư liệu sản xuất."
      },
      {
        "label": "C",
        "text": "Chế độ sở hữu hỗn hợp."
      },
      {
        "label": "D",
        "text": "Chế độ sở hữu tập thể."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q13",
    "chapter": "Chương 4",
    "number": 13,
    "question": "Nền dân chủ vô sản (dân chủ xã hội chủ nghĩa) chính thức được xác lập sau sự kiện nào?",
    "options": [
      {
        "label": "A",
        "text": "Cách mạng Tháng Mười Nga (1917)."
      },
      {
        "label": "B",
        "text": "Công xã Pari (1871)."
      },
      {
        "label": "C",
        "text": "Cách mạng tư sản Pháp (1789)."
      },
      {
        "label": "D",
        "text": "Cách mạng công nghiệp (thế kỷ XIX)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q14",
    "chapter": "Chương 4",
    "number": 14,
    "question": "Đặc trưng cơ bản của nền dân chủ xã hội chủ nghĩa là gì?",
    "options": [
      {
        "label": "A",
        "text": "Thực hiện quyền lực của nhân dân, dân làm chủ nhà nước và xã hội."
      },
      {
        "label": "B",
        "text": "Thực hiện quyền lực của giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Thực hiện quyền lực của thiểu số."
      },
      {
        "label": "D",
        "text": "Thực hiện chế độ đa đảng đối lập."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q15",
    "chapter": "Chương 4",
    "number": 15,
    "question": "Trong lịch sử nhân loại, cho đến nay có mấy nền (chế độ) dân chủ?",
    "options": [
      {
        "label": "A",
        "text": "Ba nền (dân chủ chủ nô, dân chủ tư sản, dân chủ XHCN)."
      },
      {
        "label": "B",
        "text": "Hai nền (dân chủ tư sản, dân chủ XHCN)."
      },
      {
        "label": "C",
        "text": "Một nền (dân chủ tư sản)."
      },
      {
        "label": "D",
        "text": "Bốn nền (cộng sản nguyên thủy, chủ nô, tư sản, XHCN)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q16",
    "chapter": "Chương 4",
    "number": 16,
    "question": "Dân chủ xã hội chủ nghĩa là nền dân chủ:",
    "options": [
      {
        "label": "A",
        "text": "Cao hơn về chất so với nền dân chủ tư sản."
      },
      {
        "label": "B",
        "text": "Thấp hơn về chất so với nền dân chủ tư sản."
      },
      {
        "label": "C",
        "text": "Tương đương với nền dân chủ tư sản."
      },
      {
        "label": "D",
        "text": "Giống hệt nền dân chủ chủ nô."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q17",
    "chapter": "Chương 4",
    "number": 17,
    "question": "Nền dân chủ xã hội chủ nghĩa được thực hiện bằng:",
    "options": [
      {
        "label": "A",
        "text": "Nhà nước pháp quyền xã hội chủ nghĩa, đặt dưới sự lãnh đạo của Đảng Cộng sản."
      },
      {
        "label": "B",
        "text": "Nhà nước pháp quyền tư sản."
      },
      {
        "label": "C",
        "text": "Chế độ đa nguyên chính trị, đa đảng đối lập."
      },
      {
        "label": "D",
        "text": "Sự cai trị của một cá nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q18",
    "chapter": "Chương 4",
    "number": 18,
    "question": "Phôi thai của nền dân chủ xã hội chủ nghĩa xuất hiện từ:",
    "options": [
      {
        "label": "A",
        "text": "Công xã Pari (1871)."
      },
      {
        "label": "B",
        "text": "Cách mạng Tháng Mười Nga (1917)."
      },
      {
        "label": "C",
        "text": "Cách mạng tư sản Anh."
      },
      {
        "label": "D",
        "text": "Cách mạng tư sản Pháp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q19",
    "chapter": "Chương 4",
    "number": 19,
    "question": "Quá trình phát triển của nền dân chủ XHCN là quá trình:",
    "options": [
      {
        "label": "A",
        "text": "Từ thấp tới cao, từ chưa hoàn thiện đến hoàn thiện, có kế thừa giá trị dân chủ tư sản."
      },
      {
        "label": "B",
        "text": "Xóa bỏ hoàn toàn các giá trị dân chủ tư sản."
      },
      {
        "label": "C",
        "text": "Đã hoàn thiện ngay từ khi ra đời."
      },
      {
        "label": "D",
        "text": "Chỉ diễn ra ở một nước duy nhất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q20",
    "chapter": "Chương 4",
    "number": 20,
    "question": "Nguyên tắc cơ bản của nền dân chủ XHCN là:",
    "options": [
      {
        "label": "A",
        "text": "Không ngừng mở rộng dân chủ, nâng cao mức độ giải phóng cho người lao động."
      },
      {
        "label": "B",
        "text": "Thu hẹp dân chủ, tăng cường chuyên chính."
      },
      {
        "label": "C",
        "text": "Chỉ mở rộng dân chủ cho giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Duy trì dân chủ hình thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q21",
    "chapter": "Chương 4",
    "number": 21,
    "question": "Bản chất chính trị của nền dân chủ XHCN là:",
    "options": [
      {
        "label": "A",
        "text": "Vừa có bản chất giai cấp công nhân, vừa có tính nhân dân rộng rãi, tính dân tộc sâu sắc."
      },
      {
        "label": "B",
        "text": "Chỉ có bản chất giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ có tính nhân dân rộng rãi."
      },
      {
        "label": "D",
        "text": "Không mang bản chất giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q22",
    "chapter": "Chương 4",
    "number": 22,
    "question": "Bản chất kinh tế của nền dân chủ XHCN là:",
    "options": [
      {
        "label": "A",
        "text": "Dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu."
      },
      {
        "label": "B",
        "text": "Dựa trên chế độ tư hữu về tư liệu sản xuất."
      },
      {
        "label": "C",
        "text": "Dựa trên chế độ sở hữu hỗn hợp."
      },
      {
        "label": "D",
        "text": "Dựa trên chế độ sở hữu tư nhân TBCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q23",
    "chapter": "Chương 4",
    "number": 23,
    "question": "Bản chất tư tưởng - văn hóa của nền dân chủ XHCN là:",
    "options": [
      {
        "label": "A",
        "text": "Lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng."
      },
      {
        "label": "B",
        "text": "Lấy hệ tư tưởng tư sản làm nền tảng."
      },
      {
        "label": "C",
        "text": "Lấy tư tưởng tôn giáo làm nền tảng."
      },
      {
        "label": "D",
        "text": "Không có nền tảng tư tưởng (phi tư tưởng)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q24",
    "chapter": "Chương 4",
    "number": 24,
    "question": "So với dân chủ tư sản, dân chủ xã hội chủ nghĩa:",
    "options": [
      {
        "label": "A",
        "text": "Phục vụ lợi ích cho đại đa số."
      },
      {
        "label": "B",
        "text": "Phục vụ lợi ích cho thiểu số."
      },
      {
        "label": "C",
        "text": "Thực hiện đa nguyên chính trị."
      },
      {
        "label": "D",
        "text": "Dựa trên chế độ tư hữu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q25",
    "chapter": "Chương 4",
    "number": 25,
    "question": "So với dân chủ xã hội chủ nghĩa, dân chủ tư sản:",
    "options": [
      {
        "label": "A",
        "text": "Mang bản chất của giai cấp tư sản, lợi ích đối lập với nhân dân lao động."
      },
      {
        "label": "B",
        "text": "Mang bản chất của giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Do Đảng Cộng sản lãnh đạo."
      },
      {
        "label": "D",
        "text": "Dựa trên chế độ công hữu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q26",
    "chapter": "Chương 4",
    "number": 26,
    "question": "Dân chủ XHCN thực hiện nhất nguyên về chính trị, nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Do một đảng duy nhất là Đảng Cộng sản lãnh đạo."
      },
      {
        "label": "B",
        "text": "Do nhiều đảng phái cùng lãnh đạo."
      },
      {
        "label": "C",
        "text": "Do một cá nhân lãnh đạo."
      },
      {
        "label": "D",
        "text": "Không có đảng phái nào lãnh đạo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q27",
    "chapter": "Chương 4",
    "number": 27,
    "question": "Cơ sở kinh tế của dân chủ tư sản là:",
    "options": [
      {
        "label": "A",
        "text": "Tư hữu về các tư liệu sản xuất chủ yếu."
      },
      {
        "label": "B",
        "text": "Công hữu về các tư liệu sản xuất chủ yếu."
      },
      {
        "label": "C",
        "text": "Sở hữu tập thể."
      },
      {
        "label": "D",
        "text": "Sở hữu nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q28",
    "chapter": "Chương 4",
    "number": 28,
    "question": "Nhà nước xã hội chủ nghĩa là gì?",
    "options": [
      {
        "label": "A",
        "text": "Một kiểu nhà nước mà sự thống trị chính trị thuộc về giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Một kiểu nhà nước mà sự thống trị chính trị thuộc về giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Một kiểu nhà nước không còn mang bản chất giai cấp."
      },
      {
        "label": "D",
        "text": "Một kiểu nhà nước giống hệt nhà nước phong kiến."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q29",
    "chapter": "Chương 4",
    "number": 29,
    "question": "Nhà nước xã hội chủ nghĩa ra đời là kết quả của:",
    "options": [
      {
        "label": "A",
        "text": "Cuộc cách mạng do giai cấp vô sản và nhân dân lao động tiến hành."
      },
      {
        "label": "B",
        "text": "Cuộc cách mạng tư sản."
      },
      {
        "label": "C",
        "text": "Sự thỏa hiệp giữa giai cấp tư sản và vô sản."
      },
      {
        "label": "D",
        "text": "Sự ban phát của giai cấp tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q30",
    "chapter": "Chương 4",
    "number": 30,
    "question": "Bản chất chính trị của nhà nước xã hội chủ nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Mang bản chất của giai cấp công nhân, có tính nhân dân rộng rãi và tính dân tộc sâu sắc."
      },
      {
        "label": "B",
        "text": "Mang bản chất của giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Mang bản chất của giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Đứng trên mọi giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q31",
    "chapter": "Chương 4",
    "number": 31,
    "question": "Bản chất kinh tế của nhà nước xã hội chủ nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu."
      },
      {
        "label": "B",
        "text": "Dựa trên chế độ tư hữu về tư liệu sản xuất."
      },
      {
        "label": "C",
        "text": "Dựa trên kinh tế tư bản nhà nước."
      },
      {
        "label": "D",
        "text": "Dựa trên kinh tế hàng hóa nhỏ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q32",
    "chapter": "Chương 4",
    "number": 32,
    "question": "Bản chất văn hóa, xã hội của nhà nước xã hội chủ nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Dựa trên nền tảng lý luận của chủ nghĩa Mác - Lênin và các giá trị văn hóa tiên tiến."
      },
      {
        "label": "B",
        "text": "Dựa trên hệ tư tưởng tư sản."
      },
      {
        "label": "C",
        "text": "Dựa trên các giá trị văn hóa phong kiến."
      },
      {
        "label": "D",
        "text": "Dựa trên các học thuyết tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q33",
    "chapter": "Chương 4",
    "number": 33,
    "question": "Căn cứ vào phạm vi tác động, chức năng của nhà nước XHCN được chia thành:",
    "options": [
      {
        "label": "A",
        "text": "Chức năng đối nội và chức năng đối ngoại."
      },
      {
        "label": "B",
        "text": "Chức năng chính trị và kinh tế."
      },
      {
        "label": "C",
        "text": "Chức năng trấn áp và tổ chức."
      },
      {
        "label": "D",
        "text": "Chức năng giai cấp và xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q34",
    "chapter": "Chương 4",
    "number": 34,
    "question": "Căn cứ vào lĩnh vực tác động, chức năng của nhà nước XHCN được chia thành:",
    "options": [
      {
        "label": "A",
        "text": "Chức năng chính trị, kinh tế, văn hóa, xã hội,..."
      },
      {
        "label": "B",
        "text": "Chức năng đối nội và đối ngoại."
      },
      {
        "label": "C",
        "text": "Chức năng giai cấp và xã hội."
      },
      {
        "label": "D",
        "text": "Chức năng lập pháp, hành pháp, tư pháp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q35",
    "chapter": "Chương 4",
    "number": 35,
    "question": "Căn cứ vào tính chất của quyền lực, chức năng của nhà nước XHCN được chia thành:",
    "options": [
      {
        "label": "A",
        "text": "Chức năng giai cấp (trấn áp) và chức năng xã hội (tổ chức và xây dựng)."
      },
      {
        "label": "B",
        "text": "Chức năng đối nội và đối ngoại."
      },
      {
        "label": "C",
        "text": "Chức năng chính trị và kinh tế."
      },
      {
        "label": "D",
        "text": "Chức năng lập pháp và hành pháp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q36",
    "chapter": "Chương 4",
    "number": 36,
    "question": "Mối quan hệ giữa dân chủ XHCN và nhà nước XHCN là:",
    "options": [
      {
        "label": "A",
        "text": "Dân chủ XHCN là cơ sở, nền tảng cho nhà nước XHCN; nhà nước XHCN là công cụ thực hiện dân chủ XHCN."
      },
      {
        "label": "B",
        "text": "Dân chủ XHCN và nhà nước XHCN tồn tại độc lập, không liên quan."
      },
      {
        "label": "C",
        "text": "Dân chủ XHCN mâu thuẫn, đối lập với nhà nước XHCN."
      },
      {
        "label": "D",
        "text": "Nhà nước XHCN là cơ sở cho dân chủ XHCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q37",
    "chapter": "Chương 4",
    "number": 37,
    "question": "Tại sao nói dân chủ XHCN là cơ sở của nhà nước XHCN?",
    "options": [
      {
        "label": "A",
        "text": "Vì chỉ trong xã hội dân chủ XHCN, nhân dân mới thực sự tham gia vào hoạt động của nhà nước."
      },
      {
        "label": "B",
        "text": "Vì nhà nước XHCN đẻ ra dân chủ XHCN."
      },
      {
        "label": "C",
        "text": "Vì dân chủ XHCN chỉ là hình thức."
      },
      {
        "label": "D",
        "text": "Vì nhà nước XHCN không cần dân chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q38",
    "chapter": "Chương 4",
    "number": 38,
    "question": "Tại sao nói nhà nước XHCN là công cụ thực hiện dân chủ XHCN?",
    "options": [
      {
        "label": "A",
        "text": "Vì nhà nước thể chế hóa ý chí của nhân dân thành pháp luật, bảo vệ quyền lợi nhân dân."
      },
      {
        "label": "B",
        "text": "Vì nhà nước đứng trên dân chủ."
      },
      {
        "label": "C",
        "text": "Vì nhà nước hạn chế quyền dân chủ."
      },
      {
        "label": "D",
        "text": "Vì nhà nước chỉ phục vụ giai cấp thống trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q39",
    "chapter": "Chương 4",
    "number": 39,
    "question": "Nền dân chủ xã hội chủ nghĩa ở Việt Nam ra đời từ khi nào?",
    "options": [
      {
        "label": "A",
        "text": "Sau thắng lợi của Cách mạng Tháng Tám năm 1945 (với chế độ dân chủ nhân dân)."
      },
      {
        "label": "B",
        "text": "Sau khi Đảng Cộng sản Việt Nam ra đời (1930)."
      },
      {
        "label": "C",
        "text": "Sau khi bắt đầu công cuộc Đổi mới (1986)."
      },
      {
        "label": "D",
        "text": "Sau khi thống nhất đất nước (1975)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q40",
    "chapter": "Chương 4",
    "number": 40,
    "question": "Bản chất của nền dân chủ xã hội chủ nghĩa ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Vừa là mục tiêu, vừa là động lực của sự nghiệp xây dựng chủ nghĩa xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ là mục tiêu."
      },
      {
        "label": "C",
        "text": "Chỉ là động lực."
      },
      {
        "label": "D",
        "text": "Là một phương tiện để phát triển kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q41",
    "chapter": "Chương 4",
    "number": 41,
    "question": "Dân chủ xã hội chủ nghĩa ở Việt Nam phải:",
    "options": [
      {
        "label": "A",
        "text": "Gắn liền với kỷ cương và phải thể chế hóa bằng pháp luật."
      },
      {
        "label": "B",
        "text": "Tách rời pháp luật, kỷ cương."
      },
      {
        "label": "C",
        "text": "Là dân chủ vô tổ chức, vô kỷ luật."
      },
      {
        "label": "D",
        "text": "Chỉ là dân chủ hình thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q42",
    "chapter": "Chương 4",
    "number": 42,
    "question": "Hình thức dân chủ gián tiếp (dân chủ đại diện) ở Việt Nam được thực hiện thông qua:",
    "options": [
      {
        "label": "A",
        "text": "Việc nhân dân \"ủy quyền\" cho các tổ chức (Quốc hội, HĐND) do nhân dân bầu ra."
      },
      {
        "label": "B",
        "text": "Việc nhân dân trực tiếp quyết định mọi công việc."
      },
      {
        "label": "C",
        "text": "Việc nhân dân bầu ra Tổng thống."
      },
      {
        "label": "D",
        "text": "Việc trưng cầu dân ý."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q43",
    "chapter": "Chương 4",
    "number": 43,
    "question": "Hình thức dân chủ trực tiếp ở Việt Nam được thể hiện ở:",
    "options": [
      {
        "label": "A",
        "text": "Quyền được thông tin, bàn bạc công việc, kiểm tra, giám sát hoạt động của cơ quan nhà nước."
      },
      {
        "label": "B",
        "text": "Chỉ thông qua bầu cử Quốc hội."
      },
      {
        "label": "C",
        "text": "Chỉ thông qua hoạt động của Mặt trận Tổ quốc."
      },
      {
        "label": "D",
        "text": "Không tồn tại ở Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q44",
    "chapter": "Chương 4",
    "number": 44,
    "question": "\"Nhà nước pháp quyền\" được hiểu là:",
    "options": [
      {
        "label": "A",
        "text": "Nhà nước mà ở đó, tất cả mọi công dân, cơ quan nhà nước đều phải tuân thủ pháp luật, pháp luật là tối thượng."
      },
      {
        "label": "B",
        "text": "Nhà nước do các luật sư điều hành."
      },
      {
        "label": "C",
        "text": "Nhà nước chuyên sử dụng pháp luật để cai trị."
      },
      {
        "label": "D",
        "text": "Nhà nước không cần đến pháp luật."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q45",
    "chapter": "Chương 4",
    "number": 45,
    "question": "Quan điểm của Đảng Cộng sản Việt Nam về nhà nước pháp quyền XHCN không bao gồm nội dung nào?",
    "options": [
      {
        "label": "A",
        "text": "Thực hiện đa nguyên chính trị, tam quyền phân lập."
      },
      {
        "label": "B",
        "text": "Đề cao vai trò tối thượng của Hiến pháp và pháp luật."
      },
      {
        "label": "C",
        "text": "Đề cao quyền lợi và nghĩa vụ của công dân, đảm bảo quyền con người."
      },
      {
        "label": "D",
        "text": "Nhà nước chịu sự giám sát của nhân dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q46",
    "chapter": "Chương 4",
    "number": 46,
    "question": "Đặc điểm của nhà nước pháp quyền XHCN ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Nhà nước của dân, do dân và vì dân."
      },
      {
        "label": "B",
        "text": "Nhà nước của giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Nhà nước đứng trên nhân dân."
      },
      {
        "label": "D",
        "text": "Nhà nước không chịu sự lãnh đạo của Đảng nào."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q47",
    "chapter": "Chương 4",
    "number": 47,
    "question": "Quyền lực nhà nước trong nhà nước pháp quyền XHCN ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Thống nhất, có sự phân công, phối hợp và kiểm soát giữa các cơ quan lập pháp, hành pháp, tư pháp."
      },
      {
        "label": "B",
        "text": "Phân chia thành tam quyền phân lập, đối trọng nhau."
      },
      {
        "label": "C",
        "text": "Tập trung toàn bộ vào cơ quan hành pháp."
      },
      {
        "label": "D",
        "text": "Tập trung toàn bộ vào cơ quan tư pháp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q48",
    "chapter": "Chương 4",
    "number": 48,
    "question": "Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam đặt dưới sự lãnh đạo của:",
    "options": [
      {
        "label": "A",
        "text": "Đảng Cộng sản Việt Nam."
      },
      {
        "label": "B",
        "text": "Giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Không có đảng nào lãnh đạo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q49",
    "chapter": "Chương 4",
    "number": 49,
    "question": "Nhà nước pháp quyền XHCN ở Việt Nam tôn trọng:",
    "options": [
      {
        "label": "A",
        "text": "Quyền con người, coi con người là chủ thể, là trung tâm của sự phát triển."
      },
      {
        "label": "B",
        "text": "Chỉ quyền của giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ quyền của cán bộ, công chức."
      },
      {
        "label": "D",
        "text": "Chỉ quyền của Đảng viên."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q50",
    "chapter": "Chương 4",
    "number": 50,
    "question": "Nguyên tắc tổ chức và hoạt động của bộ máy nhà nước pháp quyền XHCN ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Tập trung dân chủ."
      },
      {
        "label": "B",
        "text": "Tam quyền phân lập."
      },
      {
        "label": "C",
        "text": "Tự do tuyệt đối."
      },
      {
        "label": "D",
        "text": "Quân chủ chuyên chế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q51",
    "chapter": "Chương 4",
    "number": 51,
    "question": "Một trong những phương hướng để phát huy dân chủ XHCN ở Việt Nam hiện nay là:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng, hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Xóa bỏ kinh tế thị trường."
      },
      {
        "label": "C",
        "text": "Thực hiện chế độ đa đảng."
      },
      {
        "label": "D",
        "text": "Giảm vai trò của Đảng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q52",
    "chapter": "Chương 4",
    "number": 52,
    "question": "Điều kiện tiên quyết để xây dựng nền dân chủ XHCN Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh."
      },
      {
        "label": "B",
        "text": "Phát triển kinh tế tư nhân."
      },
      {
        "label": "C",
        "text": "Hội nhập quốc tế sâu rộng."
      },
      {
        "label": "D",
        "text": "Xóa bỏ nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q53",
    "chapter": "Chương 4",
    "number": 53,
    "question": "Để thực thi dân chủ XHCN, cần phải:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa vững mạnh."
      },
      {
        "label": "B",
        "text": "Làm suy yếu nhà nước."
      },
      {
        "label": "C",
        "text": "Xây dựng nhà nước pháp quyền tư sản."
      },
      {
        "label": "D",
        "text": "Giảm vai trò của pháp luật."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q54",
    "chapter": "Chương 4",
    "number": 54,
    "question": "Tổ chức nào có vai trò quan trọng trong việc xây dựng hệ thống giám sát, phản biện xã hội ở Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "Các tổ chức chính trị-xã hội (Mặt trận Tổ quốc, Công đoàn...)."
      },
      {
        "label": "B",
        "text": "Chỉ các cơ quan nhà nước."
      },
      {
        "label": "C",
        "text": "Các tổ chức phi chính phủ nước ngoài."
      },
      {
        "label": "D",
        "text": "Các doanh nghiệp tư nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q55",
    "chapter": "Chương 4",
    "number": 55,
    "question": "Một trong những phương hướng để tiếp tục xây dựng và hoàn thiện Nhà nước pháp quyền XHCN ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng Nhà nước pháp quyền XHCN dưới sự lãnh đạo của Đảng."
      },
      {
        "label": "B",
        "text": "Xây dựng nhà nước độc lập, không chịu sự lãnh đạo của Đảng."
      },
      {
        "label": "C",
        "text": "Thực hiện tam quyền phân lập triệt để."
      },
      {
        "label": "D",
        "text": "Giữ nguyên thể chế và phương thức hoạt động."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q56",
    "chapter": "Chương 4",
    "number": 56,
    "question": "Để xây dựng Nhà nước pháp quyền XHCN, cần phải:",
    "options": [
      {
        "label": "A",
        "text": "Cải cách thể chế và phương thức hoạt động của Nhà nước."
      },
      {
        "label": "B",
        "text": "Tăng cường biên chế, mở rộng bộ máy."
      },
      {
        "label": "C",
        "text": "Giảm bớt sự kiểm soát quyền lực."
      },
      {
        "label": "D",
        "text": "Chỉ tập trung vào cơ quan lập pháp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q57",
    "chapter": "Chương 4",
    "number": 57,
    "question": "Yếu tố con người trong xây dựng nhà nước pháp quyền XHCN ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng đội ngũ cán bộ, công chức trong sạch, có năng lực."
      },
      {
        "label": "B",
        "text": "Không quan tâm đến đội ngũ cán bộ."
      },
      {
        "label": "C",
        "text": "Chấp nhận tình trạng tham nhũng, lãng phí."
      },
      {
        "label": "D",
        "text": "Sử dụng cán bộ dựa trên quan hệ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q58",
    "chapter": "Chương 4",
    "number": 58,
    "question": "Nhiệm vụ quan trọng trong xây dựng nhà nước pháp quyền XHCN ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Đấu tranh phòng, chống tham nhũng, lãng phí, quan liêu."
      },
      {
        "label": "B",
        "text": "Chấp nhận tham nhũng như một phần của kinh tế thị trường."
      },
      {
        "label": "C",
        "text": "Chỉ chống lãng phí, không chống tham nhũng."
      },
      {
        "label": "D",
        "text": "Chỉ chống quan liêu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q59",
    "chapter": "Chương 4",
    "number": 59,
    "question": "Trong các nền dân chủ, nền dân chủ nào được coi là rộng rãi nhất trong lịch sử?",
    "options": [
      {
        "label": "A",
        "text": "Dân chủ xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Dân chủ chủ nô."
      },
      {
        "label": "C",
        "text": "Dân chủ tư sản."
      },
      {
        "label": "D",
        "text": "Dân chủ quân sự."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q60",
    "chapter": "Chương 4",
    "number": 60,
    "question": "V.I.Lênin gọi nhà nước XHCN là nhà nước \"nửa nhà nước\" hay \"không còn nguyên nghĩa\" vì:",
    "options": [
      {
        "label": "A",
        "text": "Nó không còn là công cụ của thiểu số áp bức đa số, mà là của đa số trấn áp thiểu số, và sẽ tự tiêu vong."
      },
      {
        "label": "B",
        "text": "Nó là nhà nước yếu kém."
      },
      {
        "label": "C",
        "text": "Nó chỉ tồn tại trong một thời gian ngắn."
      },
      {
        "label": "D",
        "text": "Nó không có quân đội và cảnh sát."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q61",
    "chapter": "Chương 4",
    "number": 61,
    "question": "Dân chủ trên phương diện chế độ xã hội và trong lĩnh vực chính trị được hiểu là:",
    "options": [
      {
        "label": "A",
        "text": "Một hình thức hay hình thái nhà nước, một chế độ dân chủ."
      },
      {
        "label": "B",
        "text": "Một giá trị nhân loại chung."
      },
      {
        "label": "C",
        "text": "Một nguyên tắc tổ chức."
      },
      {
        "label": "D",
        "text": "Một sản phẩm của lịch sử."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q62",
    "chapter": "Chương 4",
    "number": 62,
    "question": "\"Dân chủ là một nguyên tắc\" kết hợp với nguyên tắc nào để hình thành nguyên tắc tập trung dân chủ?",
    "options": [
      {
        "label": "A",
        "text": "Nguyên tắc tập trung."
      },
      {
        "label": "B",
        "text": "Nguyên tắc tự do."
      },
      {
        "label": "C",
        "text": "Nguyên tắc bình đẳng."
      },
      {
        "label": "D",
        "text": "Nguyên tắc pháp chế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q63",
    "chapter": "Chương 4",
    "number": 63,
    "question": "Nền dân chủ chủ nô ở A-ten (Hy Lạp cổ đại) không bao gồm:",
    "options": [
      {
        "label": "A",
        "text": "Nô lệ và phụ nữ."
      },
      {
        "label": "B",
        "text": "Chủ nô."
      },
      {
        "label": "C",
        "text": "Tăng lữ."
      },
      {
        "label": "D",
        "text": "Thương gia."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q64",
    "chapter": "Chương 4",
    "number": 64,
    "question": "So sánh dân chủ XHCN và dân chủ tư sản, điểm khác biệt cơ bản về kinh tế là:",
    "options": [
      {
        "label": "A",
        "text": "Chế độ sở hữu (công hữu vs tư hữu)."
      },
      {
        "label": "B",
        "text": "Trình độ phát triển LLSX."
      },
      {
        "label": "C",
        "text": "Mức độ dân chủ."
      },
      {
        "label": "D",
        "text": "Bản chất giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q65",
    "chapter": "Chương 4",
    "number": 65,
    "question": "So sánh dân chủ XHCN và dân chủ tư sản, điểm khác biệt cơ bản về chính trị là:",
    "options": [
      {
        "label": "A",
        "text": "Bản chất giai cấp (công nhân vs tư sản) và vai trò lãnh đạo (Đảng Cộng sản vs các đảng tư sản)."
      },
      {
        "label": "B",
        "text": "Cơ sở kinh tế."
      },
      {
        "label": "C",
        "text": "Mức độ tự do báo chí."
      },
      {
        "label": "D",
        "text": "Quyền con người."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q66",
    "chapter": "Chương 4",
    "number": 66,
    "question": "Nhà nước XHCN là kiểu nhà nước cuối cùng trong lịch sử vì:",
    "options": [
      {
        "label": "A",
        "text": "Sứ mệnh của nó là xây dựng xã hội không còn giai cấp, khi đó nhà nước sẽ tự tiêu vong."
      },
      {
        "label": "B",
        "text": "Nó là nhà nước hoàn thiện nhất."
      },
      {
        "label": "C",
        "text": "Nó sẽ tồn tại vĩnh viễn."
      },
      {
        "label": "D",
        "text": "Nó sẽ bị thay thế bởi nhà nước khác."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q67",
    "chapter": "Chương 4",
    "number": 67,
    "question": "Chức năng tổ chức và xây dựng (chức năng xã hội) của nhà nước XHCN thể hiện ở:",
    "options": [
      {
        "label": "A",
        "text": "Tổ chức quản lý kinh tế, văn hóa, xã hội, xây dựng cơ sở vật chất cho CNXH."
      },
      {
        "label": "B",
        "text": "Trấn áp các thế lực thù địch."
      },
      {
        "label": "C",
        "text": "Bảo vệ biên giới, chống xâm lược."
      },
      {
        "label": "D",
        "text": "Mở rộng quan hệ đối ngoại."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q68",
    "chapter": "Chương 4",
    "number": 68,
    "question": "Chức năng trấn áp (chức năng giai cấp) của nhà nước XHCN nhằm vào:",
    "options": [
      {
        "label": "A",
        "text": "Những phần tử thù địch, chống lại nhân dân, phá hoại sự nghiệp CNXH."
      },
      {
        "label": "B",
        "text": "Toàn thể nhân dân lao động."
      },
      {
        "label": "C",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Giai cấp nông dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q69",
    "chapter": "Chương 4",
    "number": 69,
    "question": "Mối quan hệ giữa Đảng Cộng sản, Nhà nước XHCN và nhân dân là:",
    "options": [
      {
        "label": "A",
        "text": "Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ."
      },
      {
        "label": "B",
        "text": "Nhà nước lãnh đạo, Đảng quản lý, nhân dân làm chủ."
      },
      {
        "label": "C",
        "text": "Nhân dân lãnh đạo, Đảng quản lý, Nhà nước thực hiện."
      },
      {
        "label": "D",
        "text": "Đảng, Nhà nước, nhân dân là ba thực thể độc lập."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q70",
    "chapter": "Chương 4",
    "number": 70,
    "question": "Ở Việt Nam, chế độ \"dân chủ nhân dân\" ra đời năm 1945 là:",
    "options": [
      {
        "label": "A",
        "text": "Hình thức ban đầu của nền dân chủ XHCN."
      },
      {
        "label": "B",
        "text": "Một hình thức của dân chủ tư sản."
      },
      {
        "label": "C",
        "text": "Một hình thức của dân chủ chủ nô."
      },
      {
        "label": "D",
        "text": "Giống hệt nền dân chủ XHCN sau này."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q71",
    "chapter": "Chương 4",
    "number": 71,
    "question": "\"Dân chủ gắn liền với kỷ cương\" có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Thực hiện dân chủ phải trong khuôn khổ pháp luật, có tổ chức."
      },
      {
        "label": "B",
        "text": "Dân chủ là tự do tuyệt đối, muốn làm gì thì làm."
      },
      {
        "label": "C",
        "text": "Chỉ có kỷ cương, không có dân chủ."
      },
      {
        "label": "D",
        "text": "Chỉ có dân chủ, không có kỷ cương."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q72",
    "chapter": "Chương 4",
    "number": 72,
    "question": "Hình thức dân chủ trực tiếp ở Việt Nam được thể hiện rõ nhất ở cấp nào?",
    "options": [
      {
        "label": "A",
        "text": "Cấp cơ sở (xã, phường, thị trấn) qua quy chế dân chủ cơ sở."
      },
      {
        "label": "B",
        "text": "Cấp Trung ương (Quốc hội)."
      },
      {
        "label": "C",
        "text": "Cấp Tỉnh."
      },
      {
        "label": "D",
        "text": "Cấp Huyện."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q73",
    "chapter": "Chương 4",
    "number": 73,
    "question": "Nhà nước pháp quyền (Rule of Law) khác với nhà nước pháp trị (Rule by Law) ở chỗ:",
    "options": [
      {
        "label": "A",
        "text": "Trong nhà nước pháp quyền, nhà nước cũng phải tuân thủ pháp luật."
      },
      {
        "label": "B",
        "text": "Trong nhà nước pháp trị, nhà nước đứng trên pháp luật."
      },
      {
        "label": "C",
        "text": "Cả A và B đều đúng."
      },
      {
        "label": "D",
        "text": "Cả A và B đều sai."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": "Chương 4_Q74",
    "chapter": "Chương 4",
    "number": 74,
    "question": "Nhà nước pháp quyền XHCN Việt Nam là nhà nước của ai, do ai, vì ai?",
    "options": [
      {
        "label": "A",
        "text": "Của nhân dân, do nhân dân, vì nhân dân."
      },
      {
        "label": "B",
        "text": "Của giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Của Đảng Cộng sản."
      },
      {
        "label": "D",
        "text": "Của liên minh công-nông-trí."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q75",
    "chapter": "Chương 4",
    "number": 75,
    "question": "Cơ quan nào giữ quyền lập pháp ở Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "Quốc hội."
      },
      {
        "label": "B",
        "text": "Chính phủ."
      },
      {
        "label": "C",
        "text": "Tòa án nhân dân."
      },
      {
        "label": "D",
        "text": "Viện kiểm sát nhân dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q76",
    "chapter": "Chương 4",
    "number": 76,
    "question": "Cơ quan nào giữ quyền hành pháp ở Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "Chính phủ."
      },
      {
        "label": "B",
        "text": "Quốc hội."
      },
      {
        "label": "C",
        "text": "Tòa án nhân dân."
      },
      {
        "label": "D",
        "text": "Viện kiểm sát nhân dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q77",
    "chapter": "Chương 4",
    "number": 77,
    "question": "Cơ quan nào giữ quyền tư pháp ở Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "Tòa án nhân dân."
      },
      {
        "label": "B",
        "text": "Quốc hội."
      },
      {
        "label": "C",
        "text": "Chính phủ."
      },
      {
        "label": "D",
        "text": "Mặt trận Tổ quốc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q78",
    "chapter": "Chương 4",
    "number": 78,
    "question": "Sự \"kiểm soát\" quyền lực nhà nước ở Việt Nam nhằm mục đích gì?",
    "options": [
      {
        "label": "A",
        "text": "Tránh lạm quyền, bảo đảm quyền lực thuộc về nhân dân."
      },
      {
        "label": "B",
        "text": "Làm suy yếu quyền lực nhà nước."
      },
      {
        "label": "C",
        "text": "Gây khó khăn cho các cơ quan nhà nước."
      },
      {
        "label": "D",
        "text": "Tạo ra sự đối lập giữa các nhánh quyền lực."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q79",
    "chapter": "Chương 4",
    "number": 79,
    "question": "Yếu tố nào là điều kiện tiên quyết (điều kiện đầu tiên) để phát huy dân chủ XHCN ở Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh."
      },
      {
        "label": "B",
        "text": "Xây dựng, hoàn thiện thể chế kinh tế thị trường định hướng XHCN."
      },
      {
        "label": "C",
        "text": "Xây dựng Nhà nước pháp quyền XHCN vững mạnh."
      },
      {
        "label": "D",
        "text": "Nâng cao vai trò của các tổ chức chính trị-xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q80",
    "chapter": "Chương 4",
    "number": 80,
    "question": "Tại sao xây dựng thể chế kinh tế thị trường định hướng XHCN lại là cơ sở để xây dựng dân chủ XHCN?",
    "options": [
      {
        "label": "A",
        "text": "Vì nó tạo ra cơ sở vật chất, kinh tế vững chắc cho nền dân chủ."
      },
      {
        "label": "B",
        "text": "Vì kinh tế thị trường tự nó đẻ ra dân chủ."
      },
      {
        "label": "C",
        "text": "Vì nó xóa bỏ vai trò của nhà nước."
      },
      {
        "label": "D",
        "text": "Vì nó xóa bỏ vai trò của Đảng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q81",
    "chapter": "Chương 4",
    "number": 81,
    "question": "\"Cải cách thể chế và phương thức hoạt động của Nhà nước\" là phương hướng để:",
    "options": [
      {
        "label": "A",
        "text": "Tiếp tục xây dựng và hoàn thiện Nhà nước pháp quyền XHCN."
      },
      {
        "label": "B",
        "text": "Phát huy dân chủ XHCN."
      },
      {
        "label": "C",
        "text": "Xây dựng Đảng."
      },
      {
        "label": "D",
        "text": "Phát triển kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q82",
    "chapter": "Chương 4",
    "number": 82,
    "question": "Lênin coi nền dân chủ XHCN là nền dân chủ:",
    "options": [
      {
        "label": "A",
        "text": "Gấp triệu lần dân chủ tư sản."
      },
      {
        "label": "B",
        "text": "Tương đương dân chủ tư sản."
      },
      {
        "label": "C",
        "text": "Kém dân chủ hơn dân chủ tư sản."
      },
      {
        "label": "D",
        "text": "Chỉ là dân chủ hình thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q83",
    "chapter": "Chương 4",
    "number": 83,
    "question": "Trong chế độ phong kiến, hình thức nhà nước phổ biến là:",
    "options": [
      {
        "label": "A",
        "text": "Độc tài chuyên chế."
      },
      {
        "label": "B",
        "text": "Dân chủ."
      },
      {
        "label": "C",
        "text": "Cộng hòa."
      },
      {
        "label": "D",
        "text": "Quân chủ lập hiến."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q84",
    "chapter": "Chương 4",
    "number": 84,
    "question": "Nền dân chủ XHCN là nền dân chủ...",
    "options": [
      {
        "label": "A",
        "text": "Rộng rãi nhất trong lịch sử."
      },
      {
        "label": "B",
        "text": "Hẹp hòi nhất trong lịch sử."
      },
      {
        "label": "C",
        "text": "Chỉ dành cho giai cấp thống trị."
      },
      {
        "label": "D",
        "text": "Chỉ dành cho thiểu số."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q85",
    "chapter": "Chương 4",
    "number": 85,
    "question": "Bản chất giai cấp công nhân của nhà nước XHCN thể hiện ở:",
    "options": [
      {
        "label": "A",
        "text": "Sự lãnh đạo của Đảng Cộng sản - đội tiên phong của giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Nhà nước chỉ bao gồm thành phần công nhân."
      },
      {
        "label": "C",
        "text": "Nhà nước chỉ phục vụ lợi ích của công nhân."
      },
      {
        "label": "D",
        "text": "Nhà nước bóc lột các giai cấp khác."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q86",
    "chapter": "Chương 4",
    "number": 86,
    "question": "Tính nhân dân rộng rãi của nhà nước XHCN thể hiện ở:",
    "options": [
      {
        "label": "A",
        "text": "Nhà nước bảo vệ lợi ích của nhân dân lao động, là nhà nước của dân, do dân, vì dân."
      },
      {
        "label": "B",
        "text": "Nhà nước đứng trên nhân dân."
      },
      {
        "label": "C",
        "text": "Nhà nước bị nhân dân kiểm soát."
      },
      {
        "label": "D",
        "text": "Nhà nước không có tính giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q87",
    "chapter": "Chương 4",
    "number": 87,
    "question": "Tính dân tộc sâu sắc của nhà nước XHCN thể hiện ở:",
    "options": [
      {
        "label": "A",
        "text": "Nhà nước kế thừa, phát huy những giá trị, truyền thống tốt đẹp của dân tộc."
      },
      {
        "label": "B",
        "text": "Nhà nước theo chủ nghĩa dân tộc hẹp hòi."
      },
      {
        "label": "C",
        "text": "Nhà nước chỉ quan tâm đến dân tộc đa số."
      },
      {
        "label": "D",
        "text": "Nhà nước xóa bỏ bản sắc dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q88",
    "chapter": "Chương 4",
    "number": 88,
    "question": "Chức năng đối nội của nhà nước XHCN là:",
    "options": [
      {
        "label": "A",
        "text": "Quản lý mọi mặt đời sống xã hội trong nước (kinh tế, văn hóa, an ninh...)."
      },
      {
        "label": "B",
        "text": "Mở rộng quan hệ hợp tác quốc tế."
      },
      {
        "label": "C",
        "text": "Chống lại sự xâm lược từ bên ngoài."
      },
      {
        "label": "D",
        "text": "Vay vốn nước ngoài."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q89",
    "chapter": "Chương 4",
    "number": 89,
    "question": "Chức năng đối ngoại của nhà nước XHCN là:",
    "options": [
      {
        "label": "A",
        "text": "Bảo vệ Tổ quốc, mở rộng quan hệ hữu nghị, hợp tác quốc tế."
      },
      {
        "label": "B",
        "text": "Chỉ tập trung bảo vệ Tổ quốc."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung hợp tác quốc tế."
      },
      {
        "label": "D",
        "text": "Quản lý kinh tế trong nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q90",
    "chapter": "Chương 4",
    "number": 90,
    "question": "Dân chủ XHCN và nhà nước XHCN có mối quan hệ:",
    "options": [
      {
        "label": "A",
        "text": "Thống nhất biện chứng, không thể tách rời."
      },
      {
        "label": "B",
        "text": "Đối lập, mâu thuẫn nhau."
      },
      {
        "label": "C",
        "text": "Tồn tại song song, không liên quan."
      },
      {
        "label": "D",
        "text": "Cái này phủ định cái kia."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q91",
    "chapter": "Chương 4",
    "number": 91,
    "question": "Ở Việt Nam, nền dân chủ XHCN được xây dựng trên nền tảng:",
    "options": [
      {
        "label": "A",
        "text": "Liên minh giữa giai cấp công nhân, giai cấp nông dân và đội ngũ trí thức."
      },
      {
        "label": "B",
        "text": "Chỉ giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Giai cấp tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q92",
    "chapter": "Chương 4",
    "number": 92,
    "question": "Hình thức dân chủ gián tiếp còn được gọi là:",
    "options": [
      {
        "label": "A",
        "text": "Dân chủ đại diện."
      },
      {
        "label": "B",
        "text": "Dân chủ trực tiếp."
      },
      {
        "label": "C",
        "text": "Dân chủ cơ sở."
      },
      {
        "label": "D",
        "text": "Dân chủ thuần túy."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q93",
    "chapter": "Chương 4",
    "number": 93,
    "question": "Quyền nào sau đây là biểu hiện của dân chủ trực tiếp?",
    "options": [
      {
        "label": "A",
        "text": "Quyền biểu quyết khi nhà nước trưng cầu ý dân."
      },
      {
        "label": "B",
        "text": "Quyền bầu cử đại biểu Quốc hội."
      },
      {
        "label": "C",
        "text": "Quyền bầu cử đại biểu Hội đồng nhân dân."
      },
      {
        "label": "D",
        "text": "Quyền ứng cử."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q94",
    "chapter": "Chương 4",
    "number": 94,
    "question": "Quyền nào sau đây là biểu hiện của dân chủ gián tiếp?",
    "options": [
      {
        "label": "A",
        "text": "Quyền bầu cử đại biểu Quốc hội."
      },
      {
        "label": "B",
        "text": "Quyền góp ý trực tiếp vào dự thảo luật."
      },
      {
        "label": "C",
        "text": "Quyền khiếu nại, tố cáo."
      },
      {
        "label": "D",
        "text": "Quyền tham gia vào các cuộc họp ở thôn, xóm."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q95",
    "chapter": "Chương 4",
    "number": 95,
    "question": "Nhà nước pháp quyền XHCN Việt Nam đề cao vai trò tối thượng của:",
    "options": [
      {
        "label": "A",
        "text": "Hiến pháp và pháp luật."
      },
      {
        "label": "B",
        "text": "Ý chí của nhà lãnh đạo."
      },
      {
        "label": "C",
        "text": "Lợi ích của giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Các quy định của tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q96",
    "chapter": "Chương 4",
    "number": 96,
    "question": "Trong nhà nước pháp quyền XHCN Việt Nam, quyền lực nhà nước là:",
    "options": [
      {
        "label": "A",
        "text": "Thống nhất."
      },
      {
        "label": "B",
        "text": "Phân lập (tam quyền phân lập)."
      },
      {
        "label": "C",
        "text": "Vô hạn."
      },
      {
        "label": "D",
        "text": "Không bị kiểm soát."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q97",
    "chapter": "Chương 4",
    "number": 97,
    "question": "Cơ quan nào thực hiện quyền giám sát tối cao đối với toàn bộ hoạt động của Nhà nước?",
    "options": [
      {
        "label": "A",
        "text": "Quốc hội."
      },
      {
        "label": "B",
        "text": "Chính phủ."
      },
      {
        "label": "C",
        "text": "Tòa án nhân dân tối cao."
      },
      {
        "label": "D",
        "text": "Viện kiểm sát nhân dân tối cao."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q98",
    "chapter": "Chương 4",
    "number": 98,
    "question": "Đặc điểm \"tôn trọng quyền con người\" trong nhà nước pháp quyền XHCN Việt Nam thể hiện:",
    "options": [
      {
        "label": "A",
        "text": "Quyền con người, quyền công dân được Hiến pháp và pháp luật ghi nhận, bảo vệ."
      },
      {
        "label": "B",
        "text": "Quyền con người là vô hạn, không bị giới hạn."
      },
      {
        "label": "C",
        "text": "Chỉ tôn trọng quyền của công dân Việt Nam."
      },
      {
        "label": "D",
        "text": "Chỉ tôn trọng quyền chính trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q99",
    "chapter": "Chương 4",
    "number": 99,
    "question": "\"Nâng cao vai trò của các tổ chức chính trị-xã hội\" là phương hướng để:",
    "options": [
      {
        "label": "A",
        "text": "Phát huy dân chủ XHCN."
      },
      {
        "label": "B",
        "text": "Xây dựng Nhà nước pháp quyền XHCN."
      },
      {
        "label": "C",
        "text": "Phát triển kinh tế."
      },
      {
        "label": "D",
        "text": "Xây dựng Đảng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q100",
    "chapter": "Chương 4",
    "number": 100,
    "question": "\"Xây dựng đội ngũ cán bộ, công chức trong sạch, có năng lực\" là phương hướng để:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng Nhà nước pháp quyền XHCN."
      },
      {
        "label": "B",
        "text": "Phát huy dân chủ XHCN."
      },
      {
        "label": "C",
        "text": "Phát triển văn hóa."
      },
      {
        "label": "D",
        "text": "Xây dựng Mặt trận Tổ quốc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q101",
    "chapter": "Chương 4",
    "number": 101,
    "question": "Dân chủ xuất hiện khi nào?",
    "options": [
      {
        "label": "A",
        "text": "Khi xã hội có sự phân chia giai cấp và nhà nước."
      },
      {
        "label": "B",
        "text": "Ngay từ khi xã hội loài người xuất hiện (xã hội nguyên thủy)."
      },
      {
        "label": "C",
        "text": "Chỉ khi chủ nghĩa tư bản ra đời."
      },
      {
        "label": "D",
        "text": "Chỉ khi chủ nghĩa xã hội ra đời."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q102",
    "chapter": "Chương 4",
    "number": 102,
    "question": "Dân chủ XHCN được xem là nền dân chủ:",
    "options": [
      {
        "label": "A",
        "text": "Vừa mang bản chất giai cấp công nhân, vừa có tính nhân dân rộng rãi."
      },
      {
        "label": "B",
        "text": "Chỉ mang bản chất giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ có tính nhân dân rộng rãi."
      },
      {
        "label": "D",
        "text": "Phi giai cấp, phi nhân dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q103",
    "chapter": "Chương 4",
    "number": 103,
    "question": "So với các nền dân chủ trước, dân chủ XHCN là:",
    "options": [
      {
        "label": "A",
        "text": "Nền dân chủ rộng rãi nhất, cho tuyệt đại đa số nhân dân."
      },
      {
        "label": "B",
        "text": "Nền dân chủ hẹp hòi nhất."
      },
      {
        "label": "C",
        "text": "Nền dân chủ chỉ cho thiểu số."
      },
      {
        "label": "D",
        "text": "Nền dân chủ không thực chất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q104",
    "chapter": "Chương 4",
    "number": 104,
    "question": "Nhà nước XHCN ra đời là một tất yếu khách quan vì:",
    "options": [
      {
        "label": "A",
        "text": "Là kết quả của cuộc đấu tranh giai cấp của giai cấp vô sản."
      },
      {
        "label": "B",
        "text": "Là sự ban ơn của giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Là sự phát triển tự nhiên của nhà nước tư sản."
      },
      {
        "label": "D",
        "text": "Là mong muốn của giai cấp phong kiến."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q105",
    "chapter": "Chương 4",
    "number": 105,
    "question": "Chức năng đối ngoại của nhà nước XHCN có bao gồm việc bảo vệ Tổ quốc không?",
    "options": [
      {
        "label": "A",
        "text": "Có, là một trong những nhiệm vụ quan trọng."
      },
      {
        "label": "B",
        "text": "Không, đây là chức năng đối nội."
      },
      {
        "label": "C",
        "text": "Không, nhà nước XHCN không cần bảo vệ Tổ quốc."
      },
      {
        "label": "D",
        "text": "Chỉ khi có chiến tranh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q106",
    "chapter": "Chương 4",
    "number": 106,
    "question": "Nhà nước XHCN có vai trò gì trong việc xây dựng cơ sở vật chất - kỹ thuật cho CNXH?",
    "options": [
      {
        "label": "A",
        "text": "Vai trò tổ chức, quản lý, điều tiết nền kinh tế."
      },
      {
        "label": "B",
        "text": "Không có vai trò gì."
      },
      {
        "label": "C",
        "text": "Chỉ có vai trò trấn áp."
      },
      {
        "label": "D",
        "text": "Chỉ có vai trò lập pháp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q107",
    "chapter": "Chương 4",
    "number": 107,
    "question": "Ở Việt Nam, quyền lực nhà nước thuộc về:",
    "options": [
      {
        "label": "A",
        "text": "Nhân dân."
      },
      {
        "label": "B",
        "text": "Quốc hội."
      },
      {
        "label": "C",
        "text": "Chính phủ."
      },
      {
        "label": "D",
        "text": "Đảng Cộng sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q108",
    "chapter": "Chương 4",
    "number": 108,
    "question": "Ai là người đại diện cao nhất cho ý chí, nguyện vọng và quyền lực của nhân dân?",
    "options": [
      {
        "label": "A",
        "text": "Quốc hội."
      },
      {
        "label": "B",
        "text": "Chủ tịch nước."
      },
      {
        "label": "C",
        "text": "Thủ tướng Chính phủ."
      },
      {
        "label": "D",
        "text": "Chánh án Tòa án nhân dân tối cao."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q109",
    "chapter": "Chương 4",
    "number": 109,
    "question": "Quyền con người, quyền công dân ở Việt Nam được quy định ở đâu?",
    "options": [
      {
        "label": "A",
        "text": "Trong Hiến pháp và pháp luật."
      },
      {
        "label": "B",
        "text": "Chỉ trong các văn bản dưới luật."
      },
      {
        "label": "C",
        "text": "Chỉ trong các công ước quốc tế."
      },
      {
        "label": "D",
        "text": "Không được quy định."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q110",
    "chapter": "Chương 4",
    "number": 110,
    "question": "Nguyên tắc \"tập trung dân chủ\" trong tổ chức nhà nước XHCN Việt Nam có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Kết hợp sự lãnh đạo tập trung trên cơ sở phát huy dân chủ."
      },
      {
        "label": "B",
        "text": "Chỉ có tập trung, không có dân chủ."
      },
      {
        "label": "C",
        "text": "Chỉ có dân chủ, không có tập trung."
      },
      {
        "label": "D",
        "text": "Giống như tam quyền phân lập."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q111",
    "chapter": "Chương 4",
    "number": 111,
    "question": "Phương hướng \"Đấu tranh phòng, chống tham nhũng, lãng phí\" nhằm mục đích gì?",
    "options": [
      {
        "label": "A",
        "text": "Làm trong sạch bộ máy nhà nước, củng cố lòng tin của nhân dân."
      },
      {
        "label": "B",
        "text": "Chỉ để trừng phạt cán bộ."
      },
      {
        "label": "C",
        "text": "Chỉ để thu hồi tài sản."
      },
      {
        "label": "D",
        "text": "Chỉ là khẩu hiệu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q112",
    "chapter": "Chương 4",
    "number": 112,
    "question": "Vai trò của nhân dân trong việc xây dựng nhà nước pháp quyền XHCN là gì?",
    "options": [
      {
        "label": "A",
        "text": "Giám sát hoạt động của nhà nước, tham gia quản lý nhà nước."
      },
      {
        "label": "B",
        "text": "Chỉ là người tuân thủ pháp luật."
      },
      {
        "label": "C",
        "text": "Không có vai trò gì."
      },
      {
        "label": "D",
        "text": "Chỉ có vai trò bầu cử."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q113",
    "chapter": "Chương 4",
    "number": 113,
    "question": "Theo quan điểm Mác - Lênin, dân chủ là một phạm trù:",
    "options": [
      {
        "label": "A",
        "text": "Lịch sử."
      },
      {
        "label": "B",
        "text": "Vĩnh viễn."
      },
      {
        "label": "C",
        "text": "Tự nhiên."
      },
      {
        "label": "D",
        "text": "Siêu hình."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q114",
    "chapter": "Chương 4",
    "number": 114,
    "question": "Chế độ dân chủ nhân dân ở Việt Nam (sau 1945) là một hình thức:",
    "options": [
      {
        "label": "A",
        "text": "Quá độ lên dân chủ XHCN."
      },
      {
        "label": "B",
        "text": "Dân chủ tư sản."
      },
      {
        "label": "C",
        "text": "Dân chủ chủ nô."
      },
      {
        "label": "D",
        "text": "Dân chủ phong kiến."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q115",
    "chapter": "Chương 4",
    "number": 115,
    "question": "Nhà nước pháp quyền XHCN Việt Nam là nhà nước:",
    "options": [
      {
        "label": "A",
        "text": "Thượng tôn pháp luật."
      },
      {
        "label": "B",
        "text": "Thượng tôn ý chí cá nhân."
      },
      {
        "label": "C",
        "text": "Thượng tôn dư luận."
      },
      {
        "label": "D",
        "text": "Thượng tôn kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q116",
    "chapter": "Chương 4",
    "number": 116,
    "question": "\"Phát huy dân chủ XHCN\" và \"Xây dựng nhà nước pháp quyền XHCN\" có mối quan hệ:",
    "options": [
      {
        "label": "A",
        "text": "Gắn bó mật thiết, là tiền đề của nhau."
      },
      {
        "label": "B",
        "text": "Tách rời nhau."
      },
      {
        "label": "C",
        "text": "Mâu thuẫn nhau."
      },
      {
        "label": "D",
        "text": "Không liên quan."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q117",
    "chapter": "Chương 4",
    "number": 117,
    "question": "Cơ sở kinh tế của nhà nước pháp quyền XHCN Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Nền kinh tế thị trường định hướng xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Nền kinh tế kế hoạch hóa tập trung."
      },
      {
        "label": "C",
        "text": "Nền kinh tế tư bản chủ nghĩa."
      },
      {
        "label": "D",
        "text": "Nền kinh tế tự cung tự cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q118",
    "chapter": "Chương 4",
    "number": 118,
    "question": "Cơ sở xã hội của nhà nước pháp quyền XHCN Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Khối đại đoàn kết toàn dân tộc mà nòng cốt là liên minh công-nông-trí."
      },
      {
        "label": "B",
        "text": "Chỉ giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Giai cấp tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q119",
    "chapter": "Chương 4",
    "number": 119,
    "question": "\"Quyền lực nhà nước là thống nhất\" ở Việt Nam có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Quyền lực nhà nước bắt nguồn từ nhân dân, nhân dân là chủ thể tối cao."
      },
      {
        "label": "B",
        "text": "Quyền lực tập trung hết vào một cơ quan."
      },
      {
        "label": "C",
        "text": "Quyền lực tập trung hết vào một cá nhân."
      },
      {
        "label": "D",
        "text": "Quyền lực bị phân chia tuyệt đối."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q120",
    "chapter": "Chương 4",
    "number": 120,
    "question": "Sự \"kiểm soát\" quyền lực nhà nước ở Việt Nam được thực hiện bởi:",
    "options": [
      {
        "label": "A",
        "text": "Đảng, Nhà nước (thông qua các cơ quan) và nhân dân."
      },
      {
        "label": "B",
        "text": "Chỉ bởi Đảng Cộng sản."
      },
      {
        "label": "C",
        "text": "Chỉ bởi Tòa án."
      },
      {
        "label": "D",
        "text": "Chỉ bởi nhân dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q121",
    "chapter": "Chương 4",
    "number": 121,
    "question": "Mục đích của dân chủ XHCN là:",
    "options": [
      {
        "label": "A",
        "text": "Giải phóng con người, tạo điều kiện cho con người phát triển toàn diện."
      },
      {
        "label": "B",
        "text": "Duy trì sự thống trị của giai cấp bóc lột."
      },
      {
        "label": "C",
        "text": "Phát triển kinh tế bằng mọi giá."
      },
      {
        "label": "D",
        "text": "Mở rộng chiến tranh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q122",
    "chapter": "Chương 4",
    "number": 122,
    "question": "Nhà nước XHCN đầu tiên trên thế giới là:",
    "options": [
      {
        "label": "A",
        "text": "Nhà nước Xô viết (Nga)."
      },
      {
        "label": "B",
        "text": "Công xã Pari."
      },
      {
        "label": "C",
        "text": "Nhà nước Việt Nam Dân chủ Cộng hòa."
      },
      {
        "label": "D",
        "text": "Nhà nước Cộng hòa Nhân dân Trung Hoa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q123",
    "chapter": "Chương 4",
    "number": 123,
    "question": "Chức năng xã hội (tổ chức và xây dựng) của nhà nước XHCN:",
    "options": [
      {
        "label": "A",
        "text": "Là chức năng cơ bản, chủ yếu, quyết định sự thắng lợi của CNXH."
      },
      {
        "label": "B",
        "text": "Là chức năng thứ yếu, không quan trọng."
      },
      {
        "label": "C",
        "text": "Chỉ xuất hiện khi đã xây dựng xong CNXH."
      },
      {
        "label": "D",
        "text": "Giống hệt chức năng của nhà nước tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q124",
    "chapter": "Chương 4",
    "number": 124,
    "question": "Ở Việt Nam, cơ quan nào có quyền ban hành Hiến pháp và Luật?",
    "options": [
      {
        "label": "A",
        "text": "Quốc hội."
      },
      {
        "label": "B",
        "text": "Chính phủ."
      },
      {
        "label": "C",
        "text": "Chủ tịch nước."
      },
      {
        "label": "D",
        "text": "Tòa án nhân dân tối cao."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q125",
    "chapter": "Chương 4",
    "number": 125,
    "question": "Ở Việt Nam, cơ quan nào tổ chức thi hành Hiến pháp và Luật?",
    "options": [
      {
        "label": "A",
        "text": "Chính phủ."
      },
      {
        "label": "B",
        "text": "Quốc hội."
      },
      {
        "label": "C",
        "text": "Tòa án nhân dân."
      },
      {
        "label": "D",
        "text": "Viện kiểm sát nhân dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q126",
    "chapter": "Chương 4",
    "number": 126,
    "question": "Ở Việt Nam, cơ quan nào có quyền xét xử?",
    "options": [
      {
        "label": "A",
        "text": "Tòa án nhân dân."
      },
      {
        "label": "B",
        "text": "Quốc hội."
      },
      {
        "label": "C",
        "text": "Chính phủ."
      },
      {
        "label": "D",
        "text": "Công an."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q127",
    "chapter": "Chương 4",
    "number": 127,
    "question": "Ở Việt Nam, cơ quan nào thực hành quyền công tố và kiểm sát hoạt động tư pháp?",
    "options": [
      {
        "label": "A",
        "text": "Viện kiểm sát nhân dân."
      },
      {
        "label": "B",
        "text": "Quốc hội."
      },
      {
        "label": "C",
        "text": "Chính phủ."
      },
      {
        "label": "D",
        "text": "Tòa án nhân dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q128",
    "chapter": "Chương 4",
    "number": 128,
    "question": "Vai trò lãnh đạo của Đảng Cộng sản Việt Nam đối với Nhà nước được thể chế hóa bằng:",
    "options": [
      {
        "label": "A",
        "text": "Hiến pháp và pháp luật."
      },
      {
        "label": "B",
        "text": "Chỉ bằng Điều lệ Đảng."
      },
      {
        "label": "C",
        "text": "Chỉ bằng các Nghị quyết."
      },
      {
        "label": "D",
        "text": "Không được thể chế hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q129",
    "chapter": "Chương 4",
    "number": 129,
    "question": "\"Phát huy dân chủ XHCN\" là:",
    "options": [
      {
        "label": "A",
        "text": "Phát huy quyền làm chủ của nhân dân."
      },
      {
        "label": "B",
        "text": "Phát huy quyền lực của nhà nước."
      },
      {
        "label": "C",
        "text": "Phát huy vai trò của doanh nghiệp."
      },
      {
        "label": "D",
        "text": "Phát huy vai trò của cá nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q130",
    "chapter": "Chương 4",
    "number": 130,
    "question": "\"Nhà nước pháp quyền\" là một:",
    "options": [
      {
        "label": "A",
        "text": "Cách thức tổ chức và vận hành nhà nước dựa trên sự thượng tôn pháp luật."
      },
      {
        "label": "B",
        "text": "Kiểu nhà nước."
      },
      {
        "label": "C",
        "text": "Hình thức chính thể."
      },
      {
        "label": "D",
        "text": "Kiểu dân chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q131",
    "chapter": "Chương 4",
    "number": 131,
    "question": "Nền dân chủ XHCN về bản chất là nền dân chủ:",
    "options": [
      {
        "label": "A",
        "text": "Của đại đa số nhân dân."
      },
      {
        "label": "B",
        "text": "Của thiểu số."
      },
      {
        "label": "C",
        "text": "Của giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Của giai cấp chủ nô."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q132",
    "chapter": "Chương 4",
    "number": 132,
    "question": "Nhà nước XHCN là nhà nước \"kiểu mới\" vì nó mang bản chất của:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Giai cấp phong kiến."
      },
      {
        "label": "D",
        "text": "Giai cấp chủ nô."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q133",
    "chapter": "Chương 4",
    "number": 133,
    "question": "Cơ sở tư tưởng của nhà nước XHCN là:",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa Mác - Lênin."
      },
      {
        "label": "B",
        "text": "Chủ nghĩa tự do mới."
      },
      {
        "label": "C",
        "text": "Tư tưởng Nho giáo."
      },
      {
        "label": "D",
        "text": "Tư tưởng tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q134",
    "chapter": "Chương 4",
    "number": 134,
    "question": "Nhà nước XHCN có chức năng trấn áp đối với:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp bóc lột đã bị lật đổ và các thế lực thù địch."
      },
      {
        "label": "B",
        "text": "Nhân dân lao động."
      },
      {
        "label": "C",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Giai cấp nông dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q135",
    "chapter": "Chương 4",
    "number": 135,
    "question": "Nhà nước XHCN có chức năng tổ chức, xây dựng trên lĩnh vực:",
    "options": [
      {
        "label": "A",
        "text": "Toàn diện (kinh tế, chính trị, văn hóa, xã hội)."
      },
      {
        "label": "B",
        "text": "Chỉ kinh tế."
      },
      {
        "label": "C",
        "text": "Chỉ chính trị."
      },
      {
        "label": "D",
        "text": "Chỉ văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q136",
    "chapter": "Chương 4",
    "number": 136,
    "question": "Ở Việt Nam, Hiến pháp 2013 khẳng định: \"Nước Cộng hòa xã hội chủ nghĩa Việt Nam do ... làm chủ\".",
    "options": [
      {
        "label": "A",
        "text": "Nhân dân."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Đảng Cộng sản."
      },
      {
        "label": "D",
        "text": "Nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q137",
    "chapter": "Chương 4",
    "number": 137,
    "question": "Ở Việt Nam, Quốc hội là cơ quan:",
    "options": [
      {
        "label": "A",
        "text": "Đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất."
      },
      {
        "label": "B",
        "text": "Cơ quan hành chính nhà nước cao nhất."
      },
      {
        "label": "C",
        "text": "Cơ quan xét xử cao nhất."
      },
      {
        "label": "D",
        "text": "Cơ quan kiểm sát cao nhất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q138",
    "chapter": "Chương 4",
    "number": 138,
    "question": "Ở Việt Nam, Chính phủ là cơ quan:",
    "options": [
      {
        "label": "A",
        "text": "Hành chính nhà nước cao nhất, thực hiện quyền hành pháp."
      },
      {
        "label": "B",
        "text": "Quyền lực nhà nước cao nhất."
      },
      {
        "label": "C",
        "text": "Xét xử cao nhất."
      },
      {
        "label": "D",
        "text": "Lập pháp cao nhất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q139",
    "chapter": "Chương 4",
    "number": 139,
    "question": "Ở Việt Nam, Tòa án nhân dân là cơ quan:",
    "options": [
      {
        "label": "A",
        "text": "Xét xử, thực hiện quyền tư pháp."
      },
      {
        "label": "B",
        "text": "Lập pháp."
      },
      {
        "label": "C",
        "text": "Hành pháp."
      },
      {
        "label": "D",
        "text": "Công tố."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q140",
    "chapter": "Chương 4",
    "number": 140,
    "question": "Ở Việt Nam, Viện kiểm sát nhân dân là cơ quan:",
    "options": [
      {
        "label": "A",
        "text": "Thực hành quyền công tố, kiểm sát hoạt động tư pháp."
      },
      {
        "label": "B",
        "text": "Xét xử."
      },
      {
        "label": "C",
        "text": "Lập pháp."
      },
      {
        "label": "D",
        "text": "Hành pháp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q141",
    "chapter": "Chương 4",
    "number": 141,
    "question": "Việc xây dựng nhà nước pháp quyền XHCN ở Việt Nam nhằm mục đích:",
    "options": [
      {
        "label": "A",
        "text": "Bảo đảm quyền làm chủ của nhân dân."
      },
      {
        "label": "B",
        "text": "Tăng cường quyền lực cho nhà nước."
      },
      {
        "label": "C",
        "text": "Phục vụ lợi ích của Đảng cầm quyền."
      },
      {
        "label": "D",
        "text": "Đáp ứng yêu cầu của hội nhập."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q142",
    "chapter": "Chương 4",
    "number": 142,
    "question": "\"Phản biện xã hội\" là hoạt động của:",
    "options": [
      {
        "label": "A",
        "text": "Mặt trận Tổ quốc và các tổ chức chính trị - xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ của Quốc hội."
      },
      {
        "label": "C",
        "text": "Chỉ của Chính phủ."
      },
      {
        "label": "D",
        "text": "Chỉ của Tòa án."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q143",
    "chapter": "Chương 4",
    "number": 143,
    "question": "\"Dân chủ XHCN\" và \"Nhà nước XHCN\" là hai phạm trù:",
    "options": [
      {
        "label": "A",
        "text": "Thuộc kiến trúc thượng tầng."
      },
      {
        "label": "B",
        "text": "Thuộc cơ sở hạ tầng."
      },
      {
        "label": "C",
        "text": "Vừa thuộc KTTT, vừa thuộc CSHT."
      },
      {
        "label": "D",
        "text": "Không thuộc KTTT hay CSHT."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q144",
    "chapter": "Chương 4",
    "number": 144,
    "question": "So với nhà nước tư sản, nhà nước XHCN có phạm vi dân chủ:",
    "options": [
      {
        "label": "A",
        "text": "Rộng rãi hơn (cho đại đa số)."
      },
      {
        "label": "B",
        "text": "Hẹp hơn (cho thiểu số)."
      },
      {
        "label": "C",
        "text": "Tương đương."
      },
      {
        "label": "D",
        "text": "Không có dân chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q145",
    "chapter": "Chương 4",
    "number": 145,
    "question": "Nhà nước XHCN sẽ \"tự tiêu vong\" khi nào?",
    "options": [
      {
        "label": "A",
        "text": "Khi xã hội đạt đến giai đoạn cao của CNCS, không còn giai cấp."
      },
      {
        "label": "B",
        "text": "Ngay sau khi cách mạng XHCN thành công."
      },
      {
        "label": "C",
        "text": "Trong thời kỳ quá độ."
      },
      {
        "label": "D",
        "text": "Không bao giờ tiêu vong."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q146",
    "chapter": "Chương 4",
    "number": 146,
    "question": "\"Dân chủ là một giá trị nhân loại chung\" là quan điểm của:",
    "options": [
      {
        "label": "A",
        "text": "Hồ Chí Minh."
      },
      {
        "label": "B",
        "text": "C.Mác."
      },
      {
        "label": "C",
        "text": "V.I.Lênin."
      },
      {
        "label": "D",
        "text": "Ph.Ăngghen."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q147",
    "chapter": "Chương 4",
    "number": 147,
    "question": "Hình thức nhà nước của Công xã Pari (1871) được Mác-Ăngghen coi là:",
    "options": [
      {
        "label": "A",
        "text": "Hình thái nhà nước của giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Hình thái nhà nước tư sản."
      },
      {
        "label": "C",
        "text": "Hình thái nhà nước phong kiến."
      },
      {
        "label": "D",
        "text": "Hình thái nhà nước chủ nô."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q148",
    "chapter": "Chương 4",
    "number": 148,
    "question": "Việc nhà nước XHCN kế thừa các giá trị văn hóa dân tộc thể hiện:",
    "options": [
      {
        "label": "A",
        "text": "Tính dân tộc sâu sắc."
      },
      {
        "label": "B",
        "text": "Tính giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Tính nhân dân."
      },
      {
        "label": "D",
        "text": "Tính quốc tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q149",
    "chapter": "Chương 4",
    "number": 149,
    "question": "\"Nhà nước pháp quyền xã hội chủ nghĩa\" ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Một đặc trưng của CNXH (theo Cương lĩnh 2011) và là một phương hướng xây dựng CNXH."
      },
      {
        "label": "B",
        "text": "Chỉ là một đặc trưng."
      },
      {
        "label": "C",
        "text": "Chỉ là một phương hướng."
      },
      {
        "label": "D",
        "text": "Không phải đặc trưng hay phương hướng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 4_Q150",
    "chapter": "Chương 4",
    "number": 150,
    "question": "Phương hướng \"Xây dựng đội ngũ cán bộ, công chức trong sạch, có năng lực\" thuộc nhóm giải pháp nào?",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng Nhà nước pháp quyền XHCN."
      },
      {
        "label": "B",
        "text": "Phát huy dân chủ XHCN."
      },
      {
        "label": "C",
        "text": "Xây dựng Đảng."
      },
      {
        "label": "D",
        "text": "Phát triển kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q1",
    "chapter": "Chương 5",
    "number": 1,
    "question": "Theo chủ nghĩa xã hội khoa học, \"cơ cấu xã hội\" được hiểu là:",
    "options": [
      {
        "label": "A",
        "text": "Những cộng đồng người cùng toàn bộ những mối quan hệ xã hội do sự tác động lẫn nhau của các cộng đồng ấy tạo nên."
      },
      {
        "label": "B",
        "text": "Chỉ là sự phân chia dân cư theo độ tuổi và giới tính."
      },
      {
        "label": "C",
        "text": "Chỉ là sự phân chia dân cư theo nghề nghiệp."
      },
      {
        "label": "D",
        "text": "Chỉ là sự phân chia dân cư theo dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q2",
    "chapter": "Chương 5",
    "number": 2,
    "question": "Đâu không phải là một loại hình cơ cấu xã hội cơ bản?",
    "options": [
      {
        "label": "A",
        "text": "Cơ cấu xã hội - tâm lý."
      },
      {
        "label": "B",
        "text": "Cơ cấu xã hội - dân cư."
      },
      {
        "label": "C",
        "text": "Cơ cấu xã hội - nghề nghiệp."
      },
      {
        "label": "D",
        "text": "Cơ cấu xã hội - giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q3",
    "chapter": "Chương 5",
    "number": 3,
    "question": "\"Cơ cấu xã hội - dân cư\" được biểu hiện ở các yếu tố nào?",
    "options": [
      {
        "label": "A",
        "text": "Mức sinh, mức tử, biến động dân số, tỉ lệ giới tính, cơ cấu độ tuổi."
      },
      {
        "label": "B",
        "text": "Quan hệ sở hữu tư liệu sản xuất, quản lý sản xuất."
      },
      {
        "label": "C",
        "text": "Cùng một đức tin tôn giáo, giáo lý, giáo luật."
      },
      {
        "label": "D",
        "text": "Tập hợp cộng đồng người theo các nghề nghiệp khác nhau."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q4",
    "chapter": "Chương 5",
    "number": 4,
    "question": "\"Cơ cấu xã hội - nghề nghiệp\" là tập hợp những cộng đồng người hình thành theo:",
    "options": [
      {
        "label": "A",
        "text": "Các nghề nghiệp khác nhau do phân công lao động xã hội."
      },
      {
        "label": "B",
        "text": "Các giai cấp, tầng lớp khác nhau."
      },
      {
        "label": "C",
        "text": "Các dân tộc khác nhau."
      },
      {
        "label": "D",
        "text": "Các tôn giáo khác nhau."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q5",
    "chapter": "Chương 5",
    "number": 5,
    "question": "\"Cơ cấu xã hội - giai cấp\" được định nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội, thông qua các mối quan hệ về sở hữu TLSX, quản lý, phân phối."
      },
      {
        "label": "B",
        "text": "Tập hợp những người có cùng một nghề nghiệp."
      },
      {
        "label": "C",
        "text": "Tập hợp những người có cùng độ tuổi."
      },
      {
        "label": "D",
        "text": "Tập hợp những người có cùng đức tin tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q6",
    "chapter": "Chương 5",
    "number": 6,
    "question": "Trong thời kỳ quá độ lên CNXH, cơ cấu xã hội - giai cấp bao gồm các giai cấp, tầng lớp nào?",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân, giai cấp nông dân, tầng lớp trí thức, tầng lớp doanh nhân, tiểu chủ..."
      },
      {
        "label": "B",
        "text": "Chỉ có giai cấp công nhân và giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Chỉ có giai cấp vô sản và giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Giai cấp chủ nô và giai cấp nô lệ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q7",
    "chapter": "Chương 5",
    "number": 7,
    "question": "Trong hệ thống cơ cấu xã hội, loại hình cơ cấu nào có vị trí quan trọng hàng đầu, chi phối các loại hình cơ cấu khác?",
    "options": [
      {
        "label": "A",
        "text": "Cơ cấu xã hội - giai cấp."
      },
      {
        "label": "B",
        "text": "Cơ cấu xã hội - dân cư."
      },
      {
        "label": "C",
        "text": "Cơ cấu xã hội - nghề nghiệp."
      },
      {
        "label": "D",
        "text": "Cơ cấu xã hội - tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q8",
    "chapter": "Chương 5",
    "number": 8,
    "question": "Tại sao cơ cấu xã hội - giai cấp lại giữ vị trí quan trọng hàng đầu?",
    "options": [
      {
        "label": "A",
        "text": "Vì nó liên quan đến đảng phái chính trị, nhà nước, quyền sở hữu TLSX, quản lý và phân phối."
      },
      {
        "label": "B",
        "text": "Vì nó là cơ cấu đông đảo nhất về số lượng."
      },
      {
        "label": "C",
        "text": "Vì nó là cơ cấu cổ xưa nhất trong lịch sử."
      },
      {
        "label": "D",
        "text": "Vì nó là cơ cấu ít biến động nhất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q9",
    "chapter": "Chương 5",
    "number": 9,
    "question": "Sự biến đổi của cơ cấu xã hội - giai cấp tất yếu sẽ:",
    "options": [
      {
        "label": "A",
        "text": "Ảnh hưởng đến sự biến đổi của các cơ cấu xã hội khác và toàn bộ cơ cấu xã hội."
      },
      {
        "label": "B",
        "text": "Không ảnh hưởng đến các cơ cấu xã hội khác."
      },
      {
        "label": "C",
        "text": "Chỉ ảnh hưởng đến cơ cấu dân cư."
      },
      {
        "label": "D",
        "text": "Chỉ ảnh hưởng đến cơ cấu nghề nghiệp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q10",
    "chapter": "Chương 5",
    "number": 10,
    "question": "Cơ cấu xã hội - giai cấp là căn cứ cơ bản để:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng chính sách phát triển kinh tế, văn hóa, xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ để phát triển kinh tế."
      },
      {
        "label": "C",
        "text": "Chỉ để phát triển văn hóa."
      },
      {
        "label": "D",
        "text": "Chỉ để phát triển quân sự."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q11",
    "chapter": "Chương 5",
    "number": 11,
    "question": "Quy luật biến đổi đầu tiên của cơ cấu xã hội - giai cấp trong thời kỳ quá độ là:",
    "options": [
      {
        "label": "A",
        "text": "Gắn liền và bị quy định bởi cơ cấu kinh tế."
      },
      {
        "label": "B",
        "text": "Biến đổi phức tạp, đa dạng, làm xuất hiện các tầng lớp xã hội mới."
      },
      {
        "label": "C",
        "text": "Biến đổi trong mối quan hệ vừa đấu tranh, vừa liên minh."
      },
      {
        "label": "D",
        "text": "Biến đổi do ý muốn chủ quan của nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q12",
    "chapter": "Chương 5",
    "number": 12,
    "question": "Luận điểm: \"sản xuất kinh tế và cơ cấu xã hội... cả hai cái đó cấu thành cơ sở của lịch sử chính trị và lịch sử tư tưởng của thời đại ấy...\" là của ai?",
    "options": [
      {
        "label": "A",
        "text": "Ph.Ăngghen."
      },
      {
        "label": "B",
        "text": "C.Mác."
      },
      {
        "label": "C",
        "text": "V.I.Lênin."
      },
      {
        "label": "D",
        "text": "Hồ Chí Minh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q13",
    "chapter": "Chương 5",
    "number": 13,
    "question": "Trong thời kỳ quá độ, cơ cấu kinh tế biến đổi theo hướng nào?",
    "options": [
      {
        "label": "A",
        "text": "Tăng tỉ trọng công nghiệp và dịch vụ, giảm tỉ trọng nông nghiệp."
      },
      {
        "label": "B",
        "text": "Tăng tỉ trọng nông nghiệp, giảm tỉ trọng công nghiệp và dịch vụ."
      },
      {
        "label": "C",
        "text": "Giữ nguyên cơ cấu kinh tế nông nghiệp lạc hậu."
      },
      {
        "label": "D",
        "text": "Chỉ phát triển công nghiệp nặng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q14",
    "chapter": "Chương 5",
    "number": 14,
    "question": "Sự biến đổi trong cơ cấu kinh tế tất yếu dẫn đến:",
    "options": [
      {
        "label": "A",
        "text": "Những biến đổi trong cơ cấu xã hội - giai cấp."
      },
      {
        "label": "B",
        "text": "Cơ cấu xã hội - giai cấp không thay đổi."
      },
      {
        "label": "C",
        "text": "Chỉ thay đổi cơ cấu dân tộc."
      },
      {
        "label": "D",
        "text": "Chỉ thay đổi cơ cấu tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q15",
    "chapter": "Chương 5",
    "number": 15,
    "question": "Quy luật biến đổi thứ hai của cơ cấu xã hội - giai cấp là:",
    "options": [
      {
        "label": "A",
        "text": "Biến đổi phức tạp, đa dạng, làm xuất hiện các tầng lớp xã hội mới."
      },
      {
        "label": "B",
        "text": "Bị quy định bởi cơ cấu kinh tế."
      },
      {
        "label": "C",
        "text": "Biến đổi trong mối quan hệ vừa đấu tranh, vừa liên minh."
      },
      {
        "label": "D",
        "text": "Chỉ biến đổi theo hướng đơn giản hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q16",
    "chapter": "Chương 5",
    "number": 16,
    "question": "Tại sao cơ cấu xã hội - giai cấp trong thời kỳ quá độ lại biến đổi phức tạp, đa dạng?",
    "options": [
      {
        "label": "A",
        "text": "Do còn tồn tại kết cấu kinh tế nhiều thành phần."
      },
      {
        "label": "B",
        "text": "Do chỉ còn một thành phần kinh tế duy nhất."
      },
      {
        "label": "C",
        "text": "Do sự sụp đổ của chủ nghĩa tư bản."
      },
      {
        "label": "D",
        "text": "Do ý chí của giai cấp cầm quyền."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q17",
    "chapter": "Chương 5",
    "number": 17,
    "question": "Các tầng lớp xã hội mới xuất hiện trong thời kỳ quá độ ở nhiều nước XHCN là:",
    "options": [
      {
        "label": "A",
        "text": "Tầng lớp doanh nhân, tiểu chủ, người giàu có, trung lưu."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Tầng lớp trí thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q18",
    "chapter": "Chương 5",
    "number": 18,
    "question": "Quy luật biến đổi thứ ba của cơ cấu xã hội - giai cấp là:",
    "options": [
      {
        "label": "A",
        "text": "Biến đổi trong mối quan hệ vừa đấu tranh, vừa liên minh, xích lại gần nhau."
      },
      {
        "label": "B",
        "text": "Chỉ có đấu tranh, không có liên minh."
      },
      {
        "label": "C",
        "text": "Chỉ có liên minh, không có đấu tranh."
      },
      {
        "label": "D",
        "text": "Các giai cấp tồn tại biệt lập."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q19",
    "chapter": "Chương 5",
    "number": 19,
    "question": "Trong cơ cấu xã hội - giai cấp thời kỳ quá độ, giai cấp nào giữ vai trò chủ đạo, tiên phong?",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Tầng lớp trí thức."
      },
      {
        "label": "D",
        "text": "Tầng lớp doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q20",
    "chapter": "Chương 5",
    "number": 20,
    "question": "Nền tảng chính trị - xã hội của cơ cấu xã hội - giai cấp trong thời kỳ quá độ là:",
    "options": [
      {
        "label": "A",
        "text": "Mối quan hệ liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức."
      },
      {
        "label": "B",
        "text": "Chỉ giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Mối quan hệ giữa công nhân và doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q22",
    "chapter": "Chương 5",
    "number": 22,
    "question": "\"Người bạn đồng minh tự nhiên\" của giai cấp công nhân là ai?",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "B",
        "text": "Tầng lớp trí thức."
      },
      {
        "label": "C",
        "text": "Giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Tầng lớp tiểu chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q23",
    "chapter": "Chương 5",
    "number": 23,
    "question": "Xét từ góc độ chính trị - xã hội, tại sao liên minh giai cấp, tầng lớp là một tất yếu khách quan?",
    "options": [
      {
        "label": "A",
        "text": "Để tập hợp lực lượng thực hiện những nhu cầu và lợi ích chung, đảm bảo thắng lợi cho cách mạng."
      },
      {
        "label": "B",
        "text": "Để giai cấp công nhân dễ dàng cai trị các giai cấp khác."
      },
      {
        "label": "C",
        "text": "Để xóa bỏ giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Đó là yêu cầu của giai cấp tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q24",
    "chapter": "Chương 5",
    "number": 24,
    "question": "V.I.Lênin khẳng định: \"Nguyên tắc cao nhất của chuyên chính là...\"",
    "options": [
      {
        "label": "A",
        "text": "Duy trì khối liên minh giữa giai cấp vô sản và nông dân."
      },
      {
        "label": "B",
        "text": "Duy trì sự lãnh đạo của giai cấp vô sản."
      },
      {
        "label": "C",
        "text": "Duy trì nhà nước chuyên chính."
      },
      {
        "label": "D",
        "text": "Duy trì bạo lực cách mạng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q25",
    "chapter": "Chương 5",
    "number": 25,
    "question": "V.I.Lênin gọi chuyên chính vô sản là \"một hình thức đặc biệt của liên minh giai cấp\" giữa:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp vô sản với đông đảo những tầng lớp lao động không phải vô sản (nông dân, trí thức...)."
      },
      {
        "label": "B",
        "text": "Giai cấp vô sản với giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Giai cấp vô sản với giai cấp địa chủ."
      },
      {
        "label": "D",
        "text": "Chỉ giai cấp vô sản với nhau."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q26",
    "chapter": "Chương 5",
    "number": 26,
    "question": "V.I.Lênin viết: \"Trước sự liên minh của các đại biểu khoa học, giai cấp vô sản và giới kỹ thuật,...\"",
    "options": [
      {
        "label": "A",
        "text": "Không một thế lực đen tối nào đứng vững được."
      },
      {
        "label": "B",
        "text": "Giai cấp tư sản sẽ chiến thắng."
      },
      {
        "label": "C",
        "text": "Chủ nghĩa xã hội sẽ thất bại."
      },
      {
        "label": "D",
        "text": "Giai cấp nông dân sẽ bị thiệt thòi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q27",
    "chapter": "Chương 5",
    "number": 27,
    "question": "Xét từ góc độ kinh tế, tính tất yếu của liên minh giai cấp, tầng lớp xuất phát từ:",
    "options": [
      {
        "label": "A",
        "text": "Yêu cầu khách quan của quá trình đẩy mạnh CNH, HĐH, chuyển dịch cơ cấu kinh tế."
      },
      {
        "label": "B",
        "text": "Yêu cầu của cuộc đấu tranh chính trị."
      },
      {
        "label": "C",
        "text": "Yêu cầu của việc củng cố nhà nước."
      },
      {
        "label": "D",
        "text": "Yêu cầu của việc bảo vệ Tổ quốc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q28",
    "chapter": "Chương 5",
    "number": 28,
    "question": "\"Liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH\" là:",
    "options": [
      {
        "label": "A",
        "text": "Sự liên kết, hợp tác, hỗ trợ nhau... giữa các giai cấp, tầng lớp xã hội."
      },
      {
        "label": "B",
        "text": "Sự đấu tranh triệt tiêu lẫn nhau."
      },
      {
        "label": "C",
        "text": "Sự lệ thuộc của giai cấp này vào giai cấp khác."
      },
      {
        "label": "D",
        "text": "Sự liên kết chỉ về mặt chính trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q29",
    "chapter": "Chương 5",
    "number": 29,
    "question": "Đâu không phải là nguyên tắc cơ bản của việc thực hiện liên minh giai cấp, tầng lớp?",
    "options": [
      {
        "label": "A",
        "text": "Đảm bảo lợi ích của giai cấp tư sản là trên hết."
      },
      {
        "label": "B",
        "text": "Kết hợp đúng đắn lợi ích của các chủ thể trong khối liên minh."
      },
      {
        "label": "C",
        "text": "Đảm bảo sự lãnh đạo của Đảng Cộng sản đối với khối liên minh."
      },
      {
        "label": "D",
        "text": "Đảm bảo nguyên tắc tự nguyện khi thực hiện liên minh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q30",
    "chapter": "Chương 5",
    "number": 30,
    "question": "Đặc điểm nổi bật của cơ cấu xã hội - giai cấp ở Việt Nam trong thời kỳ quá độ là:",
    "options": [
      {
        "label": "A",
        "text": "Vừa đảm bảo tính quy luật phổ biến, vừa mang tính đặc thù của xã hội Việt Nam."
      },
      {
        "label": "B",
        "text": "Giống hệt các nước tư bản phát triển."
      },
      {
        "label": "C",
        "text": "Chỉ mang tính đặc thù, không có tính quy luật phổ biến."
      },
      {
        "label": "D",
        "text": "Không có sự biến đổi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q31",
    "chapter": "Chương 5",
    "number": 31,
    "question": "Sự kiện nào ở Việt Nam (từ 1986) đã dẫn đến những biến đổi sâu sắc trong cơ cấu xã hội - giai cấp?",
    "options": [
      {
        "label": "A",
        "text": "Chuyển mạnh sang cơ chế thị trường phát triển kinh tế nhiều thành phần định hướng XHCN (Đổi mới)."
      },
      {
        "label": "B",
        "text": "Thắng lợi của cuộc kháng chiến chống Mỹ."
      },
      {
        "label": "C",
        "text": "Ký kết Hiệp định Giơ-ne-vơ."
      },
      {
        "label": "D",
        "text": "Cách mạng Tháng Tám thành công."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q32",
    "chapter": "Chương 5",
    "number": 32,
    "question": "Cơ cấu xã hội - giai cấp ở Việt Nam thời kỳ trước đổi mới có đặc điểm:",
    "options": [
      {
        "label": "A",
        "text": "Đơn giản (gồm công nhân, nông dân, trí thức)."
      },
      {
        "label": "B",
        "text": "Rất phức tạp, đa dạng."
      },
      {
        "label": "C",
        "text": "Tồn tại giai cấp tư sản và địa chủ."
      },
      {
        "label": "D",
        "text": "Giống hệt thời kỳ Pháp thuộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q33",
    "chapter": "Chương 5",
    "number": 33,
    "question": "Giai cấp nào được Đảng ta xác định là giai cấp lãnh đạo cách mạng, đại diện cho phương thức sản xuất tiên tiến ở Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Đội ngũ trí thức."
      },
      {
        "label": "D",
        "text": "Đội ngũ doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q34",
    "chapter": "Chương 5",
    "number": 34,
    "question": "Giai cấp công nhân Việt Nam hiện nay có sự biến đổi theo hướng:",
    "options": [
      {
        "label": "A",
        "text": "Tăng nhanh về số lượng và chất lượng, đa dạng về cơ cấu, xuất hiện \"công nhân tri thức\"."
      },
      {
        "label": "B",
        "text": "Giảm về số lượng và chất lượng."
      },
      {
        "label": "C",
        "text": "Chỉ tăng về số lượng, không tăng về chất lượng."
      },
      {
        "label": "D",
        "text": "Trở nên thuần nhất, chỉ làm trong khu vực nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q35",
    "chapter": "Chương 5",
    "number": 35,
    "question": "Tầng lớp \"công nhân cổ cồn\", \"công nhân cổ xanh\", \"công nhân cổ vàng\" thể hiện:",
    "options": [
      {
        "label": "A",
        "text": "Sự đa dạng trong cơ cấu giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Sự phân chia đẳng cấp trong công nhân."
      },
      {
        "label": "C",
        "text": "Sự khác biệt về thu nhập."
      },
      {
        "label": "D",
        "text": "Sự khác biệt về chính trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q36",
    "chapter": "Chương 5",
    "number": 36,
    "question": "Giai cấp nào được Đảng ta xác định có vị trí chiến lược trong sự nghiệp CNH, HĐH nông nghiệp, nông thôn, là chủ thể xây dựng nông thôn mới?",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Đội ngũ trí thức."
      },
      {
        "label": "D",
        "text": "Đội ngũ doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q37",
    "chapter": "Chương 5",
    "number": 37,
    "question": "Giai cấp nông dân Việt Nam hiện nay có xu hướng biến đổi:",
    "options": [
      {
        "label": "A",
        "text": "Giảm dần về số lượng, phân hóa giàu nghèo, một bộ phận chuyển sang ngành nghề khác."
      },
      {
        "label": "B",
        "text": "Tăng nhanh về số lượng."
      },
      {
        "label": "C",
        "text": "Không có sự thay đổi."
      },
      {
        "label": "D",
        "text": "Trở thành giai cấp lãnh đạo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q38",
    "chapter": "Chương 5",
    "number": 38,
    "question": "Lực lượng nào được Đảng ta xác định là \"lực lượng lao động sáng tạo đặc biệt quan trọng\" trong tiến trình CNH, HĐH?",
    "options": [
      {
        "label": "A",
        "text": "Đội ngũ trí thức."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Đội ngũ tiểu thương."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q39",
    "chapter": "Chương 5",
    "number": 39,
    "question": "Tầng lớp xã hội nào đang phát triển nhanh ở Việt Nam, được Đảng chủ trương xây dựng thành một đội ngũ vững mạnh, đóng góp tích cực vào phát triển KT-XH?",
    "options": [
      {
        "label": "A",
        "text": "Đội ngũ doanh nhân."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Tầng lớp thợ thủ công."
      },
      {
        "label": "D",
        "text": "Giai cấp địa chủ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q40",
    "chapter": "Chương 5",
    "number": 40,
    "question": "Đại hội XIII của Đảng yêu cầu phát triển đội ngũ doanh nhân lớn mạnh về:",
    "options": [
      {
        "label": "A",
        "text": "Số lượng, chất lượng, có tinh thần cống hiến, có văn hóa, đạo đức và trình độ quản trị giỏi."
      },
      {
        "label": "B",
        "text": "Chỉ về số lượng."
      },
      {
        "label": "C",
        "text": "Chỉ về tiềm lực kinh tế."
      },
      {
        "label": "D",
        "text": "Chỉ về quan hệ chính trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q41",
    "chapter": "Chương 5",
    "number": 41,
    "question": "Nền tảng của khối đại đoàn kết toàn dân tộc ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức."
      },
      {
        "label": "B",
        "text": "Chỉ giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Liên minh giữa doanh nhân và công nhân."
      },
      {
        "label": "D",
        "text": "Liên minh giữa trí thức và nông dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q42",
    "chapter": "Chương 5",
    "number": 42,
    "question": "Nội dung nào được coi là cơ bản, quyết định nhất của liên minh giai cấp, tầng lớp ở Việt Nam trong thời kỳ quá độ?",
    "options": [
      {
        "label": "A",
        "text": "Nội dung kinh tế."
      },
      {
        "label": "B",
        "text": "Nội dung chính trị."
      },
      {
        "label": "C",
        "text": "Nội dung văn hóa - xã hội."
      },
      {
        "label": "D",
        "text": "Nội dung quân sự."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q43",
    "chapter": "Chương 5",
    "number": 43,
    "question": "Nội dung kinh tế của liên minh ở Việt Nam thực chất là:",
    "options": [
      {
        "label": "A",
        "text": "Sự hợp tác để xây dựng nền kinh tế mới XHCN hiện đại (CNH, HĐH, KTTT định hướng XHCN)."
      },
      {
        "label": "B",
        "text": "Chỉ để xóa đói giảm nghèo."
      },
      {
        "label": "C",
        "text": "Chỉ để phát triển kinh tế nông nghiệp."
      },
      {
        "label": "D",
        "text": "Chỉ để xây dựng các tập đoàn kinh tế nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q44",
    "chapter": "Chương 5",
    "number": 44,
    "question": "Nhiệm vụ kinh tế xuyên suốt của thời kỳ quá độ ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Phát triển kinh tế nhanh và bền vững, đổi mới mô hình tăng trưởng, đẩy mạnh CNH, HĐH."
      },
      {
        "label": "B",
        "text": "Chỉ tập trung vào nông nghiệp."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung vào dịch vụ."
      },
      {
        "label": "D",
        "text": "Duy trì nền kinh tế kế hoạch hóa, bao cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q45",
    "chapter": "Chương 5",
    "number": 45,
    "question": "Nội dung chính trị của liên minh ở Việt Nam nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Tạo cơ sở chính trị - xã hội vững chắc, giữ vững lập trường chính trị, vai trò lãnh đạo của Đảng."
      },
      {
        "label": "B",
        "text": "Xóa bỏ vai trò lãnh đạo của Đảng."
      },
      {
        "label": "C",
        "text": "Thực hiện chế độ đa nguyên, đa đảng."
      },
      {
        "label": "D",
        "text": "Chỉ tập trung vào phát triển kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q46",
    "chapter": "Chương 5",
    "number": 46,
    "question": "Nội dung văn hóa - xã hội của liên minh ở Việt Nam nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc, xây dựng con người, thực hiện công bằng xã hội."
      },
      {
        "label": "B",
        "text": "Xóa bỏ văn hóa truyền thống, du nhập hoàn toàn văn hóa phương Tây."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung xóa đói giảm nghèo."
      },
      {
        "label": "D",
        "text": "Chỉ tập trung xây dựng con người mới."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q47",
    "chapter": "Chương 5",
    "number": 47,
    "question": "Phương hướng cơ bản đầu tiên để xây dựng cơ cấu XH-GC và tăng cường liên minh ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Đẩy mạnh CNH, HĐH; giải quyết tốt quan hệ giữa tăng trưởng kinh tế với công bằng xã hội."
      },
      {
        "label": "B",
        "text": "Xây dựng và thực hiện hệ thống chính sách xã hội tổng thể."
      },
      {
        "label": "C",
        "text": "Tạo sự đồng thuận và đoàn kết."
      },
      {
        "label": "D",
        "text": "Đổi mới hoạt động của Đảng, Nhà nước, Mặt trận Tổ quốc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q48",
    "chapter": "Chương 5",
    "number": 48,
    "question": "Phương hướng thứ hai để xây dựng cơ cấu XH-GC và tăng cường liên minh ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng và thực hiện hệ thống chính sách xã hội tổng thể."
      },
      {
        "label": "B",
        "text": "Đẩy mạnh CNH, HĐH."
      },
      {
        "label": "C",
        "text": "Hoàn thiện thể chế KTTT định hướng XHCN."
      },
      {
        "label": "D",
        "text": "Tạo sự đồng thuận và đoàn kết."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q49",
    "chapter": "Chương 5",
    "number": 49,
    "question": "Phương hướng thứ ba để xây dựng cơ cấu XH-GC và tăng cường liên minh ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Tạo sự đồng thuận và phát huy tinh thần đoàn kết thống nhất."
      },
      {
        "label": "B",
        "text": "Đẩy mạnh CNH, HĐH."
      },
      {
        "label": "C",
        "text": "Xây dựng chính sách xã hội."
      },
      {
        "label": "D",
        "text": "Đổi mới hoạt động của Đảng, Nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q50",
    "chapter": "Chương 5",
    "number": 50,
    "question": "Phương hướng thứ tư để xây dựng cơ cấu XH-GC và tăng cường liên minh ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN, đẩy mạnh phát triển khoa học, công nghệ."
      },
      {
        "label": "B",
        "text": "Tạo sự đồng thuận."
      },
      {
        "label": "C",
        "text": "Xây dựng chính sách xã hội."
      },
      {
        "label": "D",
        "text": "Đẩy mạnh CNH, HĐH."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q51",
    "chapter": "Chương 5",
    "number": 51,
    "question": "Phương hướng thứ năm để xây dựng cơ cấu XH-GC và tăng cường liên minh ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Đổi mới hoạt động của Đảng, Nhà nước, Mặt trận Tổ quốc Việt Nam."
      },
      {
        "label": "B",
        "text": "Hoàn thiện thể chế KTTT định hướng XHCN."
      },
      {
        "label": "C",
        "text": "Tạo sự đồng thuận."
      },
      {
        "label": "D",
        "text": "Xây dựng chính sách xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q52",
    "chapter": "Chương 5",
    "number": 52,
    "question": "Chính sách đối với giai cấp công nhân ở Việt Nam tập trung vào:",
    "options": [
      {
        "label": "A",
        "text": "Nâng cao bản lĩnh chính trị, trình độ học vấn, chuyên môn, bảo đảm việc làm, nhà ở, phúc lợi."
      },
      {
        "label": "B",
        "text": "Chỉ tăng số lượng công nhân."
      },
      {
        "label": "C",
        "text": "Giảm tiền lương của công nhân."
      },
      {
        "label": "D",
        "text": "Hạn chế vai trò của công nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q53",
    "chapter": "Chương 5",
    "number": 53,
    "question": "Chính sách đối với giai cấp nông dân ở Việt Nam tập trung vào:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng nông thôn mới, hỗ trợ nông dân học nghề, ứng dụng KHKT, xóa đói giảm nghèo."
      },
      {
        "label": "B",
        "text": "Hạn chế nông dân chuyển đổi nghề nghiệp."
      },
      {
        "label": "C",
        "text": "Giữ nguyên sản xuất nông nghiệp lạc hậu."
      },
      {
        "label": "D",
        "text": "Chỉ tập trung vào các trang trại lớn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q54",
    "chapter": "Chương 5",
    "number": 54,
    "question": "Chính sách đối với đội ngũ trí thức ở Việt Nam tập trung vào:",
    "options": [
      {
        "label": "A",
        "text": "Tôn trọng tự do tư tưởng, trọng dụng, đãi ngộ xứng đáng, thu hút nhân tài."
      },
      {
        "label": "B",
        "text": "Hạn chế tự do nghiên cứu, sáng tạo."
      },
      {
        "label": "C",
        "text": "Không coi trọng sở hữu trí tuệ."
      },
      {
        "label": "D",
        "text": "Chỉ sử dụng trí thức trong khu vực nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q55",
    "chapter": "Chương 5",
    "number": 55,
    "question": "Chính sách đối với đội ngũ doanh nhân ở Việt Nam tập trung vào:",
    "options": [
      {
        "label": "A",
        "text": "Tạo cơ chế thuận lợi, tôn vinh doanh nhân có đóng góp, đảm bảo quyền lợi."
      },
      {
        "label": "B",
        "text": "Hạn chế sự phát triển của doanh nhân tư nhân."
      },
      {
        "label": "C",
        "text": "Chỉ ưu tiên doanh nghiệp nhà nước."
      },
      {
        "label": "D",
        "text": "Tăng cường thanh tra, kiểm tra."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q56",
    "chapter": "Chương 5",
    "number": 56,
    "question": "Chính sách đối với phụ nữ ở Việt Nam tập trung vào:",
    "options": [
      {
        "label": "A",
        "text": "Nâng cao trình độ mọi mặt, thực hiện bình đẳng giới, tạo điều kiện phát triển."
      },
      {
        "label": "B",
        "text": "Hạn chế phụ nữ tham gia quản lý."
      },
      {
        "label": "C",
        "text": "Giữ quan điểm \"trọng nam khinh nữ\"."
      },
      {
        "label": "D",
        "text": "Không có chính sách riêng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q57",
    "chapter": "Chương 5",
    "number": 57,
    "question": "Chính sách đối với thế hệ trẻ ở Việt Nam tập trung vào:",
    "options": [
      {
        "label": "A",
        "text": "Bồi dưỡng lý tưởng cách mạng, tạo môi trường học tập, nghiên cứu, lao động, phát huy vai trò xung kích."
      },
      {
        "label": "B",
        "text": "Hạn chế thanh niên tham gia chính trị."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung vào giải trí."
      },
      {
        "label": "D",
        "text": "Không coi trọng vai trò của thanh niên."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q58",
    "chapter": "Chương 5",
    "number": 58,
    "question": "Đâu không phải là một loại hình cơ cấu xã hội?",
    "options": [
      {
        "label": "A",
        "text": "Cơ cấu xã hội - gia đình."
      },
      {
        "label": "B",
        "text": "Cơ cấu xã hội - dân tộc."
      },
      {
        "label": "C",
        "text": "Cơ cấu xã hội - tôn giáo."
      },
      {
        "label": "D",
        "text": "Cơ cấu xã hội - giai cấp. (Ghi chú: Mặc dù tài liệu liệt kê nhiều loại, nhưng \"gia đình\" thường được xem xét ở Chương 7, trong khi 3 phương án còn lại được liệt kê rõ ràng ở Chương 5)"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q59",
    "chapter": "Chương 5",
    "number": 59,
    "question": "Trong xã hội có giai cấp, cơ cấu xã hội - giai cấp...",
    "options": [
      {
        "label": "A",
        "text": "Liên quan đến các đảng phái chính trị và nhà nước."
      },
      {
        "label": "B",
        "text": "Không liên quan đến chính trị."
      },
      {
        "label": "C",
        "text": "Không liên quan đến sở hữu TLSX."
      },
      {
        "label": "D",
        "text": "Không quan trọng bằng cơ cấu dân cư."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q60",
    "chapter": "Chương 5",
    "number": 60,
    "question": "Cơ cấu kinh tế trong thời kỳ quá độ lên CNXH có đặc điểm gì?",
    "options": [
      {
        "label": "A",
        "text": "Vận động theo cơ chế thị trường, có sự quản lý của Nhà nước pháp quyền XHCN."
      },
      {
        "label": "B",
        "text": "Chỉ vận động theo cơ chế kế hoạch hóa tập trung."
      },
      {
        "label": "C",
        "text": "Vận động tự do, không có sự quản lý của nhà nước."
      },
      {
        "label": "D",
        "text": "Chỉ có thành phần kinh tế nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q61",
    "chapter": "Chương 5",
    "number": 61,
    "question": "Sự biến đổi của cơ cấu xã hội - giai cấp trong thời kỳ quá độ mang tính...",
    "options": [
      {
        "label": "A",
        "text": "Quy luật."
      },
      {
        "label": "B",
        "text": "Ngẫu nhiên."
      },
      {
        "label": "C",
        "text": "Chủ quan."
      },
      {
        "label": "D",
        "text": "Bắt buộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q62",
    "chapter": "Chương 5",
    "number": 62,
    "question": "\"Sự xích lại gần nhau\" giữa các giai cấp, tầng lớp là xu hướng của:",
    "options": [
      {
        "label": "A",
        "text": "Quy luật biến đổi thứ ba của cơ cấu xã hội - giai cấp."
      },
      {
        "label": "B",
        "text": "Quy luật biến đổi thứ nhất."
      },
      {
        "label": "C",
        "text": "Quy luật biến đổi thứ hai."
      },
      {
        "label": "D",
        "text": "Không phải là quy luật."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q63",
    "chapter": "Chương 5",
    "number": 63,
    "question": "Vai trò chủ đạo của giai cấp công nhân trong cơ cấu XH-GC thời kỳ quá độ thể hiện ở:",
    "options": [
      {
        "label": "A",
        "text": "Tiên phong trong CNH, HĐH, cải tạo xã hội cũ, xây dựng xã hội mới."
      },
      {
        "label": "B",
        "text": "Chiếm số lượng đông đảo nhất."
      },
      {
        "label": "C",
        "text": "Có thu nhập cao nhất."
      },
      {
        "label": "D",
        "text": "Nắm giữ toàn bộ tư liệu sản xuất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q64",
    "chapter": "Chương 5",
    "number": 64,
    "question": "Luận điểm \"Nếu không liên minh với nông dân thì không thể có được chính quyền của giai cấp vô sản\" là của ai?",
    "options": [
      {
        "label": "A",
        "text": "V.I.Lênin."
      },
      {
        "label": "B",
        "text": "C.Mác."
      },
      {
        "label": "C",
        "text": "Ph.Ăngghen."
      },
      {
        "label": "D",
        "text": "J.Xtalin."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q65",
    "chapter": "Chương 5",
    "number": 65,
    "question": "V.I.Lênin xem liên minh công - nông - trí thức là:",
    "options": [
      {
        "label": "A",
        "text": "Một hình thức liên minh đặc biệt trong suốt quá trình xây dựng CNXH."
      },
      {
        "label": "B",
        "text": "Chỉ cần thiết trong giai đoạn giành chính quyền."
      },
      {
        "label": "C",
        "text": "Không cần thiết."
      },
      {
        "label": "D",
        "text": "Một hình thức tạm thời."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q66",
    "chapter": "Chương 5",
    "number": 66,
    "question": "Nhu cầu và lợi ích kinh tế của các chủ thể (công nhân, nông dân, trí thức) trong thời kỳ quá độ:",
    "options": [
      {
        "label": "A",
        "text": "Vừa có sự thống nhất, vừa có mâu thuẫn lợi ích ở mức độ khác nhau."
      },
      {
        "label": "B",
        "text": "Hoàn toàn thống nhất, không có mâu thuẫn."
      },
      {
        "label": "C",
        "text": "Hoàn toàn mâu thuẫn, không có sự thống nhất."
      },
      {
        "label": "D",
        "text": "Không liên quan đến nhau."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q67",
    "chapter": "Chương 5",
    "number": 67,
    "question": "Nguyên tắc \"đảm bảo sự lãnh đạo của Đảng Cộng sản\" trong liên minh là để:",
    "options": [
      {
        "label": "A",
        "text": "Đảm bảo cho khối liên minh đi đúng định hướng XHCN."
      },
      {
        "label": "B",
        "text": "Đảm bảo lợi ích riêng của Đảng."
      },
      {
        "label": "C",
        "text": "Hạn chế lợi ích của các giai cấp khác."
      },
      {
        "label": "D",
        "text": "Loại bỏ các giai cấp khác."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q68",
    "chapter": "Chương 5",
    "number": 68,
    "question": "Giai cấp công nhân Việt Nam hiện nay chiếm tỷ lệ bao nhiêu % dân số? (Theo tài liệu)",
    "options": [
      {
        "label": "A",
        "text": "Khoảng 14% (năm 2021)."
      },
      {
        "label": "B",
        "text": "Khoảng 27%."
      },
      {
        "label": "C",
        "text": "Khoảng 50%."
      },
      {
        "label": "D",
        "text": "Khoảng 10%."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q69",
    "chapter": "Chương 5",
    "number": 69,
    "question": "Giai cấp công nhân Việt Nam hiện nay chiếm tỷ lệ bao nhiêu % lực lượng lao động xã hội? (Theo tài liệu)",
    "options": [
      {
        "label": "A",
        "text": "Khoảng 27% (năm 2021)."
      },
      {
        "label": "B",
        "text": "Khoảng 14%."
      },
      {
        "label": "C",
        "text": "Khoảng 50%."
      },
      {
        "label": "D",
        "text": "Khoảng 60%."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q70",
    "chapter": "Chương 5",
    "number": 70,
    "question": "\"Chủ thể của quá trình phát triển, xây dựng nông thôn mới\" là vai trò của:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp nông dân Việt Nam."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân Việt Nam."
      },
      {
        "label": "C",
        "text": "Đội ngũ trí thức Việt Nam."
      },
      {
        "label": "D",
        "text": "Đội ngũ doanh nhân Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q71",
    "chapter": "Chương 5",
    "number": 71,
    "question": "Đảng ta khẳng định \"Xây dựng đội ngũ trí thức vững mạnh là trực tiếp nâng tầm trí tuệ của dân tộc\" trong văn kiện nào?",
    "options": [
      {
        "label": "A",
        "text": "Văn kiện Đại hội Đảng (không nêu rõ số). Tài liệu ghi chung chung"
      },
      {
        "label": "B",
        "text": "Văn kiện Đại hội VI."
      },
      {
        "label": "C",
        "text": "Văn kiện Đại hội IX."
      },
      {
        "label": "D",
        "text": "Văn kiện Đại hội XII. (Ghi chú: Tài liệu trích dẫn \"Đảng Cộng sản Việt Nam: Văn kiện Đảng toàn tập, Nxb Chính trị quốc gia, Hà Nội, 2008, t.69, tr 896\" - thường là các NQ TW, nhưng câu hỏi chung chung, chọn A)"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q72",
    "chapter": "Chương 5",
    "number": 72,
    "question": "Nghị quyết số 09-NQ/TW (2013) của Bộ Chính trị nói về:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng và phát huy vai trò của đội ngũ doanh nhân Việt Nam."
      },
      {
        "label": "B",
        "text": "Xây dựng giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Xây dựng giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Xây dựng đội ngũ trí thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q73",
    "chapter": "Chương 5",
    "number": 73,
    "question": "Đảng ta khẳng định \"Đại đoàn kết toàn dân tộc là đường lối chiến lược\" tại Đại hội nào?",
    "options": [
      {
        "label": "A",
        "text": "Đại hội XII."
      },
      {
        "label": "B",
        "text": "Đại hội VI."
      },
      {
        "label": "C",
        "text": "Đại hội IX."
      },
      {
        "label": "D",
        "text": "Đại hội XI."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q74",
    "chapter": "Chương 5",
    "number": 74,
    "question": "Nội dung kinh tế của liên minh ở Việt Nam đòi hỏi phải phát triển:",
    "options": [
      {
        "label": "A",
        "text": "Công nghiệp - nông nghiệp - khoa học và công nghệ - dịch vụ."
      },
      {
        "label": "B",
        "text": "Chỉ công nghiệp - nông nghiệp."
      },
      {
        "label": "C",
        "text": "Chỉ khoa học và công nghệ."
      },
      {
        "label": "D",
        "text": "Chỉ dịch vụ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q75",
    "chapter": "Chương 5",
    "number": 75,
    "question": "Nội dung chính trị của liên minh ở Việt Nam yêu cầu:",
    "options": [
      {
        "label": "A",
        "text": "Giữ vững vai trò lãnh đạo của Đảng, xây dựng Nhà nước pháp quyền XHCN."
      },
      {
        "label": "B",
        "text": "Xóa bỏ Nhà nước."
      },
      {
        "label": "C",
        "text": "Chấp nhận đa nguyên, đa đảng."
      },
      {
        "label": "D",
        "text": "Tách rời Đảng khỏi Nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q76",
    "chapter": "Chương 5",
    "number": 76,
    "question": "Nội dung văn hóa - xã hội của liên minh đòi hỏi phải \"gắn tăng trưởng kinh tế với...\"",
    "options": [
      {
        "label": "A",
        "text": "Phát triển văn hóa, xây dựng con người, thực hiện tiến bộ, công bằng xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ phát triển văn hóa."
      },
      {
        "label": "C",
        "text": "Chỉ xây dựng con người."
      },
      {
        "label": "D",
        "text": "Chỉ thực hiện công bằng xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q77",
    "chapter": "Chương 5",
    "number": 77,
    "question": "Phương hướng nào đòi hỏi phải \"nâng cao nhận thức về tầm quan trọng của khối liên minh\"?",
    "options": [
      {
        "label": "A",
        "text": "Tạo sự đồng thuận và phát huy tinh thần đoàn kết."
      },
      {
        "label": "B",
        "text": "Đẩy mạnh CNH, HĐH."
      },
      {
        "label": "C",
        "text": "Xây dựng chính sách xã hội."
      },
      {
        "label": "D",
        "text": "Đổi mới hoạt động của Đảng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q78",
    "chapter": "Chương 5",
    "number": 78,
    "question": "Phương hướng nào nhấn mạnh đến vai trò của \"thể chế kinh tế thị trường định hướng XHCN\" và \"cách mạng công nghiệp 4.0\"?",
    "options": [
      {
        "label": "A",
        "text": "Hoàn thiện thể chế... đẩy mạnh phát triển khoa học và công nghệ."
      },
      {
        "label": "B",
        "text": "Tạo sự đồng thuận."
      },
      {
        "label": "C",
        "text": "Xây dựng chính sách xã hội."
      },
      {
        "label": "D",
        "text": "Đổi mới hoạt động của Đảng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q79",
    "chapter": "Chương 5",
    "number": 79,
    "question": "Phương hướng \"Đổi mới hoạt động của Đảng, Nhà nước, Mặt trận Tổ quốc Việt Nam\" nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Tăng cường khối liên minh và xây dựng khối đại đoàn kết toàn dân."
      },
      {
        "label": "B",
        "text": "Chỉ tăng cường vai trò của Đảng."
      },
      {
        "label": "C",
        "text": "Chỉ tăng cường vai trò của Nhà nước."
      },
      {
        "label": "D",
        "text": "Chỉ tăng cường vai trò của Mặt trận."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q80",
    "chapter": "Chương 5",
    "number": 80,
    "question": "Trong chính sách với thế hệ trẻ, cần khuyến khích thanh niên:",
    "options": [
      {
        "label": "A",
        "text": "Nuôi dưỡng ước mơ, hoài bão, xung kích, sáng tạo, làm chủ khoa học, công nghệ."
      },
      {
        "label": "B",
        "text": "Chỉ tập trung học tập lý luận."
      },
      {
        "label": "C",
        "text": "Chỉ tham gia lao động sản xuất."
      },
      {
        "label": "D",
        "text": "Chỉ tham gia các hoạt động giải trí."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q81",
    "chapter": "Chương 5",
    "number": 81,
    "question": "\"Cơ cấu xã hội - dân tộc\" là:",
    "options": [
      {
        "label": "A",
        "text": "Tập hợp cộng đồng người hình thành lâu dài trong lịch sử, gắn kết về kinh tế, lãnh thổ, văn hóa, ngôn ngữ."
      },
      {
        "label": "B",
        "text": "Tập hợp người theo các dân tộc khác nhau trong một quốc gia."
      },
      {
        "label": "C",
        "text": "Tập hợp người theo các nghề nghiệp."
      },
      {
        "label": "D",
        "text": "Tập hợp người theo các giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q82",
    "chapter": "Chương 5",
    "number": 82,
    "question": "\"Cơ cấu xã hội - tôn giáo\" là:",
    "options": [
      {
        "label": "A",
        "text": "Tập hợp cộng đồng người có cùng một đức tin tôn giáo, giáo lý, giáo luật."
      },
      {
        "label": "B",
        "text": "Tập hợp người theo các tôn giáo khác nhau trong một quốc gia."
      },
      {
        "label": "C",
        "text": "Tập hợp người theo các giai cấp."
      },
      {
        "label": "D",
        "text": "Tập hợp người theo các dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q83",
    "chapter": "Chương 5",
    "number": 83,
    "question": "Trong thời kỳ quá độ, giai cấp công nhân và nông dân...",
    "options": [
      {
        "label": "A",
        "text": "Cùng chung sức cải tạo xã hội cũ và xây dựng xã hội mới."
      },
      {
        "label": "B",
        "text": "Đối kháng trực tiếp với nhau."
      },
      {
        "label": "C",
        "text": "Không có mối liên hệ."
      },
      {
        "label": "D",
        "text": "Chỉ có công nhân xây dựng xã hội mới."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q84",
    "chapter": "Chương 5",
    "number": 84,
    "question": "Sự biến đổi của cơ cấu XH-GC bị chi phối bởi sự thay đổi của:",
    "options": [
      {
        "label": "A",
        "text": "Phương thức sản xuất, cơ cấu ngành nghề, thành phần kinh tế."
      },
      {
        "label": "B",
        "text": "Chỉ ý thức xã hội."
      },
      {
        "label": "C",
        "text": "Chỉ kiến trúc thượng tầng."
      },
      {
        "label": "D",
        "text": "Chỉ yếu tố dân số."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q85",
    "chapter": "Chương 5",
    "number": 85,
    "question": "Sự phát triển của kinh tế thị trường trong thời kỳ quá độ làm cho các giai cấp, tầng lớp:",
    "options": [
      {
        "label": "A",
        "text": "Trở nên năng động, thích ứng nhanh, chủ động sáng tạo."
      },
      {
        "label": "B",
        "text": "Trở nên trì trệ, bảo thủ."
      },
      {
        "label": "C",
        "text": "Bị xóa bỏ hoàn toàn."
      },
      {
        "label": "D",
        "text": "Chỉ tập trung vào sản xuất nhỏ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q86",
    "chapter": "Chương 5",
    "number": 86,
    "question": "Tính phức tạp của cơ cấu XH-GC thời kỳ quá độ biểu hiện ở:",
    "options": [
      {
        "label": "A",
        "text": "Sự tồn tại đan xen giữa yếu tố cũ (tàn dư) và yếu tố mới (XHCN)."
      },
      {
        "label": "B",
        "text": "Chỉ tồn tại yếu tố mới."
      },
      {
        "label": "C",
        "text": "Chỉ tồn tại yếu tố cũ."
      },
      {
        "label": "D",
        "text": "Sự thuần nhất về giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q87",
    "chapter": "Chương 5",
    "number": 87,
    "question": "Giai cấp tư sản trong thời kỳ quá độ (theo V.I.Lênin):",
    "options": [
      {
        "label": "A",
        "text": "Đã bị đánh bại nhưng vẫn còn sức mạnh."
      },
      {
        "label": "B",
        "text": "Đã bị tiêu diệt hoàn toàn."
      },
      {
        "label": "C",
        "text": "Trở thành đồng minh của giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Nắm vai trò lãnh đạo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q88",
    "chapter": "Chương 5",
    "number": 88,
    "question": "Xu hướng xích lại gần nhau giữa các giai cấp, tầng lớp là một:",
    "options": [
      {
        "label": "A",
        "text": "Quá trình lâu dài thông qua các cải biến cách mạng."
      },
      {
        "label": "B",
        "text": "Quá trình diễn ra tức thời, ngay lập tức."
      },
      {
        "label": "C",
        "text": "Quá trình tự phát, không cần cải biến."
      },
      {
        "label": "D",
        "text": "Quá trình không thể thực hiện được."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q89",
    "chapter": "Chương 5",
    "number": 89,
    "question": "Tại sao C.Mác và Ph.Ăngghen gọi các cuộc đấu tranh của GC công nhân (khi chưa liên minh) là \"bài ai điếu\"?",
    "options": [
      {
        "label": "A",
        "text": "Vì các cuộc đấu tranh đó đều thất bại."
      },
      {
        "label": "B",
        "text": "Vì các cuộc đấu tranh đó đều thắng lợi."
      },
      {
        "label": "C",
        "text": "Vì mang tính chất bi hùng."
      },
      {
        "label": "D",
        "text": "Vì mang tính chất tự phát."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q90",
    "chapter": "Chương 5",
    "number": 90,
    "question": "V.I.Lênin coi liên minh công-nông là vấn đề mang tính:",
    "options": [
      {
        "label": "A",
        "text": "Nguyên tắc."
      },
      {
        "label": "B",
        "text": "Sách lược, tạm thời."
      },
      {
        "label": "C",
        "text": "Không quan trọng."
      },
      {
        "label": "D",
        "text": "Chỉ có ý nghĩa về kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q91",
    "chapter": "Chương 5",
    "number": 91,
    "question": "Nội dung kinh tế của liên minh trong thời kỳ quá độ nổi lên là:",
    "options": [
      {
        "label": "A",
        "text": "Nhân tố quyết định nhất cho sự thắng lợi hoàn toàn của CNXH."
      },
      {
        "label": "B",
        "text": "Nhân tố thứ yếu, sau chính trị."
      },
      {
        "label": "C",
        "text": "Nhân tố không cần thiết."
      },
      {
        "label": "D",
        "text": "Nhân tố chỉ có ở các nước TBCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q92",
    "chapter": "Chương 5",
    "number": 92,
    "question": "Quá trình thực hiện liên minh giai cấp, tầng lớp đồng thời là quá trình:",
    "options": [
      {
        "label": "A",
        "text": "Liên tục phát hiện và giải quyết mâu thuẫn (về lợi ích) để tạo đồng thuận."
      },
      {
        "label": "B",
        "text": "Xóa bỏ hoàn toàn mâu thuẫn."
      },
      {
        "label": "C",
        "text": "Chấp nhận mâu thuẫn, không cần giải quyết."
      },
      {
        "label": "D",
        "text": "Chỉ tập trung vào lợi ích chung, bỏ qua lợi ích riêng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q93",
    "chapter": "Chương 5",
    "number": 93,
    "question": "Nguyên tắc \"tự nguyện\" trong liên minh có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Các giai cấp, tầng lớp tự nguyện tham gia vì lợi ích chung và lợi ích của chính mình."
      },
      {
        "label": "B",
        "text": "Bắt buộc phải tham gia."
      },
      {
        "label": "C",
        "text": "Chỉ giai cấp công nhân tự nguyện."
      },
      {
        "label": "D",
        "text": "Chỉ giai cấp nông dân tự nguyện."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q94",
    "chapter": "Chương 5",
    "number": 94,
    "question": "Cơ cấu XH-GC Việt Nam thời kỳ quá độ có sự tham gia của:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân, nông dân, đội ngũ trí thức, doanh nhân, tiểu chủ..."
      },
      {
        "label": "B",
        "text": "Chỉ công nhân, nông dân, trí thức."
      },
      {
        "label": "C",
        "text": "Chỉ công nhân, nông dân."
      },
      {
        "label": "D",
        "text": "Chỉ công nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q95",
    "chapter": "Chương 5",
    "number": 95,
    "question": "Sự biến đổi của giai cấp công nhân Việt Nam là do:",
    "options": [
      {
        "label": "A",
        "text": "Quá trình CNH, HĐH và phát triển kinh tế thị trường định hướng XHCN."
      },
      {
        "label": "B",
        "text": "Sự suy giảm của nền kinh tế."
      },
      {
        "label": "C",
        "text": "Sự quay lại của nền kinh tế bao cấp."
      },
      {
        "label": "D",
        "text": "Yếu tố dân số."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q96",
    "chapter": "Chương 5",
    "number": 96,
    "question": "Sự phân hóa giàu nghèo trong nội bộ giai cấp nông dân Việt Nam hiện nay:",
    "options": [
      {
        "label": "A",
        "text": "Ngày càng rõ nét."
      },
      {
        "label": "B",
        "text": "Không tồn tại."
      },
      {
        "label": "C",
        "text": "Đang giảm dần."
      },
      {
        "label": "D",
        "text": "Chỉ tồn tại ở miền núi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q97",
    "chapter": "Chương 5",
    "number": 97,
    "question": "Vai trò của đội ngũ trí thức Việt Nam càng trở nên quan trọng trong bối cảnh:",
    "options": [
      {
        "label": "A",
        "text": "Phát triển kinh tế tri thức và cách mạng công nghiệp 4.0."
      },
      {
        "label": "B",
        "text": "Phát triển nông nghiệp."
      },
      {
        "label": "C",
        "text": "Chiến tranh."
      },
      {
        "label": "D",
        "text": "Kinh tế bao cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q98",
    "chapter": "Chương 5",
    "number": 98,
    "question": "Đội ngũ doanh nhân Việt Nam hiện nay có vai trò:",
    "options": [
      {
        "label": "A",
        "text": "Đóng góp tích cực vào phát triển KT-XH, giải quyết việc làm, an sinh xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ làm giàu cho bản thân."
      },
      {
        "label": "C",
        "text": "Không có vai trò gì."
      },
      {
        "label": "D",
        "text": "Gây cản trở cho sự phát triển."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q99",
    "chapter": "Chương 5",
    "number": 99,
    "question": "Nội dung kinh tế của liên minh ở Việt Nam đòi hỏi phải xác định đúng:",
    "options": [
      {
        "label": "A",
        "text": "Tiềm lực kinh tế và nhu cầu kinh tế của các giai cấp, tầng lớp."
      },
      {
        "label": "B",
        "text": "Chỉ tiềm lực của công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ nhu cầu của nông dân."
      },
      {
        "label": "D",
        "text": "Chỉ tiềm lực của trí thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q100",
    "chapter": "Chương 5",
    "number": 100,
    "question": "Nội dung chính trị của liên minh ở Việt Nam yêu cầu phải \"hoàn thiện, phát huy...\"",
    "options": [
      {
        "label": "A",
        "text": "Dân chủ xã hội chủ nghĩa và quyền làm chủ của nhân dân."
      },
      {
        "label": "B",
        "text": "Chuyên chính vô sản."
      },
      {
        "label": "C",
        "text": "Chế độ đa nguyên."
      },
      {
        "label": "D",
        "text": "Vai trò của doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q101",
    "chapter": "Chương 5",
    "number": 101,
    "question": "Nội dung văn hóa - xã hội của liên minh ở Việt Nam đòi hỏi phải nâng cao:",
    "options": [
      {
        "label": "A",
        "text": "Chất lượng nguồn nhân lực, xóa đói giảm nghèo, thực hiện an sinh xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ trình độ văn hóa."
      },
      {
        "label": "C",
        "text": "Chỉ chất lượng y tế."
      },
      {
        "label": "D",
        "text": "Chỉ chất lượng giáo dục."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q102",
    "chapter": "Chương 5",
    "number": 102,
    "question": "\"Phát huy nội lực, tinh thần tự lực, tự cường\" là chính sách của Đảng đối với:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp nông dân (ở miền núi, vùng dân tộc)."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Đội ngũ trí thức."
      },
      {
        "label": "D",
        "text": "Đội ngũ doanh nhân. (Ghi chú: Câu này lấy ý từ Chương 6, nhưng có liên quan đến chính sách nông dân)"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q103",
    "chapter": "Chương 5",
    "number": 103,
    "question": "\"Tôn trọng và phát huy tự do tư tưởng trong hoạt động nghiên cứu, sáng tạo\" là chính sách đối với:",
    "options": [
      {
        "label": "A",
        "text": "Đội ngũ trí thức."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Đội ngũ doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q104",
    "chapter": "Chương 5",
    "number": 104,
    "question": "\"Tạo cơ chế, môi trường thuận lợi... có trình độ quản lý, kinh doanh giỏi, có đạo đức nghề nghiệp\" là chính sách đối với:",
    "options": [
      {
        "label": "A",
        "text": "Đội ngũ doanh nhân."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Đội ngũ trí thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q105",
    "chapter": "Chương 5",
    "number": 105,
    "question": "\"Thực hiện tốt bình đẳng giới, tạo điều kiện và cơ hội để phát triển toàn diện\" là chính sách đối với:",
    "options": [
      {
        "label": "A",
        "text": "Phụ nữ."
      },
      {
        "label": "B",
        "text": "Thế hệ trẻ."
      },
      {
        "label": "C",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Giai cấp nông dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q106",
    "chapter": "Chương 5",
    "number": 106,
    "question": "\"Phát huy vai trò của thế hệ trẻ trong sự nghiệp xây dựng và bảo vệ Tổ quốc\" là chính sách đối với:",
    "options": [
      {
        "label": "A",
        "text": "Thế hệ trẻ."
      },
      {
        "label": "B",
        "text": "Phụ nữ."
      },
      {
        "label": "C",
        "text": "Đội ngũ trí thức."
      },
      {
        "label": "D",
        "text": "Đội ngũ doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q107",
    "chapter": "Chương 5",
    "number": 107,
    "question": "Cơ cấu xã hội - giai cấp trong thời kỳ quá độ mang tính:",
    "options": [
      {
        "label": "A",
        "text": "Đa dạng, phức tạp."
      },
      {
        "label": "B",
        "text": "Thuần nhất, đơn giản."
      },
      {
        "label": "C",
        "text": "Chỉ có 2 giai cấp."
      },
      {
        "label": "D",
        "text": "Không còn giai cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q108",
    "chapter": "Chương 5",
    "number": 108,
    "question": "Sự xích lại gần nhau giữa công nhân, nông dân, trí thức dựa trên:",
    "options": [
      {
        "label": "A",
        "text": "Lợi ích cơ bản thống nhất và dưới sự lãnh đạo của Đảng Cộng sản."
      },
      {
        "label": "B",
        "text": "Lợi ích hoàn toàn đối lập."
      },
      {
        "label": "C",
        "text": "Sự ép buộc của nhà nước."
      },
      {
        "label": "D",
        "text": "Sự phát triển tự phát."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q109",
    "chapter": "Chương 5",
    "number": 109,
    "question": "Liên minh công - nông - trí thức là:",
    "options": [
      {
        "label": "A",
        "text": "Tất yếu khách quan (cả về chính trị - xã hội và kinh tế)."
      },
      {
        "label": "B",
        "text": "Chỉ là tất yếu về chính trị."
      },
      {
        "label": "C",
        "text": "Chỉ là tất yếu về kinh tế."
      },
      {
        "label": "D",
        "text": "Là một khẩu hiệu chủ quan."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q110",
    "chapter": "Chương 5",
    "number": 110,
    "question": "Trong liên minh công - nông - trí thức ở Việt Nam, giai cấp nào giữ vai trò nòng cốt?",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Đội ngũ trí thức."
      },
      {
        "label": "D",
        "text": "Đội ngũ doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q111",
    "chapter": "Chương 5",
    "number": 111,
    "question": "Sự biến đổi của cơ cấu xã hội - giai cấp ở Việt Nam chịu tác động của:",
    "options": [
      {
        "label": "A",
        "text": "Quá trình CNH, HĐH và kinh tế thị trường định hướng XHCN."
      },
      {
        "label": "B",
        "text": "Chỉ CNH, HĐH."
      },
      {
        "label": "C",
        "text": "Chỉ kinh tế thị trường."
      },
      {
        "label": "D",
        "text": "Chỉ yếu tố bên ngoài."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q112",
    "chapter": "Chương 5",
    "number": 112,
    "question": "\"Công nhân tri thức\" là bộ phận:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân có trình độ tri thức cao, làm chủ công nghệ."
      },
      {
        "label": "B",
        "text": "Trí thức chuyển sang làm công nhân."
      },
      {
        "label": "C",
        "text": "Nông dân chuyển sang làm công nhân."
      },
      {
        "label": "D",
        "text": "Không thuộc giai cấp công nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q113",
    "chapter": "Chương 5",
    "number": 113,
    "question": "Sự hình thành đội ngũ doanh nhân ở Việt Nam là do:",
    "options": [
      {
        "label": "A",
        "text": "Sự phát triển của kinh tế nhiều thành phần và cơ chế thị trường."
      },
      {
        "label": "B",
        "text": "Sự sụp đổ của kinh tế nhà nước."
      },
      {
        "label": "C",
        "text": "Yêu cầu của nước ngoài."
      },
      {
        "label": "D",
        "text": "Sự phát triển của nông nghiệp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q114",
    "chapter": "Chương 5",
    "number": 114,
    "question": "Nội dung kinh tế của liên minh là nội dung:",
    "options": [
      {
        "label": "A",
        "text": "Cơ bản, quyết định nhất, là cơ sở vật chất - kỹ thuật của liên minh."
      },
      {
        "label": "B",
        "text": "Thứ yếu, sau nội dung chính trị."
      },
      {
        "label": "C",
        "text": "Chỉ mang tính hình thức."
      },
      {
        "label": "D",
        "text": "Tách rời các nội dung khác."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q115",
    "chapter": "Chương 5",
    "number": 115,
    "question": "Mục tiêu của nội dung chính trị trong liên minh ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Giữ vững độc lập dân tộc và định hướng đi lên chủ nghĩa xã hội."
      },
      {
        "label": "B",
        "text": "Xây dựng chế độ tư bản chủ nghĩa."
      },
      {
        "label": "C",
        "text": "Chấp nhận sự lãnh đạo của giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Xóa bỏ nhà nước pháp quyền."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q116",
    "chapter": "Chương 5",
    "number": 116,
    "question": "Mục tiêu của nội dung văn hóa - xã hội trong liên minh ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng con người Việt Nam phát triển toàn diện, hướng đến Chân - Thiện - Mỹ."
      },
      {
        "label": "B",
        "text": "Chỉ phát triển kinh tế, xem nhẹ văn hóa."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung vào các giá trị văn hóa truyền thống."
      },
      {
        "label": "D",
        "text": "Chỉ tiếp thu văn hóa phương Tây."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q117",
    "chapter": "Chương 5",
    "number": 117,
    "question": "Giải quyết tốt mối quan hệ giữa \"tăng trưởng kinh tế\" và \"công bằng xã hội\" là:",
    "options": [
      {
        "label": "A",
        "text": "Một phương hướng cơ bản để xây dựng cơ cấu XH-GC."
      },
      {
        "label": "B",
        "text": "Không cần thiết."
      },
      {
        "label": "C",
        "text": "Chỉ là nhiệm vụ của nhà nước."
      },
      {
        "label": "D",
        "text": "Chỉ là nhiệm vụ của doanh nghiệp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q118",
    "chapter": "Chương 5",
    "number": 118,
    "question": "Việc \"trọng dụng trí thức\" ở Việt Nam dựa trên cơ sở nào?",
    "options": [
      {
        "label": "A",
        "text": "Đánh giá đúng phẩm chất, năng lực và kết quả cống hiến."
      },
      {
        "label": "B",
        "text": "Bằng cấp."
      },
      {
        "label": "C",
        "text": "Quan hệ xã hội."
      },
      {
        "label": "D",
        "text": "Thâm niên công tác."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q119",
    "chapter": "Chương 5",
    "number": 119,
    "question": "\"Bảo vệ quyền sở hữu trí tuệ\" là một nội dung quan trọng trong chính sách đối với:",
    "options": [
      {
        "label": "A",
        "text": "Đội ngũ trí thức."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Đội ngũ doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q120",
    "chapter": "Chương 5",
    "number": 120,
    "question": "\"Nâng cao chất lượng hoạt động của Mặt trận Tổ quốc\" là một nội dung của phương hướng nào?",
    "options": [
      {
        "label": "A",
        "text": "Đổi mới hoạt động của Đảng, Nhà nước, Mặt trận Tổ quốc."
      },
      {
        "label": "B",
        "text": "Đẩy mạnh CNH, HĐH."
      },
      {
        "label": "C",
        "text": "Xây dựng chính sách xã hội."
      },
      {
        "label": "D",
        "text": "Hoàn thiện thể chế KTTT."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q121",
    "chapter": "Chương 5",
    "number": 121,
    "question": "Cơ cấu xã hội nào không được đề cập trong các loại hình cơ cấu xã hội cơ bản của Chương 5?",
    "options": [
      {
        "label": "A",
        "text": "Cơ cấu xã hội - lứa tuổi."
      },
      {
        "label": "B",
        "text": "Cơ cấu xã hội - dân cư."
      },
      {
        "label": "C",
        "text": "Cơ cấu xã hội - nghề nghiệp."
      },
      {
        "label": "D",
        "text": "Cơ cấu xã hội - giai cấp. (Ghi chú: Tài liệu ghi \"cơ cấu độ tuổi\" thuộc cơ cấu dân cư, nhưng không ghi \"cơ cấu lứa tuổi\" là 1 loại riêng)"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q122",
    "chapter": "Chương 5",
    "number": 122,
    "question": "Sự biến đổi của cơ cấu XH-GC trong thời kỳ quá độ là một quá trình:",
    "options": [
      {
        "label": "A",
        "text": "Lâu dài, phức tạp."
      },
      {
        "label": "B",
        "text": "Nhanh chóng, đơn giản."
      },
      {
        "label": "C",
        "text": "Chỉ diễn ra ở thành thị."
      },
      {
        "label": "D",
        "text": "Chỉ diễn ra ở nông thôn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q123",
    "chapter": "Chương 5",
    "number": 123,
    "question": "Mối quan hệ giữa các giai cấp, tầng lớp trong thời kỳ quá độ là:",
    "options": [
      {
        "label": "A",
        "text": "Vừa hợp tác, vừa đấu tranh."
      },
      {
        "label": "B",
        "text": "Chỉ có hợp tác."
      },
      {
        "label": "C",
        "text": "Chỉ có đấu tranh."
      },
      {
        "label": "D",
        "text": "Không có quan hệ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q124",
    "chapter": "Chương 5",
    "number": 124,
    "question": "\"Liên minh đặc biệt\" là cách V.I.Lênin gọi liên minh nào?",
    "options": [
      {
        "label": "A",
        "text": "Giữa giai cấp vô sản và các tầng lớp lao động không phải vô sản."
      },
      {
        "label": "B",
        "text": "Giữa giai cấp vô sản và giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Giữa giai cấp vô sản và giai cấp địa chủ."
      },
      {
        "label": "D",
        "text": "Giữa các nước XHCN."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q125",
    "chapter": "Chương 5",
    "number": 125,
    "question": "Nội dung kinh tế của liên minh là nhằm thỏa mãn:",
    "options": [
      {
        "label": "A",
        "text": "Nhu cầu và lợi ích kinh tế của các chủ thể trong liên minh."
      },
      {
        "label": "B",
        "text": "Chỉ lợi ích của giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ lợi ích của giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Chỉ lợi ích của nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q126",
    "chapter": "Chương 5",
    "number": 126,
    "question": "Cơ cấu xã hội - giai cấp ở Việt Nam trước 1986 mang nặng tính:",
    "options": [
      {
        "label": "A",
        "text": "Nông nghiệp, nông thôn."
      },
      {
        "label": "B",
        "text": "Công nghiệp, dịch vụ."
      },
      {
        "label": "C",
        "text": "Tri thức."
      },
      {
        "label": "D",
        "text": "Thị trường."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q127",
    "chapter": "Chương 5",
    "number": 127,
    "question": "Sự đa dạng của giai cấp công nhân Việt Nam hiện nay thể hiện ở:",
    "options": [
      {
        "label": "A",
        "text": "Phát triển theo cả thành phần kinh tế và ngành nghề."
      },
      {
        "label": "B",
        "text": "Chỉ theo thành phần kinh tế."
      },
      {
        "label": "C",
        "text": "Chỉ theo ngành nghề."
      },
      {
        "label": "D",
        "text": "Chỉ theo khu vực nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q128",
    "chapter": "Chương 5",
    "number": 128,
    "question": "\"Phân hóa giàu nghèo\" là xu hướng biến đổi trong nội bộ:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "B",
        "text": "Chỉ giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ đội ngũ trí thức."
      },
      {
        "label": "D",
        "text": "Không giai cấp nào."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q129",
    "chapter": "Chương 5",
    "number": 129,
    "question": "\"Đội ngũ doanh nhân\" ở Việt Nam được hình thành từ:",
    "options": [
      {
        "label": "A",
        "text": "Nhiều nguồn gốc xã hội khác nhau (công nhân, nông dân, trí thức...)."
      },
      {
        "label": "B",
        "text": "Chỉ từ giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ từ giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Chỉ từ tầng lớp tư sản cũ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q130",
    "chapter": "Chương 5",
    "number": 130,
    "question": "Nội dung nào là nền tảng của khối đại đoàn kết toàn dân tộc ở Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "Liên minh công - nông - trí."
      },
      {
        "label": "B",
        "text": "Chỉ giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ đội ngũ doanh nhân."
      },
      {
        "label": "D",
        "text": "Chỉ thế hệ trẻ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q131",
    "chapter": "Chương 5",
    "number": 131,
    "question": "Việc \"chuyển giao và ứng dụng khoa học - kỹ thuật\" thuộc nội dung nào của liên minh?",
    "options": [
      {
        "label": "A",
        "text": "Nội dung kinh tế."
      },
      {
        "label": "B",
        "text": "Nội dung chính trị."
      },
      {
        "label": "C",
        "text": "Nội dung văn hóa - xã hội."
      },
      {
        "label": "D",
        "text": "Không thuộc nội dung nào."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q132",
    "chapter": "Chương 5",
    "number": 132,
    "question": "Việc \"động viên các lực lượng... chấp hành đường lối của Đảng, pháp luật của Nhà nước\" thuộc nội dung nào của liên minh?",
    "options": [
      {
        "label": "A",
        "text": "Nội dung chính trị."
      },
      {
        "label": "B",
        "text": "Nội dung kinh tế."
      },
      {
        "label": "C",
        "text": "Nội dung văn hóa - xã hội."
      },
      {
        "label": "D",
        "text": "Không thuộc nội dung nào."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q133",
    "chapter": "Chương 5",
    "number": 133,
    "question": "Việc \"nâng cao dân trí, thực hiện tốt an sinh xã hội\" thuộc nội dung nào của liên minh?",
    "options": [
      {
        "label": "A",
        "text": "Nội dung văn hóa - xã hội."
      },
      {
        "label": "B",
        "text": "Nội dung kinh tế."
      },
      {
        "label": "C",
        "text": "Nội dung chính trị."
      },
      {
        "label": "D",
        "text": "Không thuộc nội dung nào."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q134",
    "chapter": "Chương 5",
    "number": 134,
    "question": "Phương hướng nào đòi hỏi phải \"tôn trọng quy luật khách quan\" và \"xuất phát từ thực tiễn\"?",
    "options": [
      {
        "label": "A",
        "text": "Đẩy mạnh CNH, HĐH."
      },
      {
        "label": "B",
        "text": "Xây dựng chính sách xã hội."
      },
      {
        "label": "C",
        "text": "Tạo sự đồng thuận."
      },
      {
        "label": "D",
        "text": "Đổi mới hoạt động của Đảng. (Ghi chú: Lấy ý từ bài học kinh nghiệm ở Chương 1, nhưng liên quan đến phương hướng)"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q135",
    "chapter": "Chương 5",
    "number": 135,
    "question": "\"Bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp\" là các chính sách cụ thể đối với:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Đội ngũ trí thức."
      },
      {
        "label": "D",
        "text": "Đội ngũ doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q136",
    "chapter": "Chương 5",
    "number": 136,
    "question": "\"Xây dựng nông thôn mới\" là chính sách gắn liền với:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Đội ngũ trí thức."
      },
      {
        "label": "D",
        "text": "Đội ngũ doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q137",
    "chapter": "Chương 5",
    "number": 137,
    "question": "\"Thu hút nhân tài\" là chính sách đặc biệt quan trọng đối với:",
    "options": [
      {
        "label": "A",
        "text": "Đội ngũ trí thức."
      },
      {
        "label": "B",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "C",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Đội ngũ doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q138",
    "chapter": "Chương 5",
    "number": 138,
    "question": "\"Trách nhiệm xã hội\" là một phẩm chất được yêu cầu đối với:",
    "options": [
      {
        "label": "A",
        "text": "Đội ngũ doanh nhân."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Đội ngũ trí thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q139",
    "chapter": "Chương 5",
    "number": 139,
    "question": "\"Xử lý nghiêm minh... hành vi bạo lực, buôn bán, xâm hại nhân phẩm\" là chính sách bảo vệ:",
    "options": [
      {
        "label": "A",
        "text": "Phụ nữ."
      },
      {
        "label": "B",
        "text": "Thế hệ trẻ."
      },
      {
        "label": "C",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Giai cấp nông dân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q140",
    "chapter": "Chương 5",
    "number": 140,
    "question": "\"Bồi dưỡng lý tưởng cách mạng, lòng yêu nước, xây dựng đạo đức, lối sống lành mạnh\" là chính sách đối với:",
    "options": [
      {
        "label": "A",
        "text": "Thế hệ trẻ."
      },
      {
        "label": "B",
        "text": "Phụ nữ."
      },
      {
        "label": "C",
        "text": "Đội ngũ doanh nhân."
      },
      {
        "label": "D",
        "text": "Đội ngũ trí thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q141",
    "chapter": "Chương 5",
    "number": 141,
    "question": "Cơ cấu xã hội - giai cấp của một xã hội bị quy định bởi:",
    "options": [
      {
        "label": "A",
        "text": "Cơ cấu kinh tế của xã hội đó."
      },
      {
        "label": "B",
        "text": "Ý chí chủ quan của giai cấp cầm quyền."
      },
      {
        "label": "C",
        "text": "Yếu tố văn hóa, tư tưởng."
      },
      {
        "label": "D",
        "text": "Yếu tố dân số."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q142",
    "chapter": "Chương 5",
    "number": 142,
    "question": "Giai cấp nào được xem là \"chủ thể của quá trình phát triển\" ở nông thôn Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Đội ngũ trí thức."
      },
      {
        "label": "D",
        "text": "Đội ngũ doanh nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q143",
    "chapter": "Chương 5",
    "number": 143,
    "question": "Liên minh công - nông - trí thức ở Việt Nam được thực hiện dưới sự lãnh đạo của:",
    "options": [
      {
        "label": "A",
        "text": "Đảng Cộng sản Việt Nam."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Nhà nước."
      },
      {
        "label": "D",
        "text": "Mặt trận Tổ quốc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q144",
    "chapter": "Chương 5",
    "number": 144,
    "question": "Mục tiêu của nội dung kinh tế trong liên minh là xây dựng:",
    "options": [
      {
        "label": "A",
        "text": "Nền kinh tế mới xã hội chủ nghĩa hiện đại."
      },
      {
        "label": "B",
        "text": "Nền kinh tế tư bản chủ nghĩa."
      },
      {
        "label": "C",
        "text": "Nền kinh tế kế hoạch hóa, bao cấp."
      },
      {
        "label": "D",
        "text": "Nền kinh tế tự cung, tự cấp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q145",
    "chapter": "Chương 5",
    "number": 145,
    "question": "Mục tiêu của nội dung chính trị trong liên minh là xây dựng:",
    "options": [
      {
        "label": "A",
        "text": "Nhà nước pháp quyền xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Nhà nước pháp quyền tư sản."
      },
      {
        "label": "C",
        "text": "Nhà nước quân chủ."
      },
      {
        "label": "D",
        "text": "Chế độ đa đảng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q146",
    "chapter": "Chương 5",
    "number": 146,
    "question": "Mục tiêu của nội dung văn hóa - xã hội trong liên minh là xây dựng:",
    "options": [
      {
        "label": "A",
        "text": "Nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc."
      },
      {
        "label": "B",
        "text": "Nền văn hóa lai căng, mất gốc."
      },
      {
        "label": "C",
        "text": "Nền văn hóa chỉ có yếu tố truyền thống."
      },
      {
        "label": "D",
        "text": "Nền văn hóa chỉ có yếu tố hiện đại."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q147",
    "chapter": "Chương 5",
    "number": 147,
    "question": "Phương hướng nào đòi hỏi phải \"tăng cường mối liên hệ\" giữa các tổ chức (Công đoàn, Hội Nông dân, Liên hiệp Hội KHKT...)?",
    "options": [
      {
        "label": "A",
        "text": "Đổi mới hoạt động của Đảng, Nhà nước, Mặt trận Tổ quốc."
      },
      {
        "label": "B",
        "text": "Đẩy mạnh CNH, HĐH."
      },
      {
        "label": "C",
        "text": "Xây dựng chính sách xã hội."
      },
      {
        "label": "D",
        "text": "Hoàn thiện thể chế KTTT."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q148",
    "chapter": "Chương 5",
    "number": 148,
    "question": "Trong thời kỳ quá độ, các giai cấp, tầng lớp có xu hướng:",
    "options": [
      {
        "label": "A",
        "text": "Xích lại gần nhau."
      },
      {
        "label": "B",
        "text": "Ngày càng xa rời nhau."
      },
      {
        "label": "C",
        "text": "Tiêu diệt lẫn nhau."
      },
      {
        "label": "D",
        "text": "Không thay đổi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q149",
    "chapter": "Chương 5",
    "number": 149,
    "question": "\"Đại đoàn kết toàn dân tộc\" ở Việt Nam được xây dựng trên nền tảng:",
    "options": [
      {
        "label": "A",
        "text": "Liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức."
      },
      {
        "label": "B",
        "text": "Chỉ giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Chỉ giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Giai cấp tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 5_Q150",
    "chapter": "Chương 5",
    "number": 150,
    "question": "Yếu tố nào quyết định sự biến đổi của cơ cấu xã hội - giai cấp?",
    "options": [
      {
        "label": "A",
        "text": "Yếu tố kinh tế."
      },
      {
        "label": "B",
        "text": "Yếu tố chính trị."
      },
      {
        "label": "C",
        "text": "Yếu tố văn hóa."
      },
      {
        "label": "D",
        "text": "Yếu tố xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q1",
    "chapter": "Chương 6",
    "number": 1,
    "question": "Khái niệm \"Dân tộc\" được hiểu theo mấy nghĩa cơ bản?",
    "options": [
      {
        "label": "A",
        "text": "2 nghĩa (nghĩa hẹp - tộc người và nghĩa rộng - quốc gia dân tộc)."
      },
      {
        "label": "B",
        "text": "1 nghĩa (chỉ quốc gia dân tộc)."
      },
      {
        "label": "C",
        "text": "3 nghĩa (tộc người, quốc gia, chủng tộc)."
      },
      {
        "label": "D",
        "text": "4 nghĩa (bộ lạc, bộ tộc, dân tộc, quốc gia)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q2",
    "chapter": "Chương 6",
    "number": 2,
    "question": "Theo nghĩa hẹp, \"dân tộc\" (ethnies) dùng để chỉ:",
    "options": [
      {
        "label": "A",
        "text": "Cộng đồng người có mối liên hệ chặt chẽ, có sinh hoạt kinh tế, ngôn ngữ, văn hóa riêng."
      },
      {
        "label": "B",
        "text": "Cộng đồng người ổn định làm thành nhân dân một nước, có lãnh thổ, kinh tế, quốc ngữ chung."
      },
      {
        "label": "C",
        "text": "Cộng đồng người cùng chủng tộc."
      },
      {
        "label": "D",
        "text": "Cộng đồng người cùng một tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q3",
    "chapter": "Chương 6",
    "number": 3,
    "question": "Theo nghĩa rộng, \"dân tộc\" (nation) dùng để chỉ:",
    "options": [
      {
        "label": "A",
        "text": "Cộng đồng người ổn định làm thành nhân dân một nước, có lãnh thổ, kinh tế, quốc ngữ chung (quốc gia dân tộc)."
      },
      {
        "label": "B",
        "text": "Cộng đồng người có cùng ngôn ngữ, văn hóa, ý thức tự giác tộc người."
      },
      {
        "label": "C",
        "text": "Chỉ cộng đồng người đa số trong một quốc gia."
      },
      {
        "label": "D",
        "text": "Chỉ cộng đồng người thiểu số trong một quốc gia."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q4",
    "chapter": "Chương 6",
    "number": 4,
    "question": "Ở phương Tây, dân tộc (nation) xuất hiện gắn liền với phương thức sản xuất nào?",
    "options": [
      {
        "label": "A",
        "text": "Tư bản chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Phong kiến."
      },
      {
        "label": "C",
        "text": "Chiếm hữu nô lệ."
      },
      {
        "label": "D",
        "text": "Cộng sản nguyên thủy."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q5",
    "chapter": "Chương 6",
    "number": 5,
    "question": "Ở phương Đông, dân tộc được hình thành trên cơ sở:",
    "options": [
      {
        "label": "A",
        "text": "Một nền văn hóa, tâm lý dân tộc đã phát triển tương đối chín muồi."
      },
      {
        "label": "B",
        "text": "Một nền kinh tế tư bản chủ nghĩa phát triển."
      },
      {
        "label": "C",
        "text": "Sự xâm lược của chủ nghĩa thực dân."
      },
      {
        "label": "D",
        "text": "Sự ra đời của giai cấp công nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q6",
    "chapter": "Chương 6",
    "number": 6,
    "question": "Đâu không phải là đặc trưng cơ bản của quốc gia dân tộc (nation)?",
    "options": [
      {
        "label": "A",
        "text": "Có chung một chủng tộc."
      },
      {
        "label": "B",
        "text": "Có chung phương thức sinh hoạt kinh tế."
      },
      {
        "label": "C",
        "text": "Có lãnh thổ chung ổn định."
      },
      {
        "label": "D",
        "text": "Có sự quản lý của một nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q7",
    "chapter": "Chương 6",
    "number": 7,
    "question": "Ba đặc trưng cơ bản của dân tộc - tộc người (ethnies) là:",
    "options": [
      {
        "label": "A",
        "text": "Cộng đồng về ngôn ngữ, cộng đồng về văn hóa, ý thức tự giác tộc người."
      },
      {
        "label": "B",
        "text": "Cộng đồng về lãnh thổ, cộng đồng về kinh tế, cộng đồng về nhà nước."
      },
      {
        "label": "C",
        "text": "Cộng đồng về chủng tộc, cộng đồng về tôn giáo, cộng đồng về chính trị."
      },
      {
        "label": "D",
        "text": "Cộng đồng về ngôn ngữ, cộng đồng về lãnh thổ, cộng đồng về nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q8",
    "chapter": "Chương 6",
    "number": 8,
    "question": "Chủ nghĩa Mác - Lênin đã chỉ ra mấy xu hướng khách quan của sự phát triển quan hệ dân tộc?",
    "options": [
      {
        "label": "A",
        "text": "Hai xu hướng."
      },
      {
        "label": "B",
        "text": "Một xu hướng."
      },
      {
        "label": "C",
        "text": "Ba xu hướng."
      },
      {
        "label": "D",
        "text": "Bốn xu hướng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q9",
    "chapter": "Chương 6",
    "number": 9,
    "question": "Xu hướng thứ nhất của sự phát triển quan hệ dân tộc là gì?",
    "options": [
      {
        "label": "A",
        "text": "Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập."
      },
      {
        "label": "B",
        "text": "Các dân tộc muốn liên hiệp lại với nhau."
      },
      {
        "label": "C",
        "text": "Các dân tộc bị đồng hóa."
      },
      {
        "label": "D",
        "text": "Các dân tộc tiêu vong."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q10",
    "chapter": "Chương 6",
    "number": 10,
    "question": "Xu hướng thứ nhất (tách ra) diễn ra mạnh mẽ trong giai đoạn nào?",
    "options": [
      {
        "label": "A",
        "text": "Giai đoạn đầu của chủ nghĩa tư bản."
      },
      {
        "label": "B",
        "text": "Giai đoạn chủ nghĩa đế quốc."
      },
      {
        "label": "C",
        "text": "Giai đoạn chủ nghĩa xã hội."
      },
      {
        "label": "D",
        "text": "Giai đoạn phong kiến."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q11",
    "chapter": "Chương 6",
    "number": 11,
    "question": "Xu hướng thứ hai của sự phát triển quan hệ dân tộc là gì?",
    "options": [
      {
        "label": "A",
        "text": "Các dân tộc trong từng quốc gia, hoặc ở nhiều quốc gia muốn liên hiệp lại với nhau."
      },
      {
        "label": "B",
        "text": "Cộng đồng dân cư muốn tách ra."
      },
      {
        "label": "C",
        "text": "Đấu tranh vũ trang giữa các dân tộc."
      },
      {
        "label": "D",
        "text": "Phân biệt chủng tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q12",
    "chapter": "Chương 6",
    "number": 12,
    "question": "Nguyên nhân của xu hướng thứ hai (liên hiệp lại) là gì?",
    "options": [
      {
        "label": "A",
        "text": "Do sự phát triển của LLSX, khoa học công nghệ, giao lưu kinh tế, văn hóa."
      },
      {
        "label": "B",
        "text": "Do sự thức tỉnh của ý thức dân tộc."
      },
      {
        "label": "C",
        "text": "Do sự áp bức của chủ nghĩa thực dân."
      },
      {
        "label": "D",
        "text": "Do sự khác biệt về văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q13",
    "chapter": "Chương 6",
    "number": 13,
    "question": "Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin có mấy nội dung cơ bản?",
    "options": [
      {
        "label": "A",
        "text": "Ba nội dung."
      },
      {
        "label": "B",
        "text": "Hai nội dung."
      },
      {
        "label": "C",
        "text": "Bốn nội dung."
      },
      {
        "label": "D",
        "text": "Năm nội dung."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q14",
    "chapter": "Chương 6",
    "number": 14,
    "question": "Nội dung đầu tiên trong Cương lĩnh dân tộc của V.I. Lênin là:",
    "options": [
      {
        "label": "A",
        "text": "Các dân tộc hoàn toàn bình đẳng."
      },
      {
        "label": "B",
        "text": "Các dân tộc được quyền tự quyết."
      },
      {
        "label": "C",
        "text": "Liên hiệp công nhân tất cả các dân tộc."
      },
      {
        "label": "D",
        "text": "Các dân tộc có quyền ly khai."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q15",
    "chapter": "Chương 6",
    "number": 15,
    "question": "Nội dung \"Các dân tộc hoàn toàn bình đẳng\" có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Các dân tộc có nghĩa vụ và quyền lợi ngang nhau trên mọi lĩnh vực, xóa bỏ áp bức dân tộc."
      },
      {
        "label": "B",
        "text": "Các dân tộc phải có số dân bằng nhau."
      },
      {
        "label": "C",
        "text": "Các dân tộc phải có trình độ phát triển kinh tế như nhau."
      },
      {
        "label": "D",
        "text": "Chỉ bình đẳng về chính trị, không bình đẳng về kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q16",
    "chapter": "Chương 6",
    "number": 16,
    "question": "Nội dung \"Các dân tộc được quyền tự quyết\" được hiểu là:",
    "options": [
      {
        "label": "A",
        "text": "Quyền tự quyết định vận mệnh dân tộc, tự lựa chọn chế độ chính trị và con đường phát triển."
      },
      {
        "label": "B",
        "text": "Quyền muốn làm gì thì làm, không tuân theo pháp luật quốc tế."
      },
      {
        "label": "C",
        "text": "Quyền chỉ được tách ra, không được liên hiệp."
      },
      {
        "label": "D",
        "text": "Quyền chỉ được liên hiệp, không được tách ra."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q17",
    "chapter": "Chương 6",
    "number": 17,
    "question": "Quyền tự quyết dân tộc bao gồm hai quyền cơ bản là:",
    "options": [
      {
        "label": "A",
        "text": "Quyền tách ra thành lập quốc gia độc lập và quyền tự nguyện liên hiệp lại."
      },
      {
        "label": "B",
        "text": "Quyền bình đẳng và quyền phát triển."
      },
      {
        "label": "C",
        "text": "Quyền có tiếng nói riêng và chữ viết riêng."
      },
      {
        "label": "D",
        "text": "Quyền giữ gìn bản sắc văn hóa và quyền tự do tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q18",
    "chapter": "Chương 6",
    "number": 18,
    "question": "Nội dung \"Liên hiệp công nhân tất cả các dân tộc\" phản ánh:",
    "options": [
      {
        "label": "A",
        "text": "Sự gắn bó giữa tinh thần yêu nước chân chính và chủ nghĩa quốc tế vô sản."
      },
      {
        "label": "B",
        "text": "Chỉ tinh thần yêu nước."
      },
      {
        "label": "C",
        "text": "Chỉ chủ nghĩa quốc tế."
      },
      {
        "label": "D",
        "text": "Sự đoàn kết của giai cấp tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q19",
    "chapter": "Chương 6",
    "number": 19,
    "question": "Nội dung nào được xem là giải pháp quan trọng để liên kết các nội dung trong Cương lĩnh dân tộc?",
    "options": [
      {
        "label": "A",
        "text": "Liên hiệp công nhân tất cả các dân tộc."
      },
      {
        "label": "B",
        "text": "Các dân tộc hoàn toàn bình đẳng."
      },
      {
        "label": "C",
        "text": "Các dân tộc được quyền tự quyết."
      },
      {
        "label": "D",
        "text": "Quyền ly khai."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q20",
    "chapter": "Chương 6",
    "number": 20,
    "question": "Đặc điểm nào sau đây là đặc điểm nổi bật của dân tộc ở Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "Có sự chênh lệch về số dân giữa các tộc người."
      },
      {
        "label": "B",
        "text": "Các dân tộc cư trú hoàn toàn tách biệt."
      },
      {
        "label": "C",
        "text": "Các dân tộc có trình độ phát triển hoàn toàn đồng đều."
      },
      {
        "label": "D",
        "text": "Không có truyền thống đoàn kết."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q21",
    "chapter": "Chương 6",
    "number": 21,
    "question": "Đặc điểm về cư trú của các dân tộc ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Cư trú xen kẽ nhau."
      },
      {
        "label": "B",
        "text": "Mỗi dân tộc ở một vùng lãnh thổ riêng biệt."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung ở đồng bằng."
      },
      {
        "label": "D",
        "text": "Chỉ tập trung ở miền núi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q22",
    "chapter": "Chương 6",
    "number": 22,
    "question": "Các dân tộc thiểu số ở Việt Nam phân bố chủ yếu ở:",
    "options": [
      {
        "label": "A",
        "text": "Địa bàn có vị trí chiến lược quan trọng (miền núi, biên giới)."
      },
      {
        "label": "B",
        "text": "Chỉ ở các thành phố lớn."
      },
      {
        "label": "C",
        "text": "Chỉ ở vùng duyên hải."
      },
      {
        "label": "D",
        "text": "Chỉ ở đồng bằng sông Cửu Long."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q23",
    "chapter": "Chương 6",
    "number": 23,
    "question": "Đặc điểm về trình độ phát triển của các dân tộc ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Không đều."
      },
      {
        "label": "B",
        "text": "Hoàn toàn đồng đều."
      },
      {
        "label": "C",
        "text": "Các dân tộc thiểu số phát triển cao hơn dân tộc đa số."
      },
      {
        "label": "D",
        "text": "Không có chênh lệch."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q24",
    "chapter": "Chương 6",
    "number": 24,
    "question": "Đặc điểm nổi bật trong quan hệ giữa các dân tộc ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Có truyền thống đoàn kết, gắn bó lâu đời."
      },
      {
        "label": "B",
        "text": "Thường xuyên xảy ra xung đột, chiến tranh."
      },
      {
        "label": "C",
        "text": "Không có sự giao lưu, tiếp xúc."
      },
      {
        "label": "D",
        "text": "Luôn mâu thuẫn về lợi ích."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q25",
    "chapter": "Chương 6",
    "number": 25,
    "question": "Quan điểm của Đảng ta về vấn đề dân tộc và đoàn kết dân tộc là:",
    "options": [
      {
        "label": "A",
        "text": "Vấn đề chiến lược cơ bản, lâu dài và cấp bách."
      },
      {
        "label": "B",
        "text": "Vấn đề chỉ mang tính sách lược, tạm thời."
      },
      {
        "label": "C",
        "text": "Vấn đề không còn quan trọng."
      },
      {
        "label": "D",
        "text": "Vấn đề chỉ của các dân tộc thiểu số."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q26",
    "chapter": "Chương 6",
    "number": 26,
    "question": "Quan điểm của Đảng ta về các dân tộc trong đại gia đình Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển."
      },
      {
        "label": "B",
        "text": "Ưu tiên phát triển dân tộc đa số."
      },
      {
        "label": "C",
        "text": "Đồng hóa các dân tộc thiểu số."
      },
      {
        "label": "D",
        "text": "Các dân tộc phát triển độc lập, không liên quan."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q27",
    "chapter": "Chương 6",
    "number": 27,
    "question": "Đảng ta chủ trương ưu tiên đầu tư phát triển kinh tế - xã hội ở đâu?",
    "options": [
      {
        "label": "A",
        "text": "Các vùng dân tộc và miền núi."
      },
      {
        "label": "B",
        "text": "Chỉ các vùng đồng bằng."
      },
      {
        "label": "C",
        "text": "Chỉ các thành phố lớn."
      },
      {
        "label": "D",
        "text": "Chỉ các khu công nghiệp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q28",
    "chapter": "Chương 6",
    "number": 28,
    "question": "Theo quan điểm của Đảng, công tác dân tộc và thực hiện chính sách dân tộc là nhiệm vụ của:",
    "options": [
      {
        "label": "A",
        "text": "Toàn Đảng, toàn dân, toàn quân, của cả hệ thống chính trị."
      },
      {
        "label": "B",
        "text": "Chỉ của Ủy ban Dân tộc."
      },
      {
        "label": "C",
        "text": "Chỉ của chính quyền địa phương."
      },
      {
        "label": "D",
        "text": "Chỉ của các dân tộc thiểu số."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q29",
    "chapter": "Chương 6",
    "number": 29,
    "question": "Chính sách dân tộc của Đảng và Nhà nước Việt Nam về chính trị là:",
    "options": [
      {
        "label": "A",
        "text": "Thực hiện bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển."
      },
      {
        "label": "B",
        "text": "Hạn chế quyền chính trị của các dân tộc thiểu số."
      },
      {
        "label": "C",
        "text": "Chỉ để các dân tộc thiểu số tự quản."
      },
      {
        "label": "D",
        "text": "Bắt buộc các dân tộc thiểu số theo văn hóa đa số."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q30",
    "chapter": "Chương 6",
    "number": 30,
    "question": "Chính sách dân tộc của Đảng và Nhà nước Việt Nam về kinh tế là:",
    "options": [
      {
        "label": "A",
        "text": "Phát huy tiềm năng, thế mạnh từng vùng, từng bước khắc phục chênh lệch, xóa đói giảm nghèo."
      },
      {
        "label": "B",
        "text": "Để các vùng dân tộc tự phát triển, không đầu tư."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung khai thác tài nguyên."
      },
      {
        "label": "D",
        "text": "Di dời các dân tộc thiểu số đến vùng kinh tế mới."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q31",
    "chapter": "Chương 6",
    "number": 31,
    "question": "Chính sách dân tộc của Đảng và Nhà nước Việt Nam về văn hóa là:",
    "options": [
      {
        "label": "A",
        "text": "Giữ gìn, phát huy giá trị văn hóa truyền thống các tộc người, xây dựng nền văn hóa VN tiên tiến, đậm đà bản sắc dân tộc."
      },
      {
        "label": "B",
        "text": "Xóa bỏ văn hóa truyền thống của các tộc người."
      },
      {
        "label": "C",
        "text": "Chỉ phát triển văn hóa của dân tộc đa số."
      },
      {
        "label": "D",
        "text": "Du nhập hoàn toàn văn hóa nước ngoài."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q32",
    "chapter": "Chương 6",
    "number": 32,
    "question": "Chính sách dân tộc của Đảng và Nhà nước Việt Nam về xã hội là:",
    "options": [
      {
        "label": "A",
        "text": "Thực hiện an sinh xã hội, xóa đói giảm nghèo, nâng cao chất lượng y tế, giáo dục chú ý tính đặc thù."
      },
      {
        "label": "B",
        "text": "Không quan tâm đến an sinh xã hội."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung cho dân tộc đa số."
      },
      {
        "label": "D",
        "text": "Cào bằng chính sách xã hội cho mọi vùng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q33",
    "chapter": "Chương 6",
    "number": 33,
    "question": "Chính sách dân tộc của Đảng và Nhà nước Việt Nam về an ninh quốc phòng là:",
    "options": [
      {
        "label": "A",
        "text": "Tăng cường quan hệ quân dân, tạo thế trận quốc phòng toàn dân ở vùng đồng bào dân tộc."
      },
      {
        "label": "B",
        "text": "Chỉ tập trung quân đội ở đồng bằng."
      },
      {
        "label": "C",
        "text": "Không cho đồng bào dân tộc tham gia quốc phòng."
      },
      {
        "label": "D",
        "text": "Chỉ dựa vào lực lượng vũ trang."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q34",
    "chapter": "Chương 6",
    "number": 34,
    "question": "Theo chủ nghĩa Mác - Lênin, bản chất của tôn giáo là:",
    "options": [
      {
        "label": "A",
        "text": "Một hình thái ý thức xã hội, phản ánh hư ảo hiện thực khách quan."
      },
      {
        "label": "B",
        "text": "Một hiện tượng có thật, đấng siêu nhiên là có thật."
      },
      {
        "label": "C",
        "text": "Một công cụ của giai cấp công nhân."
      },
      {
        "label": "D",
        "text": "Một hình thức mê tín dị đoan."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q35",
    "chapter": "Chương 6",
    "number": 35,
    "question": "Tôn giáo với tư cách là một thực thể xã hội không bao gồm tiêu chí nào?",
    "options": [
      {
        "label": "A",
        "text": "Không có hệ thống giáo thuyết, giáo lý."
      },
      {
        "label": "B",
        "text": "Có niềm tin sâu sắc vào đấng siêu nhiên."
      },
      {
        "label": "C",
        "text": "Có hệ thống cơ sở thờ tự, tổ chức nhân sự."
      },
      {
        "label": "D",
        "text": "Có hệ thống tín đồ đông đảo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q36",
    "chapter": "Chương 6",
    "number": 36,
    "question": "Chủ nghĩa Mác - Lênin cho rằng tôn giáo là do:",
    "options": [
      {
        "label": "A",
        "text": "Con người sáng tạo ra."
      },
      {
        "label": "B",
        "text": "Đấng siêu nhiên sáng tạo ra."
      },
      {
        "label": "C",
        "text": "Tự nhiên sinh ra."
      },
      {
        "label": "D",
        "text": "Giai cấp tư sản tạo ra."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q37",
    "chapter": "Chương 6",
    "number": 37,
    "question": "Về phương diện thế giới quan, các tôn giáo mang thế giới quan:",
    "options": [
      {
        "label": "A",
        "text": "Duy tâm."
      },
      {
        "label": "B",
        "text": "Duy vật biện chứng."
      },
      {
        "label": "C",
        "text": "Duy vật siêu hình."
      },
      {
        "label": "D",
        "text": "Nhị nguyên luận."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q38",
    "chapter": "Chương 6",
    "number": 38,
    "question": "Quan hệ giữa tôn giáo và tín ngưỡng là:",
    "options": [
      {
        "label": "A",
        "text": "Không đồng nhất, nhưng có giao thoa."
      },
      {
        "label": "B",
        "text": "Đồng nhất, là một."
      },
      {
        "label": "C",
        "text": "Tín ngưỡng là một phần của tôn giáo."
      },
      {
        "label": "D",
        "text": "Tôn giáo là một phần của tín ngưỡng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q39",
    "chapter": "Chương 6",
    "number": 39,
    "question": "\"Tín ngưỡng\" là gì?",
    "options": [
      {
        "label": "A",
        "text": "Hệ thống những niềm tin, sự ngưỡng mộ vào các sự vật, hiện tượng, lực lượng có tính thần thánh, linh thiêng."
      },
      {
        "label": "B",
        "text": "Chỉ là việc thờ cúng tổ tiên."
      },
      {
        "label": "C",
        "text": "Giống hệt tôn giáo."
      },
      {
        "label": "D",
        "text": "Giống hệt mê tín dị đoan."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q40",
    "chapter": "Chương 6",
    "number": 40,
    "question": "\"Mê tín dị đoan\" là gì?",
    "options": [
      {
        "label": "A",
        "text": "Niềm tin vào siêu nhiên đến mức mê muội, cuồng tín, dẫn đến hành vi cực đoan, sai lệch."
      },
      {
        "label": "B",
        "text": "Giống hệt tôn giáo."
      },
      {
        "label": "C",
        "text": "Giống hệt tín ngưỡng."
      },
      {
        "label": "D",
        "text": "Một hình thái ý thức khoa học."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q41",
    "chapter": "Chương 6",
    "number": 41,
    "question": "Nguồn gốc tự nhiên, kinh tế - xã hội của tôn giáo là do:",
    "options": [
      {
        "label": "A",
        "text": "Con người bất lực, lo sợ trước sức mạnh tự nhiên và xã hội (áp bức, bóc lột)."
      },
      {
        "label": "B",
        "text": "Con người đã nhận thức và làm chủ hoàn toàn tự nhiên."
      },
      {
        "label": "C",
        "text": "Xã hội không còn áp bức, bóc lột."
      },
      {
        "label": "D",
        "text": "Sự phát triển của khoa học kỹ thuật."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q42",
    "chapter": "Chương 6",
    "number": 42,
    "question": "Nguồn gốc nhận thức của tôn giáo là do:",
    "options": [
      {
        "label": "A",
        "text": "Sự nhận thức của con người về thế giới là có giới hạn, khoa học chưa giải thích hết."
      },
      {
        "label": "B",
        "text": "Con người đã nhận thức đầy đủ mọi thứ."
      },
      {
        "label": "C",
        "text": "Sự tuyệt đối hóa vai trò của vật chất."
      },
      {
        "label": "D",
        "text": "Sự phát triển của chủ nghĩa duy vật."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q43",
    "chapter": "Chương 6",
    "number": 43,
    "question": "Nguồn gốc tâm lý của tôn giáo là do:",
    "options": [
      {
        "label": "A",
        "text": "Sự sợ hãi, yếu đuối, hoặc cả tình yêu, lòng biết ơn... trước các hiện tượng tự nhiên, xã hội."
      },
      {
        "label": "B",
        "text": "Con người hoàn toàn tự tin, không sợ hãi."
      },
      {
        "label": "C",
        "text": "Con người không có tình cảm."
      },
      {
        "label": "D",
        "text": "Chỉ do các cảm xúc tiêu cực."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q44",
    "chapter": "Chương 6",
    "number": 44,
    "question": "\"Tính lịch sử\" của tôn giáo có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Tôn giáo ra đời, tồn tại và sẽ biến đổi, mất đi trong những giai đoạn lịch sử nhất định."
      },
      {
        "label": "B",
        "text": "Tôn giáo tồn tại vĩnh viễn, bất biến."
      },
      {
        "label": "C",
        "text": "Tôn giáo chỉ tồn tại ở thời kỳ cổ đại."
      },
      {
        "label": "D",
        "text": "Tôn giáo chỉ mới xuất hiện."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q45",
    "chapter": "Chương 6",
    "number": 45,
    "question": "\"Tính quần chúng\" của tôn giáo có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Tôn giáo là một hiện tượng xã hội phổ biến, có số lượng tín đồ đông đảo."
      },
      {
        "label": "B",
        "text": "Tôn giáo chỉ dành cho giai cấp thống trị."
      },
      {
        "label": "C",
        "text": "Tôn giáo chỉ dành cho giai cấp bị trị."
      },
      {
        "label": "D",
        "text": "Tôn giáo chỉ có ở một vài dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q46",
    "chapter": "Chương 6",
    "number": 46,
    "question": "\"Tính chính trị\" của tôn giáo biểu hiện khi:",
    "options": [
      {
        "label": "A",
        "text": "Giai cấp thống trị sử dụng tôn giáo để phục vụ cho lợi ích giai cấp mình."
      },
      {
        "label": "B",
        "text": "Tôn giáo tách rời hoàn toàn khỏi chính trị."
      },
      {
        "label": "C",
        "text": "Tôn giáo chỉ quan tâm đến đời sống tinh thần."
      },
      {
        "label": "D",
        "text": "Giai cấp bị trị sử dụng tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q47",
    "chapter": "Chương 6",
    "number": 47,
    "question": "Nguyên tắc đầu tiên trong giải quyết vấn đề tôn giáo của CN Mác-Lênin là:",
    "options": [
      {
        "label": "A",
        "text": "Tôn trọng, bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng."
      },
      {
        "label": "B",
        "text": "Cấm đoán, xóa bỏ tôn giáo bằng bạo lực."
      },
      {
        "label": "C",
        "text": "Bắt buộc mọi người phải theo một tôn giáo."
      },
      {
        "label": "D",
        "text": "Bắt buộc mọi người phải vô thần."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q48",
    "chapter": "Chương 6",
    "number": 48,
    "question": "Nguyên tắc \"Khắc phục dần những ảnh hưởng tiêu cực của tôn giáo\" phải gắn liền với:",
    "options": [
      {
        "label": "A",
        "text": "Quá trình cải tạo xã hội cũ, xây dựng xã hội mới (phát triển kinh tế, nâng cao dân trí)."
      },
      {
        "label": "B",
        "text": "Sử dụng bạo lực, trấn áp."
      },
      {
        "label": "C",
        "text": "Tuyên truyền, phê phán tôn giáo."
      },
      {
        "label": "D",
        "text": "Để tôn giáo tự phát triển."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q49",
    "chapter": "Chương 6",
    "number": 49,
    "question": "Khi giải quyết vấn đề tôn giáo, cần phân biệt hai mặt nào?",
    "options": [
      {
        "label": "A",
        "text": "Mặt chính trị và mặt tư tưởng."
      },
      {
        "label": "B",
        "text": "Mặt kinh tế và mặt xã hội."
      },
      {
        "label": "C",
        "text": "Mặt tích cực và mặt tiêu cực."
      },
      {
        "label": "D",
        "text": "Mặt vật chất và mặt tinh thần."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q50",
    "chapter": "Chương 6",
    "number": 50,
    "question": "Mặt chính trị của tôn giáo phản ánh:",
    "options": [
      {
        "label": "A",
        "text": "Mâu thuẫn đối kháng về lợi ích, sự lợi dụng tôn giáo chống phá cách mạng."
      },
      {
        "label": "B",
        "text": "Sự khác nhau về niềm tin, không đối kháng."
      },
      {
        "label": "C",
        "text": "Nguồn gốc của tôn giáo."
      },
      {
        "label": "D",
        "text": "Tính lịch sử của tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q51",
    "chapter": "Chương 6",
    "number": 51,
    "question": "Mặt tư tưởng của tôn giáo phản ánh:",
    "options": [
      {
        "label": "A",
        "text": "Sự khác nhau về niềm tin, mức độ tin, không mang tính đối kháng."
      },
      {
        "label": "B",
        "text": "Mâu thuẫn đối kháng về lợi ích chính trị."
      },
      {
        "label": "C",
        "text": "Sự lợi dụng tôn giáo."
      },
      {
        "label": "D",
        "text": "Tính quần chúng của tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q52",
    "chapter": "Chương 6",
    "number": 52,
    "question": "Nguyên tắc \"quan điểm lịch sử cụ thể\" trong giải quyết vấn đề tôn giáo đòi hỏi:",
    "options": [
      {
        "label": "A",
        "text": "Phải xem xét vai trò, tác động của từng tôn giáo trong từng thời kỳ là khác nhau."
      },
      {
        "label": "B",
        "text": "Phải có thái độ giống nhau với mọi tôn giáo ở mọi thời kỳ."
      },
      {
        "label": "C",
        "text": "Chỉ xem xét tôn giáo ở thời kỳ cổ đại."
      },
      {
        "label": "D",
        "text": "Chỉ xem xét tôn giáo ở thời kỳ hiện đại."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q53",
    "chapter": "Chương 6",
    "number": 53,
    "question": "Đặc điểm tôn giáo ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Một quốc gia có nhiều tôn giáo."
      },
      {
        "label": "B",
        "text": "Một quốc gia chỉ có một tôn giáo."
      },
      {
        "label": "C",
        "text": "Một quốc gia không có tôn giáo."
      },
      {
        "label": "D",
        "text": "Một quốc gia chỉ có tín ngưỡng, không có tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q54",
    "chapter": "Chương 6",
    "number": 54,
    "question": "Đặc điểm nổi bật trong quan hệ giữa các tôn giáo ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Đa dạng, đan xen, chung sống hòa bình, không có xung đột, chiến tranh tôn giáo."
      },
      {
        "label": "B",
        "text": "Thường xuyên xảy ra xung đột, chiến tranh tôn giáo."
      },
      {
        "label": "C",
        "text": "Các tôn giáo tồn tại biệt lập, không giao lưu."
      },
      {
        "label": "D",
        "text": "Chỉ có một tôn giáo thống trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q55",
    "chapter": "Chương 6",
    "number": 55,
    "question": "Tín đồ các tôn giáo Việt Nam phần lớn là:",
    "options": [
      {
        "label": "A",
        "text": "Nhân dân lao động, có lòng yêu nước, tinh thần dân tộc."
      },
      {
        "label": "B",
        "text": "Giai cấp bóc lột, phản động."
      },
      {
        "label": "C",
        "text": "Người nước ngoài."
      },
      {
        "label": "D",
        "text": "Chỉ là các dân tộc thiểu số."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q56",
    "chapter": "Chương 6",
    "number": 56,
    "question": "Các tôn giáo ở Việt Nam thường bị thế lực nào lợi dụng?",
    "options": [
      {
        "label": "A",
        "text": "Các thế lực thực dân, đế quốc, phản động."
      },
      {
        "label": "B",
        "text": "Giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Giai cấp nông dân."
      },
      {
        "label": "D",
        "text": "Không bị ai lợi dụng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q57",
    "chapter": "Chương 6",
    "number": 57,
    "question": "Quan điểm của Đảng, Nhà nước Việt Nam về tôn giáo là:",
    "options": [
      {
        "label": "A",
        "text": "Tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân, sẽ tồn tại cùng dân tộc."
      },
      {
        "label": "B",
        "text": "Tôn giáo sẽ mất đi ngay trong thời kỳ quá độ."
      },
      {
        "label": "C",
        "text": "Tôn giáo là tiêu cực, cần phải xóa bỏ ngay."
      },
      {
        "label": "D",
        "text": "Tôn giáo là lực lượng lãnh đạo xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q58",
    "chapter": "Chương 6",
    "number": 58,
    "question": "Chính sách nhất quán của Đảng, Nhà nước Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Đại đoàn kết dân tộc (đoàn kết đồng bào theo tôn giáo và không theo tôn giáo)."
      },
      {
        "label": "B",
        "text": "Chỉ đoàn kết những người không theo tôn giáo."
      },
      {
        "label": "C",
        "text": "Chỉ đoàn kết những người theo tôn giáo."
      },
      {
        "label": "D",
        "text": "Phân biệt đối xử giữa các tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q59",
    "chapter": "Chương 6",
    "number": 59,
    "question": "Nội dung cốt lõi của công tác tôn giáo ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Công tác vận động quần chúng (tín đồ)."
      },
      {
        "label": "B",
        "text": "Công tác đấu tranh, trấn áp."
      },
      {
        "label": "C",
        "text": "Công tác quản lý hành chính."
      },
      {
        "label": "D",
        "text": "Công tác đối ngoại tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q60",
    "chapter": "Chương 6",
    "number": 60,
    "question": "Công tác tôn giáo ở Việt Nam là trách nhiệm của:",
    "options": [
      {
        "label": "A",
        "text": "Cả hệ thống chính trị."
      },
      {
        "label": "B",
        "text": "Chỉ của Ban Tôn giáo Chính phủ."
      },
      {
        "label": "C",
        "text": "Chỉ của Mặt trận Tổ quốc."
      },
      {
        "label": "D",
        "text": "Chỉ của Giáo hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q61",
    "chapter": "Chương 6",
    "number": 61,
    "question": "Vấn đề theo đạo và truyền đạo ở Việt Nam phải tuân thủ:",
    "options": [
      {
        "label": "A",
        "text": "Hiến pháp và pháp luật."
      },
      {
        "label": "B",
        "text": "Chỉ tuân theo giáo luật."
      },
      {
        "label": "C",
        "text": "Không cần tuân thủ quy định nào."
      },
      {
        "label": "D",
        "text": "Tuân theo ý muốn của chức sắc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q62",
    "chapter": "Chương 6",
    "number": 62,
    "question": "Đặc điểm nổi bật của quan hệ dân tộc và tôn giáo ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Tôn giáo luôn gắn bó chặt chẽ với dân tộc, đồng hành cùng dân tộc."
      },
      {
        "label": "B",
        "text": "Tôn giáo luôn đối lập với dân tộc."
      },
      {
        "label": "C",
        "text": "Tôn giáo tách rời khỏi dân tộc."
      },
      {
        "label": "D",
        "text": "Dân tộc và tôn giáo không liên quan."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q63",
    "chapter": "Chương 6",
    "number": 63,
    "question": "Quan hệ dân tộc và tôn giáo ở Việt Nam chịu sự chi phối mạnh mẽ của:",
    "options": [
      {
        "label": "A",
        "text": "Tín ngưỡng truyền thống (thờ cúng tổ tiên...)."
      },
      {
        "label": "B",
        "text": "Các tôn giáo ngoại sinh."
      },
      {
        "label": "C",
        "text": "Chủ nghĩa vô thần."
      },
      {
        "label": "D",
        "text": "Pháp luật."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q64",
    "chapter": "Chương 6",
    "number": 64,
    "question": "Hiện nay, các thế lực thù địch thường lợi dụng vấn đề dân tộc và tôn giáo để làm gì?",
    "options": [
      {
        "label": "A",
        "text": "Thực hiện \"diễn biến hòa bình\", gây mất ổn định chính trị."
      },
      {
        "label": "B",
        "text": "Giúp đỡ Việt Nam phát triển."
      },
      {
        "label": "C",
        "text": "Truyền bá văn hóa."
      },
      {
        "label": "D",
        "text": "Thúc đẩy đoàn kết dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q65",
    "chapter": "Chương 6",
    "number": 65,
    "question": "Định hướng giải quyết quan hệ dân tộc và tôn giáo ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Tăng cường mối quan hệ tốt đẹp, củng cố khối đại đoàn kết toàn dân tộc."
      },
      {
        "label": "B",
        "text": "Tách biệt hoàn toàn dân tộc và tôn giáo."
      },
      {
        "label": "C",
        "text": "Ưu tiên dân tộc, coi nhẹ tôn giáo."
      },
      {
        "label": "D",
        "text": "Ưu tiên tôn giáo, coi nhẹ dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q66",
    "chapter": "Chương 6",
    "number": 66,
    "question": "Giải quyết mối quan hệ dân tộc và tôn giáo ở Việt Nam phải đặt trong mối quan hệ với:",
    "options": [
      {
        "label": "A",
        "text": "Cộng đồng quốc gia - dân tộc thống nhất theo định hướng xã hội chủ nghĩa."
      },
      {
        "label": "B",
        "text": "Lợi ích của từng tôn giáo riêng lẻ."
      },
      {
        "label": "C",
        "text": "Lợi ích của từng dân tộc riêng lẻ."
      },
      {
        "label": "D",
        "text": "Yêu cầu của các tổ chức quốc tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q67",
    "chapter": "Chương 6",
    "number": 67,
    "question": "Cương lĩnh dân tộc của Lênin là cơ sở lý luận cho:",
    "options": [
      {
        "label": "A",
        "text": "Chính sách dân tộc của các Đảng Cộng sản và nhà nước XHCN."
      },
      {
        "label": "B",
        "text": "Chính sách dân tộc của các nước tư bản."
      },
      {
        "label": "C",
        "text": "Chính sách thuộc địa của chủ nghĩa đế quốc."
      },
      {
        "label": "D",
        "text": "Chính sách phân biệt chủng tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q68",
    "chapter": "Chương 6",
    "number": 68,
    "question": "Quyền bình đẳng dân tộc phải được thể hiện trên:",
    "options": [
      {
        "label": "A",
        "text": "Cơ sở pháp lý."
      },
      {
        "label": "B",
        "text": "Chỉ trên tinh thần."
      },
      {
        "label": "C",
        "text": "Chỉ trong kinh tế."
      },
      {
        "label": "D",
        "text": "Chỉ trong văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q69",
    "chapter": "Chương 6",
    "number": 69,
    "question": "Việc thực hiện quyền tự quyết của các dân tộc phải:",
    "options": [
      {
        "label": "A",
        "text": "Đứng trên lập trường của giai cấp công nhân, đảm bảo lợi ích chung."
      },
      {
        "label": "B",
        "text": "Theo chủ nghĩa dân tộc hẹp hòi."
      },
      {
        "label": "C",
        "text": "Phục vụ lợi ích của giai cấp tư sản."
      },
      {
        "label": "D",
        "text": "Không cần tuân thủ nguyên tắc nào."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q70",
    "chapter": "Chương 6",
    "number": 70,
    "question": "\"Liên hiệp công nhân tất cả các dân tộc\" là khẩu hiệu thể hiện:",
    "options": [
      {
        "label": "A",
        "text": "Chủ nghĩa quốc tế của giai cấp công nhân."
      },
      {
        "label": "B",
        "text": "Chủ nghĩa dân tộc."
      },
      {
        "label": "C",
        "text": "Chủ nghĩa Sô-vanh."
      },
      {
        "label": "D",
        "text": "Chủ nghĩa cơ hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q71",
    "chapter": "Chương 6",
    "number": 71,
    "question": "Việt Nam là một quốc gia:",
    "options": [
      {
        "label": "A",
        "text": "Đa dân tộc, đa tôn giáo."
      },
      {
        "label": "B",
        "text": "Đơn dân tộc, đa tôn giáo."
      },
      {
        "label": "C",
        "text": "Đa dân tộc, đơn tôn giáo."
      },
      {
        "label": "D",
        "text": "Đơn dân tộc, đơn tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q72",
    "chapter": "Chương 6",
    "number": 72,
    "question": "Truyền thống đoàn kết dân tộc ở Việt Nam được hình thành:",
    "options": [
      {
        "label": "A",
        "text": "Trong quá trình dựng nước và giữ nước lâu dài."
      },
      {
        "label": "B",
        "text": "Chỉ khi Đảng Cộng sản ra đời."
      },
      {
        "label": "C",
        "text": "Chỉ trong thời kỳ kháng chiến chống Pháp."
      },
      {
        "label": "D",
        "text": "Chỉ trong thời kỳ đổi mới."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q73",
    "chapter": "Chương 6",
    "number": 73,
    "question": "Chính sách dân tộc của Việt Nam về kinh tế nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Từng bước khắc phục khoảng cách chênh lệch về phát triển."
      },
      {
        "label": "B",
        "text": "Duy trì khoảng cách chênh lệch."
      },
      {
        "label": "C",
        "text": "Chỉ phát triển ở đồng bằng."
      },
      {
        "label": "D",
        "text": "Chỉ khai thác tài nguyên miền núi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q74",
    "chapter": "Chương 6",
    "number": 74,
    "question": "Bản chất của tôn giáo là \"phản ánh hư ảo\" hiện thực khách quan, có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Phản ánh sai lệch, lộn ngược hiện thực (lực lượng tự nhiên thành siêu nhiên)."
      },
      {
        "label": "B",
        "text": "Phản ánh đúng đắn, khoa học hiện thực."
      },
      {
        "label": "C",
        "text": "Không phản ánh hiện thực."
      },
      {
        "label": "D",
        "text": "Chỉ phản ánh đời sống tinh thần."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q75",
    "chapter": "Chương 6",
    "number": 75,
    "question": "Việc chủ nghĩa Mác - Lênin cho rằng tôn giáo sẽ \"mất đi\" (tính lịch sử) là một quá trình:",
    "options": [
      {
        "label": "A",
        "text": "Lâu dài, gắn liền với sự phát triển của LLSX, KHKT, nâng cao dân trí."
      },
      {
        "label": "B",
        "text": "Ngắn ngủi, diễn ra ngay lập tức."
      },
      {
        "label": "C",
        "text": "Chỉ bằng biện pháp hành chính, cấm đoán."
      },
      {
        "label": "D",
        "text": "Không thể xảy ra."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q76",
    "chapter": "Chương 6",
    "number": 76,
    "question": "Tại sao tôn giáo mang tính quần chúng?",
    "options": [
      {
        "label": "A",
        "text": "Vì nó phản ánh khát vọng của người lao động về xã hội tốt đẹp, hướng thiện."
      },
      {
        "label": "B",
        "text": "Vì nó được giai cấp thống trị hậu thuẫn."
      },
      {
        "label": "C",
        "text": "Vì nó có nhiều cơ sở thờ tự đẹp."
      },
      {
        "label": "D",
        "text": "Vì nó có nhiều lễ hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q77",
    "chapter": "Chương 6",
    "number": 77,
    "question": "\"Phân biệt hai mặt chính trị và tư tưởng\" trong vấn đề tôn giáo là để:",
    "options": [
      {
        "label": "A",
        "text": "Tập trung đấu tranh vào mặt chính trị (lợi dụng tôn giáo), tôn trọng mặt tư tưởng (niềm tin)."
      },
      {
        "label": "B",
        "text": "Đấu tranh cả mặt chính trị và mặt tư tưởng như nhau."
      },
      {
        "label": "C",
        "text": "Chỉ đấu tranh mặt tư tưởng, bỏ qua mặt chính trị."
      },
      {
        "label": "D",
        "text": "Tôn trọng cả hai mặt."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q78",
    "chapter": "Chương 6",
    "number": 78,
    "question": "Đặc điểm \"tín đồ phần lớn là nhân dân lao động, có lòng yêu nước\" của tôn giáo Việt Nam tạo:",
    "options": [
      {
        "label": "A",
        "text": "Thuận lợi cho công tác vận động quần chúng, xây dựng khối đại đoàn kết."
      },
      {
        "label": "B",
        "text": "Khó khăn cho cách mạng."
      },
      {
        "label": "C",
        "text": "Mâu thuẫn giữa tôn giáo và dân tộc."
      },
      {
        "label": "D",
        "text": "Điều kiện cho thế lực thù địch lợi dụng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q79",
    "chapter": "Chương 6",
    "number": 79,
    "question": "Chính sách \"đoàn kết đồng bào theo tôn giáo và đồng bào không theo tôn giáo\" là biểu hiện của:",
    "options": [
      {
        "label": "A",
        "text": "Chính sách đại đoàn kết dân tộc."
      },
      {
        "label": "B",
        "text": "Chính sách phân biệt đối xử."
      },
      {
        "label": "C",
        "text": "Chính sách quản lý hành chính."
      },
      {
        "label": "D",
        "text": "Chính sách đối ngoại."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q80",
    "chapter": "Chương 6",
    "number": 80,
    "question": "Công tác vận động quần chúng tín đồ của Đảng và Nhà nước ta nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Động viên đồng bào nêu cao tinh thần yêu nước, sống \"tốt đời, đẹp đạo\"."
      },
      {
        "label": "B",
        "text": "Bắt buộc đồng bào từ bỏ tôn giáo."
      },
      {
        "label": "C",
        "text": "Tách tín đồ ra khỏi giáo hội."
      },
      {
        "label": "D",
        "text": "Chỉ vận động chức sắc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q81",
    "chapter": "Chương 6",
    "number": 81,
    "question": "\"Mọi tín đồ đều có quyền tự do hành đạo tại gia đình và cơ sở thờ tự hợp pháp\" là biểu hiện của:",
    "options": [
      {
        "label": "A",
        "text": "Quyền tự do tín ngưỡng, tôn giáo."
      },
      {
        "label": "B",
        "text": "Quyền tự do vô hạn."
      },
      {
        "label": "C",
        "text": "Quyền được miễn trừ pháp luật."
      },
      {
        "label": "D",
        "text": "Quyền được truyền đạo bất hợp pháp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q82",
    "chapter": "Chương 6",
    "number": 82,
    "question": "\"Các hiện tượng tôn giáo mới\" ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Một đặc điểm của quan hệ dân tộc - tôn giáo, cần được quản lý tốt."
      },
      {
        "label": "B",
        "text": "Hoàn toàn tích cực."
      },
      {
        "label": "C",
        "text": "Hoàn toàn tiêu cực."
      },
      {
        "label": "D",
        "text": "Không tồn tại ở Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q83",
    "chapter": "Chương 6",
    "number": 83,
    "question": "Bốn khu vực trọng điểm mà thế lực thù địch tập trung lợi dụng vấn đề dân tộc, tôn giáo ở Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Tây Bắc, Tây Nguyên, Tây Nam Bộ, Tây duyên hải miền Trung."
      },
      {
        "label": "B",
        "text": "Đồng bằng sông Hồng, Đông Nam Bộ."
      },
      {
        "label": "C",
        "text": "Chỉ Tây Bắc, Tây Nguyên."
      },
      {
        "label": "D",
        "text": "Chỉ Tây Nam Bộ, Duyên hải miền Trung."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q84",
    "chapter": "Chương 6",
    "number": 84,
    "question": "Định hướng giải quyết quan hệ dân tộc - tôn giáo ở Việt Nam phải tuyệt đối:",
    "options": [
      {
        "label": "A",
        "text": "Không được làm tổn hại đến lợi ích quốc gia – dân tộc."
      },
      {
        "label": "B",
        "text": "Ưu tiên lợi ích tôn giáo."
      },
      {
        "label": "C",
        "text": "Ưu tiên lợi ích dân tộc thiểu số."
      },
      {
        "label": "D",
        "text": "Theo yêu cầu của nước ngoài."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q85",
    "chapter": "Chương 6",
    "number": 85,
    "question": "\"Các dân tộc hoàn toàn bình đẳng\" là cơ sở để thực hiện:",
    "options": [
      {
        "label": "A",
        "text": "Quyền dân tộc tự quyết và liên hiệp công nhân các dân tộc."
      },
      {
        "label": "B",
        "text": "Chỉ quyền tự quyết."
      },
      {
        "label": "C",
        "text": "Chỉ liên hiệp công nhân."
      },
      {
        "label": "D",
        "text": "Quyền áp bức dân tộc khác."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q86",
    "chapter": "Chương 6",
    "number": 86,
    "question": "V.I. Lênin ủng hộ quyền tự quyết dân tộc, nhưng kiên quyết đấu tranh chống lại:",
    "options": [
      {
        "label": "A",
        "text": "Việc lạm dụng quyền tự quyết để chia rẽ dân tộc, phục vụ mưu đồ đế quốc."
      },
      {
        "label": "B",
        "text": "Quyền liên hiệp tự nguyện."
      },
      {
        "label": "C",
        "text": "Quyền bình đẳng dân tộc."
      },
      {
        "label": "D",
        "text": "Quyền tự quyết nói chung."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q87",
    "chapter": "Chương 6",
    "number": 87,
    "question": "\"Liên hiệp công nhân tất cả các dân tộc\" là cơ sở để:",
    "options": [
      {
        "label": "A",
        "text": "Đoàn kết quốc tế, chống kẻ thù chung (chủ nghĩa đế quốc, giai cấp tư sản)."
      },
      {
        "label": "B",
        "text": "Chia rẽ giai cấp công nhân."
      },
      {
        "label": "C",
        "text": "Phân biệt đối xử giữa công nhân các dân tộc."
      },
      {
        "label": "D",
        "text": "Chỉ đoàn kết công nhân trong một nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q88",
    "chapter": "Chương 6",
    "number": 88,
    "question": "Đặc điểm \"các dân tộc cư trú xen kẽ\" ở Việt Nam tạo ra:",
    "options": [
      {
        "label": "A",
        "text": "Cả thuận lợi (giao lưu, đoàn kết) và khó khăn (dễ nảy sinh mâu thuẫn)."
      },
      {
        "label": "B",
        "text": "Chỉ thuận lợi."
      },
      {
        "label": "C",
        "text": "Chỉ khó khăn."
      },
      {
        "label": "D",
        "text": "Không ảnh hưởng gì."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q89",
    "chapter": "Chương 6",
    "number": 89,
    "question": "Chính sách ưu tiên đầu tư phát triển KT-XH vùng dân tộc, miền núi của Việt Nam nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Từng bước thu hẹp khoảng cách phát triển."
      },
      {
        "label": "B",
        "text": "Tạo ra sự chênh lệch lớn hơn."
      },
      {
        "label": "C",
        "text": "Chỉ để khai thác tài nguyên."
      },
      {
        "label": "D",
        "text": "Chỉ mang tính hình thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q90",
    "chapter": "Chương 6",
    "number": 90,
    "question": "\"Nâng cao tính tích cực chính trị của công dân\" là mục tiêu của chính sách dân tộc về:",
    "options": [
      {
        "label": "A",
        "text": "Chính trị."
      },
      {
        "label": "B",
        "text": "Kinh tế."
      },
      {
        "label": "C",
        "text": "Văn hóa."
      },
      {
        "label": "D",
        "text": "Xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q91",
    "chapter": "Chương 6",
    "number": 91,
    "question": "\"Phát triển ngôn ngữ\" của các tộc người là nội dung chính sách dân tộc về:",
    "options": [
      {
        "label": "A",
        "text": "Văn hóa."
      },
      {
        "label": "B",
        "text": "Kinh tế."
      },
      {
        "label": "C",
        "text": "Chính trị."
      },
      {
        "label": "D",
        "text": "Xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q92",
    "chapter": "Chương 6",
    "number": 92,
    "question": "\"Phát huy vai trò của hệ thống chính trị cơ sở\" là nội dung chính sách dân tộc về:",
    "options": [
      {
        "label": "A",
        "text": "Xã hội."
      },
      {
        "label": "B",
        "text": "Kinh tế."
      },
      {
        "label": "C",
        "text": "Văn hóa."
      },
      {
        "label": "D",
        "text": "An ninh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q93",
    "chapter": "Chương 6",
    "number": 93,
    "question": "Tôn giáo là một hiện tượng xã hội - văn hóa do:",
    "options": [
      {
        "label": "A",
        "text": "Con người sáng tạo ra."
      },
      {
        "label": "B",
        "text": "Thượng đế sáng tạo ra."
      },
      {
        "label": "C",
        "text": "Tự nhiên sinh ra."
      },
      {
        "label": "D",
        "text": "Giai cấp tư sản nghĩ ra."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q94",
    "chapter": "Chương 6",
    "number": 94,
    "question": "Tôn giáo và mê tín dị đoan:",
    "options": [
      {
        "label": "A",
        "text": "Khác nhau (mê tín dị đoan là niềm tin mê muội, cực đoan, sai lệch)."
      },
      {
        "label": "B",
        "text": "Giống hệt nhau."
      },
      {
        "label": "C",
        "text": "Tôn giáo là một dạng mê tín dị đoan."
      },
      {
        "label": "D",
        "text": "Mê tín dị đoan là một dạng tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q95",
    "chapter": "Chương 6",
    "number": 95,
    "question": "Thờ cúng tổ tiên ở Việt Nam được xếp vào:",
    "options": [
      {
        "label": "A",
        "text": "Tín ngưỡng."
      },
      {
        "label": "B",
        "text": "Tôn giáo."
      },
      {
        "label": "C",
        "text": "Mê tín dị đoan."
      },
      {
        "label": "D",
        "text": "Phong tục."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q96",
    "chapter": "Chương 6",
    "number": 96,
    "question": "Phật giáo, Công giáo, Tin Lành, Hồi giáo... được xếp vào:",
    "options": [
      {
        "label": "A",
        "text": "Tôn giáo."
      },
      {
        "label": "B",
        "text": "Tín ngưỡng."
      },
      {
        "label": "C",
        "text": "Mê tín dị đoan."
      },
      {
        "label": "D",
        "text": "Phong tục."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q97",
    "chapter": "Chương 6",
    "number": 97,
    "question": "Nguồn gốc nhận thức của tôn giáo là do sự tuyệt đối hóa, cường điệu:",
    "options": [
      {
        "label": "A",
        "text": "Mặt chủ thể của nhận thức con người."
      },
      {
        "label": "B",
        "text": "Mặt khách thể của nhận thức."
      },
      {
        "label": "C",
        "text": "Vai trò của vật chất."
      },
      {
        "label": "D",
        "text": "Vai trò của thực tiễn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q98",
    "chapter": "Chương 6",
    "number": 98,
    "question": "Khi khoa học càng phát triển, con người càng làm chủ tự nhiên và xã hội thì:",
    "options": [
      {
        "label": "A",
        "text": "Nguồn gốc của tôn giáo (sự bất lực, sợ hãi, thiếu hiểu biết) càng bị thu hẹp."
      },
      {
        "label": "B",
        "text": "Tôn giáo càng phát triển mạnh mẽ hơn."
      },
      {
        "label": "C",
        "text": "Tôn giáo không thay đổi."
      },
      {
        "label": "D",
        "text": "Khoa học và tôn giáo mâu thuẫn tuyệt đối."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q99",
    "chapter": "Chương 6",
    "number": 99,
    "question": "Tính chính trị của tôn giáo biểu hiện rõ nét khi:",
    "options": [
      {
        "label": "A",
        "text": "Các thế lực chính trị - xã hội lợi dụng tôn giáo."
      },
      {
        "label": "B",
        "text": "Tín đồ tham gia lễ hội."
      },
      {
        "label": "C",
        "text": "Tín đồ cầu nguyện."
      },
      {
        "label": "D",
        "text": "Chức sắc giảng đạo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q100",
    "chapter": "Chương 6",
    "number": 100,
    "question": "Nguyên tắc \"Tôn trọng tự do tín ngưỡng và không tín ngưỡng\" có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Theo đạo hay không theo đạo đều được tôn trọng, không phân biệt đối xử."
      },
      {
        "label": "B",
        "text": "Chỉ tôn trọng người theo tín ngưỡng."
      },
      {
        "label": "C",
        "text": "Chỉ tôn trọng người không theo tín ngưỡng."
      },
      {
        "label": "D",
        "text": "Bắt buộc phải theo một tín ngưỡng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q101",
    "chapter": "Chương 6",
    "number": 101,
    "question": "Giải quyết vấn đề tôn giáo phải đứng trên quan điểm:",
    "options": [
      {
        "label": "A",
        "text": "Lịch sử cụ thể."
      },
      {
        "label": "B",
        "text": "Trừu tượng, chung chung."
      },
      {
        "label": "C",
        "text": "Vô thần cực đoan."
      },
      {
        "label": "D",
        "text": "Duy tâm thần bí."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q102",
    "chapter": "Chương 6",
    "number": 102,
    "question": "Đặc điểm \"đa dạng, đan xen, chung sống hòa bình\" của tôn giáo Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Một đặc điểm tích cực, thuận lợi."
      },
      {
        "label": "B",
        "text": "Một đặc điểm tiêu cực, khó khăn."
      },
      {
        "label": "C",
        "text": "Không ảnh hưởng gì."
      },
      {
        "label": "D",
        "text": "Chỉ có ở Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q103",
    "chapter": "Chương 6",
    "number": 103,
    "question": "Hàng ngũ chức sắc các tôn giáo ở Việt Nam:",
    "options": [
      {
        "label": "A",
        "text": "Có vai trò, vị trí quan trọng trong giáo hội, có uy tín với tín đồ."
      },
      {
        "label": "B",
        "text": "Không có vai trò gì."
      },
      {
        "label": "C",
        "text": "Chỉ là tín đồ bình thường."
      },
      {
        "label": "D",
        "text": "Đều là thành phần phản động."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q104",
    "chapter": "Chương 6",
    "number": 104,
    "question": "Quan hệ của các tôn giáo ở Việt Nam với nước ngoài:",
    "options": [
      {
        "label": "A",
        "text": "Là một thực tế, cần được quản lý theo pháp luật Việt Nam."
      },
      {
        "label": "B",
        "text": "Phải cấm tuyệt đối."
      },
      {
        "label": "C",
        "text": "Thả nổi, không quản lý."
      },
      {
        "label": "D",
        "text": "Chỉ cho phép Công giáo quan hệ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q105",
    "chapter": "Chương 6",
    "number": 105,
    "question": "Đảng và Nhà nước ta nghiêm cấm hành vi nào liên quan đến tôn giáo?",
    "options": [
      {
        "label": "A",
        "text": "Lợi dụng tín ngưỡng, tôn giáo để hoạt động mê tín dị đoan, trái pháp luật, kích động chia rẽ."
      },
      {
        "label": "B",
        "text": "Đi lễ chùa, nhà thờ."
      },
      {
        "label": "C",
        "text": "Tín đồ tham gia hoạt động từ thiện."
      },
      {
        "label": "D",
        "text": "Chức sắc giảng đạo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q106",
    "chapter": "Chương 6",
    "number": 106,
    "question": "\"Sống tốt đời, đẹp đạo\" là phương châm:",
    "options": [
      {
        "label": "A",
        "text": "Thể hiện sự gắn bó giữa tôn giáo và dân tộc ở Việt Nam."
      },
      {
        "label": "B",
        "text": "Thể hiện sự đối lập giữa tôn giáo và dân tộc."
      },
      {
        "label": "C",
        "text": "Chỉ là khẩu hiệu của nhà nước."
      },
      {
        "label": "D",
        "text": "Chỉ là khẩu hiệu của tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q107",
    "chapter": "Chương 6",
    "number": 107,
    "question": "Việc các tôn giáo ngoại sinh khi du nhập vào Việt Nam đều phải \"biến đổi\" để phù hợp là do:",
    "options": [
      {
        "label": "A",
        "text": "Sự chi phối mạnh mẽ của tín ngưỡng truyền thống và văn hóa bản địa."
      },
      {
        "label": "B",
        "text": "Yêu cầu của các giáo hội."
      },
      {
        "label": "C",
        "text": "Sự ép buộc của nhà nước phong kiến."
      },
      {
        "label": "D",
        "text": "Không có sự biến đổi nào."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q108",
    "chapter": "Chương 6",
    "number": 108,
    "question": "Giải quyết vấn đề tôn giáo ở Việt Nam phải đặt trên cơ sở:",
    "options": [
      {
        "label": "A",
        "text": "Vấn đề dân tộc, lợi ích quốc gia - dân tộc."
      },
      {
        "label": "B",
        "text": "Vấn đề giai cấp."
      },
      {
        "label": "C",
        "text": "Vấn đề kinh tế."
      },
      {
        "label": "D",
        "text": "Vấn đề văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q109",
    "chapter": "Chương 6",
    "number": 109,
    "question": "Cả hai xu hướng (tách ra và liên hiệp) trong sự phát triển dân tộc đều là:",
    "options": [
      {
        "label": "A",
        "text": "Xu hướng khách quan."
      },
      {
        "label": "B",
        "text": "Xu hướng chủ quan."
      },
      {
        "label": "C",
        "text": "Chỉ xu hướng tách ra là khách quan."
      },
      {
        "label": "D",
        "text": "Chỉ xu hướng liên hiệp là khách quan."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q110",
    "chapter": "Chương 6",
    "number": 110,
    "question": "Quyền dân tộc tự quyết không bao gồm:",
    "options": [
      {
        "label": "A",
        "text": "Quyền đi áp bức, bóc lột dân tộc khác."
      },
      {
        "label": "B",
        "text": "Quyền tự lựa chọn chế độ chính trị."
      },
      {
        "label": "C",
        "text": "Quyền tự lựa chọn con đường phát triển."
      },
      {
        "label": "D",
        "text": "Quyền tách ra thành lập quốc gia riêng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q111",
    "chapter": "Chương 6",
    "number": 111,
    "question": "Nội dung \"Liên hiệp công nhân tất cả các dân tộc\" có ý nghĩa:",
    "options": [
      {
        "label": "A",
        "text": "Quyết định thắng lợi của phong trào công nhân quốc tế."
      },
      {
        "label": "B",
        "text": "Chỉ có ý nghĩa trong một quốc gia."
      },
      {
        "label": "C",
        "text": "Chỉ có ý nghĩa trong thời C.Mác."
      },
      {
        "label": "D",
        "text": "Không còn ý nghĩa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q112",
    "chapter": "Chương 6",
    "number": 112,
    "question": "Đặc điểm \"trình độ phát triển không đều\" của các dân tộc Việt Nam đặt ra yêu cầu:",
    "options": [
      {
        "label": "A",
        "text": "Phải có chính sách hỗ trợ, ưu tiên đầu tư để rút ngắn khoảng cách."
      },
      {
        "label": "B",
        "text": "Để các dân tộc tự phát triển."
      },
      {
        "label": "C",
        "text": "Áp dụng một chính sách duy nhất cho mọi dân tộc."
      },
      {
        "label": "D",
        "text": "Không cần quan tâm đến sự chênh lệch này."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q113",
    "chapter": "Chương 6",
    "number": 113,
    "question": "\"Công tác dân tộc... là nhiệm vụ của toàn Đảng, toàn dân, toàn quân\" thể hiện:",
    "options": [
      {
        "label": "A",
        "text": "Tầm quan trọng và tính toàn diện của công tác dân tộc."
      },
      {
        "label": "B",
        "text": "Đây là nhiệm vụ chỉ của Ủy ban Dân tộc."
      },
      {
        "label": "C",
        "text": "Đây là nhiệm vụ chỉ của người dân tộc thiểu số."
      },
      {
        "label": "D",
        "text": "Đây là nhiệm vụ không quan trọng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q114",
    "chapter": "Chương 6",
    "number": 114,
    "question": "\"Phát huy nội lực, tinh thần tự lực, tự cường của đồng bào\" là quan điểm của Đảng nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Phát huy tính chủ động, sáng tạo của đồng bào dân tộc."
      },
      {
        "label": "B",
        "text": "Giảm bớt sự hỗ trợ của Trung ương."
      },
      {
        "label": "C",
        "text": "Để đồng bào tự lo."
      },
      {
        "label": "D",
        "text": "Chỉ là khẩu hiệu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q115",
    "chapter": "Chương 6",
    "number": 115,
    "question": "Chủ nghĩa Mác - Lênin cho rằng, muốn xóa bỏ tôn giáo (ảnh hưởng tiêu cực), căn bản phải:",
    "options": [
      {
        "label": "A",
        "text": "Xóa bỏ nguồn gốc kinh tế - xã hội (áp bức, bóc lột), nâng cao dân trí."
      },
      {
        "label": "B",
        "text": "Dùng bạo lực cấm đoán."
      },
      {
        "label": "C",
        "text": "Tuyên truyền đả kích."
      },
      {
        "label": "D",
        "text": "Chờ đợi tôn giáo tự mất đi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q116",
    "chapter": "Chương 6",
    "number": 116,
    "question": "\"Chức sắc\" tôn giáo là:",
    "options": [
      {
        "label": "A",
        "text": "Người hoạt động tôn giáo chuyên nghiệp, có vai trò, vị trí trong giáo hội."
      },
      {
        "label": "B",
        "text": "Tất cả các tín đồ."
      },
      {
        "label": "C",
        "text": "Những người không theo tôn giáo."
      },
      {
        "label": "D",
        "text": "Những người chống phá tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q117",
    "chapter": "Chương 6",
    "number": 117,
    "question": "Tôn giáo ở Việt Nam có đặc điểm \"gắn bó đồng hành cùng dân tộc\", thể hiện qua:",
    "options": [
      {
        "label": "A",
        "text": "Sự tham gia tích cực của tín đồ, chức sắc vào các cuộc kháng chiến, xây dựng đất nước."
      },
      {
        "label": "B",
        "text": "Sự tách biệt khỏi đời sống chính trị."
      },
      {
        "label": "C",
        "text": "Sự đối lập với lợi ích dân tộc."
      },
      {
        "label": "D",
        "text": "Sự lệ thuộc vào nước ngoài."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q118",
    "chapter": "Chương 6",
    "number": 118,
    "question": "Việc Nhà nước ta thừa nhận các tổ chức tôn giáo:",
    "options": [
      {
        "label": "A",
        "text": "Phải hoạt động theo pháp luật và được pháp luật bảo hộ."
      },
      {
        "label": "B",
        "text": "Được hoạt động tự do, không cần tuân thủ pháp luật."
      },
      {
        "label": "C",
        "text": "Bị cấm hoạt động."
      },
      {
        "label": "D",
        "text": "Chỉ được hoạt động ở nước ngoài."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q119",
    "chapter": "Chương 6",
    "number": 119,
    "question": "\"Giao thoa\" giữa tôn giáo và tín ngưỡng nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Có những yếu tố chung, đan xen (ví dụ: cùng thờ một vị thần, cùng có niềm tin...)."
      },
      {
        "label": "B",
        "text": "Tôn giáo và tín ngưỡng là một."
      },
      {
        "label": "C",
        "text": "Tôn giáo và tín ngưỡng đối lập nhau."
      },
      {
        "label": "D",
        "text": "Tôn giáo sẽ thay thế tín ngưỡng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q120",
    "chapter": "Chương 6",
    "number": 120,
    "question": "\"Ý thức tự giác tộc người\" là:",
    "options": [
      {
        "label": "A",
        "text": "Ý thức về cội nguồn, bản sắc, tên gọi của tộc người mình."
      },
      {
        "label": "B",
        "text": "Ý thức về giai cấp."
      },
      {
        "label": "C",
        "text": "Ý thức về tôn giáo."
      },
      {
        "label": "D",
        "text": "Ý thức về quốc gia."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q121",
    "chapter": "Chương 6",
    "number": 121,
    "question": "Quyền bình đẳng dân tộc có phải là \"cào bằng\" mọi dân tộc không?",
    "options": [
      {
        "label": "A",
        "text": "Không, bình đẳng là ngang nhau về quyền lợi, nghĩa vụ, nhưng chính sách phải chú ý đến đặc thù."
      },
      {
        "label": "B",
        "text": "Có, mọi chính sách phải giống hệt nhau."
      },
      {
        "label": "C",
        "text": "Chỉ bình đẳng về chính trị."
      },
      {
        "label": "D",
        "text": "Chỉ bình đẳng về văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q122",
    "chapter": "Chương 6",
    "number": 122,
    "question": "Lợi dụng quyền tự quyết dân tộc, các thế lực đế quốc thường:",
    "options": [
      {
        "label": "A",
        "text": "Can thiệp, kích động ly khai, chia rẽ các quốc gia đa dân tộc."
      },
      {
        "label": "B",
        "text": "Giúp đỡ các dân tộc đoàn kết."
      },
      {
        "label": "C",
        "text": "Tôn trọng độc lập, chủ quyền của các nước."
      },
      {
        "label": "D",
        "text": "Không can thiệp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q123",
    "chapter": "Chương 6",
    "number": 123,
    "question": "Khẩu hiệu \"Vô sản tất cả các nước, đoàn kết lại!\" là của ai?",
    "options": [
      {
        "label": "A",
        "text": "C.Mác và Ph.Ăngghen."
      },
      {
        "label": "B",
        "text": "V.I. Lênin."
      },
      {
        "label": "C",
        "text": "J. Xtalin."
      },
      {
        "label": "D",
        "text": "Hồ Chí Minh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q124",
    "chapter": "Chương 6",
    "number": 124,
    "question": "Đặc điểm \"54 dân tộc anh em\" ở Việt Nam thể hiện:",
    "options": [
      {
        "label": "A",
        "text": "Tính đa dạng về văn hóa."
      },
      {
        "label": "B",
        "text": "Tính thống nhất về văn hóa."
      },
      {
        "label": "C",
        "text": "Chỉ có 54 người."
      },
      {
        "label": "D",
        "text": "Không có dân tộc nào."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q125",
    "chapter": "Chương 6",
    "number": 125,
    "question": "\"Thế trận quốc phòng toàn dân\" ở vùng dân tộc thiểu số dựa trên:",
    "options": [
      {
        "label": "A",
        "text": "Mối quan hệ quân - dân gắn bó."
      },
      {
        "label": "B",
        "text": "Chỉ lực lượng quân đội."
      },
      {
        "label": "C",
        "text": "Chỉ lực lượng công an."
      },
      {
        "label": "D",
        "text": "Lực lượng quân đội nước ngoài."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q126",
    "chapter": "Chương 6",
    "number": 126,
    "question": "Tôn giáo phản ánh hiện thực một cách:",
    "options": [
      {
        "label": "A",
        "text": "Hư ảo, lộn ngược."
      },
      {
        "label": "B",
        "text": "Khoa học, chính xác."
      },
      {
        "label": "C",
        "text": "Khách quan, trung thực."
      },
      {
        "label": "D",
        "text": "Biện chứng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q127",
    "chapter": "Chương 6",
    "number": 127,
    "question": "Nguồn gốc nào của tôn giáo gắn liền với sự sợ hãi, bất lực của con người?",
    "options": [
      {
        "label": "A",
        "text": "Nguồn gốc tâm lý và nguồn gốc tự nhiên, kinh tế - xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ nguồn gốc nhận thức."
      },
      {
        "label": "C",
        "text": "Chỉ nguồn gốc lịch sử."
      },
      {
        "label": "D",
        "text": "Không có nguồn gốc nào."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q128",
    "chapter": "Chương 6",
    "number": 128,
    "question": "Khi xã hội không còn áp bức, bóc lột, con người làm chủ hoàn toàn tự nhiên, xã hội, thì:",
    "options": [
      {
        "label": "A",
        "text": "Nguồn gốc tự nhiên, kinh tế - xã hội của tôn giáo sẽ mất đi."
      },
      {
        "label": "B",
        "text": "Tôn giáo sẽ phát triển mạnh hơn."
      },
      {
        "label": "C",
        "text": "Nguồn gốc nhận thức của tôn giáo sẽ mất đi."
      },
      {
        "label": "D",
        "text": "Nguồn gốc tâm lý của tôn giáo sẽ mất đi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q129",
    "chapter": "Chương 6",
    "number": 129,
    "question": "Tính lịch sử của tôn giáo có nghĩa là tôn giáo sẽ:",
    "options": [
      {
        "label": "A",
        "text": "Tự tiêu vong khi các nguồn gốc sinh ra nó mất đi."
      },
      {
        "label": "B",
        "text": "Tồn tại vĩnh viễn."
      },
      {
        "label": "C",
        "text": "Bị xóa bỏ bằng bạo lực."
      },
      {
        "label": "D",
        "text": "Ngày càng phát triển."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q130",
    "chapter": "Chương 6",
    "number": 130,
    "question": "Việc các tôn giáo có xu hướng thích nghi, biến đổi để phù hợp với xã hội là biểu hiện của:",
    "options": [
      {
        "label": "A",
        "text": "Tính lịch sử."
      },
      {
        "label": "B",
        "text": "Tính quần chúng."
      },
      {
        "label": "C",
        "text": "Tính chính trị."
      },
      {
        "label": "D",
        "text": "Nguồn gốc tâm lý."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q131",
    "chapter": "Chương 6",
    "number": 131,
    "question": "Tôn giáo có tính quần chúng vì:",
    "options": [
      {
        "label": "A",
        "text": "Nó đáp ứng một phần nhu cầu tinh thần, khát vọng của quần chúng."
      },
      {
        "label": "B",
        "text": "Nó là bắt buộc đối với mọi người."
      },
      {
        "label": "C",
        "text": "Nó được nhà nước tuyên truyền."
      },
      {
        "label": "D",
        "text": "Nó là khoa học."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q132",
    "chapter": "Chương 6",
    "number": 132,
    "question": "\"Chủ nghĩa Sô-vanh\" (dân tộc lớn) là biểu hiện:",
    "options": [
      {
        "label": "A",
        "text": "Sai lệch của quyền bình đẳng dân tộc."
      },
      {
        "label": "B",
        "text": "Đúng đắn của quyền bình đẳng dân tộc."
      },
      {
        "label": "C",
        "text": "Của quyền tự quyết."
      },
      {
        "label": "D",
        "text": "Của liên hiệp công nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q133",
    "chapter": "Chương 6",
    "number": 133,
    "question": "Khi xem xét một tôn giáo, cần đánh giá:",
    "options": [
      {
        "label": "A",
        "text": "Vai trò của nó trong từng bối cảnh lịch sử cụ thể."
      },
      {
        "label": "B",
        "text": "Luôn luôn là tiêu cực."
      },
      {
        "label": "C",
        "text": "Luôn luôn là tích cực."
      },
      {
        "label": "D",
        "text": "Chỉ dựa vào giáo lý."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q134",
    "chapter": "Chương 6",
    "number": 134,
    "question": "Phần lớn các tôn giáo ở Việt Nam có nguồn gốc:",
    "options": [
      {
        "label": "A",
        "text": "Ngoại sinh (du nhập từ bên ngoài)."
      },
      {
        "label": "B",
        "text": "Nội sinh (phát sinh tại Việt Nam)."
      },
      {
        "label": "C",
        "text": "Cả nội sinh và ngoại sinh."
      },
      {
        "label": "D",
        "text": "Không rõ nguồn gốc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q135",
    "chapter": "Chương 6",
    "number": 135,
    "question": "Tôn giáo nào sau đây là tôn giáo nội sinh ở Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "Cao Đài, Hòa Hảo."
      },
      {
        "label": "B",
        "text": "Phật giáo, Công giáo."
      },
      {
        "label": "C",
        "text": "Tin Lành, Hồi giáo."
      },
      {
        "label": "D",
        "text": "Tất cả đều là ngoại sinh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q136",
    "chapter": "Chương 6",
    "number": 136,
    "question": "Chính sách tôn giáo của Việt Nam đảm bảo:",
    "options": [
      {
        "label": "A",
        "text": "Quyền tự do tín ngưỡng và quyền tự do không tín ngưỡng."
      },
      {
        "label": "B",
        "text": "Chỉ quyền tự do tín ngưỡng."
      },
      {
        "label": "C",
        "text": "Chỉ quyền tự do không tín ngưỡng."
      },
      {
        "label": "D",
        "text": "Chỉ quyền của các tôn giáo lớn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q137",
    "chapter": "Chương 6",
    "number": 137,
    "question": "Tín ngưỡng thờ cúng tổ tiên ở Việt Nam:",
    "options": [
      {
        "label": "A",
        "text": "Là tín ngưỡng truyền thống, chi phối mạnh mẽ quan hệ dân tộc, tôn giáo."
      },
      {
        "label": "B",
        "text": "Là một tôn giáo lớn."
      },
      {
        "label": "C",
        "text": "Là mê tín dị đoan."
      },
      {
        "label": "D",
        "text": "Đã bị xóa bỏ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q138",
    "chapter": "Chương 6",
    "number": 138,
    "question": "Âm mưu \"diễn biến hòa bình\" lợi dụng vấn đề dân tộc, tôn giáo nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Chia rẽ khối đại đoàn kết, gây mất ổn định chính trị."
      },
      {
        "label": "B",
        "text": "Thúc đẩy đoàn kết dân tộc."
      },
      {
        "label": "C",
        "text": "Giúp đỡ các dân tộc phát triển."
      },
      {
        "label": "D",
        "text": "Thúc đẩy tự do tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q139",
    "chapter": "Chương 6",
    "number": 139,
    "question": "Giải quyết vấn đề dân tộc, tôn giáo ở Việt Nam phải:",
    "options": [
      {
        "label": "A",
        "text": "Đảm bảo quyền tự do của nhân dân và kiên quyết chống lợi dụng."
      },
      {
        "label": "B",
        "text": "Chỉ đảm bảo quyền tự do."
      },
      {
        "label": "C",
        "text": "Chỉ kiên quyết chống lợi dụng."
      },
      {
        "label": "D",
        "text": "Cấm đoán hoàn toàn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q140",
    "chapter": "Chương 6",
    "number": 140,
    "question": "Quan hệ dân tộc và tôn giáo ở Việt Nam có đặc điểm:",
    "options": [
      {
        "label": "A",
        "text": "Gắn bó, đan xen chặt chẽ."
      },
      {
        "label": "B",
        "text": "Tách biệt, không liên quan."
      },
      {
        "label": "C",
        "text": "Đối lập, xung đột."
      },
      {
        "label": "D",
        "text": "Chỉ có dân tộc, không có tôn giáo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q141",
    "chapter": "Chương 6",
    "number": 141,
    "question": "\"Dân tộc\" theo nghĩa rộng (nation) là khái niệm chỉ:",
    "options": [
      {
        "label": "A",
        "text": "Quốc gia dân tộc."
      },
      {
        "label": "B",
        "text": "Tộc người."
      },
      {
        "label": "C",
        "text": "Chủng tộc."
      },
      {
        "label": "D",
        "text": "Bộ lạc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q142",
    "chapter": "Chương 6",
    "number": 142,
    "question": "\"Dân tộc\" theo nghĩa hẹp (ethnies) là khái niệm chỉ:",
    "options": [
      {
        "label": "A",
        "text": "Tộc người."
      },
      {
        "label": "B",
        "text": "Quốc gia dân tộc."
      },
      {
        "label": "C",
        "text": "Chủng tộc."
      },
      {
        "label": "D",
        "text": "Dòng họ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q143",
    "chapter": "Chương 6",
    "number": 143,
    "question": "Xu hướng \"tách ra\" của dân tộc là do:",
    "options": [
      {
        "label": "A",
        "text": "Sự thức tỉnh của ý thức dân tộc, muốn thoát khỏi áp bức."
      },
      {
        "label": "B",
        "text": "Sự phát triển của LLSX."
      },
      {
        "label": "C",
        "text": "Sự liên minh quốc tế."
      },
      {
        "label": "D",
        "text": "Yêu cầu của toàn cầu hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q144",
    "chapter": "Chương 6",
    "number": 144,
    "question": "Xu hướng \"liên hiệp lại\" của dân tộc là do:",
    "options": [
      {
        "label": "A",
        "text": "Sự phát triển của LLSX, giao lưu kinh tế, văn hóa."
      },
      {
        "label": "B",
        "text": "Sự áp bức của chủ nghĩa thực dân."
      },
      {
        "label": "C",
        "text": "Ý thức dân tộc hẹp hòi."
      },
      {
        "label": "D",
        "text": "Sự khác biệt về ngôn ngữ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q145",
    "chapter": "Chương 6",
    "number": 145,
    "question": "\"Quyền bình đẳng\" là cơ sở để thực hiện:",
    "options": [
      {
        "label": "A",
        "text": "Quyền tự quyết."
      },
      {
        "label": "B",
        "text": "Quyền áp bức."
      },
      {
        "label": "C",
        "text": "Quyền Sô-vanh."
      },
      {
        "label": "D",
        "text": "Quyền đồng hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q146",
    "chapter": "Chương 6",
    "number": 146,
    "question": "Việt Nam có bao nhiêu dân tộc (tộc người)?",
    "options": [
      {
        "label": "A",
        "text": "54."
      },
      {
        "label": "B",
        "text": "53."
      },
      {
        "label": "C",
        "text": "55."
      },
      {
        "label": "D",
        "text": "1."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q147",
    "chapter": "Chương 6",
    "number": 147,
    "question": "Dân tộc nào chiếm đa số ở Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "Dân tộc Kinh."
      },
      {
        "label": "B",
        "text": "Dân tộc Tày."
      },
      {
        "label": "C",
        "text": "Dân tộc Thái."
      },
      {
        "label": "D",
        "text": "Dân tộc Mường."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q148",
    "chapter": "Chương 6",
    "number": 148,
    "question": "Chính sách \"Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc\" là:",
    "options": [
      {
        "label": "A",
        "text": "Chính sách chung, bao gồm cả chính sách dân tộc về văn hóa."
      },
      {
        "label": "B",
        "text": "Chỉ là chính sách văn hóa chung."
      },
      {
        "label": "C",
        "text": "Chỉ là chính sách dân tộc."
      },
      {
        "label": "D",
        "text": "Không liên quan đến dân tộc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q149",
    "chapter": "Chương 6",
    "number": 149,
    "question": "\"Tôn trọng, bảo đảm quyền tự do tín ngưỡng\" là:",
    "options": [
      {
        "label": "A",
        "text": "Nguyên tắc của CN Mác-Lênin và chính sách của Đảng, Nhà nước Việt Nam."
      },
      {
        "label": "B",
        "text": "Chỉ là nguyên tắc của CN Mác-Lênin."
      },
      {
        "label": "C",
        "text": "Chỉ là chính sách của Việt Nam."
      },
      {
        "label": "D",
        "text": "Không phải quan điểm của CN Mác-Lênin."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 6_Q150",
    "chapter": "Chương 6",
    "number": 150,
    "question": "Đặc điểm \"tôn giáo chung sống hòa bình, không xung đột\" ở Việt Nam là do:",
    "options": [
      {
        "label": "A",
        "text": "Truyền thống đoàn kết dân tộc và sự chi phối của tín ngưỡng bản địa."
      },
      {
        "label": "B",
        "text": "Sự can thiệp của nhà nước."
      },
      {
        "label": "C",
        "text": "Các tôn giáo không có mâu thuẫn."
      },
      {
        "label": "D",
        "text": "Các tôn giáo không phát triển."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q1",
    "chapter": "Chương 7",
    "number": 1,
    "question": "Theo chủ nghĩa Mác - Lênin, \"Hàng ngày tái tạo ra đời sống bản thân mình, con người bắt đầu tạo ra những người khác, sinh sôi, nảy nở... đó là gia đình\" là quan hệ giữa:",
    "options": [
      {
        "label": "A",
        "text": "Vợ và chồng, cha mẹ và con cái."
      },
      {
        "label": "B",
        "text": "Ông bà và cha mẹ."
      },
      {
        "label": "C",
        "text": "Anh chị em với nhau."
      },
      {
        "label": "D",
        "text": "Gia đình và xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q2",
    "chapter": "Chương 7",
    "number": 2,
    "question": "Theo Luật Hôn nhân và Gia đình Việt Nam, gia đình là tập hợp những người gắn bó với nhau do:",
    "options": [
      {
        "label": "A",
        "text": "Hôn nhân, quan hệ huyết thống hoặc quan hệ nuôi dưỡng."
      },
      {
        "label": "B",
        "text": "Chỉ do hôn nhân."
      },
      {
        "label": "C",
        "text": "Chỉ do quan hệ huyết thống."
      },
      {
        "label": "D",
        "text": "Chỉ do quan hệ nuôi dưỡng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q3",
    "chapter": "Chương 7",
    "number": 3,
    "question": "Khái niệm \"gia đình\" được định nghĩa là một hình thức cộng đồng xã hội đặc biệt, được hình thành, duy trì và củng cố chủ yếu dựa trên cơ sở:",
    "options": [
      {
        "label": "A",
        "text": "Hôn nhân, quan hệ huyết thống và quan hệ nuôi dưỡng."
      },
      {
        "label": "B",
        "text": "Quan hệ kinh tế."
      },
      {
        "label": "C",
        "text": "Quan hệ chính trị."
      },
      {
        "label": "D",
        "text": "Quan hệ xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q4",
    "chapter": "Chương 7",
    "number": 4,
    "question": "Cơ sở hình thành gia đình bao gồm:",
    "options": [
      {
        "label": "A",
        "text": "Quan hệ hôn nhân, quan hệ huyết thống, quan hệ nuôi dưỡng."
      },
      {
        "label": "B",
        "text": "Chỉ quan hệ hôn nhân và huyết thống."
      },
      {
        "label": "C",
        "text": "Chỉ quan hệ hôn nhân và nuôi dưỡng."
      },
      {
        "label": "D",
        "text": "Chỉ quan hệ huyết thống và nuôi dưỡng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q5",
    "chapter": "Chương 7",
    "number": 5,
    "question": "Vị trí nào của gia đình được xem là quan trọng nhất trong xã hội?",
    "options": [
      {
        "label": "A",
        "text": "Gia đình là tế bào của xã hội."
      },
      {
        "label": "B",
        "text": "Gia đình là tổ ấm của mỗi cá nhân."
      },
      {
        "label": "C",
        "text": "Gia đình là cầu nối giữa cá nhân với xã hội."
      },
      {
        "label": "D",
        "text": "Gia đình là một đơn vị kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q6",
    "chapter": "Chương 7",
    "number": 6,
    "question": "Tại sao nói \"Gia đình là tế bào của xã hội\"?",
    "options": [
      {
        "label": "A",
        "text": "Vì gia đình có vai trò quyết định đối với sự tồn tại, vận động và phát triển của xã hội."
      },
      {
        "label": "B",
        "text": "Vì gia đình là nơi sinh ra các cá nhân."
      },
      {
        "label": "C",
        "text": "Vì gia đình là nơi nuôi dưỡng con cái."
      },
      {
        "label": "D",
        "text": "Vì gia đình là một tập thể nhỏ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q7",
    "chapter": "Chương 7",
    "number": 7,
    "question": "Gia đình tham gia vào hai quá trình sản xuất cơ bản nào?",
    "options": [
      {
        "label": "A",
        "text": "Sản xuất ra tư liệu sinh hoạt và sản xuất ra bản thân con người."
      },
      {
        "label": "B",
        "text": "Sản xuất ra tư liệu sản xuất và tư liệu tiêu dùng."
      },
      {
        "label": "C",
        "text": "Sản xuất vật chất và sản xuất tinh thần."
      },
      {
        "label": "D",
        "text": "Sản xuất nông nghiệp và công nghiệp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q8",
    "chapter": "Chương 7",
    "number": 8,
    "question": "Luận điểm: \"Nhiều gia đình cộng lại mới thành xã hội, xã hội tốt thì gia đình càng tốt... Hạt nhân của xã hội là gia đình\" là của ai?",
    "options": [
      {
        "label": "A",
        "text": "Hồ Chí Minh."
      },
      {
        "label": "B",
        "text": "C.Mác."
      },
      {
        "label": "C",
        "text": "Ph.Ăngghen."
      },
      {
        "label": "D",
        "text": "V.I.Lênin."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q9",
    "chapter": "Chương 7",
    "number": 9,
    "question": "Vị trí \"Gia đình là tổ ấm\" thể hiện:",
    "options": [
      {
        "label": "A",
        "text": "Gia đình là môi trường tốt nhất để cá nhân được yêu thương, nuôi dưỡng, chăm sóc, phát triển."
      },
      {
        "label": "B",
        "text": "Gia đình là nơi chỉ để ở."
      },
      {
        "label": "C",
        "text": "Gia đình là nơi cung cấp tài chính."
      },
      {
        "label": "D",
        "text": "Gia đình là nơi làm việc."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q10",
    "chapter": "Chương 7",
    "number": 10,
    "question": "Vị trí \"Gia đình là cầu nối giữa cá nhân với xã hội\" có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Gia đình là cộng đồng xã hội đầu tiên mà cá nhân học và thực hiện quan hệ xã hội."
      },
      {
        "label": "B",
        "text": "Gia đình thay thế hoàn toàn xã hội."
      },
      {
        "label": "C",
        "text": "Xã hội tác động trực tiếp đến cá nhân không cần qua gia đình."
      },
      {
        "label": "D",
        "text": "Cá nhân chỉ sống trong gia đình, không cần xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q11",
    "chapter": "Chương 7",
    "number": 11,
    "question": "Chức năng nào là chức năng đặc thù của gia đình mà không cộng đồng nào có thể thay thế?",
    "options": [
      {
        "label": "A",
        "text": "Chức năng tái sản xuất ra con người."
      },
      {
        "label": "B",
        "text": "Chức năng nuôi dưỡng, giáo dục."
      },
      {
        "label": "C",
        "text": "Chức năng kinh tế và tổ chức tiêu dùng."
      },
      {
        "label": "D",
        "text": "Chức năng thỏa mãn nhu cầu tâm sinh lý."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q12",
    "chapter": "Chương 7",
    "number": 12,
    "question": "Chức năng tái sản xuất ra con người đáp ứng nhu cầu nào của xã hội?",
    "options": [
      {
        "label": "A",
        "text": "Nhu cầu về sức lao động và duy trì sự trường tồn của xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ nhu cầu duy trì nòi giống của gia đình."
      },
      {
        "label": "C",
        "text": "Chỉ nhu cầu tâm sinh lý tự nhiên."
      },
      {
        "label": "D",
        "text": "Chỉ nhu cầu về quân sự."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q13",
    "chapter": "Chương 7",
    "number": 13,
    "question": "Chức năng nuôi dưỡng, giáo dục của gia đình có trách nhiệm:",
    "options": [
      {
        "label": "A",
        "text": "Nuôi dưỡng, dạy dỗ con cái trở thành người có ích cho gia đình, cộng đồng và xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ nuôi dưỡng về thể chất."
      },
      {
        "label": "C",
        "text": "Chỉ giáo dục về kiến thức."
      },
      {
        "label": "D",
        "text": "Giao phó hoàn toàn cho nhà trường."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q14",
    "chapter": "Chương 7",
    "number": 14,
    "question": "Nội dung của giáo dục gia đình bao gồm:",
    "options": [
      {
        "label": "A",
        "text": "Tri thức, kinh nghiệm, đạo đức, lối sống, nhân cách..."
      },
      {
        "label": "B",
        "text": "Chỉ tri thức khoa học."
      },
      {
        "label": "C",
        "text": "Chỉ giáo dục đạo đức."
      },
      {
        "label": "D",
        "text": "Chỉ dạy nghề."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q15",
    "chapter": "Chương 7",
    "number": 15,
    "question": "Giáo dục gia đình thể hiện rõ nhất qua:",
    "options": [
      {
        "label": "A",
        "text": "Tấm gương sống của ông bà, cha mẹ, anh chị."
      },
      {
        "label": "B",
        "text": "Các bài giảng lý thuyết."
      },
      {
        "label": "C",
        "text": "Sự trừng phạt."
      },
      {
        "label": "D",
        "text": "Sự chu cấp về vật chất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q16",
    "chapter": "Chương 7",
    "number": 16,
    "question": "Chức năng nuôi dưỡng, giáo dục thể hiện trách nhiệm của:",
    "options": [
      {
        "label": "A",
        "text": "Gia đình với xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ cha mẹ với con cái."
      },
      {
        "label": "C",
        "text": "Chỉ xã hội với gia đình."
      },
      {
        "label": "D",
        "text": "Chỉ nhà trường với gia đình."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q17",
    "chapter": "Chương 7",
    "number": 17,
    "question": "Chức năng kinh tế của gia đình thể hiện ở:",
    "options": [
      {
        "label": "A",
        "text": "Gia đình tham gia trực tiếp vào sản xuất và tái sản xuất ra tư liệu sản xuất, tư liệu tiêu dùng, sức lao động."
      },
      {
        "label": "B",
        "text": "Gia đình chỉ là nơi tiêu dùng."
      },
      {
        "label": "C",
        "text": "Gia đình không tham gia vào sản xuất."
      },
      {
        "label": "D",
        "text": "Gia đình chỉ tham gia tái sản xuất sức lao động."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q18",
    "chapter": "Chương 7",
    "number": 18,
    "question": "Chức năng tổ chức tiêu dùng của gia đình là:",
    "options": [
      {
        "label": "A",
        "text": "Sử dụng hợp lý các khoản thu nhập, quỹ thời gian để đáp ứng nhu cầu vật chất, tinh thần."
      },
      {
        "label": "B",
        "text": "Chỉ tiêu dùng cho nhu cầu vật chất."
      },
      {
        "label": "C",
        "text": "Chỉ tiêu dùng cho nhu cầu tinh thần."
      },
      {
        "label": "D",
        "text": "Tiêu dùng lãng phí, không kế hoạch."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q19",
    "chapter": "Chương 7",
    "number": 19,
    "question": "Chức năng thỏa mãn nhu cầu tâm sinh lý, duy trì tình cảm gia đình nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Đảm bảo sự cân bằng tâm lý, chăm sóc sức khỏe người ốm, người già, trẻ em."
      },
      {
        "label": "B",
        "text": "Chỉ thỏa mãn nhu cầu tình cảm vợ chồng."
      },
      {
        "label": "C",
        "text": "Chỉ chăm sóc trẻ em."
      },
      {
        "label": "D",
        "text": "Chỉ chăm sóc người già."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q20",
    "chapter": "Chương 7",
    "number": 20,
    "question": "Gia đình còn có chức năng nào khác ngoài 4 chức năng cơ bản?",
    "options": [
      {
        "label": "A",
        "text": "Chức năng văn hóa, chức năng chính trị."
      },
      {
        "label": "B",
        "text": "Chỉ chức năng văn hóa."
      },
      {
        "label": "C",
        "text": "Chỉ chức năng chính trị."
      },
      {
        "label": "D",
        "text": "Không còn chức năng nào khác."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q21",
    "chapter": "Chương 7",
    "number": 21,
    "question": "Cơ sở kinh tế - xã hội để xây dựng gia đình trong thời kỳ quá độ là:",
    "options": [
      {
        "label": "A",
        "text": "Xóa bỏ chế độ tư hữu về tư liệu sản xuất, xây dựng chế độ công hữu."
      },
      {
        "label": "B",
        "text": "Duy trì chế độ tư hữu về tư liệu sản xuất."
      },
      {
        "label": "C",
        "text": "Xây dựng chế độ sở hữu tư nhân TBCN."
      },
      {
        "label": "D",
        "text": "Xây dựng chế độ sở hữu phong kiến."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q22",
    "chapter": "Chương 7",
    "number": 22,
    "question": "Xóa bỏ chế độ tư hữu về TLSX nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Xóa bỏ nguồn gốc thống trị của đàn ông, sự bất bình đẳng nam nữ."
      },
      {
        "label": "B",
        "text": "Củng cố sự thống trị của đàn ông."
      },
      {
        "label": "C",
        "text": "Tạo ra sự bất bình đẳng mới."
      },
      {
        "label": "D",
        "text": "Hạn chế vai trò của phụ nữ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q23",
    "chapter": "Chương 7",
    "number": 23,
    "question": "Chế độ công hữu về TLSX là cơ sở cho:",
    "options": [
      {
        "label": "A",
        "text": "Hôn nhân tự nguyện, tiến bộ dựa trên tình yêu."
      },
      {
        "label": "B",
        "text": "Hôn nhân dựa trên tính toán kinh tế."
      },
      {
        "label": "C",
        "text": "Hôn nhân áp đặt."
      },
      {
        "label": "D",
        "text": "Hôn nhân đa thê."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q24",
    "chapter": "Chương 7",
    "number": 24,
    "question": "Cơ sở chính trị - xã hội để xây dựng gia đình trong thời kỳ quá độ là:",
    "options": [
      {
        "label": "A",
        "text": "Thiết lập chính quyền nhà nước của giai cấp công nhân và nhân dân lao động."
      },
      {
        "label": "B",
        "text": "Duy trì nhà nước của giai cấp tư sản."
      },
      {
        "label": "C",
        "text": "Thiết lập nhà nước phong kiến."
      },
      {
        "label": "D",
        "text": "Xóa bỏ nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q25",
    "chapter": "Chương 7",
    "number": 25,
    "question": "Nhà nước XHCN ban hành hệ thống pháp luật nào để bảo vệ gia đình?",
    "options": [
      {
        "label": "A",
        "text": "Luật Hôn nhân và Gia đình, Luật Phòng, Chống bạo lực gia đình."
      },
      {
        "label": "B",
        "text": "Chỉ Luật Hôn nhân và Gia đình."
      },
      {
        "label": "C",
        "text": "Chỉ Luật Phòng, Chống bạo lực gia đình."
      },
      {
        "label": "D",
        "text": "Không ban hành luật nào."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q26",
    "chapter": "Chương 7",
    "number": 26,
    "question": "Cơ sở văn hóa để xây dựng gia đình trong thời kỳ quá độ là:",
    "options": [
      {
        "label": "A",
        "text": "Sự phát triển hệ thống giáo dục, đào tạo, khoa học, công nghệ, nâng cao dân trí."
      },
      {
        "label": "B",
        "text": "Duy trì văn hóa lạc hậu, mê tín dị đoan."
      },
      {
        "label": "C",
        "text": "Xóa bỏ văn hóa dân tộc."
      },
      {
        "label": "D",
        "text": "Chỉ tiếp thu văn hóa phương Tây."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q27",
    "chapter": "Chương 7",
    "number": 27,
    "question": "Chế độ hôn nhân tiến bộ trong thời kỳ quá độ dựa trên cơ sở nào?",
    "options": [
      {
        "label": "A",
        "text": "Hôn nhân tự nguyện."
      },
      {
        "label": "B",
        "text": "Hôn nhân ép buộc."
      },
      {
        "label": "C",
        "text": "Hôn nhân vì kinh tế."
      },
      {
        "label": "D",
        "text": "Hôn nhân do cha mẹ sắp đặt."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q28",
    "chapter": "Chương 7",
    "number": 28,
    "question": "Hôn nhân tự nguyện xuất phát từ:",
    "options": [
      {
        "label": "A",
        "text": "Tình yêu chân chính giữa nam và nữ."
      },
      {
        "label": "B",
        "text": "Sự tính toán về tài sản."
      },
      {
        "label": "C",
        "text": "Địa vị xã hội."
      },
      {
        "label": "D",
        "text": "Sự áp đặt của gia đình."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q29",
    "chapter": "Chương 7",
    "number": 29,
    "question": "Hôn nhân tiến bộ có bao hàm quyền tự do ly hôn không?",
    "options": [
      {
        "label": "A",
        "text": "Có, khi tình yêu không còn nữa, nhưng không khuyến khích."
      },
      {
        "label": "B",
        "text": "Không, đã kết hôn là không được ly hôn."
      },
      {
        "label": "C",
        "text": "Chỉ phụ nữ có quyền ly hôn."
      },
      {
        "label": "D",
        "text": "Chỉ đàn ông có quyền ly hôn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q30",
    "chapter": "Chương 7",
    "number": 30,
    "question": "Chế độ hôn nhân tiến bộ là chế độ hôn nhân:",
    "options": [
      {
        "label": "A",
        "text": "Một vợ một chồng, vợ chồng bình đẳng."
      },
      {
        "label": "B",
        "text": "Một vợ nhiều chồng."
      },
      {
        "label": "C",
        "text": "Một chồng nhiều vợ."
      },
      {
        "label": "D",
        "text": "Tự do quan hệ, không cần hôn nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q31",
    "chapter": "Chương 7",
    "number": 31,
    "question": "Bản chất của tình yêu là:",
    "options": [
      {
        "label": "A",
        "text": "Không thể chia sẻ được."
      },
      {
        "label": "B",
        "text": "Có thể chia sẻ cho nhiều người."
      },
      {
        "label": "C",
        "text": "Chỉ dựa trên nhu cầu sinh lý."
      },
      {
        "label": "D",
        "text": "Chỉ dựa trên nhu cầu vật chất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q32",
    "chapter": "Chương 7",
    "number": 32,
    "question": "Hôn nhân một vợ một chồng trong CNXH là thực hiện sự:",
    "options": [
      {
        "label": "A",
        "text": "Giải phóng đối với phụ nữ, bình đẳng, tôn trọng lẫn nhau."
      },
      {
        "label": "B",
        "text": "Ràng buộc đối với phụ nữ."
      },
      {
        "label": "C",
        "text": "Thống trị của đàn ông."
      },
      {
        "label": "D",
        "text": "Thống trị của phụ nữ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q33",
    "chapter": "Chương 7",
    "number": 33,
    "question": "Hôn nhân trong thời kỳ quá độ cần được đảm bảo về:",
    "options": [
      {
        "label": "A",
        "text": "Pháp lý (đăng ký kết hôn)."
      },
      {
        "label": "B",
        "text": "Chỉ cần sự đồng ý của hai bên."
      },
      {
        "label": "C",
        "text": "Chỉ cần sự đồng ý của cha mẹ."
      },
      {
        "label": "D",
        "text": "Chỉ cần tổ chức lễ cưới."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q34",
    "chapter": "Chương 7",
    "number": 34,
    "question": "Thực hiện thủ tục pháp lý trong hôn nhân thể hiện:",
    "options": [
      {
        "label": "A",
        "text": "Sự tôn trọng tình yêu, trách nhiệm của cá nhân với gia đình và xã hội."
      },
      {
        "label": "B",
        "text": "Sự can thiệp của nhà nước vào đời tư."
      },
      {
        "label": "C",
        "text": "Sự không cần thiết, rườm rà."
      },
      {
        "label": "D",
        "text": "Sự ngăn cản quyền tự do kết hôn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q35",
    "chapter": "Chương 7",
    "number": 35,
    "question": "Sự biến đổi nổi bật nhất của gia đình Việt Nam hiện nay về quy mô, kết cấu là:",
    "options": [
      {
        "label": "A",
        "text": "Gia đình hạt nhân đang trở nên phổ biến, thay thế gia đình truyền thống."
      },
      {
        "label": "B",
        "text": "Gia đình truyền thống (nhiều thế hệ) đang phổ biến."
      },
      {
        "label": "C",
        "text": "Quy mô gia đình ngày càng lớn hơn."
      },
      {
        "label": "D",
        "text": "Không có sự biến đổi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q36",
    "chapter": "Chương 7",
    "number": 36,
    "question": "\"Gia đình hạt nhân\" là gia đình:",
    "options": [
      {
        "label": "A",
        "text": "Thường chỉ có hai thế hệ (cha mẹ - con cái)."
      },
      {
        "label": "B",
        "text": "Có ba thế hệ trở lên."
      },
      {
        "label": "C",
        "text": "Gia đình chỉ có vợ chồng, không có con."
      },
      {
        "label": "D",
        "text": "Gia đình chỉ có một người."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q37",
    "chapter": "Chương 7",
    "number": 37,
    "question": "Mặt trái của sự phổ biến gia đình hạt nhân là:",
    "options": [
      {
        "label": "A",
        "text": "Ngăn cách giữa các thành viên, mối quan hệ lỏng lẻo, khó gìn giữ giá trị truyền thống."
      },
      {
        "label": "B",
        "text": "Tăng cường sự gắn kết giữa các thế hệ."
      },
      {
        "label": "C",
        "text": "Phát huy tốt các giá trị truyền thống."
      },
      {
        "label": "D",
        "text": "Không có mặt trái."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q38",
    "chapter": "Chương 7",
    "number": 38,
    "question": "Sự biến đổi chức năng tái sản xuất ra con người của gia đình Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Giảm mức sinh, giảm số con mong muốn, giảm nhu cầu phải có con trai."
      },
      {
        "label": "B",
        "text": "Tăng mức sinh, muốn có nhiều con."
      },
      {
        "label": "C",
        "text": "Nhu cầu phải có con trai tăng lên."
      },
      {
        "label": "D",
        "text": "Không có sự thay đổi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q39",
    "chapter": "Chương 7",
    "number": 39,
    "question": "Sự biến đổi chức năng kinh tế của gia đình Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Kinh tế hộ gia đình trở thành một bộ phận quan trọng trong nền kinh tế quốc dân."
      },
      {
        "label": "B",
        "text": "Gia đình không còn chức năng kinh tế, chỉ còn chức năng tiêu dùng."
      },
      {
        "label": "C",
        "text": "Kinh tế hộ gia đình bị xóa bỏ."
      },
      {
        "label": "D",
        "text": "Chỉ gia đình ở nông thôn mới có chức năng kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q40",
    "chapter": "Chương 7",
    "number": 40,
    "question": "Sự biến đổi chức năng giáo dục (xã hội hóa) của gia đình Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Giáo dục xã hội (nhà trường) bao trùm, đưa ra yêu cầu cho giáo dục gia đình."
      },
      {
        "label": "B",
        "text": "Giáo dục gia đình thay thế hoàn toàn giáo dục xã hội."
      },
      {
        "label": "C",
        "text": "Gia đình phó mặc hoàn toàn cho nhà trường."
      },
      {
        "label": "D",
        "text": "Nội dung giáo dục gia đình không thay đổi so với trước đây."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q41",
    "chapter": "Chương 7",
    "number": 41,
    "question": "Sự biến đổi chức năng thỏa mãn nhu cầu tâm sinh lý, duy trì tình cảm là:",
    "options": [
      {
        "label": "A",
        "text": "Nhu cầu thỏa mãn tâm lý - tình cảm tăng lên, do gia đình chuyển từ đơn vị kinh tế sang đơn vị tình cảm."
      },
      {
        "label": "B",
        "text": "Nhu cầu này giảm đi."
      },
      {
        "label": "C",
        "text": "Chỉ tập trung vào kinh tế, xem nhẹ tình cảm."
      },
      {
        "label": "D",
        "text": "Không có sự thay đổi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q42",
    "chapter": "Chương 7",
    "number": 42,
    "question": "Sự biến đổi trong các mối quan hệ gia đình Việt Nam hiện nay là:",
    "options": [
      {
        "label": "A",
        "text": "Quan hệ lỏng lẻo, gia tăng ly hôn, ly thân, ngoại tình, sống thử."
      },
      {
        "label": "B",
        "text": "Quan hệ ngày càng bền chặt, không có ly hôn."
      },
      {
        "label": "C",
        "text": "Giảm tỷ lệ sống thử, ngoại tình."
      },
      {
        "label": "D",
        "text": "Không có sự biến đổi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q43",
    "chapter": "Chương 7",
    "number": 43,
    "question": "Thách thức lớn nhất đặt ra cho gia đình Việt Nam hiện nay là:",
    "options": [
      {
        "label": "A",
        "text": "Mâu thuẫn giữa các thế hệ, bạo lực gia đình, ly hôn, ly thân..."
      },
      {
        "label": "B",
        "text": "Sự nghèo đói."
      },
      {
        "label": "C",
        "text": "Sự thiếu hụt về nhà ở."
      },
      {
        "label": "D",
        "text": "Sự can thiệp của dòng họ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q44",
    "chapter": "Chương 7",
    "number": 44,
    "question": "Yếu tố truyền thống nào còn tác động tiêu cực đến gia đình Việt Nam?",
    "options": [
      {
        "label": "A",
        "text": "Gia trưởng, thiếu dân chủ, quan hệ dòng họ chi phối."
      },
      {
        "label": "B",
        "text": "Tôn sư trọng đạo."
      },
      {
        "label": "C",
        "text": "Yêu nước, đoàn kết."
      },
      {
        "label": "D",
        "text": "Cần cù, sáng tạo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q45",
    "chapter": "Chương 7",
    "number": 45,
    "question": "Tác động tích cực của CNH, HĐH, KTTT và hội nhập quốc tế đến gia đình Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Gia đình tiếp thu giá trị tiến bộ, trở nên năng động, tự do hơn."
      },
      {
        "label": "B",
        "text": "Gia đình trở nên bảo thủ, khép kín."
      },
      {
        "label": "C",
        "text": "Làm gia tăng mâu thuẫn gia đình."
      },
      {
        "label": "D",
        "text": "Chỉ mang lại tác động tiêu cực."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q46",
    "chapter": "Chương 7",
    "number": 46,
    "question": "Mặt trái của toàn cầu hóa, KTTT... tác động đến gia đình là:",
    "options": [
      {
        "label": "A",
        "text": "Tuyệt đối hóa chức năng kinh tế, buôn bán phụ nữ, trẻ em, hôn nhân biến tướng."
      },
      {
        "label": "B",
        "text": "Giúp gia đình hạnh phúc hơn."
      },
      {
        "label": "C",
        "text": "Tăng cường mối quan hệ truyền thống."
      },
      {
        "label": "D",
        "text": "Giảm tỷ lệ ly hôn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q47",
    "chapter": "Chương 7",
    "number": 47,
    "question": "Tác động của khoa học và công nghệ số đến gia đình là:",
    "options": [
      {
        "label": "A",
        "text": "Vừa tạo cơ hội tiếp thu tri thức, vừa đặt ra thách thức (quan hệ lỏng lẻo, lạm dụng công nghệ...)."
      },
      {
        "label": "B",
        "text": "Chỉ mang lại lợi ích."
      },
      {
        "label": "C",
        "text": "Chỉ mang lại tác hại."
      },
      {
        "label": "D",
        "text": "Không có tác động gì."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q48",
    "chapter": "Chương 7",
    "number": 48,
    "question": "Phương hướng cơ bản đầu tiên để xây dựng gia đình Việt Nam hiện nay là:",
    "options": [
      {
        "label": "A",
        "text": "Tăng cường sự lãnh đạo của Đảng, nâng cao nhận thức của xã hội về gia đình."
      },
      {
        "label": "B",
        "text": "Đẩy mạnh phát triển kinh tế - xã hội."
      },
      {
        "label": "C",
        "text": "Kế thừa giá trị truyền thống, tiếp thu giá trị tiến bộ."
      },
      {
        "label": "D",
        "text": "Phát triển phong trào xây dựng gia đình văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q49",
    "chapter": "Chương 7",
    "number": 49,
    "question": "Phương hướng thứ hai để xây dựng gia đình Việt Nam hiện nay là:",
    "options": [
      {
        "label": "A",
        "text": "Đẩy mạnh phát triển kinh tế - xã hội, nâng cao đời sống vật chất, kinh tế hộ gia đình."
      },
      {
        "label": "B",
        "text": "Tăng cường sự lãnh đạo của Đảng."
      },
      {
        "label": "C",
        "text": "Kế thừa giá trị truyền thống, tiếp thu giá trị tiến bộ."
      },
      {
        "label": "D",
        "text": "Phát triển phong trào xây dựng gia đình văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q50",
    "chapter": "Chương 7",
    "number": 50,
    "question": "Phương hướng thứ ba để xây dựng gia đình Việt Nam hiện nay là:",
    "options": [
      {
        "label": "A",
        "text": "Kế thừa giá trị gia đình truyền thống đồng thời tiếp thu những tiến bộ của nhân loại."
      },
      {
        "label": "B",
        "text": "Tăng cường sự lãnh đạo của Đảng."
      },
      {
        "label": "C",
        "text": "Đẩy mạnh phát triển kinh tế - xã hội."
      },
      {
        "label": "D",
        "text": "Phát triển phong trào xây dựng gia đình văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q51",
    "chapter": "Chương 7",
    "number": 51,
    "question": "Phương hướng thứ tư để xây dựng gia đình Việt Nam hiện nay là:",
    "options": [
      {
        "label": "A",
        "text": "Tiếp tục phát triển và nâng cao chất lượng phong trào xây dựng gia đình văn hóa."
      },
      {
        "label": "B",
        "text": "Tăng cường sự lãnh đạo của Đảng."
      },
      {
        "label": "C",
        "text": "Đẩy mạnh phát triển kinh tế - xã hội."
      },
      {
        "label": "D",
        "text": "Kế thừa giá trị truyền thống, tiếp thu giá trị tiến bộ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q52",
    "chapter": "Chương 7",
    "number": 52,
    "question": "Gia đình là một hình thức cộng đồng xã hội:",
    "options": [
      {
        "label": "A",
        "text": "Đặc biệt."
      },
      {
        "label": "B",
        "text": "Phổ biến."
      },
      {
        "label": "C",
        "text": "Chỉ có ở thời hiện đại."
      },
      {
        "label": "D",
        "text": "Đang mất đi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q53",
    "chapter": "Chương 7",
    "number": 53,
    "question": "Quan hệ hôn nhân là quan hệ giữa:",
    "options": [
      {
        "label": "A",
        "text": "Vợ và chồng."
      },
      {
        "label": "B",
        "text": "Cha mẹ và con cái."
      },
      {
        "label": "C",
        "text": "Ông bà và cháu."
      },
      {
        "label": "D",
        "text": "Anh chị em."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q54",
    "chapter": "Chương 7",
    "number": 54,
    "question": "Quan hệ huyết thống là quan hệ giữa:",
    "options": [
      {
        "label": "A",
        "text": "Cha mẹ và con cái, anh chị em ruột."
      },
      {
        "label": "B",
        "text": "Vợ và chồng."
      },
      {
        "label": "C",
        "text": "Cha mẹ nuôi và con nuôi."
      },
      {
        "label": "D",
        "text": "Ông bà và hàng xóm."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q55",
    "chapter": "Chương 7",
    "number": 55,
    "question": "Quan hệ nuôi dưỡng là quan hệ giữa:",
    "options": [
      {
        "label": "A",
        "text": "Cha mẹ nuôi và con nuôi, hoặc người giám hộ."
      },
      {
        "label": "B",
        "text": "Cha mẹ đẻ và con đẻ."
      },
      {
        "label": "C",
        "text": "Vợ và chồng."
      },
      {
        "label": "D",
        "text": "Anh chị em ruột."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q56",
    "chapter": "Chương 7",
    "number": 56,
    "question": "Các quan hệ trong gia đình (hôn nhân, huyết thống, nuôi dưỡng) có đặc điểm:",
    "options": [
      {
        "label": "A",
        "text": "Có mối liên hệ chặt chẽ, biến đổi, phát triển phụ thuộc vào kinh tế - xã hội."
      },
      {
        "label": "B",
        "text": "Tồn tại độc lập, không liên quan nhau."
      },
      {
        "label": "C",
        "text": "Không thay đổi theo lịch sử."
      },
      {
        "label": "D",
        "text": "Chỉ phụ thuộc vào ý chí cá nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q57",
    "chapter": "Chương 7",
    "number": 57,
    "question": "\"Gia đình tốt thì xã hội tốt, xã hội tốt thì gia đình càng tốt\" là câu nói của:",
    "options": [
      {
        "label": "A",
        "text": "Hồ Chí Minh."
      },
      {
        "label": "B",
        "text": "C.Mác."
      },
      {
        "label": "C",
        "text": "V.I.Lênin."
      },
      {
        "label": "D",
        "text": "Ph.Ăngghen."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q58",
    "chapter": "Chương 7",
    "number": 58,
    "question": "Gia đình là môi trường đầu tiên để mỗi cá nhân học và thực hiện:",
    "options": [
      {
        "label": "A",
        "text": "Quan hệ xã hội."
      },
      {
        "label": "B",
        "text": "Quan hệ kinh tế."
      },
      {
        "label": "C",
        "text": "Quan hệ chính trị."
      },
      {
        "label": "D",
        "text": "Quan hệ pháp luật."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q59",
    "chapter": "Chương 7",
    "number": 59,
    "question": "Chức năng tái sản xuất ra con người đáp ứng nhu cầu nào của gia đình, dòng họ?",
    "options": [
      {
        "label": "A",
        "text": "Nhu cầu duy trì nòi giống."
      },
      {
        "label": "B",
        "text": "Nhu cầu về sức lao động."
      },
      {
        "label": "C",
        "text": "Nhu cầu về thành viên mới cho xã hội."
      },
      {
        "label": "D",
        "text": "Nhu cầu về tình cảm."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q60",
    "chapter": "Chương 7",
    "number": 60,
    "question": "Việc thực hiện chức năng tái sản xuất ra con người liên quan đến:",
    "options": [
      {
        "label": "A",
        "text": "Sự phát triển mọi mặt của đời sống xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ liên quan đến gia đình."
      },
      {
        "label": "C",
        "text": "Chỉ liên quan đến y tế."
      },
      {
        "label": "D",
        "text": "Chỉ liên quan đến kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q61",
    "chapter": "Chương 7",
    "number": 61,
    "question": "Chức năng giáo dục của gia đình có thể tách rời giáo dục xã hội không?",
    "options": [
      {
        "label": "A",
        "text": "Không thể tách rời."
      },
      {
        "label": "B",
        "text": "Có thể tách rời hoàn toàn."
      },
      {
        "label": "C",
        "text": "Chỉ cần giáo dục gia đình."
      },
      {
        "label": "D",
        "text": "Chỉ cần giáo dục xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q62",
    "chapter": "Chương 7",
    "number": 62,
    "question": "Gia đình là đơn vị duy nhất tham gia vào quá trình tái sản xuất ra:",
    "options": [
      {
        "label": "A",
        "text": "Sức lao động cho xã hội."
      },
      {
        "label": "B",
        "text": "Tư liệu sản xuất."
      },
      {
        "label": "C",
        "text": "Tư liệu tiêu dùng."
      },
      {
        "label": "D",
        "text": "Của cải vật chất."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q63",
    "chapter": "Chương 7",
    "number": 63,
    "question": "Chức năng kinh tế của gia đình trong các giai đoạn lịch sử:",
    "options": [
      {
        "label": "A",
        "text": "Có sự khác nhau về quy mô, sở hữu, cách thức tổ chức."
      },
      {
        "label": "B",
        "text": "Hoàn toàn giống nhau."
      },
      {
        "label": "C",
        "text": "Chỉ khác nhau về quy mô."
      },
      {
        "label": "D",
        "text": "Chỉ khác nhau về sở hữu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q64",
    "chapter": "Chương 7",
    "number": 64,
    "question": "Gia đình là chỗ dựa nào của con người?",
    "options": [
      {
        "label": "A",
        "text": "Tình cảm, tinh thần và vật chất."
      },
      {
        "label": "B",
        "text": "Chỉ là tình cảm."
      },
      {
        "label": "C",
        "text": "Chỉ là vật chất."
      },
      {
        "label": "D",
        "text": "Chỉ là tinh thần."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q65",
    "chapter": "Chương 7",
    "number": 65,
    "question": "Chức năng văn hóa của gia đình là:",
    "options": [
      {
        "label": "A",
        "text": "Nơi lưu truyền các giá trị văn hóa dân tộc, sáng tạo và thụ hưởng giá trị văn hóa."
      },
      {
        "label": "B",
        "text": "Chỉ là nơi thụ hưởng văn hóa."
      },
      {
        "label": "C",
        "text": "Chỉ là nơi sáng tạo văn hóa."
      },
      {
        "label": "D",
        "text": "Chỉ là nơi lưu truyền văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q66",
    "chapter": "Chương 7",
    "number": 66,
    "question": "Chức năng chính trị của gia đình là:",
    "options": [
      {
        "label": "A",
        "text": "Nơi tổ chức thực hiện chính sách, pháp luật của nhà nước."
      },
      {
        "label": "B",
        "text": "Nơi xây dựng đường lối, chính sách."
      },
      {
        "label": "C",
        "text": "Nơi tổ chức bầu cử."
      },
      {
        "label": "D",
        "text": "Nơi đấu tranh chính trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q67",
    "chapter": "Chương 7",
    "number": 67,
    "question": "Xóa bỏ chế độ tư hữu về TLSX là cơ sở để:",
    "options": [
      {
        "label": "A",
        "text": "Biến lao động tư nhân trong gia đình thành lao động xã hội."
      },
      {
        "label": "B",
        "text": "Củng cố lao động tư nhân."
      },
      {
        "label": "C",
        "text": "Duy trì sự bất bình đẳng."
      },
      {
        "label": "D",
        "text": "Củng cố quyền gia trưởng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q68",
    "chapter": "Chương 7",
    "number": 68,
    "question": "Lực lượng sản xuất phát triển trong CNXH tạo cơ sở để:",
    "options": [
      {
        "label": "A",
        "text": "Nâng cao đời sống vật chất, tinh thần của gia đình, tăng phúc lợi xã hội."
      },
      {
        "label": "B",
        "text": "Giảm phúc lợi xã hội."
      },
      {
        "label": "C",
        "text": "Duy trì đời sống ở mức tối thiểu."
      },
      {
        "label": "D",
        "text": "Chỉ tăng phúc lợi cho một số gia đình."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q69",
    "chapter": "Chương 7",
    "number": 69,
    "question": "Cơ sở chính trị - xã hội (nhà nước XHCN, pháp luật) là để:",
    "options": [
      {
        "label": "A",
        "text": "Thực hiện giải phóng phụ nữ và bảo vệ hạnh phúc gia đình."
      },
      {
        "label": "B",
        "text": "Duy trì sự bất bình đẳng với phụ nữ."
      },
      {
        "label": "C",
        "text": "Bảo vệ đặc quyền của giai cấp thống trị cũ."
      },
      {
        "label": "D",
        "text": "Hạn chế hạnh phúc gia đình."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q70",
    "chapter": "Chương 7",
    "number": 70,
    "question": "Sự phát triển của hệ thống giáo dục, khoa học trong CNXH tạo cơ sở để:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng gia đình tiến bộ, bình đẳng."
      },
      {
        "label": "B",
        "text": "Duy trì gia đình lạc hậu, gia trưởng."
      },
      {
        "label": "C",
        "text": "Gây mâu thuẫn trong gia đình."
      },
      {
        "label": "D",
        "text": "Xóa bỏ gia đình."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q71",
    "chapter": "Chương 7",
    "number": 71,
    "question": "Hôn nhân tự nguyện có bác bỏ sự quan tâm, hướng dẫn của cha mẹ không?",
    "options": [
      {
        "label": "A",
        "text": "Không bác bỏ, nhưng không chấp nhận sự áp đặt."
      },
      {
        "label": "B",
        "text": "Có, bác bỏ hoàn toàn vai trò của cha mẹ."
      },
      {
        "label": "C",
        "text": "Phải tuân theo mọi sự sắp đặt của cha mẹ."
      },
      {
        "label": "D",
        "text": "Chỉ nghe theo cha mẹ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q72",
    "chapter": "Chương 7",
    "number": 72,
    "question": "Hôn nhân tiến bộ không khuyến khích ly hôn vì:",
    "options": [
      {
        "label": "A",
        "text": "Ly hôn để lại hậu quả cho xã hội, vợ chồng, đặc biệt là con cái."
      },
      {
        "label": "B",
        "text": "Ly hôn là bị pháp luật cấm."
      },
      {
        "label": "C",
        "text": "Ly hôn là vi phạm đạo đức."
      },
      {
        "label": "D",
        "text": "Ly hôn là biểu hiện không văn minh."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q73",
    "chapter": "Chương 7",
    "number": 73,
    "question": "Trong các xã hội trước CNXH, hôn nhân một vợ một chồng thực chất chỉ đối với:",
    "options": [
      {
        "label": "A",
        "text": "Người phụ nữ."
      },
      {
        "label": "B",
        "text": "Người đàn ông."
      },
      {
        "label": "C",
        "text": "Cả đàn ông và phụ nữ."
      },
      {
        "label": "D",
        "text": "Giai cấp bị trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q74",
    "chapter": "Chương 7",
    "number": 74,
    "question": "Quan hệ vợ chồng bình đẳng là cơ sở cho:",
    "options": [
      {
        "label": "A",
        "text": "Sự bình đẳng trong quan hệ cha mẹ - con cái và anh chị em."
      },
      {
        "label": "B",
        "text": "Sự bất bình đẳng trong gia đình."
      },
      {
        "label": "C",
        "text": "Quyền gia trưởng của người cha."
      },
      {
        "label": "D",
        "text": "Quyền quyết định của người mẹ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q75",
    "chapter": "Chương 7",
    "number": 75,
    "question": "Hôn nhân được đảm bảo về pháp lý là biện pháp ngăn chặn:",
    "options": [
      {
        "label": "A",
        "text": "Việc lợi dụng quyền tự do kết hôn, ly hôn để thỏa mãn nhu cầu không chính đáng."
      },
      {
        "label": "B",
        "text": "Quyền tự do kết hôn chính đáng."
      },
      {
        "label": "C",
        "text": "Quyền tự do ly hôn chính đáng."
      },
      {
        "label": "D",
        "text": "Tình yêu chân chính."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q76",
    "chapter": "Chương 7",
    "number": 76,
    "question": "Sự biến đổi của gia đình Việt Nam hiện nay là do:",
    "options": [
      {
        "label": "A",
        "text": "Tác động của CNH, HĐH, KTTT, hội nhập quốc tế, KHCN và các yếu tố truyền thống."
      },
      {
        "label": "B",
        "text": "Chỉ do tác động của CNH, HĐH."
      },
      {
        "label": "C",
        "text": "Chỉ do tác động của KTTT."
      },
      {
        "label": "D",
        "text": "Chỉ do tác động của hội nhập quốc tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q77",
    "chapter": "Chương 7",
    "number": 77,
    "question": "Quy mô gia đình Việt Nam có xu hướng:",
    "options": [
      {
        "label": "A",
        "text": "Thu nhỏ hơn."
      },
      {
        "label": "B",
        "text": "Lớn hơn."
      },
      {
        "label": "C",
        "text": "Không thay đổi."
      },
      {
        "label": "D",
        "text": "Chỉ có gia đình đơn thân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q78",
    "chapter": "Chương 7",
    "number": 78,
    "question": "Sự biến đổi chức năng kinh tế của gia đình Việt Nam làm cho:",
    "options": [
      {
        "label": "A",
        "text": "Gia đình trở thành một đơn vị tiêu dùng quan trọng của xã hội."
      },
      {
        "label": "B",
        "text": "Gia đình không còn là đơn vị tiêu dùng."
      },
      {
        "label": "C",
        "text": "Gia đình chỉ sản xuất, không tiêu dùng."
      },
      {
        "label": "D",
        "text": "Chức năng tiêu dùng không thay đổi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q79",
    "chapter": "Chương 7",
    "number": 79,
    "question": "Sự đầu tư tài chính của gia đình Việt Nam cho giáo dục con cái:",
    "options": [
      {
        "label": "A",
        "text": "Tăng lên."
      },
      {
        "label": "B",
        "text": "Giảm đi."
      },
      {
        "label": "C",
        "text": "Không thay đổi."
      },
      {
        "label": "D",
        "text": "Phó mặc cho nhà nước."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q80",
    "chapter": "Chương 7",
    "number": 80,
    "question": "Nội dung giáo dục gia đình Việt Nam hiện nay hướng đến:",
    "options": [
      {
        "label": "A",
        "text": "Kiến thức khoa học hiện đại, công cụ để con cái hòa nhập thế giới."
      },
      {
        "label": "B",
        "text": "Chỉ giáo dục đạo đức, ứng xử truyền thống."
      },
      {
        "label": "C",
        "text": "Chỉ giáo dục nghề thủ công."
      },
      {
        "label": "D",
        "text": "Chỉ giáo dục về dòng họ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q81",
    "chapter": "Chương 7",
    "number": 81,
    "question": "\"Gia đình đơn thân\" là một dạng kết cấu gia đình:",
    "options": [
      {
        "label": "A",
        "text": "Mới xuất hiện và gia tăng ở Việt Nam."
      },
      {
        "label": "B",
        "text": "Đã tồn tại phổ biến từ xưa."
      },
      {
        "label": "C",
        "text": "Không tồn tại ở Việt Nam."
      },
      {
        "label": "D",
        "text": "Chỉ có ở thành thị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q82",
    "chapter": "Chương 7",
    "number": 82,
    "question": "\"Kết hôn đồng tính\" là một hiện tượng:",
    "options": [
      {
        "label": "A",
        "text": "Mới xuất hiện, đang đặt ra các vấn đề xã hội, pháp lý."
      },
      {
        "label": "B",
        "text": "Đã được pháp luật công nhận ở Việt Nam."
      },
      {
        "label": "C",
        "text": "Bị cấm tuyệt đối ở Việt Nam."
      },
      {
        "label": "D",
        "text": "Không phải là vấn đề của gia đình."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q83",
    "chapter": "Chương 7",
    "number": 83,
    "question": "\"Sống thử\" (chung sống không kết hôn) là một hiện tượng:",
    "options": [
      {
        "label": "A",
        "text": "Đang gia tăng, đặc biệt ở giới trẻ, đô thị."
      },
      {
        "label": "B",
        "text": "Đã phổ biến từ xưa."
      },
      {
        "label": "C",
        "text": "Không tồn tại ở Việt Nam."
      },
      {
        "label": "D",
        "text": "Chỉ có ở nông thôn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q84",
    "chapter": "Chương 7",
    "number": 84,
    "question": "Tác động của CNH, HĐH... đến gia đình Việt Nam là:",
    "options": [
      {
        "label": "A",
        "text": "Vừa tích cực (năng động, tự do), vừa tiêu cực (lỏng lẻo, mâu thuẫn)."
      },
      {
        "label": "B",
        "text": "Chỉ tích cực."
      },
      {
        "label": "C",
        "text": "Chỉ tiêu cực."
      },
      {
        "label": "D",
        "text": "Không có tác động."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q85",
    "chapter": "Chương 7",
    "number": 85,
    "question": "\"Hôn nhân xuyên biên giới\" dưới hình thức biến tướng là một:",
    "options": [
      {
        "label": "A",
        "text": "Tác động tiêu cực của toàn cầu hóa, KTTT."
      },
      {
        "label": "B",
        "text": "Tác động tích cực."
      },
      {
        "label": "C",
        "text": "Hình thức giao lưu văn hóa tốt."
      },
      {
        "label": "D",
        "text": "Không phải là vấn đề xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q86",
    "chapter": "Chương 7",
    "number": 86,
    "question": "Mất cân bằng giới tính khi sinh ở Việt Nam là một:",
    "options": [
      {
        "label": "A",
        "text": "Tác động tiêu cực của lạm dụng công nghệ (lựa chọn giới tính)."
      },
      {
        "label": "B",
        "text": "Tác động tích cực."
      },
      {
        "label": "C",
        "text": "Hiện tượng tự nhiên."
      },
      {
        "label": "D",
        "text": "Không xảy ra ở Việt Nam."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q87",
    "chapter": "Chương 7",
    "number": 87,
    "question": "Tác động của công nghệ số đến mối quan hệ gia đình là:",
    "options": [
      {
        "label": "A",
        "text": "Có thể làm lỏng lẻo mối quan hệ (do sống trong thế giới ảo)."
      },
      {
        "label": "B",
        "text": "Luôn luôn làm gia đình gắn kết hơn."
      },
      {
        "label": "C",
        "text": "Không ảnh hưởng đến mối quan hệ."
      },
      {
        "label": "D",
        "text": "Chỉ ảnh hưởng đến kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q88",
    "chapter": "Chương 7",
    "number": 88,
    "question": "Xây dựng \"gia đình văn hóa\" là một:",
    "options": [
      {
        "label": "A",
        "text": "Phong trào, phương hướng cơ bản để xây dựng gia đình Việt Nam."
      },
      {
        "label": "B",
        "text": "Hình thức không còn phù hợp."
      },
      {
        "label": "C",
        "text": "Hoạt động chỉ mang tính hình thức."
      },
      {
        "label": "D",
        "text": "Hoạt động chỉ ở cấp cơ sở."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q89",
    "chapter": "Chương 7",
    "number": 89,
    "question": "Gia đình là một phạm trù:",
    "options": [
      {
        "label": "A",
        "text": "Lịch sử, biến đổi qua các hình thái kinh tế - xã hội."
      },
      {
        "label": "B",
        "text": "Vĩnh viễn, bất biến."
      },
      {
        "label": "C",
        "text": "Tự nhiên."
      },
      {
        "label": "D",
        "text": "Chỉ xuất hiện trong chủ nghĩa tư bản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q90",
    "chapter": "Chương 7",
    "number": 90,
    "question": "Chức năng nào của gia đình quyết định đến mật độ dân cư và nguồn lao động?",
    "options": [
      {
        "label": "A",
        "text": "Chức năng tái sản xuất ra con người."
      },
      {
        "label": "B",
        "text": "Chức năng kinh tế."
      },
      {
        "label": "C",
        "text": "Chức năng giáo dục."
      },
      {
        "label": "D",
        "text": "Chức năng thỏa mãn tình cảm."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q91",
    "chapter": "Chương 7",
    "number": 91,
    "question": "\"Xã hội hóa\" trong chức năng giáo dục của gia đình có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Gia đình giáo dục con cái trở thành thành viên của xã hội."
      },
      {
        "label": "B",
        "text": "Xã hội (nhà trường...) tham gia vào giáo dục con cái."
      },
      {
        "label": "C",
        "text": "Cả A và B."
      },
      {
        "label": "D",
        "text": "Giao con cái cho xã hội nuôi."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": "Chương 7_Q92",
    "chapter": "Chương 7",
    "number": 92,
    "question": "Cơ sở kinh tế của gia đình một vợ một chồng trong CNTB là:",
    "options": [
      {
        "label": "A",
        "text": "Chế độ tư hữu."
      },
      {
        "label": "B",
        "text": "Chế độ công hữu."
      },
      {
        "label": "C",
        "text": "Tình yêu chân chính."
      },
      {
        "label": "D",
        "text": "Pháp luật."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q93",
    "chapter": "Chương 7",
    "number": 93,
    "question": "Cơ sở kinh tế của gia đình XHCN là:",
    "options": [
      {
        "label": "A",
        "text": "Chế độ công hữu."
      },
      {
        "label": "B",
        "text": "Chế độ tư hữu."
      },
      {
        "label": "C",
        "text": "Tình yêu."
      },
      {
        "label": "D",
        "text": "Pháp luật."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q94",
    "chapter": "Chương 7",
    "number": 94,
    "question": "Cơ sở để xây dựng gia đình XHCN là sự kết hợp của:",
    "options": [
      {
        "label": "A",
        "text": "Cơ sở kinh tế - xã hội, chính trị - xã hội, văn hóa và chế độ hôn nhân tiến bộ."
      },
      {
        "label": "B",
        "text": "Chỉ cơ sở kinh tế."
      },
      {
        "label": "C",
        "text": "Chỉ cơ sở chính trị."
      },
      {
        "label": "D",
        "text": "Chỉ cơ sở văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q95",
    "chapter": "Chương 7",
    "number": 95,
    "question": "Hôn nhân \"một vợ một chồng\" trong CNTB thực chất chỉ là một vợ một chồng đối với:",
    "options": [
      {
        "label": "A",
        "text": "Người phụ nữ."
      },
      {
        "label": "B",
        "text": "Người đàn ông."
      },
      {
        "label": "C",
        "text": "Giai cấp vô sản."
      },
      {
        "label": "D",
        "text": "Giai cấp tư sản."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q96",
    "chapter": "Chương 7",
    "number": 96,
    "question": "\"Gia đình đơn thân\" là gia đình:",
    "options": [
      {
        "label": "A",
        "text": "Chỉ có cha hoặc mẹ sống chung với con cái."
      },
      {
        "label": "B",
        "text": "Chỉ có một người sống độc thân."
      },
      {
        "label": "C",
        "text": "Chỉ có hai vợ chồng, không có con."
      },
      {
        "label": "D",
        "text": "Gia đình chỉ có một con."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q97",
    "chapter": "Chương 7",
    "number": 97,
    "question": "Sự biến đổi của gia đình Việt Nam hiện nay mang tính:",
    "options": [
      {
        "label": "A",
        "text": "Vừa tích cực, vừa tiêu cực."
      },
      {
        "label": "B",
        "text": "Chỉ tích cực."
      },
      {
        "label": "C",
        "text": "Chỉ tiêu cực."
      },
      {
        "label": "D",
        "text": "Không biến đổi."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q98",
    "chapter": "Chương 7",
    "number": 98,
    "question": "Nâng cao nhận thức của xã hội về gia đình là trách nhiệm của:",
    "options": [
      {
        "label": "A",
        "text": "Đảng, nhà nước, các đoàn thể và toàn xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ của Đảng."
      },
      {
        "label": "C",
        "text": "Chỉ của Nhà nước."
      },
      {
        "label": "D",
        "text": "Chỉ của bản thân gia đình."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q99",
    "chapter": "Chương 7",
    "number": 99,
    "question": "\"Kế thừa giá trị truyền thống\" và \"tiếp thu giá trị tiến bộ\" là:",
    "options": [
      {
        "label": "A",
        "text": "Hai mặt thống nhất, biện chứng trong xây dựng gia đình Việt Nam hiện nay."
      },
      {
        "label": "B",
        "text": "Hai mặt mâu thuẫn, loại trừ nhau."
      },
      {
        "label": "C",
        "text": "Chỉ cần kế thừa truyền thống."
      },
      {
        "label": "D",
        "text": "Chỉ cần tiếp thu tiến bộ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q100",
    "chapter": "Chương 7",
    "number": 100,
    "question": "\"Gia đình văn hóa\" là mô hình gia đình:",
    "options": [
      {
        "label": "A",
        "text": "Đạt được các tiêu chuẩn về kinh tế, văn hóa, giáo dục, y tế... do nhà nước quy định."
      },
      {
        "label": "B",
        "text": "Chỉ giàu có về kinh tế."
      },
      {
        "label": "C",
        "text": "Chỉ có nếp sống văn hóa."
      },
      {
        "label": "D",
        "text": "Chỉ có thành viên học vấn cao."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q101",
    "chapter": "Chương 7",
    "number": 101,
    "question": "Quan hệ hôn nhân và quan hệ huyết thống:",
    "options": [
      {
        "label": "A",
        "text": "Là hai cơ sở chính hình thành nên gia đình."
      },
      {
        "label": "B",
        "text": "Tồn tại độc lập với nhau."
      },
      {
        "label": "C",
        "text": "Quan hệ hôn nhân quyết định quan hệ huyết thống."
      },
      {
        "label": "D",
        "text": "Quan hệ huyết thống quyết định quan hệ hôn nhân."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q102",
    "chapter": "Chương 7",
    "number": 102,
    "question": "Vị trí \"tế bào xã hội\" của gia đình nhấn mạnh:",
    "options": [
      {
        "label": "A",
        "text": "Sự tác động qua lại, gắn bó hữu cơ giữa gia đình và xã hội."
      },
      {
        "label": "B",
        "text": "Gia đình là một thực thể độc lập, tách rời xã hội."
      },
      {
        "label": "C",
        "text": "Xã hội quyết định hoàn toàn gia đình."
      },
      {
        "label": "D",
        "text": "Gia đình quyết định hoàn toàn xã hội."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q103",
    "chapter": "Chương 7",
    "number": 103,
    "question": "Chức năng nào của gia đình có thể được san sẻ một phần bởi xã hội (nhà trẻ, trường học)?",
    "options": [
      {
        "label": "A",
        "text": "Chức năng nuôi dưỡng, giáo dục."
      },
      {
        "label": "B",
        "text": "Chức năng tái sản xuất ra con người."
      },
      {
        "label": "C",
        "text": "Chức năng thỏa mãn tình cảm."
      },
      {
        "label": "D",
        "text": "Chức năng kinh tế (ở một mức độ)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q104",
    "chapter": "Chương 7",
    "number": 104,
    "question": "Trong xã hội hiện đại, chức năng kinh tế của gia đình:",
    "options": [
      {
        "label": "A",
        "text": "Vẫn còn quan trọng (kinh tế hộ, quản lý tiêu dùng)."
      },
      {
        "label": "B",
        "text": "Đã mất đi hoàn toàn."
      },
      {
        "label": "C",
        "text": "Chỉ còn ở nông thôn."
      },
      {
        "label": "D",
        "text": "Chỉ còn ở thành thị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q105",
    "chapter": "Chương 7",
    "number": 105,
    "question": "Chức năng thỏa mãn tình cảm của gia đình trở nên quan trọng hơn trong xã hội hiện đại vì:",
    "options": [
      {
        "label": "A",
        "text": "Con người chịu nhiều áp lực, căng thẳng, cần gia đình là chỗ dựa tinh thần."
      },
      {
        "label": "B",
        "text": "Con người ít quan tâm đến tình cảm hơn."
      },
      {
        "label": "C",
        "text": "Chỉ vì quy mô gia đình nhỏ lại."
      },
      {
        "label": "D",
        "text": "Chỉ vì kinh tế phát triển."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q106",
    "chapter": "Chương 7",
    "number": 106,
    "question": "Cơ sở kinh tế XHCN (công hữu) xóa bỏ sự thống trị của đàn ông vì:",
    "options": [
      {
        "label": "A",
        "text": "Phụ nữ có địa vị kinh tế bình đẳng, độc lập, không bị phụ thuộc."
      },
      {
        "label": "B",
        "text": "Phụ nữ nắm quyền sở hữu."
      },
      {
        "label": "C",
        "text": "Đàn ông không còn tham gia lao động."
      },
      {
        "label": "D",
        "text": "Pháp luật quy định."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q107",
    "chapter": "Chương 7",
    "number": 107,
    "question": "Cơ sở chính trị (nhà nước XHCN) bảo vệ gia đình bằng:",
    "options": [
      {
        "label": "A",
        "text": "Hệ thống pháp luật và các chính sách xã hội."
      },
      {
        "label": "B",
        "text": "Lực lượng quân đội."
      },
      {
        "label": "C",
        "text": "Chỉ bằng tuyên truyền."
      },
      {
        "label": "D",
        "text": "Chỉ bằng hỗ trợ kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q108",
    "chapter": "Chương 7",
    "number": 108,
    "question": "Nâng cao dân trí, phát triển khoa học (cơ sở văn hóa) giúp:",
    "options": [
      {
        "label": "A",
        "text": "Các thành viên gia đình có nhận thức mới, tiến bộ về hôn nhân, gia đình."
      },
      {
        "label": "B",
        "text": "Xóa bỏ gia đình."
      },
      {
        "label": "C",
        "text": "Duy trì các hủ tục lạc hậu."
      },
      {
        "label": "D",
        "text": "Tăng cường quyền gia trưởng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q109",
    "chapter": "Chương 7",
    "number": 109,
    "question": "\"Hôn nhân tự nguyện\" có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Tự do lựa chọn người kết hôn, không bị áp đặt."
      },
      {
        "label": "B",
        "text": "Không cần tình yêu."
      },
      {
        "label": "C",
        "text": "Không cần đăng ký kết hôn."
      },
      {
        "label": "D",
        "text": "Không cần sự đồng ý của ai."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q110",
    "chapter": "Chương 7",
    "number": 110,
    "question": "\"Vợ chồng bình đẳng\" có nghĩa là:",
    "options": [
      {
        "label": "A",
        "text": "Bình đẳng về quyền và nghĩa vụ trong gia đình và xã hội."
      },
      {
        "label": "B",
        "text": "Vợ phải nghe lời chồng."
      },
      {
        "label": "C",
        "text": "Chồng phải nghe lời vợ."
      },
      {
        "label": "D",
        "text": "Vai trò, công việc phải giống hệt nhau."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q111",
    "chapter": "Chương 7",
    "number": 111,
    "question": "\"Đăng ký kết hôn\" (bảo đảm pháp lý) nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Bảo vệ quyền lợi chính đáng của vợ, chồng và con cái khi có vấn đề phát sinh."
      },
      {
        "label": "B",
        "text": "Gây khó khăn cho việc kết hôn."
      },
      {
        "label": "C",
        "text": "Gây khó khăn cho việc ly hôn."
      },
      {
        "label": "D",
        "text": "Chỉ là thủ tục hành chính."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q112",
    "chapter": "Chương 7",
    "number": 112,
    "question": "Gia đình Việt Nam truyền thống có đặc điểm:",
    "options": [
      {
        "label": "A",
        "text": "Nhiều thế hệ cùng chung sống, quy mô lớn, quyền gia trưởng của người đàn ông."
      },
      {
        "label": "B",
        "text": "Chỉ có hai thế hệ, quy mô nhỏ, bình đẳng tuyệt đối."
      },
      {
        "label": "C",
        "text": "Không coi trọng quan hệ huyết thống."
      },
      {
        "label": "D",
        "text": "Coi trọng quan hệ hôn nhân hơn huyết thống."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q113",
    "chapter": "Chương 7",
    "number": 113,
    "question": "Gia đình Việt Nam hiện đại (hạt nhân) có đặc điểm:",
    "options": [
      {
        "label": "A",
        "text": "Đề cao sự bình đẳng nam nữ, cuộc sống riêng tư được tôn trọng."
      },
      {
        "label": "B",
        "text": "Vẫn duy trì quyền gia trưởng tuyệt đối."
      },
      {
        "label": "C",
        "text": "Coi thường cuộc sống riêng tư."
      },
      {
        "label": "D",
        "text": "Cha mẹ quyết định mọi việc của con cái."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q114",
    "chapter": "Chương 7",
    "number": 114,
    "question": "Sự giảm mức sinh ở Việt Nam hiện nay là do:",
    "options": [
      {
        "label": "A",
        "text": "Nhận thức của các cặp vợ chồng, chính sách dân số, áp lực kinh tế..."
      },
      {
        "label": "B",
        "text": "Chỉ do chính sách dân số."
      },
      {
        "label": "C",
        "text": "Chỉ do áp lực kinh tế."
      },
      {
        "label": "D",
        "text": "Do tỷ lệ vô sinh tăng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q115",
    "chapter": "Chương 7",
    "number": 115,
    "question": "Kinh tế hộ gia đình ở Việt Nam hiện nay:",
    "options": [
      {
        "label": "A",
        "text": "Đa dạng (nông nghiệp, thủ công, thương mại, dịch vụ)."
      },
      {
        "label": "B",
        "text": "Chỉ có nông nghiệp."
      },
      {
        "label": "C",
        "text": "Chỉ có thủ công nghiệp."
      },
      {
        "label": "D",
        "text": "Đang bị xóa bỏ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q116",
    "chapter": "Chương 7",
    "number": 116,
    "question": "Giáo dục gia đình hiện nay gặp khó khăn do:",
    "options": [
      {
        "label": "A",
        "text": "Cha mẹ thiếu thời gian, kiến thức, phương pháp giáo dục con cái."
      },
      {
        "label": "B",
        "text": "Cha mẹ có quá nhiều thời gian."
      },
      {
        "label": "C",
        "text": "Nhà trường làm quá tốt."
      },
      {
        "label": "D",
        "text": "Con cái quá ngoan."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q117",
    "chapter": "Chương 7",
    "number": 117,
    "question": "Tỷ lệ ly hôn ở Việt Nam hiện nay có xu hướng:",
    "options": [
      {
        "label": "A",
        "text": "Tăng lên."
      },
      {
        "label": "B",
        "text": "Giảm đi."
      },
      {
        "label": "C",
        "text": "Đứng yên."
      },
      {
        "label": "D",
        "text": "Không có số liệu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q118",
    "chapter": "Chương 7",
    "number": 118,
    "question": "Yếu tố truyền thống \"trọng nam khinh nữ\" tác động tiêu cực đến:",
    "options": [
      {
        "label": "A",
        "text": "Quyền bình đẳng của phụ nữ, gây mất cân bằng giới tính khi sinh."
      },
      {
        "label": "B",
        "text": "Quyền lợi của nam giới."
      },
      {
        "label": "C",
        "text": "Không có tác động tiêu cực."
      },
      {
        "label": "D",
        "text": "Chỉ tác động ở nông thôn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q119",
    "chapter": "Chương 7",
    "number": 119,
    "question": "Yếu tố truyền thống \"quan hệ dòng họ\" chi phối:",
    "options": [
      {
        "label": "A",
        "text": "Có thể tích cực (giúp đỡ) hoặc tiêu cực (áp đặt hôn nhân, cản trở làm ăn)."
      },
      {
        "label": "B",
        "text": "Chỉ tích cực."
      },
      {
        "label": "C",
        "text": "Chỉ tiêu cực."
      },
      {
        "label": "D",
        "text": "Không còn ảnh hưởng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q120",
    "chapter": "Chương 7",
    "number": 120,
    "question": "Tác động tiêu cực của KTTT đến gia đình là:",
    "options": [
      {
        "label": "A",
        "text": "Lối sống thực dụng, coi trọng đồng tiền, xem nhẹ tình cảm."
      },
      {
        "label": "B",
        "text": "Lối sống vị tha, coi trọng tình cảm."
      },
      {
        "label": "C",
        "text": "Tăng cường sự đoàn kết."
      },
      {
        "label": "D",
        "text": "Giảm mâu thuẫn gia đình."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q121",
    "chapter": "Chương 7",
    "number": 121,
    "question": "Lạm dụng công nghệ số (điện thoại, internet) trong gia đình có thể:",
    "options": [
      {
        "label": "A",
        "text": "Giảm sự tương tác, giao tiếp trực tiếp giữa các thành viên."
      },
      {
        "label": "B",
        "text": "Tăng cường sự tương tác trực tiếp."
      },
      {
        "label": "C",
        "text": "Không ảnh hưởng."
      },
      {
        "label": "D",
        "text": "Chỉ ảnh hưởng đến con cái."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q122",
    "chapter": "Chương 7",
    "number": 122,
    "question": "Lãnh đạo của Đảng đối với xây dựng gia đình thể hiện qua:",
    "options": [
      {
        "label": "A",
        "text": "Đường lối, chủ trương, chính sách."
      },
      {
        "label": "B",
        "text": "Can thiệp trực tiếp vào từng gia đình."
      },
      {
        "label": "C",
        "text": "Quyết định việc kết hôn của đảng viên."
      },
      {
        "label": "D",
        "text": "Chỉ lãnh đạo các gia đình cán bộ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q123",
    "chapter": "Chương 7",
    "number": 123,
    "question": "Nâng cao nhận thức xã hội về gia đình cần thông qua:",
    "options": [
      {
        "label": "A",
        "text": "Công tác tuyên truyền, giáo dục."
      },
      {
        "label": "B",
        "text": "Chỉ dùng pháp luật."
      },
      {
        "label": "C",
        "text": "Chỉ dùng kinh tế."
      },
      {
        "label": "D",
        "text": "Để xã hội tự nhận thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q124",
    "chapter": "Chương 7",
    "number": 124,
    "question": "Đẩy mạnh phát triển kinh tế - xã hội (phương hướng 2) nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Tạo cơ sở vật chất, nâng cao thu nhập, cải thiện đời sống gia đình."
      },
      {
        "label": "B",
        "text": "Chỉ để tăng trưởng GDP."
      },
      {
        "label": "C",
        "text": "Chỉ để giải quyết việc làm."
      },
      {
        "label": "D",
        "text": "Chỉ để xây dựng cơ sở hạ tầng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q125",
    "chapter": "Chương 7",
    "number": 125,
    "question": "Giá trị gia đình truyền thống tốt đẹp cần kế thừa là:",
    "options": [
      {
        "label": "A",
        "text": "Tình nghĩa vợ chồng, hiếu thảo cha mẹ, anh em hòa thuận."
      },
      {
        "label": "B",
        "text": "Quyền gia trưởng, trọng nam khinh nữ."
      },
      {
        "label": "C",
        "text": "Hôn nhân sắp đặt."
      },
      {
        "label": "D",
        "text": "Tam tòng tứ đức (kiểu cũ)."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q126",
    "chapter": "Chương 7",
    "number": 126,
    "question": "Giá trị tiến bộ của nhân loại cần tiếp thu là:",
    "options": [
      {
        "label": "A",
        "text": "Tôn trọng cá nhân, bình đẳng nam nữ, chia sẻ công việc gia đình."
      },
      {
        "label": "B",
        "text": "Lối sống thử, ly hôn dễ dàng."
      },
      {
        "label": "C",
        "text": "Chủ nghĩa cá nhân cực đoan."
      },
      {
        "label": "D",
        "text": "Không kết hôn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q127",
    "chapter": "Chương 7",
    "number": 127,
    "question": "Phong trào \"Xây dựng gia đình văn hóa\" nhằm:",
    "options": [
      {
        "label": "A",
        "text": "Xây dựng gia đình no ấm, tiến bộ, hạnh phúc, văn minh."
      },
      {
        "label": "B",
        "text": "Chỉ để nhận giấy khen."
      },
      {
        "label": "C",
        "text": "Chỉ quan tâm đến văn hóa, nghệ thuật."
      },
      {
        "label": "D",
        "text": "Chỉ quan tâm đến kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q128",
    "chapter": "Chương 7",
    "number": 128,
    "question": "Vị trí của gia đình trong xã hội là:",
    "options": [
      {
        "label": "A",
        "text": "Vừa là tế bào, vừa là tổ ấm, vừa là cầu nối."
      },
      {
        "label": "B",
        "text": "Chỉ là tế bào."
      },
      {
        "label": "C",
        "text": "Chỉ là tổ ấm."
      },
      {
        "label": "D",
        "text": "Chỉ là cầu nối."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q129",
    "chapter": "Chương 7",
    "number": 129,
    "question": "Chức năng nào của gia đình liên quan trực tiếp đến việc hình thành nhân cách?",
    "options": [
      {
        "label": "A",
        "text": "Chức năng nuôi dưỡng, giáo dục."
      },
      {
        "label": "B",
        "text": "Chức năng tái sản xuất."
      },
      {
        "label": "C",
        "text": "Chức năng kinh tế."
      },
      {
        "label": "D",
        "text": "Chức năng thỏa mãn tình cảm."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q130",
    "chapter": "Chương 7",
    "number": 130,
    "question": "Chức năng kinh tế và tổ chức tiêu dùng:",
    "options": [
      {
        "label": "A",
        "text": "Có mối quan hệ chặt chẽ, tác động lẫn nhau (làm ra tiền và tiêu tiền)."
      },
      {
        "label": "B",
        "text": "Tách rời nhau."
      },
      {
        "label": "C",
        "text": "Chỉ có ở gia đình giàu."
      },
      {
        "label": "D",
        "text": "Chỉ có ở gia đình nghèo."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q131",
    "chapter": "Chương 7",
    "number": 131,
    "question": "Chức năng thỏa mãn tình cảm quan trọng nhất là:",
    "options": [
      {
        "label": "A",
        "text": "Duy trì tình cảm yêu thương, gắn bó, là chỗ dựa tinh thần."
      },
      {
        "label": "B",
        "text": "Chỉ thỏa mãn nhu cầu sinh lý."
      },
      {
        "label": "C",
        "text": "Chỉ chăm sóc người già."
      },
      {
        "label": "D",
        "text": "Chỉ chăm sóc trẻ em."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q132",
    "chapter": "Chương 7",
    "number": 132,
    "question": "\"Hôn nhân tự nguyện\" là một trong những:",
    "options": [
      {
        "label": "A",
        "text": "Cơ sở của chế độ hôn nhân tiến bộ."
      },
      {
        "label": "B",
        "text": "Tàn dư của xã hội cũ."
      },
      {
        "label": "C",
        "text": "Nguyên nhân gây tan vỡ gia đình."
      },
      {
        "label": "D",
        "text": "Yếu tố không quan trọng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q133",
    "chapter": "Chương 7",
    "number": 133,
    "question": "\"Hôn nhân một vợ một chồng\" là:",
    "options": [
      {
        "label": "A",
        "text": "Cơ sở của chế độ hôn nhân tiến bộ."
      },
      {
        "label": "B",
        "text": "Tàn dư của xã hội cũ."
      },
      {
        "label": "C",
        "text": "Chỉ áp dụng cho phụ nữ."
      },
      {
        "label": "D",
        "text": "Không còn phù hợp."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q134",
    "chapter": "Chương 7",
    "number": 134,
    "question": "\"Gia đình hạt nhân\" đang phổ biến ở đâu?",
    "options": [
      {
        "label": "A",
        "text": "Cả thành thị và nông thôn Việt Nam."
      },
      {
        "label": "B",
        "text": "Chỉ ở thành thị."
      },
      {
        "label": "C",
        "text": "Chỉ ở nông thôn."
      },
      {
        "label": "D",
        "text": "Chỉ ở nước ngoài."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q135",
    "chapter": "Chương 7",
    "number": 135,
    "question": "Nhu cầu \"nhất thiết phải có con trai\" ở Việt Nam:",
    "options": [
      {
        "label": "A",
        "text": "Đang giảm nhưng vẫn còn tồn tại."
      },
      {
        "label": "B",
        "text": "Đã mất đi hoàn toàn."
      },
      {
        "label": "C",
        "text": "Đang tăng lên."
      },
      {
        "label": "D",
        "text": "Chỉ có ở nông thôn."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q136",
    "chapter": "Chương 7",
    "number": 136,
    "question": "Tác động của CNH, HĐH... đến gia đình là:",
    "options": [
      {
        "label": "A",
        "text": "Làm biến đổi cả quy mô, kết cấu, chức năng và các mối quan hệ."
      },
      {
        "label": "B",
        "text": "Chỉ biến đổi quy mô."
      },
      {
        "label": "C",
        "text": "Chỉ biến đổi chức năng."
      },
      {
        "label": "D",
        "text": "Chỉ biến đổi các mối quan hệ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q137",
    "chapter": "Chương 7",
    "number": 137,
    "question": "Tác động tiêu cực của công nghệ số đến trẻ em trong gia đình là:",
    "options": [
      {
        "label": "A",
        "text": "Dễ tiếp xúc với thông tin xấu, độc hại, lười vận động, giảm giao tiếp."
      },
      {
        "label": "B",
        "text": "Giúp trẻ em thông minh hơn."
      },
      {
        "label": "C",
        "text": "Chỉ mang lại lợi ích."
      },
      {
        "label": "D",
        "text": "Không có tác động gì."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q138",
    "chapter": "Chương 7",
    "number": 138,
    "question": "\"Xây dựng gia đình\" là trách nhiệm của:",
    "options": [
      {
        "label": "A",
        "text": "Toàn xã hội, nhà nước, đoàn thể và mỗi gia đình, cá nhân."
      },
      {
        "label": "B",
        "text": "Chỉ của bản thân gia đình."
      },
      {
        "label": "C",
        "text": "Chỉ của nhà nước."
      },
      {
        "label": "D",
        "text": "Chỉ của Đảng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q139",
    "chapter": "Chương 7",
    "number": 139,
    "question": "Nền tảng của gia đình là:",
    "options": [
      {
        "label": "A",
        "text": "Hôn nhân."
      },
      {
        "label": "B",
        "text": "Huyết thống."
      },
      {
        "label": "C",
        "text": "Nuôi dưỡng."
      },
      {
        "label": "D",
        "text": "Kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q140",
    "chapter": "Chương 7",
    "number": 140,
    "question": "Gia đình có vai trò quyết định đến:",
    "options": [
      {
        "label": "A",
        "text": "Sự tồn tại và phát triển của xã hội."
      },
      {
        "label": "B",
        "text": "Chỉ sự tồn tại của cá nhân."
      },
      {
        "label": "C",
        "text": "Chỉ sự phát triển kinh tế."
      },
      {
        "label": "D",
        "text": "Chỉ sự ổn định chính trị."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q141",
    "chapter": "Chương 7",
    "number": 141,
    "question": "Chức năng nào của gia đình cung cấp nguồn lao động cho xã hội?",
    "options": [
      {
        "label": "A",
        "text": "Chức năng tái sản xuất ra con người."
      },
      {
        "label": "B",
        "text": "Chức năng kinh tế."
      },
      {
        "label": "C",
        "text": "Chức năng giáo dục."
      },
      {
        "label": "D",
        "text": "Chức năng văn hóa."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q142",
    "chapter": "Chương 7",
    "number": 142,
    "question": "Cơ sở nào là nền tảng cho sự bình đẳng trong gia đình XHCN?",
    "options": [
      {
        "label": "A",
        "text": "Cơ sở kinh tế (chế độ công hữu)."
      },
      {
        "label": "B",
        "text": "Cơ sở pháp lý."
      },
      {
        "label": "C",
        "text": "Cơ sở văn hóa."
      },
      {
        "label": "D",
        "text": "Cơ sở tình cảm."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q143",
    "chapter": "Chương 7",
    "number": 143,
    "question": "Hôn nhân dựa trên cơ sở tình yêu là biểu hiện của:",
    "options": [
      {
        "label": "A",
        "text": "Chế độ hôn nhân tiến bộ."
      },
      {
        "label": "B",
        "text": "Hôn nhân tư sản."
      },
      {
        "label": "C",
        "text": "Hôn nhân phong kiến."
      },
      {
        "label": "D",
        "text": "Hôn nhân nguyên thủy."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q144",
    "chapter": "Chương 7",
    "number": 144,
    "question": "Ly hôn được pháp luật XHCN thừa nhận khi:",
    "options": [
      {
        "label": "A",
        "text": "Tình yêu thực sự không còn, mâu thuẫn không thể hàn gắn."
      },
      {
        "label": "B",
        "text": "Chỉ cần một bên muốn."
      },
      {
        "label": "C",
        "text": "Khi có sự đồng ý của cha mẹ."
      },
      {
        "label": "D",
        "text": "Khi có lý do kinh tế."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q145",
    "chapter": "Chương 7",
    "number": 145,
    "question": "\"Gia đình hạt nhân\" phổ biến làm tăng:",
    "options": [
      {
        "label": "A",
        "text": "Tính tự chủ, độc lập của các thành viên."
      },
      {
        "label": "B",
        "text": "Sự phụ thuộc vào đại gia đình."
      },
      {
        "label": "C",
        "text": "Quyền gia trưởng."
      },
      {
        "label": "D",
        "text": "Sự gắn kết các thế hệ."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q146",
    "chapter": "Chương 7",
    "number": 146,
    "question": "\"Bạo lực gia đình\" là một:",
    "options": [
      {
        "label": "A",
        "text": "Tác động tiêu cực, thách thức đối với gia đình Việt Nam hiện nay."
      },
      {
        "label": "B",
        "text": "Biểu hiện của gia đình truyền thống."
      },
      {
        "label": "C",
        "text": "Biểu hiện của gia đình văn hóa."
      },
      {
        "label": "D",
        "text": "Không còn tồn tại."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q147",
    "chapter": "Chương 7",
    "number": 147,
    "question": "Tác động của yếu tố truyền thống \"hiếu thảo, tình nghĩa\":",
    "options": [
      {
        "label": "A",
        "text": "Là mặt tích cực cần kế thừa."
      },
      {
        "label": "B",
        "text": "Là mặt tiêu cực cần xóa bỏ."
      },
      {
        "label": "C",
        "text": "Không còn phù hợp."
      },
      {
        "label": "D",
        "text": "Chỉ là hình thức."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q148",
    "chapter": "Chương 7",
    "number": 148,
    "question": "\"Công nghiệp hóa, hiện đại hóa\" tác động đến gia đình thông qua:",
    "options": [
      {
        "label": "A",
        "text": "Sự thay đổi về việc làm, thu nhập, lối sống, thời gian."
      },
      {
        "label": "B",
        "text": "Chỉ thay đổi việc làm."
      },
      {
        "label": "C",
        "text": "Chỉ thay đổi thu nhập."
      },
      {
        "label": "D",
        "text": "Không tác động."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q149",
    "chapter": "Chương 7",
    "number": 149,
    "question": "Phương hướng xây dựng gia đình Việt Nam hiện nay có mấy điểm cơ bản?",
    "options": [
      {
        "label": "A",
        "text": "4 phương hướng."
      },
      {
        "label": "B",
        "text": "3 phương hướng."
      },
      {
        "label": "C",
        "text": "5 phương hướng."
      },
      {
        "label": "D",
        "text": "2 phương hướng."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": "Chương 7_Q150",
    "chapter": "Chương 7",
    "number": 150,
    "question": "Xây dựng gia đình văn hóa là góp phần xây dựng:",
    "options": [
      {
        "label": "A",
        "text": "Nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc."
      },
      {
        "label": "B",
        "text": "Chỉ gia đình đó."
      },
      {
        "label": "C",
        "text": "Chỉ địa phương đó."
      },
      {
        "label": "D",
        "text": "Kinh tế gia đình."
      }
    ],
    "correctAnswer": "A"
  }
];