package com.mitch.moodmixer;

import com.mitch.moodmixer.repository.entity.Song;
import com.mitch.moodmixer.service.SongService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
@Controller
public class MoodmixerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoodmixerApplication.class, args);
	}
	@RequestMapping("/")
	public String index() {
		return "../../frontend/build/index.html";
	}

	@RequestMapping("/output")
	public String output() {
		return "output.html";
	}

	@RequestMapping("/input")
	public String input() {
		return "frontend/build/input.html";
	}

	@RequestMapping("/test")
	public String test() {
		return "test";
	}
}