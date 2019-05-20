import { Router } from "express";
const router = Router();
const passport = require("passport");

//@route POST schedule/addSchedule
//@desc add schedule
//@access Private
router.post(
  "/addSchedule",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    req.context.models.schedule
      .findOne({
        where: {
          DateChange: req.body.DateChange,
          employeeId: req.body.employeeId,
        },
      })
      .then(item => {
        if (item) {
          res.send("Работник уже был добавлен на эту дату");
        } else {
          req.context.models.schedule
            .create({
              DateChange: req.body.DateChange,
              employeeId: req.body.employeeId,
            })
            .then(() => {
              res.send("Добавили в график");
            });
        }
      });
  }
);

//@route GET schedule/allSchedules
//@desc get schedules
//@access Private
router.get(
  "/allSchedules",
  passport.authenticate("jwt", { session: false }),

  (req, res) => {
    req.context.models.schedule
      .findAll({
        include: [
          {
            model: req.context.models.employee,
          },
        ],
      })
      .then(projects => {
        const sendData = projects.map(item => {
          return {
            FirstName: item.employee.FirstName,
            LastName: item.employee.LastName,
            Phone: item.employee.Phone,
            DateChange: item.DateChange,
          };
        });
        return res.send(sendData);
      });
  }
);

//@route DELETE schedule/allSchedules/:id
//@desc Return allSchedules and delete one
//@access Private
router.delete(
  "/allSchedules/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    req.context.models.schedule
      .destroy({ where: { id: req.params.id } })
      .then(schedule => {
        console.log(`Клетка удалена? 1 means yes, 0 means no: ${schedule}`);
        return req.context.models.schedule
          .findAll({
            include: [
              {
                model: req.context.models.employee,
              },
            ],
          })
          .then(projects => {
            const sendData = projects.map(item => {
              return {
                FirstName: item.employee.FirstName,
                LastName: item.employee.LastName,
                Phone: item.employee.Phone,
                DateChange: item.DateChange,
              };
            });
            return res.send(sendData);
          });
      });
  }
);

//@route UPDATE schedule/allSchedules/:id
//@desc Return allSchedules and update one
//@access Private
router.put(
  "/allSchedules/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    req.context.models.schedule
      .findOne({
        where: { id: req.params.id },
      })
      .then(schedule => {
        schedule
          .update({
            DateChange: req.body.DateChange,
            employeeId: req.body.employeeId,
          })
          .then(() => {
            return req.context.models.schedule
              .findAll({
                include: [
                  {
                    model: req.context.models.employee,
                  },
                ],
              })
              .then(projects => {
                const sendData = projects.map(item => {
                  return {
                    FirstName: item.employee.FirstName,
                    LastName: item.employee.LastName,
                    Phone: item.employee.Phone,
                    DateChange: item.DateChange,
                  };
                });
                return res.send(sendData);
              });
          });
      });
  }
);

export default router;
