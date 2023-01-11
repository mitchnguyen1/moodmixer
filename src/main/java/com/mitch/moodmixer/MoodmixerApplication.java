package com.mitch.moodmixer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


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