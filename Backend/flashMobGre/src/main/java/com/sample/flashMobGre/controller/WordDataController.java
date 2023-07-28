package com.sample.flashMobGre.controller;

import com.sample.flashMobGre.model.WordModel;
import com.sample.flashMobGre.service.ExcelToJsonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WordDataController {

    @Autowired
    private ExcelToJsonService excelToJsonService;

    @GetMapping("/getWordData")
    public ResponseEntity<List<WordModel>> getWordData() {
        String filePath = "E:\\Code\\FlashMob-Gre\\Backend\\flashMobGre\\src\\main\\resources\\Words.xlsx"; // Replace with the actual file path

        List<WordModel> wordDataList = excelToJsonService.readExcel(filePath);
        return ResponseEntity.ok(wordDataList);
    }
}
