import { useEffect, useState } from 'react';

const LINE1 = 'One Platform.';
const LINE2 = 'Every Financial Product.';
const LINE3 = 'One Business That Grows.';

const TYPE_SPEED = 32;
const PAUSE_BETWEEN_LINES = 220;
const PAUSE_BEFORE_RESET = 3800;
const FADE_MS = 240;

export default function TypewriterTitle() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [activeLine, setActiveLine] = useState<1 | 2 | 3>(1);
  const [done, setDone] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(setTimeout(resolve, ms));
      });

    const typeLine = async (text: string, setter: (v: string) => void) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        setter(text.slice(0, i));
        await wait(TYPE_SPEED);
      }
    };

    const run = async () => {
      while (!cancelled) {
        setFading(false);
        setLine1('');
        setLine2('');
        setLine3('');
        setActiveLine(1);
        setDone(false);

        await typeLine(LINE1, setLine1);
        if (cancelled) return;

        await wait(PAUSE_BETWEEN_LINES);
        if (cancelled) return;

        setActiveLine(2);
        await typeLine(LINE2, setLine2);
        if (cancelled) return;

        await wait(PAUSE_BETWEEN_LINES);
        if (cancelled) return;

        setActiveLine(3);
        await typeLine(LINE3, setLine3);
        if (cancelled) return;

        setDone(true);
        await wait(PAUSE_BEFORE_RESET);
        if (cancelled) return;

        setFading(true);
        await wait(FADE_MS);
        if (cancelled) return;
      }
    };

    run();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  const fullLabel = `${LINE1} ${LINE2} ${LINE3}`;

  return (
    <h1 className="hero__title">
      <span className="hero__title-sizer" aria-hidden="true">
        <span className="hero__title-line">{LINE1}</span>
        <br />
        <span className="hero__title-line hero__title-line--accent">
          <span className="hero__title-accent">{LINE2}</span>
        </span>
        <br />
        <span className="hero__title-line">{LINE3}</span>
      </span>

      <span
        className={`hero__title-typed${fading ? ' hero__title-typed--fade' : ''}`}
        aria-label={fullLabel}
      >
        <span className="hero__title-line">
          {line1}
          {activeLine === 1 && (
            <span className="hero__cursor hero__cursor--light" aria-hidden="true" />
          )}
        </span>
        <br />
        <span className="hero__title-line hero__title-line--accent">
          <span className="hero__title-accent">{line2}</span>
          {activeLine === 2 && (
            <span className="hero__cursor hero__cursor--accent" aria-hidden="true" />
          )}
        </span>
        <br />
        <span className="hero__title-line">
          {line3}
          {activeLine === 3 && (
            <span
              className={`hero__cursor hero__cursor--light${done ? ' hero__cursor--idle' : ''}`}
              aria-hidden="true"
            />
          )}
        </span>
      </span>
    </h1>
  );
}
