import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
    // 1.Get ID from query String
    const { id } = useParams();
    const [restaurants, setRestaurants] = useState({
        "title": "",
        "type": "",
        "img": ""
    });
    // 2. Get restaurany by ID
    useEffect(() => {
          fetch("http://localhost:3000/restaurants" + id) // แก้ URL เป็น restaurants
            .then((res) => res.json())
            .then((response) => {
              setRestaurants(response);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }, [id])
        const handleChange = (e) => {
            const {name, value} = e.target;
             setRestaurants({ ...restaurants, [e.target.name]: e.target.value });
        };
        const handSubmit = async () => {
            try{
                const response = await fetch("http://localhost:3000/restaurants" + id, {
                    method: "PUT",
                    body: JSON.stringify(restaurants)
                });
                if(response.ok) {
                    alert("Update a restaurant id="+id+" successful!")
                }
            }catch(error) {
                console.log(error);
            }
        };
        return (
          <div className="container mx-auto">
            <div>
              <h1 className="text-2xl text-center">Edit Restaurant</h1>
            </div>
            <div className="space-y-2">
              <label className="input input-bordered flex items-center gap-2">
                Restaurant Name
                <input
                  type="text"
                  className="grow"
                  placeholder="Restaurant Name"
                  name="title"
                  onChange={handleChange}
                  value={restaurants.title}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Restaurant type
                <input
                  type="text"
                  className="grow"
                  placeholder="Restaurant type"
                  name="type"
                  onChange={handleChange}
                  value={restaurants.type}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Restaurant imageUrl
                <input
                  type="text"
                  className="grow"
                  placeholder="Restaurant imageUrl"
                  name="image"
                  onChange={handleChange}
                  value={restaurants.img}
                />
              </label>
              {restaurants.img && (
                <div className="flex items-center gap-2">
                    <img src={restaurants.img} className="h-32" />
                </div>
              )}
              <button className="btn btn-success"onClick={handSubmit}>
                Edit restaurant
              </button>
            </div>
          </div>
        );
};