interface YearFilterProps {
  startYear: number;
  setStartYear: (year: number) => void;
  endYear: number;
  setEndYear: (year: number) => void;
}

const YEAR_MARKERS = [1000, 1300, 1700, 2000];

export default function YearFilter({
  startYear,
  setStartYear,
  endYear,
  setEndYear,
}: YearFilterProps) {
  const handleClick = (year: number) => {
    // 단일 선택 상태
    if (startYear === endYear) {
      if (year === startYear) {
        // 같은 값 클릭 시 아무 변화 없음
        return;
      } else {
        // 새로 선택 > 확장
        if (year < startYear) {
          setStartYear(year);
        } else {
          setEndYear(year);
        }
        return;
      }
    }

    // 클릭한 값이 시작/끝 중 하나일 경우 > 해당 값만 단독 선택
    if (year === startYear || year === endYear) {
      setStartYear(year);
      setEndYear(year);
      return;
    }

    // 범위 안의 값 > 더 가까운 쪽 업데이트
    if (year > startYear && year < endYear) {
      const distanceToStart = Math.abs(year - startYear);
      const distanceToEnd = Math.abs(year - endYear);
      if (distanceToStart <= distanceToEnd) {
        setStartYear(year);
      } else {
        setEndYear(year);
      }
      return;
    }

    // 범위 밖이면 확장
    if (year < startYear) {
      setStartYear(year);
    } else if (year > endYear) {
      setEndYear(year);
    }
  };

  const isInRange = (year: number) => year >= startYear && year <= endYear;

  return (
    <div className="flex items-center gap-19 h-12.5 mt-6 p-1.25 rounded-full border border-black/50">
      {YEAR_MARKERS.map((year) => (
        <div key={year} className="relative">
          <button
            onClick={() => handleClick(year)}
            className={`z-10 relative flex items-center justify-center w-10 h-10 font-exo px-5 text-sm rounded-full leading-[100%] cursor-pointer ${
              isInRange(year) ? 'bg-black' : 'bg-gray-medium'
            } text-white`}
          >
            {year}
          </button>

          {year < Math.max(...YEAR_MARKERS) && (
            <div
              className={`absolute left-9 top-1/2 -translate-y-1/2 w-21 h-2.5 z-0 ${
                isInRange(year) &&
                isInRange(YEAR_MARKERS[YEAR_MARKERS.indexOf(year) + 1])
                  ? 'bg-black'
                  : 'bg-gray-medium'
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
