package com.mitch.moodmixer;

import com.mitch.moodmixer.repository.entity.Song;
import com.mitch.moodmixer.service.SongService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
@RestController
public class MoodmixerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoodmixerApplication.class, args);
	}

	private final SongService songService;

	public MoodmixerApplication(SongService songService) {
		this.songService = songService;
	}

	@GetMapping("/all")
	public List<Song> getSongs(){
		return songService.all();
	}

	@PostMapping("/add")
	public void addSong(@RequestBody Song song){
		songService.add(song);
	}

	@PutMapping( "/{id}" )
	public Song update(@RequestBody Song song, @PathVariable Integer id )
	{
		Optional<Song> temp = SongService.findById( id );
		Song song1 = temp.get();
		song1.setSong_name( song.getSong_name() );
		song1.setArtist( song.getArtist() );
		song1.setGenre( song.getGenre() );
		song1.setLink(song.getLink());
		return SongService.save(song1);
	}
	@GetMapping("/count-users")
	public String getCountUsers(){
		return "Number of users = ";
	}
	@DeleteMapping( "/{id}" )
	public void delete(@PathVariable Integer id){
		songService.delete(id);
	}

	@GetMapping("/findBy/{id}")
	public List<Song> findItemByGen(@PathVariable Integer id){
		return songService.findSongsByGenre(id);
	}
}