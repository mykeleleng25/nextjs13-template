export default function Slug({ params }: { params: { slug: string } }) {
  return <h2>{params.slug}</h2>
}
