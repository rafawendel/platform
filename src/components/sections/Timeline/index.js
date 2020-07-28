import style from './styles';

export default function TimelineSection({ children }) {
  return (
    <section className="timeline">
      <div className="wrapper">
        <div className="wrapper">
          <h1 className="timeline-title">Nossa História</h1>
        </div>
        <div className="timeline timeline-wrapper">{children}</div>
      </div>
      <style jsx>{style}</style>
    </section>
  );
}
