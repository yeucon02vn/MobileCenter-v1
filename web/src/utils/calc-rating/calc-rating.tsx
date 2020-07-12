export const calcRating = (
  rating: number,
): { fullStars: number; noneStars: number; halfStars: number } => {
  const maxStars = 5
  const fullStars = Math.floor(rating)
  const halfStars = Math.ceil(rating - fullStars)
  const noneStars = maxStars - fullStars - halfStars

  return { fullStars, noneStars, halfStars }
}
