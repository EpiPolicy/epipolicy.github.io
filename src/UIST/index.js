import React, { Component } from "react";
import axios from "axios";
import conf from "./conf.json";
import "./style.scss";

export class UIST extends Component {
  constructor(props) {
    super(props);
    this.state = { available_servers: [], name: "", server: null };
    this.uist_manager_api = `http://${conf.api.uist_manager.host}:${conf.api.uist_manager.port}`;
  }
  getAvailableServers = () => {
    const url = this.uist_manager_api + "/available_servers";
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        const servers = data.servers;
        this.setState({ available_servers: servers });
      })
      .catch((err) => {
        console.log("URL Failed", url, err);
      })
      .finally(() => {
        setTimeout(() => {
          this.getAvailableServers();
        }, 1000);
      });
  };
  findServer = () => {
    if (this.state.name.length < 1) {
      alert("Invalid name!");
    }
    const url =
      this.uist_manager_api +
      "/find_server/" +
      encodeURIComponent(this.state.name);
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        const server = data.server;
        this.setState({ server });
      })
      .catch((err) => {
        console.log("URL Failed", url, err);
      });
  };
  getAssignedServer = () => {
    return;
    const url = this.uist_manager_api + "/get_assigned_server/";
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        const server = data.server;
        this.setState({ server });
      })
      .catch((err) => {
        console.log("URL Failed", url, err);
      })
      .finally(() => {
        setTimeout(() => {
          this.getAssignedServer();
        }, 1000);
      });
  };
  markServerAsFree = (address) => {
    const url =
      this.uist_manager_api + "/free_server/" + encodeURIComponent(address);
    axios.get(url).catch((err) => {
      console.log("URL Failed", url, err);
    });
  };
  componentDidMount() {
    this.getAvailableServers();
    this.getAssignedServer();
  }
  render() {
    return (
      <div className="uist-container">
        <div className="title">EpiPolicy Demo @ UIST '21</div>
        {this.state.available_servers.length < 1 ? (
          <div className="message">No servers available</div>
        ) : (
          <div className="server-container">
            <div className="message">
              {this.state.available_servers.length} servers available
            </div>
            {this.state.server ? (
              <div className="server-info">
                <div className="server-info-title">
                  the following server has been assigned to you
                </div>
                <div className="server-info-item">
                  <span>URL:</span>
                  <p>
                    <a href={this.state.server[1]}>{this.state.server[1]}</a>
                  </p>
                </div>

                <div className="server-info-item">
                  <span>username:</span>
                  <p>{this.state.server[2]}</p>
                </div>

                <div className="server-info-item">
                  <span>password:</span>
                  <p>{this.state.server[3]}</p>
                </div>
              </div>
            ) : (
              <div className="user-info">
                <input
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                />
                <input
                  type="button"
                  value="Find a Server"
                  onClick={() => {
                    this.findServer();
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default UIST;
