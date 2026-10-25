import Tag from './Tag.jsx';
export default function SkillGroup({ title, items }) {
  return (
    <div className="skill">
      <h3>{title}</h3>
      <ul className="tags">{items.map((i) => <Tag key={i}>{i}</Tag>)}</ul>
    </div>
  );
}
