package com.mitch.moodmixer.repository;

import com.mitch.moodmixer.repository.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SongRepository  extends JpaRepository<Song, Integer> {
    List<Song> findByGenre(Integer genre);

}