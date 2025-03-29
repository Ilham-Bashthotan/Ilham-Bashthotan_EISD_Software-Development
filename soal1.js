function getRatingStats(ratings) {
    // mengembalikan array yang berisi [nilai_terkeci, nilai_terbesar, rata_rata] dari
    // array ratings
    let minRating;
    let maxRating;
    let avgRating;
    if (!ratings.length) return [null, null, null];

    minRating = Math.min(...ratings);
    maxRating = Math.max(...ratings);
    avgRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
    

    return [minRating, maxRating, parseFloat(avgRating.toFixed(1))];
}
let ratings = [];
ratings = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
console.log(getRatingStats(ratings)); 
ratings = [5, 4, 2.5, 5, 3.6, 1.1, 3.6, 4, 4.2, 1.5];
console.log(getRatingStats(ratings)); 
