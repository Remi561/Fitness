
import React from 'react'
import { NavLink, Outlet, Navigate, useParams } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import SessionCard from "../components/SessionCard";

const Session = () => {
  //states
  const { days } = useParams();
  const scrollRef = React.useRef(null);
  const [isSwitch, setIsSwitch] = React.useState(false);
  const [measure, setMeasure] = React.useState({
    weight: "",
    height: "",
    type: "metric",
  });
  const [res, setResult] = React.useState(null);

  //variables
  const bmiCategories = [
    { status: "underweight", fallIn: "less than 18", color: "bg-red-400" },
    {
      status: "normal",
      fallIn: "between 18.5 and 24.9",
      color: "bg-green-400",
    },
    {
      status: "overweight",
      fallIn: "between 25 and 29.9",
      color: "bg-yellow-400",
    },
    { status: "obese", fallIn: "30 or greater", color: "bg-red-400" },
  ];

  const calender = [
    {
      day: "monday",
      plans: [
        {
          time: "6:00 AM - 8:00 AM",
          workoutType: "Yoga",
          instructor: "Jane Smith",
        },
        {
          time: "9:00 AM - 12:00 PM",
          workoutType: "HIIT",
          instructor: "Mike Johnson",
        },
        {
          time: "5:00 PM - 7:00 PM",
          workoutType: "Cardio",
          instructor: "John Doe",
        },
        {
          time: "7:00 PM - 9:00 PM",
          workoutType: "Pilates",
          instructor: "Jane Smith",
        },
      ],
    },
    {
      day: "tuesday",
      plans: [
        {
          time: "6:00 AM - 8:00 AM",
          workoutType: "CrossFit",
          instructor: "John Doe",
        },
        {
          time: "9:00 AM - 12:00 PM",
          workoutType: "Stretching",
          instructor: "Jane Smith",
        },
        {
          time: "5:00 PM - 7:00 PM",
          workoutType: "Strength Training",
          instructor: "Mike Johnson",
        },
        {
          time: "7:00 PM - 9:00 PM",
          workoutType: "Yoga",
          instructor: "John Doe",
        },
      ],
    },
    {
      day: "wednesday",
      plans: [
        {
          time: "6:00 AM - 8:00 AM",
          workoutType: "Cardio",
          instructor: "Jane Smith",
        },
        {
          time: "9:00 AM - 12:00 PM",
          workoutType: "Pilates",
          instructor: "Mike Johnson",
        },
        {
          time: "5:00 PM - 7:00 PM",
          workoutType: "HIIT",
          instructor: "John Doe",
        },
        {
          time: "7:00 PM - 9:00 PM",
          workoutType: "Yoga",
          instructor: "Jane Smith",
        },
      ],
    },
    {
      day: "thursday",
      plans: [
        {
          time: "6:00 AM - 8:00 AM",
          workoutType: "Strength Training",
          instructor: "John Doe",
        },
        {
          time: "9:00 AM - 12:00 PM",
          workoutType: "CrossFit",
          instructor: "Jane Smith",
        },
        {
          time: "5:00 PM - 7:00 PM",
          workoutType: "Cardio",
          instructor: "Mike Johnson",
        },
        {
          time: "7:00 PM - 9:00 PM",
          workoutType: "Pilates",
          instructor: "Jane Smith",
        },
      ],
    },
    {
      day: "friday",
      plans: [
        {
          time: "6:00 AM - 8:00 AM",
          workoutType: "HIIT",
          instructor: "Mike Johnson",
        },
        {
          time: "9:00 AM - 12:00 PM",
          workoutType: "Yoga",
          instructor: "Jane Smith",
        },
        {
          time: "5:00 PM - 7:00 PM",
          workoutType: "Strength Training",
          instructor: "John Doe",
        },
        {
          time: "7:00 PM - 9:00 PM",
          workoutType: "CrossFit",
          instructor: "Jane Smith",
        },
      ],
    },
    {
      day: "saturday",
      plans: [
        {
          time: "6:00 AM - 8:00 AM",
          workoutType: "Stretching",
          instructor: "Jane Smith",
        },
        {
          time: "9:00 AM - 12:00 PM",
          workoutType: "Cardio",
          instructor: "Mike Johnson",
        },
        {
          time: "5:00 PM - 7:00 PM",
          workoutType: "Pilates",
          instructor: "John Doe",
        },
        {
          time: "7:00 PM - 9:00 PM",
          workoutType: "HIIT",
          instructor: "Jane Smith",
        },
      ],
    },
  ];
  const session = calender.find(
    (d) => d.day.toLowerCase() === days?.toLowerCase(),
  );

  //   Underweight: < 18.5

  // Normal: 18.5 – 24.9

  // Overweight: 25 – 29.9

  // Obese: 30+

  const message =
    res < 18.5
      ? "You are underweight. This may mean you need more nutrition or muscle gain."
      : res >= 18.5 && res <= 24.9
        ? "You are in the healthy weight range. Keep up your balanced diet and exercise!"
        : res >= 25 && res <= 29.9
          ? "You are overweight. Some lifestyle adjustments may help improve your health."
          : "You are in Obesity Class . It’s recommended to consult a health professional.";

  //functions
  const handleSumbmit = (e) => {
    e.preventDefault();
    let result;
    if (measure) {
      if (measure.type === "imperial") {
        result = (measure.weight / (measure.height * measure.height)) * 703;
      } else if (measure.type === "metric") {
        const heightInMeters =
          measure.height > 3 ? measure.height / 100 : measure.height;
        result = measure.weight / (heightInMeters * heightInMeters);
      } else {
        throw new Error("Unknown value");
      }
      setResult(result);
    }
  };

  const handleScroll = (position) => {
    const el = scrollRef.current;
    if (!el) {
      return;
    }
    el.scrollBy({
      top: position === "up" ? -23 : 23,
      behavior: "smooth",
    });
  };

  // data

  if (!session) {
    return <Navigate to={"monday"} />;
  }

  return (
    <div className="text-primary container mx-auto flex items-center flex-col justify-center space-y-10">
      <header className="capitalize text-primary font-heading text-4xl">
        workout calendar
      </header>
      {/* Desktop View*/}
      <div className=" lg:flex items-center gap-4 hidden ">
        {calender.map((item) => (
          <NavLink
            key={item.day}
            to={`${item.day}`}
            className={({ isActive }) =>
              `relative capitalize ${isActive && "after:content-[] after:bg-accent after:bottom-0 after:left-0 after:w-full after:absolute after:h-0.5"} `
            }
          >
            {item.day}
          </NavLink>
        ))}
      </div>

      {/*moblie view*/}
      <div className="flex gap-5 lg:hidden items-center">
        <div
          ref={scrollRef}
          className="flex flex-col max-h-7 gap-4 overflow-y-scroll snap-mandatory snap-y"
        >
          {calender.map((item) => (
            <NavLink
              key={item.day}
              to={`${item.day}`}
              className={({ isActive }) =>
                `${isActive && "bg-accent"} capitalize text-center  snap-center`
              }
            >
              {item.day}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1">
          <button onClick={() => handleScroll("up")}>
            <FaChevronUp />
          </button>

          <button onClick={() => handleScroll("down")}>
            <FaChevronDown />
          </button>
        </div>
      </div>

      <div className="w-full px-4">
        <Outlet context={{ calender }} />
      </div>

      <section className="w-full">
        <header className="font-heading text-4xl text-center mb-10">
          BMI calculator
        </header>
        <div className="flex items-center w-full flex-col lg:flex-row justify-between gap-4 px-4">
          <div className="w-full lg:w-1/2 space-y-5">
            <form
              action=""
              onSubmit={handleSumbmit}
              className="flex flex-col items-center gap-4 "
            >
              <select
                name=""
                id=""
                value={measure.type}
                className="border border-primary px-1"
                onChange={(e) =>
                  setMeasure((prev) => ({ ...prev, type: e.target.value }))
                }
              >
                <option value="metric">Metric (KG/CM)</option>
                <option value="imperial">Imperial(LBS/INCH)</option>
              </select>
              <div className="space-x-7 max-w-lg w-full">
                <label htmlFor="" className="capitalize mb-3">
                  weight
                </label>
                <div className="flex justify-between   border border-primary">
                  <input
                    id="weight"
                    type="number"
                    value={measure.weight}
                    onChange={(e) =>
                      setMeasure((prev) => ({
                        ...prev,
                        weight: e.target.value,
                      }))
                    }
                    required
                    placeholder={`${measure.type === "metric" ? "enter your weight in (KG)" : "enter your weight in (LBS)"}`}
                    className="w-[95%] border-none outline-0 px-2 placeholder:capitalize "
                  />
                  <span className="h-full bg-accent text-primary px-2 py-2 uppercase">
                    {measure.type === "metric" ? "KG" : "LBS"}
                  </span>
                </div>
              </div>
              <div className="space-x-7 w-full max-w-lg">
                <label htmlFor="" className="capitalize mb-5">
                  height
                </label>
                <div className="flex justify-between  border border-primary">
                  <input
                    id="height"
                    type="number"
                    value={measure.height}
                    onChange={(e) =>
                      setMeasure((prev) => ({
                        ...prev,
                        height: e.target.value,
                      }))
                    }
                    required
                    placeholder={`${measure.type === "metric" ? "enter your height in (CM)" : "enter your height in (INCH)"}`}
                    className="w-[95%] border-none outline-0 px-2 placeholder:capitalize"
                  />
                  <span className="h-full bg-accent text-primary px-2 py-2 uppercase">
                    {measure.type === "metric" ? "cm" : "inch"}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="bg-accent max-w-lg text-primary px-2 py-1 rounded-2xl"
              >
                Calculate
              </button>
            </form>

            <div>
              {res && (
                <>
                  <h2 className="text-2xl font-heading font-bold ">
                    Your BMI is : {res.toFixed(1)}
                  </h2>
                  <p className="font-base">{message}</p>
                </>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-3 ">
            <ul className="space-y-3">
              {bmiCategories.map((bmi) => (
                <SessionCard key={bmi.status} {...bmi} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Session